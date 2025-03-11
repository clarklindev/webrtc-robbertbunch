import updateCallStatus from '../redux-elements/actions/updateCallStatus';

const clientSocketListeners = (socket, dispatch)=>{
    socket.on('answerToClient', answer=>{
        console.log(answer);
        dispatch(updateCallStatus('answer', answer)); //see socketServer.js
        dispatch(updateCallStatus('myRole', 'offerer'));
    });
}

export default clientSocketListeners;

