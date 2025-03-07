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

  const handShakeData = socket.handshake.auth.fullName;
  const decodedData = jwt.verify(handShakeData, linkSecret); //decode jwt with secret
  const {fullName, proId} = decodedData;

  connectedProfessionals.push({
    socketId: socket.id,
    fullName,
    proId
  });

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
  

