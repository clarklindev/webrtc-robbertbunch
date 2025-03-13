//all our express stuff happens (routes)
const app = require("./server").app;
const jwt = require('jsonwebtoken');
const linkSecret = 'dfvcv4asodihs97s9fsd';

const {v4: uuidv4} = require('uuid');

//normally persistent data (from db, api)
const professionalAppointments = [{
  professionalsFullName: "Peter Chan, J.D.",
  apptDate: Date.now() + 500000,  //8min
  uuid:1,
  clientName: "Jim Jones",
},{
  professionalsFullName: "Peter Chan, J.D.",
  apptDate: Date.now() - 2000000, //30min
  uuid:2,// uuid:uuidv4(),
  clientName: "Akash Patel",
},{
  professionalsFullName: "Peter Chan, J.D.",
  apptDate: Date.now() + 10000000,  //3hrs
  uuid:3,//uuid:uuidv4(),
  clientName: "Mike Williams",
}];

app.set('professionalAppointments', professionalAppointments);    //accessible via app..

app.get('/', (req, res)=> {
  res.json('this is the default route');
});

//this route is for US! In production, a receptionist, or calender/scheduling app
//would send this out. We will print it out and paste it in. It will drop
//us on our React site with the right info for CLIENT1 to make an offer
app.get('/user-link',(req, res)=>{
  // const uuid = uuidv4(); // basically a self managed primary key 
  //data for the end-user's appt
  // const apptData = {
  //   professionalsFullName: "Robert Bunch, J.D.",
  //   apptDate: Date.now() + 500000,
  //   uuid,
  //   clientName: "Jim Jones",
  // }

  const apptData = professionalAppointments[0];
  // professionalAppointments.push(apptData);

  //we need to encode this data in a token
  //so it can be added to a url
  const token = jwt.sign(apptData,linkSecret);
  res.send('https://localhost:3000/join-video?token='+token);
  // res.json("This is a test route")
})  


app.get('/test', (req, res)=>{
  res.json('this is a test route');
});

app.post('/validate-link', (req, res)=>{
  //get the token from body of post request (possible with express.json())
  const token = req.body.token;   //was req.query.token;
  const decodedData = jwt.verify(token, linkSecret); //decode jwt with secret

  //send the decoded data (our object) back to the frontend
  res.json(decodedData);

});


app.get('/pro-link', (req, res)=> {
  const userData = {
    fullName: 'Peter Chan, J.D.',
    proId:1234,

  }
  const token = jwt.sign(userData,linkSecret);
  res.send(`<a href="https://localhost:3000/dashboard?token=${token}" target="_blank">link here</a>`);
}); 
