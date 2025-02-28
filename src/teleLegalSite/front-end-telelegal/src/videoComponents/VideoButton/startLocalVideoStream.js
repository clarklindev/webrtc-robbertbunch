
//this functions job is to update all *(`streams` for) peerConnections (addTracks) and *(`dispatch` to) update redux callStatus
import updateCallStatus from "../../redux-elements/actions/updateCallStatus";

const startLocalVideoStream = (streams, dispatch) => {
  const localStream = streams.localStream;
  for (const s in streams) { //s is the key *(streamsReducer -> who)
    if (s !== "localStream") {
      //we don't addTracks to the localStream
      const curStream = streams[s];
      //addTracks to all peerConnections
      localStream.stream.getVideoTracks().forEach(t => {
        curStream.peerConnection.addTrack(t, streams.localStream.stream);
      })
      //update redux callStatus
      dispatch(updateCallStatus('video', "enabled"));
    }

  }
}

export default startLocalVideoStream;
