import updateCallStatus from '../redux-elements/actions/updateCallStatus';

const proSocketListeners = (socket, setApptInfo, dispatch)=>{
    socket.on(`apptData`, apptData => {
        //apptData is this specific professionals data
        console.log(apptData);
        setApptInfo(apptData);
    });
    socket.on('newOfferWaiting', offerData=>{
        //dispatch the offer to redux so that it is available for later..
        dispatch(updateCallStatus('offer', offerData.offer)); //see socketServer.js
        dispatch(updateCallStatus('myRole', 'answerer'));
    })
}

export default proSocketListeners;
