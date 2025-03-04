//all our socketServer stuff happens here
const io = require("./server").io;

io.on("connection", (socket) => {
  console.log(socket.id, "has connected");
  socket.on('newOffer', ({offer, apptInfo})=>{
    //offer = sdp/type, apptInfo has the uuid that we can add to allKnownOffers so that the professional can find EXACTLY the right allKnownOffers
  });
});
  

