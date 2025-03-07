const proSocketListeners = (socket, setApptInfo)=>{

    socket.on(`apptData`, apptData => {
        //apptData is this specific professionals data
        console.log(apptData);
        setApptInfo(apptData);
        
    })

}

export default proSocketListeners;
