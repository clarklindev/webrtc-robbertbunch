const videoEl = document.querySelector('#my-video');
let stream = null;

const constraints = {
  audio: true, //audio feedback (reverb) use HEADPHONES
  video: true
}

const getMicAndCamera = async (e) => {
  try{
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log(stream);

    changeButtons([
      'green', 'blue', 'blue', 'grey', 'grey', 'grey', 'grey', 'grey'
    ])
  }
  catch(error){
    console.log('user denied access to contraints:', error);
  }
};

const showMyFeed = async (e) => {
  if(!stream){
    alert('stream still loading');
    return;
  }

  videoEl.srcObject = stream; //this will set our MediaStream (stream) to our video tag
  const tracks = stream.getTracks();
  console.log(tracks);

  changeButtons([
    'green', 'green', 'blue', 'blue', 'blue', 'grey', 'grey', 'blue'
  ])
}

const stopMyFeed = e => {
  if(!stream){
    alert('stream still loading');
    return;
  }

  const tracks = stream.getTracks();  
  tracks.forEach(track => {
    // console.log(track);
    track.stop(); //disassociates track with the source
  });

  changeButtons([
    'blue', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey'
  ])
}

document.querySelector('#share').addEventListener('click', e => getMicAndCamera(e));
document.querySelector('#show-video').addEventListener('click', e=> showMyFeed(e));
document.querySelector('#stop-video').addEventListener('click', e=> stopMyFeed(e));
document.querySelector('#change-size').addEventListener('click', e=>changeVideoSize(e));