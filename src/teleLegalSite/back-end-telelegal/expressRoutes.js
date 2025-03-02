//all our express stuff happens (routes)
const app = require("./server").app;
const jwt = require('jsonwebtoken');
const linkSecret = 'dfvcv4asodihs97s9fsd';

app.get('/', (req, res)=> {
  res.json('this is the default route');
});

//this route is for US! In production, a receptionist, or calender/scheduling app
//would send this out. We will print it out and paste it in. It will drop
//us on our React site with the right info for CLIENT1 to make an offer
app.get('/user-link',(req, res)=>{

    //data for the end-user's appt
    const apptData = {
        professionalsFullName: "Robert Bunch, J.D.",
        apptDate: Date.now() + 500000
    }

    //we need to encode this data in a token
    //so it can be added to a url
    const token = jwt.sign(apptData,linkSecret);
    res.send('https://localhost:3000/join-video?token='+token);
    // res.json("This is a test route")
})  


app.get('/test', (req, res)=>{
  res.json('this is a test route');
});

//this route is for us to test..
//we will just add a link which takes us to react site (already with the right info for CLIENT1 to make an offer)
//in production -> a receptionist / calender/scheduling app would send this out
app.get('/user-link', (req, res)=>{

  //data for the end-user's appointment
  const appData = {
    professionalsFullName: 'Robert Bunch, M.D', //name of person user wants to speak to
    apptDate: Date.now() + 500000, //delay a bit by eg. 8min
  };

  //TODO: encode data in token
  const token = jwt.sign(appData, linkSecret);

  //sent to wherever react is running..
  res.send(`<a href="https://localhost:3000/join-video?token=${token}">invite link</a>`);
});

app.post('/validate-link', (req, res)=>{
  //get the token from body of post request (possible with express.json())
  const token = req.body.token;   //was req.query.token;
  const decodedData = jwt.verify(token, linkSecret); //decode jwt with secret

  //send the decoded data (our object) back to the frontend
  res.json(decodedData);

});