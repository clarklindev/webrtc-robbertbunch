//all our socketServer stuff happens here
const io = require("./server").io;
const app = require('./server').app;
const jwt = require('jsonwebtoken');

const linkSecret = 'dfvcv4asodihs97s9fsd';

// const professionalAppointments = app.get('professionalAppointments')
const connectedProfessionals = [];
const connectedClients = [];

//allKnownOffers is an object with the uniqueId as key
// - each offer is an object...
const allKnownOffers = {
  // uniqueId - key
  //offer
  //professionalsFullName
  //clientName
  //apptDate
  //offererIceCandidates
  //answer
  //answerIceCandidates
};


io.on("connection", (socket) => {
  console.log(socket.id, "has connected");

  const handShakeData = socket.handshake.auth.jwt;
  let decodedData;
  try{
    decodedData = jwt.verify(handShakeData, linkSecret); //decode jwt with secret
  }catch(err){
    console.log(err);
    socket.disconnect();
    return;
  }

  
  const {fullName, proId} = decodedData;

  if(proId){
    //means its a professional
    //check to see if user is already in connectedProfessionals
    //this would happen because they have reconnected
    const connectedPro = connectedProfessionals.find(cp=> cp.proId === proId);

    if(connectedPro){
      //just update the new socket.id
      connectedPro.socketId = socket.id;

    }else{
      //otherwise, push on connectedProfessionals
      connectedProfessionals.push({
        socketId: socket.id,
        fullName,
        proId
      });
    }
  
    //send the appt data out to the professional
    const professionalAppointments = app.get('professionalAppointments');
    console.log('all professionalAppointments: ', professionalAppointments);
    const appointments = professionalAppointments.filter(pa=> pa.professionalsFullName === fullName);
    socket.emit('apptData', appointments);
  }else{

    //this is a client
  }
  
 
  console.log(connectedProfessionals);

  socket.on('newOffer', ({offer, apptInfo})=>{
    //offer = sdp/type, apptInfo has the uuid that we can add to allKnownOffers so that the professional can find EXACTLY the right allKnownOffers
    console.log('offer: ', offer);
    console.log('==============================');
    console.log('apptInfo: ', apptInfo);

    allKnownOffers[apptInfo.uuid] = {
      ...apptInfo,
      offer,
      offererIceCandidates: [],
      answer: null,
      answerIceCandidates: [],
    }

    //we dont emit this to everyone like we did our chat server
    //we only want this to go to our professional.
    //cp === connected professional

    const p = connectedProfessionals.find(cp => cp.fullName === apptInfo.professionalsFullName);
    if(p){
      //only emit if the professional is connected
      const socketId = p.socketId;
      socket.to(socketId).emit('newOfferWaiting', allKnownOffers[apptInfo.uuid]);
    }
  });
});
  

