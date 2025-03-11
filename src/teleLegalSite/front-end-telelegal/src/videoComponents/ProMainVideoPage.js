import {useEffect, useState, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';

import './VideoComponents.css';
import CallInfo from './CallInfo';
import ChatWindow from './ChatWindow';
import ActionButtons from './ActionButtons';
import addStream from '../redux-elements/actions/addStream';
import { useDispatch, useSelector } from 'react-redux';
import createPeerConnection from '../webRTCutilities/createPeerConnection';
import socketConnection from '../webRTCutilities/socketConnection';
import updateCallStatus from '../redux-elements/actions/updateCallStatus';

const ProMainVideoPage = ()=>{

  const dispatch = useDispatch();
  const callStatus = useSelector(state=> state.callStatus);
  const streams = useSelector(state=> state.streams);

  //grab query string finder hook
  const [searchParams, setSearchParams] = useSearchParams();
  const [apptInfo, setApptInfo] = useState({});
  const smallFeedEl = useRef(null); //react ref to DOM element
  const largeFeedEl = useRef(null);
  
  useEffect(()=>{
    //fetch the user media
    const fetchMedia = async() =>{
      const constraints = {
        video: true,  //atleast one is required, just dont show it yet
        audio: true   
      }
      try{
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        dispatch(updateCallStatus(`haveMedia`, true)); //update callStatusReducer to know we have the media
        dispatch(addStream('localStream', stream));
        const {peerConnection, remoteStream} = await createPeerConnection(addIce);
        //we dont know who we are talking to yet...
        //we will change this `remote1` value 
        dispatch(addStream('remote1', remoteStream, peerConnection));
        // - now we have a peerConnection, lets make an offer
        // - EXCEPT, its not time yet because
        //   - we dont have `SDP` -> information about the feed and we dont have tracks.
        // - then call `socket.emit`... 
      }catch(err){
        console.log(err);
      }
    }
    fetchMedia();
  }, []);

  //we also have an offer, so we should also set setRemoteDescription
  useEffect(()=>{
    const setAsyncOffer = async()=>{
      for(const s in streams){
        if(s!=="localStream"){
          const pc = streams[s].peerConnection;
          await pc.setRemoteDescription(callStatus.offer);
          console.log(pc.signalingstate); //should be: have remote offer
        }
      }
    }
    if(callStatus.offer && streams?.remote1?.peerConnection){
      setAsyncOffer();
    }
  }, [callStatus.offer, streams.remote1]) //streams.remote1 is person on other side

  useEffect(()=>{
    const createAnswerAsync = async()=>{
      //we have audio and video, we can make an answer and setLocalDescription (client2)
      for(const s in streams){
        if(s !== "localStream"){
          
          
          //make an answer
          const pc = streams[s].peerConnection;

          //because this is the answering client, the answer is the localDescription
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          console.log(pc.signalingState); //should be: have local answer
          dispatch(updateCallStatus('haveCreatedAnswer', true));
          dispatch(updateCallStatus('answer', answer));

          //emit the answer to the server
          const token = searchParams.get('token');  //get token out querystring
          const uuid = searchParams.get('uuid');  //get uuid out querystring
          const socket = socketConnection(token); //get the socket...
          socket.emit('newAnswer', {answer, uuid});
        }  
      }
    }
    //we only create an answer if audio and video are enabled AND haveCreatedAnswer is false
    //this may run many times, but these 3 events will only happen once
    if(callStatus.audio === "enabled" && callStatus.video === "enabled" && !callStatus.haveCreatedAnswer){
      createAnswerAsync();
    }
  }, [callStatus.audio, callStatus.video, callStatus.haveCreatedAnswer])

  useEffect(()=>{
    //grab the token out fof the query string
    const token = searchParams.get('token');  //get token out querystring
    console.log(token);
    const fetchDecodedToken = async () =>{
      const resp = await axios.post('https://localhost:9000/validate-link', {token});
      console.log(resp.data);
      setApptInfo(resp.data);
    }
    fetchDecodedToken();
  }, []);

  const addIce = (iceC)=>{
    //emit a new ice candidate to the signaling server
    const socket = socketConnection(searchParams.get('token'));
    socket.emit('iceToServer', {
      iceC,
      who: 'professional',
      uuid: searchParams.get('uuid')
    })
  }

  return (
    <div className="main-video-page">
      <div className="video-chat-wrapper">
        {/* div to hold remote video AND local video, AND chat window */}
        <video id="large-feed" ref={largeFeedEl} autoPlay controls playsInline></video>
        <video id="own-feed" ref={smallFeedEl} autoPlay controls playsInline></video>
        { callStatus.audio === "off" || callStatus.video === 'off' ? 
          <div className="call-info">
            <h1>
              {searchParams.get('client')} is in the waiting room.<br />
              call will start when video and audio are enabled
            </h1>
          </div>
          : <></>
        }
        <ChatWindow/>
      </div>
      
      <ActionButtons smallFeedEl={smallFeedEl}/>
    </div>
    
    
  )
}

export default ProMainVideoPage;