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

  console.log(`decodedData: `, decodedData);

  
  const {fullName, proId} = decodedData;
//PROFFESIONAL AWAITS OFFER AND CONNECTS
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

    //loop through all known offers and send out to the professional that just joined those that belong to him/her
    //can use proId instead if professionals with same name exist
    for(const key in allKnownOffers){
      if(allKnownOffers[key].professionalsFullName === fullName){
        io.to(socket.id).emit('newOfferWaiting', allKnownOffers[key]);
      }    
    }
    
  }else{

    //this is a client
    const {professionalsFullName, uuid, clientName} = decodedData;

    //check to see if the client is already in the array
    //why? could have reconnected
    const clientExist = connectedClients.find(c=>c.uuid == uuid);
    if(clientExist){
      //already connected, just update the id
      clientExist.socketId = socket.id;
    }
    else{
      //add them
      connectedClients.push({
        clientName,
        uuid,
        professionalMeetingWith: professionalsFullName,
        socketId: socket.id
      });
  
    }
    
    //NOTE: client IS the socket
    const offerForThisClient = allKnownOffers[uuid];
    if(offerForThisClient){
      io.to(socket.id).emit('answerToClient', offerForThisClient.answer);
    }
  }
  console.log(connectedProfessionals);

  socket.on('newAnswer', ({answer, uuid})=>{
    // console.log(answer);
    // console.log(uuid);
    //emit this to the client
    const socketToSendTo = connectedClients.find(c=>c.uuid == uuid);//uuid is a string, so compare with ==
    if(socketToSendTo){
      socket.to(socketToSendTo.socketId).emit(`answerToClient`, answer); //pass answer to Client
    }

    //update the offer
    const knownOffer = allKnownOffers[uuid];
    if(knownOffer){
      knownOffer.answer = answer;
    }

  });

//USER INITIATES OFFER
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
    //p === connected professional

    //we got professionalAppointments from express (thats where its made)
    const professionalAppointments = app.get('professionalAppointments');
    const pa = professionalAppointments.find(pa => pa.uuid === apptInfo.uuid)
    if(pa){
      pa.waiting = true;
    }

    //find this particular professional so we can emit
    const p = connectedProfessionals.find(cp => cp.fullName === apptInfo.professionalsFullName);
    if(p){
      //only emit if the professional is connected
      const socketId = p.socketId;

      //send the new offer over
      socket.to(socketId).emit('newOfferWaiting', allKnownOffers[apptInfo.uuid]);
      //send the update appointment info with the new waiting...
      socket.to(socketId).emit('apptData', professionalAppointments.filter(pa=> pa.professionalsFullName === apptInfo.professionalsFullName));

    }
  });

  socket.on('iceToServer', ({who, iceC, uuid})=>{
    console.log("=========================")
    console.log(who);
    console.log(iceC);
    console.log(uuid);
    const offerToUpdate = allKnownOffers[uuid];
    if(who === 'client'){
      //this means client has sent up an ice candidate
      //update the offer
      offerToUpdate.offererIceCandidates.push(iceC);
    }else if(who === 'professional'){
      offerToUpdate.answerIceCandidates.push(iceC);
    }
  });
});
  

