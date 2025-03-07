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

const MainVideoPage = ()=>{

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
        const {peerConnection, remoteStream} = await createPeerConnection();
        //we dont know who we are talking to yet...
        //we will change this `remote1` value 
        dispatch(addStream('remote1', remoteStream, peerConnection));
        // - now we have a peerConnection, lets make an offer
        // - EXCEPT, its not time yet because
        //   - we dont have `SDP` -> information about the feed and we dont have tracks.
        // - then call `socket.emit`... 

        //get the token from the url for the socket connection
        const token = searchParams.get('token');  //get token out querystring

        //get the socket from socketConnection
        const socket = socketConnection(token);
        socket.emit('newOffer', {offer, apptInfo});

      }catch(err){
        console.log(err);
      }
    }
    fetchMedia();
  }, []);

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

  useEffect(()=>{
    const createOfferAsync = async ()=>{
      //we have audio and video, now we make an offer
      //create an offer against a peer connection ie. need stream
      for(const s in streams){
        if(s !== 'localStream'){
          try{
            //pc === peerConnection
            const pc = streams[s].peerConnection;
            const offer = await pc.createOffer()
            socket.emit('newOffer', {offer, apptInfo} )
          }catch(err){
            console.log(err);
          }
        }
      }

      dispatch(updateCallStatus('haveCreatedOffer', true))
    }
    if(callStatus.audio === 'enabled' && callStatus.video === 'enabled' && !callStatus.haveCreatedOffer){
      createOfferAsync();
    }
  }, [callStatus.audio, callStatus.video, callStatus.haveCreatedOffer]);

  return (
    <div className="main-video-page">
      <div className="video-chat-wrapper">
        {/* div to hold remote video AND local video, AND chat window */}
        <video id="large-feed" ref={largeFeedEl} autoPlay controls playsInline></video>
        <video id="own-feed" ref={smallFeedEl} autoPlay controls playsInline></video>
        {
          apptInfo.professionalsFullName ? <CallInfo apptInfo={apptInfo} /> : <></>
        }
        <ChatWindow/>
      </div>
      
      <ActionButtons smallFeedEl={smallFeedEl}/>
    </div>
    
    
  )
}

export default MainVideoPage;