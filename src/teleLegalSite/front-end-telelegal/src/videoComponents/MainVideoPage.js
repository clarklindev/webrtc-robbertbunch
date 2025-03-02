import {useEffect, useState, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';

import './VideoComponents.css';
import CallInfo from './CallInfo';
import ChatWindow from './ChatWindow';
import ActionButtons from './ActionButtons';
import addStream from '../redux-elements/actions/addStream';
import { useDispatch } from 'react-redux';
import createPeerConnection from '../webRTCutilities/createPeerConnection';
import socket from '../webRTCutilities/socketConnection';
import updateCallStatus from '../redux-elements/actions/updateCallStatus';

const MainVideoPage = ()=>{

  const dispatch = useDispatch();
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