# WebRTC with Robert Bunch

## Section 01 - introduction to webRTC

1.  What is WebRTC and what does it do? - 7min
2.  All my code (github link) - 0min
3.  Getting the codebase for a specific video - 4min
4.  How I code - 4min
5.  But it's 2023: Why would I use webRTC over an SDK (Zoom)? - 6min

---

# getUserMedia

## Section 02 - getUserMedia playground (basics)

6.  Project file setup - 3min
7.  getUserMedia - where everything starts - 13min
8.  Play the feed, getTracks(), and MediaStreamTracks - 7min
9.  A few UI updates - 9min
10. Constraints overview - getSupportedConstraints() and getCapabilities() - 10min
11. Changing resolution, framerate, aspect ratio - applyConstraints() - 8min
12. Recording a feed - MediaRecorder and webRTC - 13min
13. Update buttons - 5min
14. Capturing the screen - 10min
15. Getting available input/outputs with enumerateDevices() - 9min
16. Loading up input/output options - 11min

---

# rtcPeerConnection

## Section 03 - rtcPeerConnection - Stream Video, peer to peer

17. Section Demo & Overview - 6min
18. rtcPeerConnection and signaling - 7min
19. Signaling Part 1 - SDP - 3min
20. Signaling Part 2 - ICE (and STUN) - 7min
21. File Structure - 7min
22. local RTC - 14min
23. setLocalDescription() - 4min
24. Socket.io and HTTPS setup - 9min
25. Connection TaskList - 6min
26. Connection TaskList - part 2 - 12min
27. emit newOffer - 9min
28. Emit iceCandidates - 8min
29. Load existing and new offers on all clients - 9min
30. Create answer - 9min
31. Error handling the signaling process - 8min
32. Emitting answer - 7min
33. Listening for answer and setRemoteDescription(answer) - 6min
34. Apply ICE candidates - Part 1 - 8min
35. Apply ICE candidates - Part 2 - 5min
36. Add tracks from remote peer - MAGIC!! - 6min
37. Loading on another device on the same network - 5min

## Section 04 - WebRTC process it - review it..

38. The Process (on the board) - 24min (watch at 2x)
39. Code Review - 50min (watch at 2x)

---

# telelegal project

## Section 05 - WebRTC and - eact

--- client 1

40. Project Demo - 6min
41. Project Structure and Front-end Setup - 6min
42. Chrome and localhost certs - 1min
43. Back-end Setup - 8min
44. Creating a JWT & link to simulate scheduling - 11min
45. Add React-Router for our front-end - 5min
46. Setup Join-Video route and get the decoded data in React - 8min
47. Add starting components - 10min
48. Wire up redux and make callStatus reducer - 8min
49. Add action buttons, bootstrap, and fontawesome - 7min
50. getUserMedia() and store the stream in redux - 9min
51. Create peerConnection and store it in redux - 7min
52. Thinking through where our functions belong (& a few bug fixes) - 6min
53. Abstracting the Video and Audio buttons - 8min
54. Adding the local video feed - 10min
55. Add our tracks to the peerConnection - 8min
56. Enable and disable (mute) the local video feed - 6min
57. Display local video inputs (camera options) - 11min
58. Set new video device on select - 7min
59. replaceTracks() - 8min
60. Abstract DropDown component - 3min
61. Set up AudioButton component - 11min
62. Switch Audio Input and Output Devices - 11min
63. Start, mute, unmute audio - 10min

---signal server

64. Organize offers on backEnd and add uuid - 8min
65. createOffer() once the tracks are shared - 13min

---client2(professional)
66. Add Dashboard markup for professional - 5min
67. Optional - Overview of markup - 2min
68. Authenticate professional - 10min
69. socket refactoring - 9min
70. Reorganize Appointment Data - 3min
71. Pull Appointment Data - 9min
72. Listen for offers on the client - 11min
73. Create join video route for professional - 6min
74. Add Call Info to Professional Video Page - 4min
75. Create Answer and set Descriptions - 10min
76. Review Task List and Cheer for Our Progress - 7min
77. Emit Answer Up To Server - 8min
78. Listen for New Answer On the Client - 12min
79. Emit Ice Candidates To Server - 9min
80. Send Ice Candidates to clients - 13min
81. Add Ice Candidates to Peer Connection - 12min
82. AddTracks and... VICTORY!!! (test app) - 6min
83. Fix 2 small bugs - 2min
84. Make the HangupButton do something! - 5min
85. ReplaceTracks on change device - 8min

--- AWS

## Section 06 - Deploying our app to AWS

86. Drawing Out And Explaining The Process -15min
87. Warning... this section is deploying, not WebRTC and might be hard :) - 1min
88. Setting up a (hopefully) free AWS server to run our app on - 36min
89. Getting a Domain &Setting It To Point At Our Server & Install Apache - 17min
90. Pulling files onto our server from github and building React - 20min
91. htaccess file and vhost for next lecture - 1min
92. Vhost - Telling Apache Where Our Sites Are - 12min
93. Reverse Proxy Vhost - For the backend - 1min
94. HTTPS and Reverse Proxy Vhost - 23min

## Section 07 - Scaling WebRTC beyond the mesh

95. Your options - an SFU, MCU, and mesh - 13min

---

---

---

---

---

---

---

---

---

## Section 01 - introduction to webRTC

### 1. what is WebRTC

### summary - Mastering webRTC - make a video chat app!

- Course teaches you how to `connect audio/video streams` between computers
- browser related
- set up a `signaling server` for` connection negotiation`
- and `integrate webRTC into a React app with Redux`.
- You'll learn to manage `multiple asynchronous sources` and organize your code effectively.
- It's suitable for anyone familiar with JavaScript and Node
- using webRTC to implement video conferencing `without third-party services` (p2p)
- requisites include knowledge of GUM - `getUserMedia()` and `socket.io`
  - GUM (getting camera, mic, screen) - `getUserMedia()` -> requires user granting permission
- access to a Linux machine is required for later sections.

- webRTC uses UDP (fast) -> online gaming
- in contrast to TCP (reliable , acknowledgments, stable)

### 2. github source code

[https://github.com/robertbunch/webrtcCourse](https://github.com/robertbunch/webrtcCourse)

### 3. Getting the codebase for a specific video

- use github tags for reference when stuck, it puts you at the start of the lesson the tag references

### 4. How I code

- uses node 18 (16+ will do)
- his root directory is `videocode/`

### 5. But it's 2023: Why would I use webRTC over a 3rd party SDK (Zoom)?

- 3rd party is sdk and is reliable but may be restrictive
- when you need to build things yourself (more control) we use webRTC and its fast
- no licensing fee
- control over sercurity and protection from 3rd party data breech
- cross platform

---

---

---

---

---

---

---

---

---

## Section 02 - basics -> project teaching getUserMedia

### 6. Project file setup - (3min)

- section outcome

<img
src='exercise_files/section02-06-project-playground-index-html.png'
alt='section02-06-project-playground-index-html.png'
width=600
/>

- copy from given code:
  - gumplayground/index.html
  - gumplayground/scripts.js
  - gumplayground/styles.css

### 7. getUserMedia() - where everything starts - (13min)

- getUserMedia() requires you to use `https` (secure context)

```js
async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}
```

- [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices)
- provides access to connected media input devices like cameras and microphones, as well as screen sharing.
- prompts user for permission
- obtain access to any `hardware source` `of media data`

- `MediaDevices` belongs to `navigator.mediaDevices.getUserMedia()`
- `Navigator` - Navigator interface represents the `state` and the identity of the `user agent (browser)`.

  - It allows scripts to query it and to register themselves to carry on some activities.
  - part of global scope (`window.navigator.` / `navigator.`)

  - Navigator.connection
  - Navigator.geolocation
  - Navigator.mediaDevices
  - Navigator.mediaCapabilities
  - Navigator.mediaSession

<img
src='exercise_files/section02-07-project-playground-webrtc-getUserMedia.jpg'
alt='section02-07-project-playground-webrtc-getUserMedia.jpg'
width=600
/>

### Contraints

- application can request the camera and microphone capabilities it needs and wants, using additional constraints
- `audio:true` -> has audio feedback so use earphones

```html
<!-- index.html -->
<button id="share" class="btn btn-primary d-block mb-1">
  Share my mic and camera
</button>
```

```js
//src/gumplayground/script.js

let stream = null;

const constraints = {
  audio: true, //audio feedback (reverb) use HEADPHONES
  video: true,
};

const getMicAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
  } catch {
    console.log("user denied access to contraints");
  }
};

//attach event handler
document.querySelector("#share").addEventListener("click", getMicAndCamera);
```

### TROUBLESHOOT

- while testing, in windows: your camera and microphone must be on:
- settings -> camera privacy settings -> camera access -> ON
- settings -> microphone privacy settings -> microphone access -> ON
- Expect:

```bash
# console log
MediaStream {id: '33c6bd0a-95e1-4951-88c4-62ce312d8cef', active: true, onaddtrack: null, onremovetrack: null, onactive: null, …}
```

### Other constraints

#### video contraints

- an application can request the camera and microphone capabilities it needs and wants:
  - `constraints = { audio: true, video: { width: 1280, height: 720 } }`

#### ideal

- `ideal` value, when used, has gravity — which means that the browser will try to find the setting (and camera, if you have more than one), with the smallest fitness distance
  - `constraints = { audio: true, video: { width: { ideal: 1280 }, height: { ideal: 720 }}`

#### front camera

- on mobile devices, the following will prefer the `front camera` (if one is available) over the rear one:
  - `constraints = { audio: true, video: { facingMode: "user" }}`

#### rear camera

- `constraints = { audio: true, video: { facingMode: { exact: "environment" }}}`

#### requesting camera by id or if not available, a different camera

- `deviceId` constraint. If you have a deviceId from `mediaDevices.enumerateDevices()`, you can use it to request a specific device
- return the camera you requested, or a different camera if that specific camera is no longer available
- `constraints = {video: { deviceId: myPreferredCameraDeviceId }}`

#### requesting an exact camera by deviceid

- `constraints = { video: {deviceId: {exact: myExactCameraOrBustDeviceId } }}`

### 8. play the feed, getTracks(), and MediaStreamTracks - (7min)

- TODO: putting the stream in videoEl: `<video id="videoEl">`
- `showMyFeed()` -> set our MediaStream (stream) to our video tag `videoEl.srcObject = stream;`

#### where is the video and audio source?

- `getTracks()` -> gets everything (gets each individual track part of media stream that came from getUserMedia)

```bash output
(2) [MediaStreamTrack, MediaStreamTrack]
0: MediaStreamTrack {kind: 'audio', id: '7e9619ee-95e0-4f3a-93d2-0736da61dc4f', label: 'Default - Microphone Array (Realtek(R) Audio)', enabled: true, muted: false, …}
1: MediaStreamTrack {kind: 'video', id: '8fc0682b-b8e4-4a01-9f51-d863ad5acc60', label: 'Integrated Camera (13d3:56a6)', enabled: true, muted: false, …}
length: 2
```

- `getAudioTracks()` -> gets audio
- `getVideoTracks()` -> gets video

#### stopping the video feed

- MediaStreamTrack `.stop()` -> disassociates track with the source

```js
//script.js
const videoEl = document.querySelector("#my-video");
let stream = null;

const constraints = {
  audio: true, //audio feedback (reverb) use HEADPHONES
  video: true,
};

const getMicAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log(stream);
  } catch (error) {
    console.log("user denied access to contraints:", error);
  }
};

const showMyFeed = async (e) => {
  videoEl.srcObject = stream; //this will set our MediaStream (stream) to our video tag
  const tracks = stream.getTracks();
  console.log(tracks);
};

const stopMyFeed = (e) => {
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    // console.log(track);
    track.stop(); //disassociates track with the source
  });
};

document
  .querySelector("#share")
  .addEventListener("click", (e) => getMicAndCamera(e));
document
  .querySelector("#show-video")
  .addEventListener("click", (e) => showMyFeed(e));
document
  .querySelector("#stop-video")
  .addEventListener("click", (e) => stopMyFeed(e));
```

### 9. A few UI updates - (9min)

- NOTE: this is JavaScript DOM manipulation (imperative).
  - react is declarative and is easier ways to do this

### JS - Imperative approach

- adding `changeButtons.js` to `index.html`
- deals css styling (resets css styling and sets what is necessary)

  - green = btn-success
  - blue = btn-primary
  - grey = btn-secondary
  - red = btn-danger

- NOTE: my eyes are bleeding watching this...why?
  - the implementation of changeButtons: you are passing an array of meaningless strings (colors) to associate with `buttonsById`
  - you have to physically adjust each element in array

### 10. Constraints overview - getSupportedConstraints() and getCapabilities() - (10min)

- the constraints object passed to getUserMedia()
  - changing the screensize (video feed resolution)
- getUserMedia() constraints require `either or both` audio/media

```js
getUserMedia({
  video: {
    width: 1280,
    height: 720,
  },
});
```

### MediaTrackConstraints

- dictionary used to describe a set of capabilities and the value of values each can take on.
- a constraints dictionary is passed into `applyConstraints()`
- MediaStreamTrack provides `getConstraints()` method returns `MediaTrackConstraints` object
- ie you can ask a track for the constraints available

- browser will try honor these resolutions
- `min`, `max` - as close as possible
- `exact` - if you specify `exact` but no camera exists with this resolution or higher, an `OvercontrainedError` returned.
- `ideal` - browser will try

### getSupportedContraints()

- tells us browser capabilities - returns a boolean list of whether something is supported.
- `const supportedConstraints = navigator.mediaDevices.getSupportedConstraints()`
- create `src/gumplayground/changeVideoSize.js`

```js
// changeVideoSize.js
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.log("supportedConstraints: ", supportedConstraints);

const changeVideoSize = () => {
  stream.getTracks().forEach((track) => {
    const capabilities = track.getCapabilities();
    console.log(capabilities);
  });
};
```

### getCapabilities()

- you can use MediaStreamTrack .getCapabilities()
- returns a `MediaTrackCapabilities` object specifying the values or range of values of each constrainable property
- the difference between `supportedConstraints` and `getCapabilities()` is the latter gives actual values of supported properties

- getCapabilities() specific for audio track

<img
src='exercise_files/section02-10-constraints-overview-getCapabilities-audio.png'
alt='section02-10-constraints-overview-getCapabilities-audio.png'
width=600
/>

- getCapabilities() specific for video track

<img
src='exercise_files/section02-10-constraints-overview-getCapabilities-video.png'
alt='section02-10-constraints-overview-getCapabilities-video.png'
width=600
/>

### 11. Changing resolution, framerate, aspect ratio - applyConstraints() - (8min)

- get getCapabilities()
  - height: {max:720}
  - width: {max:1280}
- once you know the capabilities of the browser, you can call `applyContraints()` against a track
- the constraints properties are specific to the particular type of track (audio/video)
- with applyConstraints() we are not applying it to getUserMedia, it is being applied to a track

- example of using constraints specific for video

```js
const constraints = {
  width: { min: 640, ideal: 1280 },
  height: { min: 480, ideal: 720 },
  advanaced: [{ width: 1920, height: 1280 }, { aspectRatio: 1.333 }],
};
```

- setting width/height to input value as long as its less than `MediaCapabilities.width.max` and `MediaCapabilities.height.max`

```js
const capabilities = track.getCapabilities();
console.log("capabilities: ", capabilities);

const height = document.querySelector("#vid-height").value;
const width = document.querySelector("#vid-width").value;

const vConstraints = {
  height: {
    exact: height < capabilities.height.max ? height : capabilities.height.max,
  },
  width: {
    exact: width < capabilities.width.max ? width : capabilities.width.max,
  },
  // frameRate: 5,
  // aspectRatio: 10
};
```

### testing

- ensure `windows` -> `settings` for `microphone privacy` and `camera privacy` is set to `on`

### 12. Recording a feed - MediaRecorder and webRTC - (13min)

- NOTE: web apis -> `MediaStream Recording api` (aka `Media Recording API`, `MediaRecorder API`) for start recording, stop recording
  - `MediaRecorder`
- NOTE: web apis -> `WebRTC api` is at same level `MediaStream Recording api` in `mdn docs`
- NOTE: `MediaStream` is not part of `WebRTC api` because `MediaDevices.getUserMedia()` creates it
- so MediaStream recording API is meant to work with `MediaStream` or `HTMLMediaElement`

- we create `src/gumplayground/screenRecorder.js`
- we add this to index.js

```js
// screenRecorder.js
const startRecording = () => {};
const stopRecording = () => {};
const playRecording = () => {};
```

- we add the listener to scripts.js

```js
//...
document
  .querySelector("#start-record")
  .addEventListener("click", (e) => startRecording(e));
document
  .querySelector("#stop-record")
  .addEventListener("click", (e) => stopRecording(e));
document
  .querySelector("#play-record")
  .addEventListener("click", (e) => playRecording(e));
```

### MediaRecorder

- [mdn docs](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/MediaRecorder)
- `const mediaRecorder = new MediaRecorder(stream)`
- you have to pass a stream
- can also pass options
  - mimeType -> format for resulting media / codec
- instance methods
- events

```js
// src/gumplayground/screenRecorder.js
let mediaRecorder;
let recordedBlobs;

const startRecording = () => {
  if (!stream) {
    //you could use mediaStream!
    alert("No current feed");
    return;
  }
  console.log("Start recording");
  recordedBlobs = []; // an array to hold the blobs for playback
  //you could use mediaStream to record!
  mediaRecorder = new MediaRecorder(stream); //make a mediaRecorder from the constructor
  mediaRecorder.ondataavailable = (e) => {
    //ondataavailable will run when the stream ends, or stopped, or we specifically ask for it
    console.log("Data is available for the media recorder!");
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "blue",
    "grey",
    "blue",
  ]);
};

const stopRecording = () => {
  if (!mediaRecorder) {
    alert("Please record before stopping!");
    return;
  }
  console.log("stop recording");
  mediaRecorder.stop();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "blue",
    "blue",
  ]);
};

const playRecording = () => {
  console.log("play recording");
  if (!recordedBlobs) {
    alert("No Recording saved");
    return;
  }
  const superBuffer = new Blob(recordedBlobs); // superBuffer is a super buffer of our array of blobs
  const recordedVideoEl = document.querySelector("#other-video");
  recordedVideoEl.src = window.URL.createObjectURL(superBuffer);
  recordedVideoEl.controls = true;
  recordedVideoEl.play();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "blue",
  ]);
};
```

### 13. Update buttons - (5min)

- see code at lesson 12
- move changeButtons from showMyFeed() and add to screenRecorder -> startRecording()
- TODO: add `src/gumplayground/shareScreen.js`
- script.js -> add listener for `share-screen` button `document.querySelector('#share-screen').addEventListener('click', e=>shareScreen(e));`

```js
// shareScreen.js
const shareScreen = async () => {
  const options = {
    video: true,
    audio: false,
    surfaceSwitching: "include", //include/exclude NOT true/false
  };
  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
  } catch (err) {
    console.log(err);
  }

  //we don't handle all button paths. To do so, you'd need
  //to check the DOM or use a UI framework.
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "green",
  ]);
};
```

### 14. Capturing the screen - (10min)

<img
src='exercise_files/section02-14-capturing-the-screen-sharing-tab.png'
alt='section02-14-capturing-the-screen-sharing-tab.png'
width=600
/>

#### getDisplayMedia()

- capability to `share the entire screen` not just browser window
- `navigator.mediaDevices.getDisplayMedia()` (we've been working with `navigator.mediaDevices.getUserMedia`)
- returns a promise that resolves to MediaStream
- `.getDisplayMedia()` - prompts the user to select and grant permission to capture the contents of a display or portion thereof (eg. window) as a `MediaStream` (which consists of `MediaStreamTrack`)
- the resultant stream can then be recorded using the `MediaStream Recording API` or transmitted as part of `WebRTC session`
- you can pass options to `getDisplayMedia(options)`
  - `video` - default is true
  - `audio` - default is false
  - `selfBrowserSurface` - whether the browser should allow the user to select the current tab for capture.
    - helps avoid infinite hall of mirrors effect
    - possible values: `include` or `exclude`
- you can record the mediaStream - `mediaStream` declared in `script.js` and set in `shareScreen.js`

```js
//shareScreen.js
//...
mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
```

### 15. Getting available input/outputs with enumerateDevices() - (9min)

- valid options for media devices (input/output)

<img
src='exercise_files/section02-15-available-input-output-with-enumerateDevices.png'
alt='section02-15-available-input-output-with-enumerateDevices.png'
width=600
/>

- index.html

  - `<script src='inputOutput.js'></script>`

- add event listeners

```js
//src/gumplayground/script.js
document
  .querySelector("#audio-input")
  .addEventListener("change", (e) => changeAudioInput(e));
document
  .querySelector("#audio-output")
  .addEventListener("change", (e) => changeAudioOutput(e));
document
  .querySelector("#video-input")
  .addEventListener("change", (e) => changeVideo(e));
```

### enumerateDevices

- navigator.mediaDevices -> `enumerateDevices()`
  - method requests a list of available input/output devices (microphone, camera, headset)
- must be called in a secure context
  - non-local resource -> https:// or wss://
  - local-resources -> `http://localhost` , `http://*.localhost` and `file://`
  - vscode `live-server` should work fine too (localhost)

#### return value

- returned `promise` receives an array of MediaDevicesInfo
- resolves with a [MediaDevicesInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) array
- each item in array describes one of the available input/output devices
- order is significant (default capture devices listed first)
- access to particular devices is gated by `Permissions api`

```js
//src/gumplayground/inputOutput.js

const getDevices = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
  } catch (err) {
    console.log(err);
  }
};

const changeAudioInput = async (e) => {};

const changeAudioOutput = async (e) => {};

const changeVideo = async (e) => {};

getDevices();
```

#### FIX - creating a secure context

- src/gumplayground -> `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
- npm i -g pnpm
- pnpm init
- pnpm i express
- pnpm add -g nodemon

- create `expressServer.js`

```js
//gumplayground/expressServer.js

//we need this to run in a localhost context instead of file
//so that we can run enumerate devices (it must be run in a secure context)
//and localhost counts
const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname)));
app.listen(3000);
```

### testing

- run with `pnpm run dev` (added script to package.json)
- click `share my mic and camera`
- note the updated console.log

### 16. Loading up input/output options - (11min)

- NOTE: in notes for lesson 15 already included the code for `changeAudioInput()`, `changeAudioOutput()` and `changeVideo()`
- up to this point we can get a list of all devices that is accessible because of `enumerateDevices()`
- TODO: fill out the options for the dropdown inputs `audio input`, `audio output`, `video input`
- with ability to get a list of `devices`: `const devices = await navigator.mediaDevices.enumerateDevices();`
- iterate through list:
  - create an `<option>` element
  - appendChild `<option>` for each respective input:
  - sorting by device.`kind`
  - using the deviceId -> `option.value = d.deviceId;`
  - using the label -> `option.text = d.label;`
- so for each device (of `kind`), add its `deviceId` to media constraints and pass to getUserMedia
- for audioOutput change -> `videoEl.setSinkId(sinkId)` (sinkId is deviceId)

```js
//inputOutput.js
//...

const audioInputEl = document.querySelector("#audio-input");
const audioOutputEl = document.querySelector("#audio-output");
const videoInputEl = document.querySelector("#video-input");

const getDevices = async () => {
  console.log("getDevices()");
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);

    devices.forEach((d) => {
      const option = document.createElement("option"); //create the option tag
      option.value = d.deviceId;
      option.text = d.label;
      //add the option tag we just created to the right select
      if (d.kind === "audioinput") {
        audioInputEl.appendChild(option);
      } else if (d.kind === "audiooutput") {
        audioOutputEl.appendChild(option);
      } else if (d.kind === "videoinput") {
        videoInputEl.appendChild(option);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const changeAudioInput = async (e) => {
  //changed audio input!!!
  const deviceId = e.target.value;
  const newConstraints = {
    audio: { deviceId: { exact: deviceId } },
    video: true,
  };
  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream);
    const tracks = stream.getAudioTracks();
    console.log(tracks);
  } catch (err) {
    console.log(err);
  }
};

const changeAudioOutput = async (e) => {
  await videoEl.setSinkId(e.target.value);
  console.log("Changed audio device!");
};

const changeVideo = async (e) => {
  //changed video input!!!
  const deviceId = e.target.value;
  const newConstraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  };
  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream);
    const tracks = stream.getVideoTracks();
    console.log(tracks);
  } catch (err) {
    console.log(err);
  }
};

getDevices();
```

---

---

---

---

---

---

---

---

---

## Section 03 - rtcPeerConnection - Stream video, peer-to-peer

- TODO: rtcPeerConnection

### 17. Section Demo & Overview - (6min)

<img
src='exercise_files/section03-17-outcome-demo.png'
alt='section03-17-outcome-demo.png'
width=600
/>

- PART 1 -> getUserMedia gets the feed (Section 02)
- PART 2 -> the connection (section 03) - RTCPeerConnection (the other part of webRTC)
  - now we send it to a peer with peerConnection

### 18. rtcPeerConnection and signaling - (7min)

- rtcConnection is peer-2-peer

<img
src='exercise_files/section03-18-rtcPeerConnection.png'
alt='section03-18-rtcPeerConnection.png'
width=600
/>

### signaling (via a server)

- signalling is the innitial part (before browsers connect with each other - this server helps then connect)

### ICE candidate

1. find each other -> direct connection of peers without need for intermediary server (need server just to find each other)

- is called the ICE candidate (json {})

### SDP

2. thy need to exchange info - need to exchange info `before` a connection (eg. codec)

- is called SDP (json {})
- these 2 things colletively called signaling and moves from one browser to another browser
- once cross-messaging is done, signaling is complete (signal server)

### the server

- we will use a web server
- send the SDP and IP address to server
- server then sends this to other client
- at the same time, the other client does the same by sending SDP and its IP address back to server for other client
- note: there is no additional request (which is why we will use websockets)
- you can open 2 tabs (https and same url) or browser + phone (https and same url (needs to be on same network))
- we will use signals
- will need web socket server (socket.io)

### 19. Signaling Part 1 - SDP - (3min)

- SDP - the initial exchange of information
- SDP (standard description protocol) - the standard for decribing multimedia content of the connection (resolution, formats, codecs, encryption)
- so that once both peers are connected they can understand each other (once the data is transferring)
- essentially the metadata describing the content (not the media content itself)
- a sdp message (json)

```sdp message
v=0
o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
s=
c=IN IP4 host.anywhere.com
t=0 0
m=audio 49170 RTP/AVP 0
a=rtpmap:0 PCMU/8000
m=video 51372 RTP/AVP 31
a=rtpmap:31 H261/90000
m=video 53000 RTP/AVP 32
a=rtpmap:32 MPV/90000
```

### client 1 (caller) and client2

<img
src='exercise_files/section03-19-signalling-part1-sdp-flow.png'
alt='section03-19-signalling-part1-sdp-flow.png'
width=600
/>

### Step 1 - the caller initiate connection

- client 1 intiates a rtc Peer connection (generates SDP)
- and `OFFER` socket.io event sends the SDP
- socket.io will receive it and wait for the other SDP on client 2

### step2 - client 2

- creates RTCP client
- sends `READY`

### step3 - socket.io

- responds to `READY`
- socket.io sends SDP (from client 1)

### step4 - client 2

- client 2 now has client 1's SDP
- responds with `ANSWER` and includes its own SDP

### step5 - socket.io

- socketio passes on this `ANSWER` to client 1
- this completes part 1 of signalling server

### 20. Signaling Part 2 - ICE (and STUN) - (7min)

- second part of finding each other

<img
src='exercise_files/section03-19-signalling-part2-ice.png'
alt='section03-19-signalling-part2-ice.png'
width=600
/>

- ICE (interactive connectivity establishment) - ice is a framework to allow web browser to connect with peers.
  - there are mechanisms in place to make it hard for them to find each other eg.
    - firewall,
    - NAT (used to give device a public address) and say client wants to reach a device behind a router
- STUN (Session traversal utilities for NAT)
  - protocol to discover your public address and determine restrictions in your router that would prevent a direct connection with a peer.

### how it works

- client sends request to STUN server, stun server replies to client (with ICE candidates) - (sending the client back its own ip) public ip address and whether it's accessible
- client sends ICE candidate to socketio server
- and then socketio server sends ICE to client 2
- client 2 now has ice candidates (knows how to find other client) AND SDP.
- with this, the 2 clients can connect to each other

### 21. File Structure - (7min)

- implementing signalling part 1 (sdp) + part2 (ice)
- `src/signallingPeerConnection/`
  - index.html
  - scripts.js
    - populate video stream
  - styles.css
  - server.js
    - create express server

### test

- `nodemon server.js`
- localhost:8181

```js
//server.js
const express = require("express");
const app = express();
app.use(express.static(__dirname));
app.listen(8181);
```

```js
//scripts.js
const localVideoEl = document.querySelector("#local-video");
const remoteVideoEl = document.querySelector("#remote-video");

let localStream; //local video stream
let remoteStream; //remote video stream
let peerConnection; //the peer connection that the 2 clients use to talk

//when a client initiates a call
const call = async (e) => {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    // audio: true
  });
  localVideoEl.srcObject = stream;
};

document.querySelector("#call").addEventListener("click", call);
```

- outcome:
  <img
  src='exercise_files/section03-21-file-structure.png'
  alt='section03-21-file-structure.png'
  width=600
  />

### 22. local RTC - (14min)

<img
src='exercise_files/section03-22-local-rtc.png'
alt='section03-22-local-rtc.png'
width=600
/>

- this lesson: the signaling process...where client 1 (gets its ip address and SDP)
- 1. find -> ICE (ip)
- 2. exchange info -> SDP

### create RTCPeerConnection

- both computers (client 1 and client 2) will be running script.js
- both need its own peer connection (RTCPeerConnection)
- `scripts.js` - create a RTCPeerConnection via - `createPeerConnection() `

```js
const createPeerConnection = () => {
  peerConnection = new RTCPeerConnection(peerConfiguration);
};
```

- a RTCPeerConnection represents a connection between local device and a remote peer
  - it can take a configuration object
  - we will send it `iceServers` (array of RTCIceServer objects) each ice agent (typically a STUN/ and/or TURN server)
  - the ice agent can figure out how to reach the browser (path to the browser) when there are routers / firewalls / proxies etc.
- it generates and `ice candidate` (saying how to get to that browser via this path)
  - so to get the ice candidate, we go through the stun server
- TODO: copy from course files -> `course-repository\starterFiles\signalingPeerConnection\stunServers.js`
- this config has stun server urls
- urls is either a single string or array of strings specifying a URL which can be used to connect to the server.
- pass peerConfiguration object to peerConnection:`await createPeerConnection(peerConfiguration);`

### create an offer

- after connection is set and ice candidate found
- create an offer (`createOffer()`)
- the `createOffer()` method initiates the `creation of an SDP` offer for purpose of starting a new WebRTC connection to a remote peer
- it generates a SDP

```sdp message
v=0
o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
s=
c=IN IP4 host.anywhere.com
t=0 0
m=audio 49170 RTP/AVP 0
a=rtpmap:0 PCMU/8000
m=video 51372 RTP/AVP 31
a=rtpmap:31 H261/90000
m=video 53000 RTP/AVP 32
a=rtpmap:32 MPV/90000
```

- NOTE: we need to add video `stream` to peerConnection -> `addTrack()`
- `addTrack()` - adds a new media track to the set of tracks which will be transmitted to the other peer
- adding a track will trigger a renegotiation

```js
//scripts.js
//...
let peerConfiguration = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
    },
  ],
};

//...

const createPeerConnection = async () => {
  try {
    //RTCPeerConnection is the thing that creates the connection
    //we can pass a config object, and that config object can contain stun servers
    //which will fetch us ICE candidates
    peerConnection = new RTCPeerConnection(peerConfiguration);

    //add tracks from localStream
    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    // Handle ICE candidates
    peerConnection.addEventListener("icecandidate", (e) => {
      console.log("ICE candidate found...");
      console.log(e);
    });

    return peerConnection;
  } catch (err) {
    console.error("Error creating peer connection:", error);
    throw error; // This will cause the promise to reject
  }
};

const call = async (e) => {
  //...
  //peer connection is set with our STUN servers sent over
  await createPeerConnection();

  //create offer time `createOffer()`
  try {
    console.log("creating an offer");
    const offer = await peerConnection.createOffer();
    console.log(offer);
    peerConnection.setLocalDescription(offer);
  } catch (err) {
    console.log(err);
  }
};
```

- the `icecandidate` event is sent to an RTCPeerConnection when an RTCIceCandidate has been identified and added to
  local peer by a call to `RTCPeerConnection.setLocalDescription()`
- ICE (interactive connectivity establishment) is a framework to allow your web browser to connect with peers.
- ice uses STUN and/or TURN servers to accomplish this

```js
//script.js
//...
const createPeerConnection = async () => {
  //...

  peerConnection = new RTCPeerConnection(peerConfiguration);

  localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
  });

  //...
};
```

- this associates our stream with peer connection, so that when we create an offer `peerConnection.createOffer()`, it can check the data stream to find out what information the other browser will need to know.
- NOTE: removed return new Promise() replaced with async function (since the caller has await)

### 23. setLocalDescription() - (4min)

- now we have an `offer` -> send it to other side
- by calling `createoffer()` it returns a `RTCSessionDescription`
- offer is an `RTCSessionDescription`
- returns `RTCSessionDescription` describes one end of the connection (or a potential connection) (so we will need 2)
- the process of negotiating a connection between 2 peers involves exchanging `RTCSessionDescription` objects (so not only SDP send the entire object)

-

### setLocalDescription()

- setLocalDescription -> tells peerConnection we are this `sdp` and this `type` by receiving the `offer`
- NOTE: `icecandidate` will trigger once we call `setLocalDescription`:

<img
src='exercise_files/section03-23-calling-setLocalDescription-triggers-icecandidate-event.png'
alt='section03-23-calling-setLocalDescription-triggers-icecandidate-event.png'
width=600
/>

```js
// Handle ICE candidates
peerConnection.addEventListener("icecandidate", (e) => {
  console.log("ICE candidate found...");
  console.log(e);
});
```

- `console.log(e);` -> `RTCIceCandidate` have a `candidate` property

### 24. Socket.io and HTTPS setup - (9min)

- the signalling servers job is to facilitate 2 browser find each other
- TODO: create socket.io server
- each browser will create their own `session descriptions` (SDP) and `ice candidates` (ip)
- send it up to the server
- server will send it to other client,
- once this happens in both directions, signalling server is no longer needed

```
pnpm i socket.io
```

### mkcert module

- update server.js to use socket.io and create a https server
- make https: `npm i -g mkcert` (might need to install globally)
- what is it? - mkcert creates self-signed certificates without OpenSSL
- `mkcert create-ca` -> create a certificate authority

  - ca.crt
  - ca.key

- the certificate authority is used to sign certificates you sign later
- -> create a certificate `mkcert create-cert 192.168.1.104` (`mkcert create-cert <IP or domain>`)
- console output:

  ```bash
  Private Key: cert.key
  Certificate: cert.crt
  ```

- use `fs` module to work with file system and grab cert.key

  - `const key = fs.readFileSync('cert.key');`

- use `fs` module to work with file system and grab cert.crt
  - `const cert = fs.readFileSync('cert.crt');`
- we pass createServer({key, cert}, app);

### https server

- create https server: `const expressServer = https.createServer({key, cert}, app);`

### testing

- use https: `https://localhost:8181`
- error: `your connection is not private`
- fix: click on: `process to localhost (unsafe)`

```js
// server.js
const fs = require("fs");
const https = require("https"); //make it https
const express = require("express");
const app = express();
const socketio = require("socket.io");
app.use(express.static(__dirname));

const key = fs.readFileSync("cert.key");
const cert = fs.readFileSync("cert.crt");

//changed setup so we can use https
const expressServer = https.createServer({ key, cert }, app); //pass the certificates and key to createServer()
const io = socketio(expressServer);

expressServer.listen(8181);
```

- we have a socketio server,
- it listens on port 8181 to a secure server with selfmade key+ certificates
- socket.io will be served up at this location: `/socket.io/socket.io.js`

```html
<!-- index.html -->

<!-- ... -->
<script src="/socket.io/socket.io.js"></script>
```

- this gives us access to `io` object
- in scripts.js ensure we are connecting to `https`

```js
// script.js
const socket = io.connect("https://localhost:8181/", (socket) => {
  console.log("someone has connected");
});
```

- TODO -> script.js emit the `offer`

### 25. Connection TaskList - (6min)

- making a tasklist (`signalingPeerConnection/tasklist.txt`)
- note: `~` is for async

1. Someone must getUserMedia() - CLIENT1/Init/Caller/Offerer
2. CLIENT1 creates RTCPeerConnection
3. peerConnection needs STUN servers
   - we will need ICE candidates later
4. CLIENT1 add localstream tracks to peerConnection
   - we need to associate CLIENT1 feed with peerConnection
5. CLIENT1 creates an `offer`
   - needed peerConnection with tracks
   - offer = RTCSessionDescription
     1. SDP - codec/resolution information
     2. Type (offer)
6. CLIENT1 hands `offer` to (peer connection) pc.setLocalDescription
   - scripts.js
   ```js
   const offer = await peerConnection.createOffer();
   peerConnection.setLocalDescription(offer);
   ```

---

### 26. Connection TaskList - part 2 - (12min)

~7. ICE candidates can now start coming in (ASYNC)
SIGNALING (someone to help the browser find/talk to each)

<<<<< WE ARE NOW HERE >>>>>

8. CLIENT1 emits `offer` to signalling server - socket.io server holds it for the other browser - associate with CLIENT1
   ~9. Once 7 happens, emit ICE candidates up to signaling server - socket.io server holds it for the other browser - associate with CLIENT1
   CLIENT1 and Signaling server wait. - wait for an answerer/CLIENT2/receiver
9. CLIENT2 loads up the webpage with io.connect()
   - a new client is connected to signaling/socket.io server
10. socket.io emit out the RTCSessionDesc to the new client
    - an offer to be sent!

<<<<< client 2 also performs steps 1-9 (12-19)>>>>>

- NOTE: step 15 -> instead of an `offer`, it is an `answer`

12. CLIENT2 runs getUserMedia()
13. CLIENT2 creates a peerConnection()
    - pass STUN servers
14. CLIENT2 adds localstream tracks to peerconnection

15. CLIENT2 creates an `answer` (`createAnswer()`);
    - createAnswer = RTCSessionDescription (sdp/type) type will be `answer`
16. CLIENT2 hands `answer` to (peerConnection) pc.`setLocalDescription`
17. Because CLIENT2 has the offer, CLIENT2 can hand the offer to (peerConnection) pc.`setRemoteDescription`
    ~18. when setLocalDescription, start collecting ICE candidates (ASYNC)
    Signaling server has been waiting...
18. CLIENT2 emit `answer` (RTCSessionDesc - sdp/type) up to signaling server
    ~20. CLIENT2 will listen for tracks/ICE from remote. - and is done. - waiting on ICE candidates - waiting on tracks
19. signaling server listens for answer, emits CLIENT1 answer (RTCSessionDesc - sdp/type)
20. CLIENT1 takes the answer and hands it to (peerConnection) pc.`setRemoteDesc`
    ~23. CLIENT1 waits for ICE candidates and tracks

21 & 23 are waiting for ICE. Once ICE is exchanged, tracks will exchange

### 27. emit newOffer - (9min)

- tasklist step 8
- send offer (we just made) to signaling server (socketio server)
- scripts.js
- pass `username` + `password` into socket initial handshake: `io.connect()`

```js
//scripts.js
const userName = "Rob-" + Math.floor(Math.random() * 100000);
const password = "x";
document.querySelector("#user-name").innerHTML = userName;

const socket = io.connect("https://localhost:8181/", {
  auth: {
    username,
    password,
  },
});

//...
socket.emit("newOffer", offer); //send offer to signallingServer
```

- server -> listen for `newOffer`
- server.js
- you can access io.connect()'s auth `username` and `password` via
  `handshake`
- offers will store an array of objects with these properties:

  - offererUserName,
  - offer,
  - offererIceCandidates
  - answererUserName,
  - answer
  - answererIceCandidates

- connectedSockets

  - stores the socketId and username

- once `newOffer` received:
- `socket.broadcast.emit('newOfferAwaiting', offers.slice(-1));` broadcast the latest offer (last one in array) to all except the sender.
- NOTE: `socket.emit('event', data)` sends to everyone including sender.

```js
//server.js

//offers will contain objects
//{
//offererUserName
//offer
//offererIceCandidates

//answererUserName
//answer
//answererIceCandidates
//}

const offers = [];

const connectedSockets = [
  //{username, socketId}
];

//...
io.on("connection", (socket) => {
  //console.log('Someone has connected');

  const userName = socket.handshake.auth.userName;
  const password = socket.handshake.auth.password;

  if (password !== "x") {
    socket.disconnect(true);
    return;
  }

  connectSockets.push({
    socketId: socket.id,
    userName,
  });

  socket.on("newOffer", (newOffer) => {
    offers.push({
      offererUserName: userName,
      offer: newOffer,
      offererIceCandidates: [],
      answererUserName: null,
      answer: null,
      answererIceCandidates: [],
    });

    //send out to all connected sockets EXCEPT the caller
    socket.broadcast.emit("newOfferAwaiting", offers.slice(-1));
  });
});
```

- this takes us to TaskList point 8. Client1 emits offer

### 28. Emit iceCandidates - (8min)

- once ice candidate is found...emit ICE candidate to signaling server
- scripts.js

```js
//scripts.js
//...
let didIOffer = false;

const createPeerConnection = async () => {
  try {
    //...

    peerConnection.addEventListener("icecandidate", (e) => {
      console.log("ICE candidate found...");
      console.log(e); //ip addresses (ice candidates)

      if (e.candidate) {
        socket.emit("sendIceCandidateToSignalingServer", {
          iceCandidate: e.candidate,
          iceUserName: userName,
          didIOffer,
        });
      }
    });
    return peerConnection;
  } catch (err) {}
};

//...
const call = async (e) => {
  //...

  try {
    const offer = await peerConnection.createOffer();
    peerConnection.setLocalDescription(offer);

    didIOffer = true;

    socket.emit("newOffer", offer);
    //...
  } catch (e) {}
};
```

### on server

- on server, it will add this iceCandidate to:
  - `offer` IceCandidates -> `offererIceCandidates:[]` or
  - `answer` IceCandidates -> `answererIceCandidates:[]`
- so we use `didIOffer` to keep track of whether we made the offer -> create `didIOffer` and set initially to `false`
  - after creation of `offer`, set `didIOffer = true`
- we take the ice candidate and find the offer it belongs to:
  - if `didIOffer` is true -> add to `offererIceCandidates[]`,
  - otherwise -> add to `answererIceCandidates[]`
- find offer in offers if didIOffer is true
- `sendIceCandidateToSignalingServer` listener calls each time a new ice candidate comes in

```js
//server.js
io.on("connection", (socket) => {
  //...
  socket.on("sendIceCandidateToSignalingServer", (iceCandidateObject) => {
    const { didIOffer, iceUserName, iceCandidate } = iceCandidateObject;
    console.log(`iceCandidate: `, iceCandidate);
    if (didIOffer) {
      const offerInOffers = offers.find(
        (offer) => offer.offererUserName === iceUserName
      );
      if (offerInOffers) {
        offerInOffers.offererIceCandidates.push(iceCandidate);
        //come back to this...
        //if the answerer is already here (connected), emit the iceCandidate to that user
      }
    }

    console.log(offers);
  });
});
```

- signaling server has now managed to get:
  - ice candidates (ip address to get to browser)
  - sdp
- is now waiting for other browser to show up
- in tasklist we are finished with point no. 9:

```
~9. Once 7 happens, emit ICE candidates up to signaling server
    - socket.io server holds it for the other browser
    - associate with CLIENT1
CLIENT1 and Signaling server wait.
    - wait for an answerer/CLIENT2/receiver
```

- everything that happens in [Connection TaskList - (6min)](#25-connection-tasklist---6min)
- from point 10. onwards, we have already done, will be done in reverse for `answer` instead of `offer`

<img
src='exercise_files/section03-28-emit-iceCandidates.png'
alt='section03-28-emit-iceCandidates.png'
width=600
/>

### 29. Load existing and new offers on all clients - (9min)

- [Connection TaskList - (6min)](#25-connection-tasklist---6min)
- TODO: tasklist no. 10

```
10. CLIENT2 loads up the webpage with io.connect()
  - a new client is connected to signaling/socket.io server
```

### script.js

- someone has joined `io.connect()` is called (on a new browser)

  ```js
  // scripts.js
  //...
  const socket = io.connect("https://localhost:8181/", {
    auth: {
      username,
      password,
    },
  });
  ```

- in scripts.js -> signal server sees someone has joined

### server

- in server.js -> io.on('connection', (socket)=>{}) and we listen for `newOffer` event
- we emit to new person all offers we have

```js
//server.js
//...
//a new client has joined. If there are any offers available, emit them out
if (offers.length) {
  socket.emit("availableOffers", offers);
}
```

### script.js -> socketListeners.js

- refactor
- TODO: moving socket listeners to its own file `/signallingPeerConnection/socketListeners.js`
- create /`socketListeners.js` and import in index.html `<script src="socketListeners.js"></script>`
- note: in script.js -> we created a global `socket` reference -> `const socket = ioconnect('https://lo.calhost:8181/');`
- in socketListeners we can add listeners to that `socket` reference

```js
//socketListeners.js
socket.on("availableOffers", (offers) => {
  console.log(offers);
});
```

### testing

- note: windows -> camera privacy -> camera -> on

- https://localhost:8181/ (has to be https)
- open a second window (private mode) -> https://localhost:8181/

- window 1 -> call

<img
src='exercise_files/section03-29-load-existing-and-new-offers-on-all-clients-caller.png'
alt='section03-29-load-existing-and-new-offers-on-all-clients-caller.png'
width=600
/>

- window 2 -> receive offer
- the answerer

<img
src='exercise_files/section03-29-load-existing-and-new-offers-on-all-clients-answerer.png'
alt='section03-29-load-existing-and-new-offers-on-all-clients-answerer.png'
width=600
/>

- on connection get all available offers and - call createOfferEls
- or someone just made a new offer and we're already here - call createOfferEls
- `createOfferEls()` -> creates an answer button (answer the caller (offerer))

```js
//scripts.js
function createOfferEls(offers) {
  //make green answer button for this new offer
  const answerEl = document.querySelector("#answer");

  offers.forEach((o) => {
    console.log(o);
    const newOfferEl = document.createElement("div");
    newOfferEl.innerHTML = `<button class="btn btn-success col-1">Answer ${o.offererUserName}</button>`;
    newOfferEl.addEventListener("click", () => answerOffer(o));
    answerEl.appendChild(newOfferEl);
  });
}
```

TASKLIST:

- [Connection TaskList - (6min)](#25-connection-tasklist---6min)
- COMPLETED: tasklist no. 11

```
11. socket.io emit out the RTCSessionDesc to the new client
    - an offer to be sent!
```

- TODO: 12...

### 30. Create answer - (9min)

- starting tasklist point no. 12...

- `12. CLIENT2 runs getUserMedia()`

  - in call() call fetchUserMedia() -> which runs getUserMedia()
  - in answerOffer() call fetchUserMedia() -> which runs getUserMedia()

- `13. CLIENT2 creates a peerConnection()`

  - create RTCPeerConnection -> pass STUN servers
  - peerConnection add tracks
  - adds listener for ICE candidates

- `14. CLIENT2 adds localstream tracks to peerconnection`

- scripts.js
  - cut from call() and create a new function `fetchUserMedia()`

```js

const call = async e => {
  //12.
  await fetchUserMedia();
  //13. peer connection is set with our STUN servers sent over
  await createPeerConnection();
  //...
}

const answerOffer = async (offerObj) => {
  //12.
  await fetchUserMedia();
  //peer connection is set with our STUN servers sent over
  //13.
  await createPeerConnection(offerObj);
}

const fetchUserMedia = () => {
  return new Promise(async (resolve, reject) => {
    try{
      const stream = await navigator.mediaDevices.getUserMedia({
        video:true,
        // audio: true
      });
      localVideoEl.srcObject = stream;
      localStream = stream;
      resolve();
    }
    catch(err){
      console.log(err);
      reject();
    }
  });
}

const createPeerConnection = async (offerObj)=>{
  try{
    //RTCPeerConnection is the thing that creates the connection
    //we can pass a config object, and that config object can contain stun servers
    //which will fetch us ICE candidates
    peerConnection = new RTCPeerConnection(peerConfiguration);
    //...
    //add tracks from localStream
    //Handle ICE candidates

    //...
    if(offerObj){
      //this wont be set when createPeerConnection() called from 'call()',
      //it will be true when createPeerConnection(true) called from `answerOffer()`
      peerConnection.setRemoteDescription()
    }
  }catch(){
    //...
  }
}
```

- `15. CLIENT2 creates an 'answer' ('createAnswer()');`

  - NOTE: `TO AN OFFER RECEIVED`...ie we cannot set an answer until we have
  - REQUIRED: first set `remote response`..

  - createAnswer() creates an `SDP answer` `to an offer received`
  - answer contains information about:
    - any media already attached to the session,
    - codecs,
    - and options supported by browser,
    - and any candidates already gathered.
  - the answer is delivered to the returned Promise, and should then be sent to the source of the offer to continue negotiation process.

```js
//scripts.js
//...
const answer = await peerConnection.createAnswer();
console.log(`offerObj: ${offerObj}`);
console.log(`answer: ${answer}`);
```

### troubleshoot

- Error -> `cannot create an answer in a state other than have-remote-offer or have-local-pranswer`

<img
src='exercise_files/section03-30-troubleshoot-createAnswer.png'
alt='section03-30-troubleshoot-createAnswer.png'
width=600
/>

- FIX -> it thinks it does not have the remote offer -> ie. cannot set an `answer` until `setting remote response`
- so pass `offerObj` in `createPeerConnection(offerObj)`
- offer object structure:

```
{
  offererUserName: userName,
  offer: newOffer,
  offererIceCandidates:[],
  answererUserName:null,
  answer:null,
  answererIceCandidates:[]
}
```

- then set `peerConnection.setRemoteDescription(offerObj.offer);`

```js
//script.js
//...

//17.
if (offerObj) {
  //this wont be set when createPeerConnection() called from 'call()',
  //it will be set when createPeerConnection(offerObj) called from `answerOffer()`
  peerConnection.setRemoteDescription(offerObj.offer);
}
```

- `17. NOTE: this happens first... (contrary to lessons)`
  - Because CLIENT2 has the offer, CLIENT2 can hand the offer to (peerConnection) pc.'setRemoteDescription'`
- `16. CLIENT2 hands 'answer' to (peerConnection) pc.'setLocalDescription'`

- `~18. when setLocalDescription, start collecting ICE candidates (ASYNC)`

  - Signaling server has been waiting...

- TODO: Next lesson... `19. CLIENT2 emits answer (RTCSessionDesc - sdp/type) up to signaling server`

### 31. Error handling the signaling process - (8min)

- this lessons discusses events around RTCPeerConnection
- properties that are helpful:

  - `connectionState`
  - `iceConnectionState`
  - `iceGatheringState`

  ### 'signalingState' (READONLY)

  - returns string value describing the state of signaling process on `local end` of connection while connecting to another peer
  - possible values:

    - `stable`
      -> means no ongoing exchange of offer and answer underway (RTCPeerConnection object is `new`)

      - localDescription - null
      - remoteDescription - null
        -> can also mean negotiation is `complete` and connection has been established

    - `have-local-offer` - CLIENT1
      -> local peer called `setLocalDescription()` passing in SDP representing an offer (its own offer) (by calling `RTCPeerConnection.createOffer()`)

    - `have-remote-offer` - CLIENT2
      -> same things happening as in `have-local-offer` except its in CLIENT2

    - `have-local-pranswer` - CLIENT2
      -> `offer` sent by remote peer has been applied and an answer has been created (by calling `RTCPeerConnection.createAnswer()`)
      -> difference between this and 'stable' is that if you have the `answer` AND `offer`, and applied both (CLIENT2) but dont have a connection yet because ICE hasnt finished

    - `have-remote-pranswer` - CLIENT1
      -> same things happening as `have-local-pranswer` but for CLIENT1
      -> have everything but not connected yet...

    #### TESTING

    ```js
    //scripts.js

    const answerOffer = async (offerObj) => {
      //...
      console.log(peerConnection.signalingState); //should be have-local-pranswer because CLIENT2 has set its local desc to it's answer (but it won't be (NOT WORKING CHROME))

    }

    const createPeerConnection = ()=>{
      //...

      if(offerObj){
        console.log(peerConnection.signalingState); //should be 'stable' because no setDesc has been run yet
        await peerConnection.setRemoteDescription(offerObj.offer);
        console.log(peerConnection.signalingState); //should be 'have-remote-offer', because client2 has setRemoteDesc on the offer
      }
    }
    ```

  ### 'signalingstatechange'

  - notify that its signaling state 'signalingState' has changed
  - does same as above 'console.logs'
  - TODO: remove `console.logs` for peerConnection.signalingState
  - add this before `icecandidate` listener

  ```js
  //scripts.js
  //...
  peerConnection.addEventListener("signalingstatechange", (event) => {
    console.log(event);
    console.log(peerConnection.signalingState);
  });
  ```

### 32. Emitting answer - (7min)

TODO:

- `19. CLIENT2 emits answer (RTCSessionDesc - sdp/type) up to signaling server`
  -emit entire offerObj (includes offer,answer... etc)

```js
//scripts.js

//...
//19.
//add answer to offerObj so the server knows which offer this is related to
offerObj.answer = answer;
//emit the answer to the signaling server, so it can emit to CLIENT1
socket.emit("newAnswer", offerObj);
```

```js
//server.js

socket.on("newAnswer", (offerObj) => {
  console.log(offerObj);
  //emit this answer (offerObj)
  //NOTE: the answer is what the other side needs...

  //find the socket by userName -> to get socketId
  const socketToAnswer = connectedSockets.find(
    (s) => s.userName === offerObj.offererUserName
  );

  if (!socketToAnswer) {
    return;
  }

  //we found the matching socket, get socketId -> so we can emit to it!
  const socketIdToAnswer = socketToAnswer.socketId;
});
```

- now when we log OfferObj, it includes the answer

- `~20. CLIENT2 will listen for tracks/ICE from remote`
  - and is done.
  - waiting on ICE candidates
  - waiting on tracks
- `21. signaling server listens for answer, emits CLIENT1 answer (RTCSessionDesc - sdp/type)`
- `22. CLIENT1 takes the answer and hands it to (peerConnection) pc.'setRemoteDesc'`
- `~23. CLIENT1 waits for ICE candidates and tracks`

21 & 23 are waiting for ICE. Once ICE is exchanged, tracks will exchange

### 33. Listening for answer and setRemoteDescription(answer) - (6min)

- we previously found the `socketId`,
- now we need to find `offerToUpdate` so we can emit it
- add the updated prop values of `offerToUpdate`

```js
//server.js
socket.on("newAnswer", (offerObj) => {
  //...
  //we found the matching socket, get socketId -> so we can emit to it!
  const socketIdToAnswer = socketToAnswer.socketId;

  //we find the offer to update (from server 'offers') so we can emit it
  const offerToUpdate = offers.find(
    (o) => o.offererUserName === offerObj.offerUserName
  );
  if (!offerToUpdate) {
    console.log("no offerToUpdate");
    return;
  }

  //fill missing properties with updated values
  offerToUpdate.answer = offerObj.answer;
  offerToUpdate.answerUserName = userName;

  //socket has a .to() which allows emiting to a "room"
  //every socket has its own room (emit to self (private room))
  socket.to(socketIdToAnswer).emit("answerResponse", offerToUpdate);
});
```

- socketListeners listens for `answerResponse`
- it should abe an updated `offer` object except the ice candidates

```js
//socketListeners.js
socket.on("answerResponse", (offerObj) => {
  console.log(offerObj);
  addAnswer(offerObj); //scripts.js
});
```

- socketListeners.js -> results from listening to `answerResponse`

<img
src='exercise_files/section03-33-listen-for-remote-response.png'
alt='section03-33-listen-for-remote-response.png'
width=600
/>

- `addAnswer` is called in socketListeners when an answerResponse is emitted.
- at this point, the offer and answer have been exchanged!
- now CLIENT1 needs to set the remoteDescription

```js
//scripts.js
const addAnswer = async (offerObj) => {
  //addAnswer is called in socketListeners when an answerResponse is emitted.
  //at this point, the offer and answer have been exchanged!
  //now CLIENT1 needs to set the remote
  await peerConnection.setRemoteDescription(offerObj.answer);
  console.log(peerConnection.signalingState);
};
```

### 34. Apply ICE candidates - Part 1 - (8min)

- [`addIceCandidate();`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addIceCandidate)
- When a website or app (on the local side) using RTCPeerConnection receives a `new ICE candidate` from the remote peer over its signaling channel (ie. socket.io server sent ICE candidate to other side (local side))
- it delivers the newly-received candidate to the browser's ICE agent by calling `RTCPeerConnection.addIceCandidate()`
- This adds this `new remote candidate` to the `RTCPeerConnection's remote description`
- the ice candidate part only starts after we've set `localDescription` on both sides
- client 1 will have collected some ice candidates by time set `localDescription` is called
- scripts.js -> use sockets' `emitWithAck`

```js
//scripts.js

const answerOffer = async (offerObj) => {
  //...
  //emit the answer to the signaling server, so it can emit to CLIENT1
  socket.emit("newAnswer", offerObj);
  //expect a response from the server with the already existing ICE candidates
  const offerIceCandidates = await socket.emitWithAck("newAnswer", offerObj);
  console.log(offerIceCandidates);
};

const createPeerConnection = (offerObj) => {
  //...
  peerConnection.addEventListener("icecandidate", (e) => {
    //...
  });
};
```

### server.js

- so on server (server.js) - `socket.on('sendIceCandidateToSignalingServer', iceCandidateObj=>{})`
  - when ice candidate comes in: for OFFER -> we push it on offerIceCandidates[]
- server has access to ackFunction() when called (scripts.js) with `emitWithAck` (socketio v4):
  - `socket.on('newAnswer', offerObj=> {});` becomes `socket.on('newAnswer', (offerObj, ackFunction) => {});`
- once knowing the offer to update, if it has ice candidates, send it back `ackFunction(offerToUpdate.offerIceCandidates)`
- 1. when the answerer answers, all existing ice candidates are sent
- 2. any candidates that come in after the offer has been answered, will be passed through

```js
//server.js

socket.on('newAnswer', (offerObj, ackFunction) => {
  //...
  const offerToUpdate = offers.find()...
  if(!offerToUpdate){
    //...
  }

  //send back to the answerer all the ice candidates we have already collected
  ackFunction(offerToUpdate.offerIceCandidates);

  //update property values
  offerToUpdate.answer = offerObj.answer;
  offerToUpdate.answerUserName = userName;

  //socket has a .to() which allows emiting to a "room"
  //every socket has its own room
  socket.to(socketIdToAnswer).emit('answerResponse', offerToUpdate);
});

socket.on('sendIceCandidateToSignalingServer', iceCandidateObject => {
  const {didIOffer, iceUserName, iceCandidate} = iceCandidateObject;
  console.log(`iceCandidate: `, iceCandidate);
  if(didIOffer){
    const offerInOffers = offers.find(offer=> offer.offererUserName === iceUserName)
    if(offerInOffers){
      //this ICE is coming from offerer, send to the answerer
      offerInOffers.offererIceCandidates.push(iceCandidate)
      //if the answerer is already here (connected), emit the iceCandidate to that user
      //1. when the answerer answers, all existing ice candidates are sent
      //2. any candidates that come in after the offer has been answered, will be passed through
      if(offerInOffers.answererUserName){
        //pass it through to the other socket
      }
    }
    else{
      //this ICE is coming from answerer, send to the offerer
      //pass it through to the other socket
    }
  }

  console.log(offers);
});

```

### Troubleshoot

- DO YOU KNOW WHAT MAKES THIS LESS CONFUSING!!!!
- it would make things less confusing if you used better variable names.
  - eg. offerer??? the offer data object
  - you called it 'offerer' but answer was `answer` not `answerer` and for consistency, it should just be `offer...` and `answer...`

```js
//currently..
// {
//   offererUserName: userName,
//   offer: newOffer,
//   offererIceCandidates:[],
//   answererUserName:null,
//   answer:null,
//   answererIceCandidates:[]
// }

//this makes more sense...and needs to be updated.. (TODO)
{
  offerUserName: userName,
  offer: newOffer,
  offerIceCandidates:[],
  answerUserName:null,
  answer:null,
  answerIceCandidates:[]
}
```

### 35. Apply ICE candidates - Part 2 - (5min)

### PART 2

- STATUS: both clients are here..and the offer has been accepted
- server.js -> on receiving a new ice candidate `sendIceCandidateToSignalingServer`, pass it through (2 use cases)
  - case1 -> if its coming from offerer
  - case2 -> if its coming from the answerer
- socketListeners.js listening for `receivedIceCandidateFromServer`
- scripts.js

```js
//scripts.js
const addNewIceCandidate = (iceCandidate) => {
  peerConnection.addIceCandidate(iceCandidate);
  console.log("===== added ice candidate ====");
};
```

### 36. Add tracks from remote peer - MAGIC!! - (6min)

- scripts.js -> `createPeerConnection()`
- this we already did...`peerConnection.addTrack(track, localStream);`
- now we listen for `track` event handled by `ontrack()` event handler
- by time `track` event is delivered, the new track has been fully added to peer connection
- ie. track was added on local peer side of connection it would have been added to peer before gets delivered to remote side.

```js
//scripts.js
const createPeerConnection = (offerObj) =>{

  peerConnection = ...

  remoteStream = new MediaStream()
  remoteVideoEl.srcObject = remoteStream;

  localStream.getTracks().forEach(track=>{
    //add localTracks so they can be sent once the connection is established
    peerConnection.addTrack(track, localStream);
  });

  //...
  peerConnection.addEventListener('track', e=> {
    console.log('got a track from other peer');
    console.log(e);
    e.streams[0].getTracks().forEach(track=>{
      remoteStream.addTrack(track, remoteStream);
      console.log('heres an exciting moment....');
    });
  });
}
```

### 37. Loading on another device on the same network - (5min)

- requirments to test using eg. mobile device
- same network
- https
- switch localhost for ip address of local computer (ipconfig /all) -> IPv4 Address
- then in scripts, connection to this ip address instead of localhost
  - `const socket = io.connect('https://192.168.1.144:8181/', {}`
- now at this point localhost url wont work because dont have CORS policy that allows both ip and localhost

### troubleshoot mobile browser CORS issues

- server.js -> `const cors = require("cors");`
- cors middleware intercepts requests before they reach your static files or routes.
- If express.static() is placed first, CORS headers won't be applied to static file requests.
- Allow Connections on Express -> By default, Express binds only to localhost, meaning it's not accessible from other devices.

- Fix: Modify your server file to listen on all network interfaces:
  `app.listen(8181, "0.0.0.0", () => console.log("Server running on port 8181"));`

### troubleshoot fix - REQUIRED

- you certs are required when trying to access via local ip
- to create a certificate for a specific IP address (like 192.168.1.104), you need to specify the IP address in the command
- `mkcert create-cert 192.168.1.104`

### create a combined.crt that joins (cert.crt AND ca.crt)

- The correct order for `combined.crt` should be:
  - Server Certificate (cert.crt) (Your site’s certificate)
  - Intermediate Certificate(s) (if any)
  - Root CA Certificate (ca.crt) (The CA that signed your certificate)

STATUS UPDATE - FIX:

- not using ngrok
- using firefox on mobile (but seems to work on others as well)

### windows firewall allow inbound/outbound ports

- played around with windows firewall (inbound and outbound)
  - allowed port 8181

THIS PART SEEMS TO FIX IT (BUT IT DEVIATES FROM THE COURSE)

FIX:

- install certificate (android):Open Settings → Security → Encryption & credentials
- Tap "Install a certificate"
- Choose CA certificate (Certificate Authority)
- Select the combined.crt file
- The correct order for combined.crt should be:
    - Server Certificate (cert.crt) (Your site’s certificate)
    - Root CA Certificate (ca.crt) (The CA that signed your certificate)

- OLD (the course uses just cert.crt) -> server.js: `const cert = fs.readFileSync('cert.crt');`
- FIX UPDATE -> server.js: `const cert = fs.readFileSync('combined.crt');`

- scripts.js

```js
//scripts.js
const socket = io.connect('https://192.168.1.104:8181/, {
  auth: {
    userName,
    password
  }
});
```

- browser test url:https://192.168.1.104:8181/

### troubleshoot fix - NOT IMPLEMENTED

- Instead of messing with DNS, you can use ngrok to expose your local server to the internet temporarily. This will allow Let’s Encrypt to verify the domain and issue a valid certificate.
- instead of trying to install certs etc..
- to use ngrok, you need an auth token:
  - https://dashboard.ngrok.com/signup
  - https://dashboard.ngrok.com/get-started/setup/windows -> ngrok-v3-stable-windows-amd64.zip -> 15mb file that extracts to `ngrok.exe`
  - put in `c:\Program Files\ngrok\` add this to path.
  - https://dashboard.ngrok.com/get-started/your-authtoken
    - `ngrok config add-authtoken <token code>`
- scripts.js -> tries to access https://localhost:8181
- `npm install -g ngrok`
- Run ngrok to expose your local server: `ngrok http https://ip-address:8181`
- ngrok will provide you a publicly accessible HTTPS URL, like:

---

---

---

---

---

---

---

---

---

---

## Section 04 - WebRTC Process review - review it

### 38. The Process (on the board) - (24min)

- NOTE: very important lessons and should be watched before section3

### 39. Code Review - (50min)

- NOTE: very important lessons and should be watched before section3
- references [tasklist](./src/signallingPeerConnection/taskList.txt)

- this lesson (code review) is also really beneficial
- it feels more helpful if the whole section 4 should have come before section3
- this overview explains a lot of concepts and would be beneficial if watched before section3 as a high level overview.
- Learners should watch this...and come back to it and watch it until the learner undestands the flow of webRTC, and i feel it is crucial that this happens before a deep dive covered in section3: rtcPeerConnection

---

---

---

---

---

---

---

---

---

---

# Client 1 portion of code

## Section 05 - webRTC and React - TeleLegal site

### 40. Project Demo - (6min)

<img
src='exercise_files/section05-webrtc+react-40-project-demo.png'
alt='section05-webrtc+react-40-project-demo.png'
width=600
/>

### tech stack

- signal server/socket.io
- react (Create React App) / redux
- webrtc

### todo

- a join video link is sent for meeting request
- join a teleLegal chat
- call -> shows feed
- hangup -> terminates feed

### 41. Project Structure and Front-end Setup - (6min)

## Backend

- `teleLegalSite/teleLegal-back-end/`
  - `npm init -y`
  - `pnpm i socket.io express`

### folder structure

- `index.js`
  - imports `server.js`
  - imports `socketServer.js`
- `expressRoutes.js`
  - imports `server.js`
- `server.js`
- `socketServer.js`
- `certs/`
  - create the certs: `mkcert create-ca`
  - create the certs: `mkcert create-cert <ip>`

## Frontend

- `teleLegalSite/telelegal-front-end/`
  - `npx create-react-app .`
  - `certs/`
    - create the certs: `mkcert create-ca`
    - create the certs: `mkcert create-cert <ip>`
  - package.json:

### https/ssl support

- install cross-env (cross OS compatibility)
- `pnpm install cross-env --save-dev`
- `cross-env` ensures compatibility across Windows, macOS, and Linux.

  - `cross-env HTTPS=true SSL_CRT_FILE=./certs/cert.crt SSL_KEY_FILE=./certs/cert.key react-scripts start`

  ```json
  "scripts": {
    "start": "cross-env HTTPS=true SSL_CRT_FILE=./certs/cert.crt SSL_KEY_FILE=./certs/cert.key react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ```

### run

- `pnpm run start`

#### troubleshoot - 'HTTPS' is not recognized as an internal or external command,

- NOTE: this is if you are not using `cross-env`
- The command is now slightly different for windows! Scripts needs to use "set" in order to run. Use this for "start":
- or windows (only):
  - cmd: `set HTTPS=true && set SSL_CRT_FILE=./certs/cert.crt && set SSL_KEY_FILE=./certs/cert.key && react-scripts start`
  - powershell: `$env:HTTPS="true"; $env:SSL_CRT_FILE="./certs/cert.crt"; $env:SSL_KEY_FILE="./certs/cert.key"; npm start`
- linux (only): No need for set or &&. The variables are set for that command only.
  - `HTTPS=true SSL_CRT_FILE=./certs/cert.crt SSL_KEY_FILE=./certs/cert.key react-scripts start`

### 42. Chrome and localhost certs - (1min)

- Chrome has started enforcing certificate validation against other domains.
- When you run React on a separate port, it may give you an error that your express server has an invalid certificate. To get around that, you'll have to update your flags in Chrome. This link will get you there, just set it on, and if needed, turn it off when you aren't working.
- `chrome://flags/#allow-insecure-localhost`
- NOTE: with updated chrome, this option doesnt exist

### 43. Back-end Setup - (8min)

## Backend

- `mkcert create-ca`
- `mkcert create-cert`
- move certificates and private keys to certs/

- back-end-telelegal/server.js

```js
//back-end-telelegal/server.js
//this is where we create the express and socket.io server

const fs = require("fs"); //the file system
const https = require("https");
const express = require("express");
const socketio = require("socket.io");

const app = express();
app.use(express.static(__dirname + "/public")); //anything in public will be served up locally

const key = fs.readFileSync("./certs/cert.key");
const cert = fs.readFileSync("./certs/cert.crt");

const expressServer = https.createServer({ key, cert }, app);
const io = socketio(expressServer, {
  cors: [
    "https://localhost:3000",
    "https://localhost:3001",
    "https://localhost:3002",
  ],
});

expressServer.listen(9000);
module.exports = { io, expressServer, app };
```

- back-end-telelegal/expressRoutes.js

```js
//back-end-telelegal/expressRoutes.js
//all our express stuff happens (routes)

const io = require("./server").io;

io.on("connection", (socket) => {
  console.log(socket.id, "has connected");
});
```

- back-end-telelegal/socketServer.js

```js
//back-end-telelegal/socketServer.js
//all our socketServer stuff happens here
const app = require("./server").app;

app.get("/test", (req, res) => {
  res.json("this is a test route");
});
```

- back-end-telelegal/index.js

```js
//back-end-telelegal/index.js
//this is our entry point run nodemon here..
require("./socketServer");
require("./expressRoutes");
```

- back-end-telelegal/package.json

```json
// package.json
//...
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```

## frontend

- `pnpm i socket.io-client`

```js
//front-end-telelegal/src/utilities/socketConnection.js
import { io } from "socket.io-client";
io.connect("https://localhost:9000");
```

- this code will run when imported...

```js
//front-end-telelegal/src/App.js
import socketConnection from "./utilities/socketConnection";
```

## backend

- serverside: cmd -> console output -> `PlexYjPEoA3oU_rwAAAB has connected`

### 44. Creating a JWT & link to simulate scheduling - (11min)

<img
src='exercise_files/section05-webrtc+react-44-creating-jwt-and-join-link-simulate-scheduling.png'
alt='section05-webrtc+react-44-creating-jwt-and-join-link-simulate-scheduling.png'
width=600
/>

- creating the link that user opens up the react app
  - the point is the client shouldnt have to make an account...

```js
//back-end-telelegal/expressRoutes.js

//this route is for us to test..
//we will just add a link which takes us to react site (already with the right info for CLIENT1 to make an offer)
//in production -> a receptionist / calender/scheduling app would send this out
app.get("/user-link", (req, res) => {
  //data for the end-user's appointment
  const appData = {
    professionalsFullName: "Robert Bunch, M.D", //name of person user wants to speak to
    apptDate: Date.now(),
  };

  //TODO: encode data in token

  res.json("this is a test route");
});
```

- encoding the data

<img
src='exercise_files/section05-webrtc+react-44-creating-jwt-encoding.png'
alt='section05-webrtc+react-44-creating-jwt-encoding.png'
width=600
/>

- `pnpm i jsonwebtoken`

### usage - sign (create token)

- `jwt.sign(payload, secret, [options, callback])`
- `secret` encodes our data
- returns a link: `res.send('https://localhost:3000/join-video?token='+token);`

### verifying token

- the token is the full encoded jwt
- it is returned from visiting `https://localhost:3000/user-link`
- `jwt.verify(token, secret, function(err, decoded){})`
- synchronous way: `const decoded = jwt.verify(token, secret)`
  - decoded is the payload data...

```js
//back-end-telelegal/expressRoutes.js
const jwt = require("jsonwebtoken");
const linkSecret = "dfvcv4asodihs97s9fsd";

app.get("/user-link", (req, res) => {
  //data for the end-user's appointment
  const appData = {
    professionalsFullName: "Robert Bunch, M.D", //name of person user wants to speak to
    apptDate: Date.now(),
  };
  //TODO: encode data in token
  const token = jwt.sign(appData, linkSecret);
  //sent to wherever react is running..
  res.send("https://localhost:3000/join-video?token=" + token);
});

app.get("/validate-link", (req, res) => {
  const token = req.query.token;
  const decodedData = jwt.verify(token, linkSecret);
  res.json(decodedData);
});
```

### test

- frontend

### get token

- server is listening port 9000

- required: get the token first from `/user-link`
- `https://localhost:9000/user-link`

### validate token

- test by validating:
  - enter token from `user-link/`

```
https://localhost:9000/validate-link?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9mZXNzaW9uYWxzRnVsbE5hbWUiOiJSb2JlcnQgQnVuY2gsIE0uRCIsImFwcHREYXRlIjoxNzM4ODMzNjYyNjk3LCJpYXQiOjE3Mzg4MzM2NjJ9.8rEPsFhaRO9sz_SRInDmMSC7JvMNgWrqYlnnx_t6DOA
```

- output -> `{"professionalsFullName":"Robert Bunch, M.D","apptDate":1738833662697,"iat":1738833662}`

### 45. Add React-Router for our front-end - (5min)

- frontend/ cleanup (CRA)
- frontend/
- todo: install: `pnpm i react-router-dom`

```js
//front-end-telelegal/src/videoComponents/mainVideoPage.js
const MainVideoPage = () => {
  return <h1>Main video Page</h1>;
};

export default MainVideoPage;
```

- NOTE: React Router v7 -> uses `<Route Component={}/>` and you can pass in just the name, doesnt need jsx element

```js
//front-end-telelegal/src/App.js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import socketConnection from "./utilities/socketConnection";
import MainVideoPage from "./videoComponents/MainVideoPage";
import "./App.css";

const Home = () => <h1>Home page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/join-video" Component={MainVideoPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### testing

- start up backend/ `pnpm run start`
- start up frontend/ `pnpm run start`

### 46. Setup Join-Video route and get the decoded data in React - (8min)

- NOTE: watch starting at 6min18sec for quick runthrough of code

- TODO: visit backend route to get token link (https://localhost:9000/user-link)
- gives something like -> https://localhost:3000/join-video?token=abc

  - this opens up on frontend onto MainVideoPage (`front-end-telelegal/src/videoComponents/MainVideoPage.js`)
  - and what it immediately tries to do is get the token and call BACKEND's link `https://localhost:9000/validate-link`
  - BACKEND: `/validate-link` gets token from request body

- TODO: get token from main video page
- TODO: send this up to server to get decoded
- `import {useSearchParams} from 'react-router-dom';` (use to get the query string)
- we can use `useSearchParams` and grab the token var out of the query string
- `const [searchParams, setSearchParams] = useSearchParams();`

```js
const token = searchParams.get("token"); //grab the token var out of the query string
```

- install `pnpm i axios`
- install cors `pnpm i cors`

### click on join-video link...

- sends token to server (server path `/join-video`)
- token gets decoded
- sent back to client
- update MainVideoPage

### expressRoutes

- change req.query to req.body
- backend:
  - `server.js`
    -> `app.use(cors());`
    - allows app.post() on server...

### express.json()

    -> `app.use(express.json());`

- app.use(express.json()) is middleware in Express that parses incoming requests with JSON payloads.
- It makes the parsed data available on `req.body`

```js
app.post("/example", (req, res) => {
  console.log(req.body); // The parsed JSON object from the request body
  res.send("Data received");
});
```

### get token

- with this change visit and get the link: `https://localhost:9000/user-link`...

- visit link with token: `https://localhost:3000/join-video?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9mZXNzaW9uYWxzRnVsbE5hbWUiOiJSb2JlcnQgQnVuY2gsIE0uRCIsImFwcHREYXRlIjoxNzM4OTg4MjcyMjYyLCJpYXQiOjE3Mzg5ODgyNzJ9.kf1weNxkMkc8ouoqGlUeG55TzI4UQ7Ey0LV0PXlwUVc`

- it opens `src/videoComponents/MainVideoPage`

  - which calls server `https://localhost:9000/validate-link` and passes the token (with the body of request)

- on sever: handled by `expressRoutes.js`

  - decode and read token

- get the token from body of post request (express.json())
- NOTE: we changed this from `req.query.token` (anyone using url could see token)

```js
//expressRoutes.js

app.post("/validate-link", (req, res) => {
  //get the token from body of post request (express.json())
  const token = req.body.token; //was req.query.token;

  //decode jwt with secret
  const decodedData = jwt.verify(token, linkSecret);

  //send the decoded data (token object) back to the frontend
  res.json(decodedData);
});
```

- you should be able to read the token data

<img
src='exercise_files/section05-webrtc+react-46-join-video-reading-data-from-token.png'
alt='section05-webrtc+react-46-join-video-reading-data-from-token.png'
width=600
/>

```js
//front-end-telegal/src/videoComponents/MainVideoPage.js
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const MainVideoPage = () => {
  //query string finder
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    //grab the token out of the query string
    const token = searchParams.get("token");

    console.log(token);
    const fetchDecodedToken = async () => {
      const resp = await axios.post("https://localhost:9000/validate-link", {
        token,
      });
    };
    fetchDecodedToken();
  }, []);

  return <h1>Main video Page</h1>;
};

export default MainVideoPage;
```

### server.js

- import cors
- enable express.json() -> ALLOWS parsing json in the body with body parser
  - which enables us to use it in expressRoutes.js
- can access post() because of Cors

```js
//expressRoutes.js
app.post("/validate-link", (req, res) => {
  //get the token from body of post request (possible with express.json())
  const token = req.body.token; //was req.query.token;
  const decodedData = jwt.verify(token, linkSecret);

  //send the decoded data (our object) back to the frontend
  res.json(decodedData);
});
```

```js
//backend/server.js
const cors = require("cors");

const app = express();
app.use(cors()); //this opens up api to ANY domain

app.use(express.static(__dirname + "/public"));
app.use(express.json()); //ALLOWS parsing json in the body with body parser
```

### 47. Add starting components - (10min)

- outcomes:

<img
src='exercise_files/section05-webrtc+react-47-add-starting-components-outcome.png'
alt='section05-webrtc+react-47-add-starting-components-outcome.png'
width=600
/>

- get from exercise files:

- `telelegal-front-end/src`:

  - `/videoComponents/`
    - ActionButtons.js
    - CallInfo.js
    - HangupButton.js
    - VideoComponents.css
  - `/redux-elements/reducers/`
    - callStatusReducer.js
    - rootReducers.js
  - ## `/redux-elements/actions/`

- in `MainVideoPage.js/`:

  - import `VideoComponents.css`
  - import ChatWindow from './ChatWindow';
  - update className = "main-video-page"

- `CallInfo` will be a modal

  - uses `moment` package
    - `pnpm i moment`
    - `import moment from 'moment'`

- create `<ChatWindow/>` component

  - VideoComponents/ChatWindow.js

- note `/user-link` creates `apptDate: Date.now()` to make a date in future, add time in milliseconds
  - `const [momentText, setMomentText] = useState(moment(apptInfo.apptDate).fromNow());`

```js
//MainVideoPage.js

//...
return (
  <div className="main-video-page">
    <div className="video-chat-wrapper">
      {/* div to hold remote video AND local video, AND chat window */}
      <video id="large-feed" autoPlay controls playsInline></video>
      <video id="own-feed" autoPlay controls playsInline></video>
      {apptInfo.professionalsFullName ? (
        <CallInfo apptInfo={apptInfo} />
      ) : (
        <></>
      )}
      <ChatWindow />
    </div>
  </div>
);
```

### CallInfo

- it needs to import `moment`
- we call moment, give it unix timestamp (aaptInfo.apptDate).fromNow()

```js
//VideoComponents/CallInfo.js
import moment from "moment";
import { useEffect, useState } from "react";

const CallInfo = ({ apptInfo }) => {
  const [momentText, setMomentText] = useState(
    moment(apptInfo.apptDate).fromNow()
  );

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setMomentText(moment(apptInfo.apptDate).fromNow());
      // console.log("Updating time")
    }, 5000);
    //clean up function
    return () => {
      // console.log("Clearing")
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="call-info">
      <h1>
        {apptInfo.professionalsFullName} has been notified.
        <br />
        Your appointment is {momentText}.
      </h1>
    </div>
  );
};

export default CallInfo;
```

```js
//VideoComponents/ChatWindow.js
const ChatWindow = () => {
  return (
    <div className={`chat-window`}>
      <h1>Chat</h1>
    </div>
  );
};
export default ChatWindow;
```

### testing

### get token

- with this change visit and get the link: `https://localhost:9000/user-link`...

- visit link with token: `https://localhost:3000/join-video?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9mZXNzaW9uYWxzRnVsbE5hbWUiOiJSb2JlcnQgQnVuY2gsIE0uRCIsImFwcHREYXRlIjoxNzM4OTg4MjcyMjYyLCJpYXQiOjE3Mzg5ODgyNzJ9.kf1weNxkMkc8ouoqGlUeG55TzI4UQ7Ey0LV0PXlwUVc`

- it opens `src/videoComponents/MainVideoPage`

  - which calls server `https://localhost:9000/validate-link` and passes the token (with the body of request)

- on sever: handled by `expressRoutes.js`

  - decode and read token

- get the token from body of post request (express.json())
- NOTE: we changed this from `req.query.token` (anyone using url could see token)

### 48. Wire up redux and make callStatus reducer - (8min)

- TODO: wire up redux -> `/redux-elements/reducers/`

#### callStatusReducer

```js
//callStatusReducer.js

const initState = {
  current: "idle", //negotiating, progress, complete
  video: "off", //video feed status: "off" "enabled" "disabled" "complete"
  audio: "off", //audio feed status: "off" "enabled" "disabled" "complete"
  audioDevice: "default", //enumerate devices, chosen audio input device (we dont care about the output device)
  videoDevice: "default",
  shareScreen: false, //is user sharing screen or not
  haveMedia: false, //is there a localStream, has getUserMedia been run

  haveCreatedOffer: false,
};

export default (state = initState, action) => {
  if (action.type === "UPDATE_CALL_STATUS") {
    const copyState = { ...state };
    copyState[action.payload.prop] = action.payload.value;
    return copyState;
  } else if (action.type === "LOGOUT_ACTION" || action.type === "NEW_VERSION") {
    return initState;
  } else {
    return state;
  }
};
```

### rootReducer

- combines all reducers

```js
//rootReducer.js
import { combineReducers } from "redux";
import callStatusReducer from "./callStatusReducer";

const rootReducer = combineReducers({
  callStatus: callStatusReducer,
});

export default rootReducer;
```

#### index

- import rootReducer
- create the store (`const theStore = createStore(rootReducer)`) using the `rootReducer`
- in index.js, `import {Provider} from 'react-redux'`
- wrap `<Provider store={theStore}><App/></Provider>` around `<App>`

```js
//index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux"; //get createStore method so we can make a redux store
import { Provider } from "react-redux"; //get provider component to wrap around our whole app

import rootReducer from "./redux-elements/reducers/rootReducer";
const theStore = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={theStore}>
    <App />
  </Provider>
);
```

- `/redux-elements/actions/`

### 49. Add action buttons, bootstrap, and fontawesome - (7min)

- ActionButton component allows us to interact with webRTC (join audio, join video, mute, choose devices etc)

- frontend

  - MainVideoPage
    - `ActionButtons.js` (`front-end-telelegal/src/videoComponents/ActionButtons.js`)
      - `HangupButton.js`

- in MainVideoPage, add ActionButtons to the render
- ActionButton has `HangupButton.js`
- HangupBUtton uses an predefined action (for reduxs' use - called `updateCallStatus`)
- `updateCallStatus.js` add to `src/redux-elements/actions/updateCallStatus.js`

```js
//src/redux-elements/actions/updateCallStatus.js
- `UPDATE_CALL_STATUS` event receives prop and value
- returns the action object {type, payload}

export default(prop, value)=> {
  return {
    type: "UPDATE_CALL_STATUS",
    payload: {prop, value}
  }
}
```

- the callStatusReducer

```js
//src/redux-elements/reducers/callStatusReducer.js
const initState = {
  //...
};

export default (state = initState, action) => {
  if (action.type === "UPDATE_CALL_STATUS") {
    const copyState = { ...state };
    copyState[action.payload.prop] = action.payload.value;
    return copyState;
  }
  //...
};
```

### the trigger..

- clicking HangupButton causes redux action to trigger `updateCallStatus()`
- changes state from `idle` to `complete`
- and that causes the button to hide

```js
const hangupCall = () => {
  dispatch(updateCallStatus("current", "complete"));
  //...
};
```

### index

- add bootstrap css to index.html (public/)

```js
//index.html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
```

- add cdn font icons
- https://cdnjs.com/libraries/font-awesome

```js
//index.html
//...
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

### 50. getUserMedia() and store the stream in redux - (9min)

- request permission to allow camera and microphone
- figuring out the order of requesting to getUserMedia()
  - request for permission at start but dont show feed until user engages with `join audio` and `join video`
- REQUIRED: atleast one constraint is required, just dont show it yet
- TODO: create a reducer to store the stream: `streamsReducer.js`

```js
//front-end-telelegal/src/videoComponents/MainVideoPage.js
const MainVideoPage = () => {
  //...
  useEffect(() => {
    //fetch the user media
    const fetchMedia = async () => {
      const constraints = {
        video: true, //atleast one is required, just dont show it yet
        audio: false,
      };
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMedia();
  }, []);

  //..
};
```

- create streamsReducer

```js
//src/redux-elements/reducers/streamReducers.js

//this holds all streams as objects
//{
// who
// stream = thing with tracks that plays in <video />
// peerConnection = actual webRTC connection
// }
//eg. local, remote1, remote2+
export default (state = {}, action) => {
  if (action.type === "ADD_STREAM") {
    const copyState = { ...state };
    copyState[action.payload.who] = action.payload;
    return copyState;
  } else if (action.type === "LOGOUT_ACTION") {
    return {};
  } else {
    return state;
  }
};
```

- create an action for `ADD_STREAM`

```js
export default (who, stream, peerConnection) => {
  return {
    type: "ADD_STREAM",
    payload: {
      who,
      stream,
      peerConnection, // for local, undefined
    },
  };
};
```

- add streamsReducer to rootReducer

```js
//src/redux-elements/reducers/rootReducer.js

import { combineReducers } from "redux";
import callStatusReducer from "./callStatusReducer";
import streamsReducer from "./streamsReducer";

const rootReducer = combineReducers({
  callStatus: callStatusReducer,
  streams: streamsReducer,
});

export default rootReducer;
```

- todo: import `addStream` action to MainVideoPage.js

```js
//MainVideoPage.js
//...

import addStream from "../redux-elements/actions/addStream";
import { useDispatch } from "react-redux";

const MainVideoPage = () => {
  //...
  const dispatch = useDispatch();

  //...
  useEffect(() => {
    const fetchMedia = async () => {
      //...
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        //dispatch sends this function to redux dispatch (all reducers notified)
        dispatch(addStream("localStream", stream));
      } catch (err) {}
    };

    fetchMedia();
  }, []);
};
```

### 51. Create peerConnection and store it in redux - (7min)

- add to streams reducer an additional property: `peerConnection`
- NOTE: `stream` = thing with tracks that plays in `<video />`
- NOTE: `peerConnection` = actual webRTC connection
- for local, it is undefined
- addStream() receives `who`, `stream` and `peerConnection`

```js
//addStream.js
export default (who, stream, peerConnection) => {
  return {
    type: "ADD_STREAM",
    payload: {
      who,
      stream,
      peerConnection, // for local, undefined
    },
  };
};
```

- `utilities/stunServers.js`

```js
//utilities/stunServers.js
let peerConfiguration = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
    },
  ],
};
export default peerConfiguration;
```

- `utilities/createPeerConnection.js`
- import stunServers (the stun servers (peerConfiguration))

```js
//utilities/createPeerConnection.js
import peerConfiguration from "./stunServers";

const createPeerConnection = (addIce) => {
  return new Promise(async (resolve, reject) => {
    const peerConnection = await new RTCPeerConnection(peerConfiguration);
    //rtcPeerConnection is the connection to the peer.
    //we may need more than one this time!!
    //we pass it the config object, which is just stun servers
    //it will get us ICE candidates
    const remoteStream = new MediaStream();
    peerConnection.addEventListener("signalingstatechange", (e) => {
      console.log("Signaling State Change");
      console.log(e);
    });
    peerConnection.addEventListener("icecandidate", (e) => {
      console.log("Found ice candidate...");
      if (e.candidate) {
        //emit to socket server
        // addIce(e.candidate);
      }
    });
    // peerConnection.addEventListener("track", (e) => {
    //   console.log("Got a track from the remote!");
    //   e.streams[0].getTracks().forEach((track) => {
    //     remoteStream.addTrack(track, remoteStream);
    //     console.log("Fingers crossed...");
    //   });
    // });

    resolve({
      peerConnection,
      remoteStream,
    });
  });
};

export default createPeerConnection;
```

- then in MainVideoPage.js
- create the peer connection: `const {peerConnection, remoteStream} = createPeerConnection();`
- gets `peerConnection` and `remoteStream` back
- make a dispatch `dispatch(addStream('remote1', remoteStream, peerConnection));`
- we dont know who we are talking to yet...
  - we will change this `remote1` value
- now we have a peerConnection, lets make an offer
- EXCEPT, its not time yet because
  - we dont have `SDP` -> information about the feed and we dont have tracks.
- then call `socket.emit`...

```js
// front-end-telelegal/src/videoComponents/MainVideoPage.js
//...
useEffect(() => {
  //fetch the user media
  const fetchMedia = async () => {
    const constraints = {
      video: true, //atleast one is required, just dont show it yet
      audio: false,
    };
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      dispatch(addStream("localStream", stream));

      const { peerConnection, remoteStream } = createPeerConnection();

      //we dont know who we are talking to yet...
      //we will change this `remote1` value
      dispatch(addStream("remote1", remoteStream, peerConnection));

      // - now we have a peerConnection, lets make an offer
      // - EXCEPT, its not time yet because
      //   - we dont have `SDP` -> information about the feed and we dont have tracks.
      // - then call `socket.emit`...
    } catch (err) {
      console.log(err);
    }
  };
  fetchMedia();
}, []);
```

### 52. Thinking through where our functions belong (& a few bug fixes) - (6min)

- fixing some code we did...
- ERROR: `reducer streams for streams is returning undefined`
- FIX: frontend /src/redux-elements/reducers/streamsReducer -> state has to have an initial value (give it empty object {})
  - `export default (state = {}, action)=>{}`

<img
src='exercise_files/section05-webrtc+react-52-reducer-bug-fix.png'
alt='section05-webrtc+react-52-reducer-bug-fix.png'
width=600
/>

- videoComponents/CallInfo.js
- FIX: remove the console.log -> too many logs added to console

```js
//frontend src/videoComponents/CallInfo.js
useEffect(() => {
  const timeInterval = setInterval(() => {
    setMomentText(moment(apptInfo.apptDate).fromNow());
    // console.log("Updating time")
  }, 5000);
}, []);
```

- MainVideoPage.js and ActionButtons.js
- import `socket` from `socketConnection` so we can use it...

```js
//src/videoComponents/MainVideoPage.js
import socket from "../utilities/socketConnection";

//...
useEffect(() => {
  //fetch the user media
  const fetchMedia = async () => {
    // - then call `socket.emit`...
  };
  fetchMedia();
});
```

- socketConnection we need to export it
- utilities/socketConnection.js

```js
//frontend src/utilities/socketConnection.js
import { io } from "socket.io-client";
const socket = io.connect("https://localhost:9000");
export default socket;
```

- update `utilities/` folder to `webRTCutilities/`

### 53. Abstracting the Video and Audio buttons - (8min)

#### running the app

1. start up backend
2. start up frontend
3. visit https://localhost:9000/user-link
4. copy the generated url: https://localhost:3000/join-video?token=
5. visit url

#### MainVideoPage

- NOTE: `redux-elements/reducers/callStatusReducer`
  - has a state `haveMedia` (default `false`)
  - we want to update this after getUserMedia() called
  - `import updateCallStatus from '../redux-elements/actions/updateCallStatus.js';`
  - `updateCallStatus()` receives `prop` and `value` set `haveMedia` to true

```js
import updateCallStatus from '../redux-elements/actions/updateCallStatus.js';

fetchMedia(){
  //...
  //here we create the stream with requests getUserMedia
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  dispatch(updateCallStatus(`haveMedia`, true)) //update call status reducer to know we have the media

  //...
}
```

#### useRef for DOM elements

- this part deals with adding/giving references (react ref) to feed windows elements (small and large)

```js
import {useRef} from 'react';

//...

const smallFeedEl = useRef(null); //react ref to DOM element
const largeFeedEl = useRef(null);

//...

return (
  <video
    id="large-feed" ref={largeFeedEl}
    //...
  />
  <video
    id="own-feed" ref={smallFeedEl}
    //...
  />

  <ActionButtons/>
)

```

### ActionButtons

#### VideoButton

- cut `VideoButton` from action buttons
- `videoComponents/VideoButton/VideoButton.js`
- NOTE: this file has already been created/added
- in `<ActionButtons/>` use `<VideoButton/>`

```js
//frontend -> /src/videoComponents/VideoButton/VideoButton.js
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import startLocalVideoStream from "./startLocalVideoStream";
import updateCallStatus from "../../redux-elements/actions/updateCallStatus";
import getDevices from "./getDevices";
import addStream from "../../redux-elements/actions/addStream";
import ActionButtonCaretDropDown from "../ActionButtonCaretDropDown";

const VideoButton = ({ smallFeedEl }) => {
  const dispatch = useDispatch();
  const callStatus = useSelector((state) => state.callStatus);

  const streams = useSelector((state) => state.streams);
  const [pendingUpdate, setPendingUpdate] = useState(false);
  const [caretOpen, setCaretOpen] = useState(false);
  const [videoDeviceList, setVideoDeviceList] = useState([]);

  const DropDown = () => {};

  useEffect(() => {
    const getDevicesAsync = async () => {
      if (caretOpen) {
        //then we need to check for video devices
        const devices = await getDevices();
        console.log(devices.videoDevices);
        setVideoDeviceList(devices.videoDevices);
      }
    };
    getDevicesAsync();
  }, [caretOpen]);

  const changeVideoDevice = async (e) => {
    //the user changed the desired video device
    //1. we need to get that deviceId
    const deviceId = e.target.value;
    // console.log(deviceId)
    //2. we need to getUserMedia (permission)
    const newConstraints = {
      audio:
        callStatus.audioDevice === "default"
          ? true
          : { deviceId: { exact: callStatus.audioDevice } },
      video: { deviceId: { exact: deviceId } },
    };
    const stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    //3. update Redux with that videoDevice, and that video is enabled
    dispatch(updateCallStatus("videoDevice", deviceId));
    dispatch(updateCallStatus("video", "enabled"));
    //4. update the smallFeedEl
    smallFeedEl.current.srcObject = stream;
    //5. we need to update the localStream in streams
    dispatch(addStream("localStream", stream));
    //6. add tracks
    const [videoTrack] = stream.getVideoTracks();
    //come back to this later
    //if we stop the old tracks, and add the new tracks, that will mean
    // ... renegotiation
    for (const s in streams) {
      if (s !== "localStream") {
        //getSenders will grab all the RTCRtpSenders that the PC has
        //RTCRtpSender manages how tracks are sent via the PC
        const senders = streams[s].peerConnection.getSenders();
        //find the sender that is in charge of the video track
        const sender = senders.find((s) => {
          if (s.track) {
            //if this track matches the videoTrack kind, return it
            return s.track.kind === videoTrack.kind;
          } else {
            return false;
          }
        });
        //sender is RTCRtpSender, so it can replace the track
        sender.replaceTrack(videoTrack);
      }
    }
  };

  const startStopVideo = () => {
    // console.log("Sanity Check")
    //first, check if the video is enabled, if so disabled
    if (callStatus.video === "enabled") {
      //update redux callStatus
      dispatch(updateCallStatus("video", "disabled"));
      //set the stream to disabled
      const tracks = streams.localStream.stream.getVideoTracks();
      tracks.forEach((t) => (t.enabled = false));
    } else if (callStatus.video === "disabled") {
      //second, check if the video is disabled, if so enable
      //update redux callStatus
      dispatch(updateCallStatus("video", "enabled"));
      const tracks = streams.localStream.stream.getVideoTracks();
      tracks.forEach((t) => (t.enabled = true));
    } else if (callStatus.haveMedia) {
      //thirdly, check to see if we have media, if so, start the stream
      //we have the media! show the feed
      smallFeedEl.current.srcObject = streams.localStream.stream;
      //add tracks to the peerConnections
      startLocalVideoStream(streams, dispatch);
    } else {
      //lastly, it is possible, we dont have the media, wait for the media, then start the stream
      setPendingUpdate(true);
    }
  };

  useEffect(() => {
    if (pendingUpdate && callStatus.haveMedia) {
      console.log("Pending update succeeded!");
      //this useEffect will run if pendingUpdate changes to true!
      setPendingUpdate(false); // switch back to false
      smallFeedEl.current.srcObject = streams.localStream.stream;
      startLocalVideoStream(streams, dispatch);
    }
  }, [pendingUpdate, callStatus.haveMedia]);

  return (
    <div className="button-wrapper video-button d-inline-block">
      <i
        className="fa fa-caret-up choose-video"
        onClick={() => setCaretOpen(!caretOpen)}
      ></i>
      <div className="button camera" onClick={startStopVideo}>
        <i className="fa fa-video"></i>
        <div className="btn-text">
          {callStatus.video === "enabled" ? "Stop" : "Start"} Video
        </div>
      </div>
      {caretOpen ? (
        <ActionButtonCaretDropDown
          defaultValue={callStatus.videoDevice}
          changeHandler={changeVideoDevice}
          deviceList={videoDeviceList}
          type="video"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default VideoButton;
```

#### AudioButton

- frontend -> `videoComponents/AudioButton/AudioButton.js`
- in `<ActionButtons/>` use `<AudioButton />`

```js
//frontend -> src/videoComponents/AudioButton/AudioButton.js
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionButtonCaretDropDown from "../ActionButtonCaretDropDown";
import getDevices from "../VideoButton/getDevices";
import updateCallStatus from "../../redux-elements/actions/updateCallStatus";
import addStream from "../../redux-elements/actions/addStream";
import startAudioStream from "./startAudioStream";

const AudioButton = ({ smallFeedEl }) => {
  const dispatch = useDispatch();
  const callStatus = useSelector((state) => state.callStatus);
  const streams = useSelector((state) => state.streams);
  const [caretOpen, setCaretOpen] = useState(false);
  const [audioDeviceList, setAudioDeviceList] = useState([]);

  let micText;
  if (callStatus.audio === "off") {
    micText = "Join Audio";
  } else if (callStatus.audio === "enabled") {
    micText = "Mute";
  } else {
    micText = "Unmute";
  }

  useEffect(() => {
    const getDevicesAsync = async () => {
      if (caretOpen) {
        //then we need to check for audio devices
        const devices = await getDevices();
        console.log(devices.videoDevices);
        setAudioDeviceList(
          devices.audioOutputDevices.concat(devices.audioInputDevices)
        );
      }
    };
    getDevicesAsync();
  }, [caretOpen]);

  const startStopAudio = () => {
    //first, check if the audio is enabled, if so disabled
    if (callStatus.audio === "enabled") {
      //update redux callStatus
      dispatch(updateCallStatus("audio", "disabled"));
      //set the stream to disabled
      const tracks = streams.localStream.stream.getAudioTracks();
      tracks.forEach((t) => (t.enabled = false));
    } else if (callStatus.audio === "disabled") {
      //second, check if the audio is disabled, if so enable
      //update redux callStatus
      dispatch(updateCallStatus("audio", "enabled"));
      const tracks = streams.localStream.stream.getAudioTracks();
      tracks.forEach((t) => (t.enabled = true));
    } else {
      //audio is "off" What do we do?
      changeAudioDevice({ target: { value: "inputdefault" } });
      //add the tracks
      startAudioStream(streams);
    }
  };

  const changeAudioDevice = async (e) => {
    //the user changed the desired ouput audio device OR input audio device
    //1. we need to get that deviceId AND the type
    const deviceId = e.target.value.slice(5);
    const audioType = e.target.value.slice(0, 5);
    console.log(e.target.value);

    if (audioType === "output") {
      //4 (sort of out of order). update the smallFeedEl
      //we are now DONE! We dont care about the output for any other reason
      smallFeedEl.current.setSinkId(deviceId);
    } else if (audioType === "input") {
      //2. we need to getUserMedia (permission)
      const newConstraints = {
        audio: { deviceId: { exact: deviceId } },
        video:
          callStatus.videoDevice === "default"
            ? true
            : { deviceId: { exact: callStatus.videoDevice } },
      };
      const stream = await navigator.mediaDevices.getUserMedia(newConstraints);
      //3. update Redux with that videoDevice, and that video is enabled
      dispatch(updateCallStatus("audioDevice", deviceId));
      dispatch(updateCallStatus("audio", "enabled"));
      //5. we need to update the localStream in streams
      dispatch(addStream("localStream", stream));
      //6. add tracks - actually replaceTracks
      const [audioTrack] = stream.getAudioTracks();
      //come back to this later

      for (const s in streams) {
        if (s !== "localStream") {
          //getSenders will grab all the RTCRtpSenders that the PC has
          //RTCRtpSender manages how tracks are sent via the PC
          const senders = streams[s].peerConnection.getSenders();
          //find the sender that is in charge of the video track
          const sender = senders.find((s) => {
            if (s.track) {
              //if this track matches the videoTrack kind, return it
              return s.track.kind === audioTrack.kind;
            } else {
              return false;
            }
          });
          //sender is RTCRtpSender, so it can replace the track
          sender.replaceTrack(audioTrack);
        }
      }
    }
  };

  return (
    <div className="button-wrapper d-inline-block">
      <i
        className="fa fa-caret-up choose-audio"
        onClick={() => setCaretOpen(!caretOpen)}
      ></i>
      <div className="button mic" onClick={startStopAudio}>
        <i className="fa fa-microphone"></i>
        <div className="btn-text">{micText}</div>
      </div>
      {caretOpen ? (
        <ActionButtonCaretDropDown
          defaultValue={callStatus.audioDevice}
          changeHandler={changeAudioDevice}
          deviceList={audioDeviceList}
          type="audio"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AudioButton;
```

#### Outcome

- the carrot buttons have their own eventListener and highlight when hovered over

### 54. Adding the local video feed - (10min)

#### part 1 - getting the local video feed to show (small video component)

- VideoButton.js

  1. check if the video is `enabled`, if so `disabled`
  2. check if the video is `disabled`, if so `enable`
  3. check to see if we `have media`, if so, `start the stream`

  - we can check if we have media via root reducer -> `callStatus` which references ( callStatusReducer - `haveMedia`)
  - in `MainVideoPage`, we can pass the DOM element `smallFeedEl` into `<ActionButtons smallFeedEl={smallFeedEl}/>`
  - then in `<ActionButtons>` pass smallFeedEl in as a prop, so the component passes that down to `<VideoButton smallFeedEl={smallFeedEl}>`
  - then in VideoButton receive the prop `smallFeedEl`
  - and set current reference's `srcObject`
  - NOTE: `import { useDispatch, useSelector } from "react-redux"`

    - useSelector -> react-redux ... It takes in a function argument that returns the part of the state that you want.
    - useDispatch -> react-redux ... useDispatch is a hook provided by react-redux that gives you access to the dispatch function. This function allows you to send actions to the Redux store. `const dispatch = useDispatch();`

    - After obtaining dispatch using useDispatch, you can call it with an action.
    - An action is usually an object with at least two properties:
    - type: a string describing what the action is doing.
    - payload (optional): additional data that the action will carry along, which is sent to the reducer for state modification.
    - example of using redux dispatch:

    ```js
    const handleClick = () => {
      dispatch({
        type: "ADD_TODO",
        payload: { text: "Learn Redux" },
      });
    };
    ```

  - get access to the stream

    ```js
    const VideoButton = ({ smallFeedEl }) => {
      //...
      const streams = useSelector((state) => state.streams);

      const startStopVideo = () => {
        if (callStatus.haveMedia) {
          smallFeedEl.current.srcObject = streams.localstream;
        }
      };
    };
    ```

  4. it is possible, we `dont have the media`, `wait` for the media, `then start` the stream

- get access the streams...
- then we set srcObject for the video Element: `smallFeedEl.current.srcObject = streams.localStream.stream`
- NOTE: the `streams` `who` is the `localStream` we set in streamsReducer - ie. what we called it...
- we set localStream in MainVideoPage:

```js
//MainVideoPage.js
//...
const stream = await navigator.mediaDevices.getUserMedia(constraints);
//dispatch sends this function to redux dispatch (all reducers notified)
dispatch(addStream("localStream", stream));
```

- so to get the stream we get `localStream.stream`
- `smallFeedEl.current.srcObject = streams.localStream.stream;`

```js
//VideoButton.js
const callStatus = useSelector(state => state.callStatus)
const streams = useSelector(state=> state.streams);

const startStopVideo = () => {
  // console.log("Sanity Check")

  //1. check if the video is enabled, if so disabled
  if (callStatus.video === "enabled") {
    //update redux callStatus
    dispatch(updateCallStatus('video', "disabled"));
    //set the stream to disabled
    const tracks = streams.localStream.stream.getVideoTracks();
    tracks.forEach(t => t.enabled = false);
  }

  //2. check if the video is disabled, if so enable
  else if (callStatus.video === "disabled") {
    //update redux callStatus
    dispatch(updateCallStatus('video', "enabled"));
    const tracks = streams.localStream.stream.getVideoTracks();
    tracks.forEach(t => t.enabled = true);
  }


  //3. check to see if we have media, if so, start the stream
  else if (callStatus.haveMedia) {
    //we have the media! show the feed
    smallFeedEl.current.srcObject = streams.localStream.stream;
    //add tracks to the peerConnections
    startLocalVideoStream(streams, dispatch);
  }

  //4. it is possible, we dont have the media, wait for the media, then start the stream
  else {
    setPendingUpdate(true);
  }
}

return (
  //...
  <div className="button camera" onClick={startStopVideo}>
)
```

#### part 2 - ...we dont have the media, wait for the media, then start the stream

- NOTE: this scenario, user clicks video button really fast, before the media has loaded (stream hasnt finished loading (ie. getUserMedia))
- add react useState to track this
- add useEffect that runs on `pendingUpdate` change (will run if pendingUpdate changes eg. to true)
- and when pendingUpdate updates, setPendingUpdate to false
- both conditions need to be true:
- the dependencies are both `pendingUpdate` (beceause its possible that we dont have media before stream starts) AND
- other dependency is `callStatus.haveMedia` because this updates after we have media
- set srcObject to localStream.stream: `smallFeedEl.current.srcObject = streams.localStream.stream`
- call action `startLocalVideoStream` once we have both `startLocalVideoStream(streams, dispatch);`

```js
//VideoButton.js
const [pendingUpdate, setPendingUpdate] = useState(false);

//...
const startStopVideo = () => {
  //...

  //4. it is possible, we dont have the media, wait for the media, then start the stream
  else {
    setPendingUpdate(true);
  }

  useEffect(() => {
    if (pendingUpdate && callStatus.haveMedia) {
      console.log('Pending update succeeded!')
      //this useEffect will run if pendingUpdate changes to true!
      setPendingUpdate(false) // switch back to false
      smallFeedEl.current.srcObject = streams.localStream.stream
      startLocalVideoStream(streams, dispatch);
    }
  }, [pendingUpdate, callStatus.haveMedia])

}
```

### 55. Add our tracks to the peerConnection - (8min)

#### VideoButton/startLocalVideoStream

- startStopVideo -> we also need to add tracks to the peerConnections
- note: there is no need for adding track forlocalStream, only need to add tracks to the other peerConnection
- `startLocalVideoStream()` -> functions job is to update all peerConnections (addTracks) and update redux callStatus
  - required: streams
  - required: dispatch
  - NOTE: from `VideoButton`
    - we have to pass these props into the `startLocalVideoStream()`
    - because startLocalVideoStream() is just a function and cannot use hooks
      - `useDispatch` to get `dispatch()` to update redux `callStatusReducer`
      - `useSelector` to get `streams` (peerConnections) ...see `streamsReducer`

```js
//src/videoComponents/VideoButton/VideoButton
import { useDispatch, useSelector } from "react-redux";
import startLocalVideoStream from "./startLocalVideoStream";

//...
const dispatch = useDispatch();
const streams = useSelector((state) => state.streams);

//...
if (callStatus.haveMedia) {
  //3. check to see if we have media, if so, start the stream
  //we have the media! show the feed
  smallFeedEl.current.srcObject = streams.localStream.stream;
  //add tracks to the peerConnections
  startLocalVideoStream(streams, dispatch);
}
```

#### startLocalVideoStream

- we need streams because if you go to `redux-elements/reducers/streamsReducer.js` its state properties are `who`, `stream`, `peerConnection`
- so separate localStream from streams...
- then for every other stream, add localStream's tracks add to its peerConnection.addTrack
- then update redux call status `dispatch(updateCallStatus('video', "enabled"))`
  - NOTE: callStatusReducer: `video` and `audio` status is NOT `boolean` anymore and should be updated
  - video/audio feed status: `off` `enabled` `disabled` `complete`

```js
//src/videoComponents/VideoButton/startLocalVideoStream.js
//this functions job is to update all *(`streams` for) peerConnections (addTracks) and *(`dispatch` to) update redux callStatus
import updateCallStatus from "../../redux-elements/actions/updateCallStatus";

const startLocalVideoStream = (streams, dispatch) => {
  const localStream = streams.localStream;
  for (const s in streams) {
    //s is the key *(streamsReducer -> who)
    if (s !== "localStream") {
      //we don't addTracks to the localStream
      const curStream = streams[s];
      //addTracks to all peerConnections
      localStream.stream.getVideoTracks().forEach((t) => {
        curStream.peerConnection.addTrack(t, streams.localStream.stream);
      });
      //update redux callStatus
      dispatch(updateCallStatus("video", "enabled"));
    }
  }
};
export default startLocalVideoStream;
```

### 56. Enable and disable (mute) the local video feed - (6min)

- TODO: update status of video Button after clicking it (eg. change visual state to eg. pause)
- TODO: when you click on the video Button the feed should stop (instead of action of always adding tracks for peerConnection which already has those tracks)
- if you were wondering like me where the `t.enabled` comes from...
  - getVideoTracks() which is MediaStreamTrack instance has an `enabled` property
- with this we dont have to stop track, we can enable or disable it

<img
src='exercise_files/section05-webrtc+react-56-MediaStreamTrack-enabled.png'
alt='section05-webrtc+react-56-MediaStreamTrack-enabled.png'
width=600
/>

```js
//VideoButton
import updateCallStatus from "../../redux-elements/actions/updateCallStatus";

if (callStatus.video === "enabled") {
  //update redux callStatus
  dispatch(updateCallStatus("video", "disabled"));
  //set the stream to disabled
  const tracks = streams.localStream.stream.getVideoTracks();
  tracks.forEach((t) => (t.enabled = false));
} else if (callStatus.video === "disabled") {
  //second, check if the video is disabled, if so enable
  //update redux callStatus
  dispatch(updateCallStatus("video", "enabled"));
  const tracks = streams.localStream.stream.getVideoTracks();
  tracks.forEach((t) => (t.enabled = true));
} else if (callStatus.haveMedia) {
  //...
} else {
}
```

### 57. Display local video inputs (camera options) - (11min)

- this step deals with the video button carrot (toggle carrot menu)
- the purpose of this is so we can use `caretOpen` to show/hide dropdown component
- NOTE: `ActionButtonCaretDropDown.js`

```js
//VideoButton

<ActionButtonCaretDropDown
  defaultValue={callStatus.videoDevice}
  changeHandler={changeVideoDevice}
  deviceList={videoDeviceList}
  type="video"
/>
```

```js
//VideoButton

const VideoButton = ({ smallFeedEl }) => {
  //...

  const [caretOpen, setCaretOpen] = useState(false);
  const [videoDeviceList, setVideoDeviceList] = useState([]);

  useEffect(() => {
    const getDevicesAsync = async () => {
      if (caretOpen) {
        //then we need to check for video devices
        const devices = await getDevices();
        console.log(devices.videoDevices);
        setVideoDeviceList(devices.videoDevices);
      }
    };
    getDevicesAsync();
  }, [caretOpen]);

  //...

  return (
    <div className="button-wrapper video-button d-inline-block">
      <i
        className="fa fa-caret-up choose-video"
        onClick={() => setCaretOpen(!caretOpen)}
      ></i>
      <div className="button camera" onClick={startStopVideo}>
        <i className="fa fa-video"></i>
        <div className="btn-text">
          {callStatus.video === "enabled" ? "Stop" : "Start"} Video
        </div>
      </div>

      {caretOpen ? (
        <ActionButtonCaretDropDown
          defaultValue={callStatus.videoDevice}
          changeHandler={changeVideoDevice}
          deviceList={videoDeviceList}
          type="video"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
```

- TODO: find out the devices user has for video/audio `VideoButton/getDevices.js`
- available for both audio and video (kind: `audioinput`, `audiooutput`, `videoinput`)

```js
//a utility funciton that fetches all available devices
//both video and audio

const getDevices = () => {
  return new Promise(async (resolve, reject) => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    // console.log(devices);
    const videoDevices = devices.filter((d) => d.kind === "videoinput");
    const audioOutputDevices = devices.filter((d) => d.kind === "audiooutput");
    const audioInputDevices = devices.filter((d) => d.kind === "audioinput");
    resolve({
      videoDevices,
      audioOutputDevices,
      audioInputDevices,
    });
  });
};

export default getDevices;
```

### 58. Set new video device on select - (7min)

- the user changed the desired video device
- get getUserMedia again (permission)
  - audio: callStatus.audioDevice === 'default' ? true : {deviceId: {exact: callStatus.audioDevice}}
    - if the user hasnt changed it from default, use `true`
    - if they have changed it, then we use it this way: `{deviceId: {exact: callStatus.audioDevice}}`
  - video: {deviceId: {exact: deviceId}}
- grab stream passing-in new constraints
- 5. we need to update the stream calling `addStream()`

```js
//...
import addStream from "../../redux-elements/actions/addStream";

//...
const changeVideoDevice = async (e) => {
  //1. we need to get that deviceId
  const deviceId = e.target.value; //device id

  //2. we need to getUserMedia (permission) again
  //- appopriate syntax to tell browser what device to use
  const newConstraints = {
    audio:
      callStatus.audioDevice === "default"
        ? true
        : { deviceId: { exact: callStatus.audioDevice } },
    video: { deviceId: { exact: deviceId } },
  };
  //- grab stream passing-in these newConstraints
  const stream = await navigator.mediaDevices.getUserMedia(newConstraints);

  //3. update Redux via updateCallStatus() action with that videoDevice
  dispatch(updateCallStatus("videoDevice", deviceId));
  //4. update the smallFeedEl
  //- override what user sees in top-right smallFeedEl window
  smallFeedEl.current.srcObject = stream;
  //5. we need to update the localStream stream
  dispatch(addStream("localstream", stream));

  //6. add tracks - @1min10seconds
};
```

### 59. replaceTracks() - (8min)

- OUTCOME: ability to switch tracks (user can see feed chosen)
- common use cases, switching between rear and front camera (on phone)

6. add tracks - @1min10seconds

- if we stop the old tracks, and add the new tracks, that will mean renotiation
- and we dont want that because its costly (new offer, sdps, icecandidates etc)
- NOTE: there is a `getSenders()` method that comes with `RTCPeerConnection` -> you run against your connection, which will grab the `senders`
- the `senders` is that you run with `replaceTrack()` on.
- instead we update tracks with `RTCRtpSender`'s `replaceTrack()` method
  - the new track MUST be of the same kind (audio/video)
  - switching a track should not require a renogotiation
- at this time, the video has to be enabled because we just switched the feed `dispatch(updateCallStatus('video', 'enabled'));`

<img
src='exercise_files/section05-webrtc+react-59-replaceTrack.png'
alt='section05-webrtc+react-59-replaceTrack.png'
width=600
/>

```js
//VideoButton
//...

const changeVideoDevice = async (e) => {
  //...

  const [videoTrack] = stream.getVideoTracks();
  //come back to this later
  //if we stop the old tracks, and add the new tracks, that will mean
  // ... renegotiation
};
```

### 60. Abstract DropDown component - (3min)

- here is where we actually abstract dropdown from `VideoButton` as `ActionButtonCaretDropDown`
- we pass in the props from VideoButton:
  - `defaultValue={callStatus.videoDevice}`
  - `changeHandler`
  - `deviceList`

```js
//VideoButton
//...
{
  caretOpen ? (
    <ActionButtonCaretDropDown
      defaultValue={callStatus.videoDevice}
      changeHandler={changeVideoDevice}
      deviceList={videoDeviceList}
      type="video"
    />
  ) : (
    <></>
  );
}
```

```js
//videoComponents/ActionButtonCaretDropDown

const ActionButtonCaretDropDown = ({
  defaultValue,
  changeHandler,
  deviceList,
  type,
}) => {
  let dropDownEl;
  if (type === "video") {
    dropDownEl = deviceList.map((vd) => (
      <option key={vd.deviceId} value={vd.deviceId}>
        {vd.label}
      </option>
    ));
  } else if (type === "audio") {
    const audioInputEl = [];
    const audioOutputEl = [];
    deviceList.forEach((d, i) => {
      if (d.kind === "audioinput") {
        audioInputEl.push(
          <option key={`input${d.deviceId}`} value={`input${d.deviceId}`}>
            {d.label}
          </option>
        );
      } else if (d.kind === "audiooutput") {
        audioOutputEl.push(
          <option key={`ouput${d.deviceId}`} value={`ouput${d.deviceId}`}>
            {d.label}
          </option>
        );
      }
    });
    audioInputEl.unshift(<optgroup label="Input Devices" />);
    audioOutputEl.unshift(<optgroup label="Output Devices" />);
    dropDownEl = audioInputEl.concat(audioOutputEl);
  }

  return (
    <div className="caret-dropdown" style={{ top: "-25px" }}>
      <select defaultValue={defaultValue} onChange={changeHandler}>
        {dropDownEl}
      </select>
    </div>
  );
};

export default ActionButtonCaretDropDown;
```

### 61. Set up AudioButton component - (11min)

- working on Audio Button
- copy from VideoButton to script that handles `<ActionButtonCaretDropDown>`
- for changeHandler's `changeAudioDevice()`
- NOTE: @6min37sec when using `<ActionButtonCaretDropDown type="video">` OR `<ActionButtonCaretDropDown type="audio">` we are now passing through type
- add prop `type` to arguments for `ActionButtonCaretDropDown`
- and if the type is audio, we need to differentiate the values between `audio input` and `audio output`
- we add the respective audio kind to its array and also use `unshift()` to add label header for select dropdown
- NOTE: `unshift()` puts it at top of list
- set `dropDownEl = audioInputEl.concat(audioOutputEl)` which then shows both when carot selected.
- LIMITATIONS -> doing it this way we can only select ONE option (either input or output) unless we use a 3rd party library

```js
//ActionButtonCaretDropDown

const ActionButtonCaretDropDown = ({
  defaultValue,
  changeHandler,
  deviceList,
  type,
}) => {
  let dropDownEl;
  if (type === "video") {
    dropDownEl = deviceList.map((vd) => (
      <option key={vd.deviceId} value={vd.deviceId}>
        {vd.label}
      </option>
    ));
  } else if (type === "audio") {
    const audioInputEl = [];
    const audioOutputEl = [];
    deviceList.forEach((d, i) => {
      if (d.kind === "audioinput") {
        audioInputEl.push(
          <option key={`input${d.deviceId}`} value={`input${d.deviceId}`}>
            {d.label}
          </option>
        );
      } else if (d.kind === "audiooutput") {
        audioOutputEl.push(
          <option key={`ouput${d.deviceId}`} value={`ouput${d.deviceId}`}>
            {d.label}
          </option>
        );
      }
    });

    //add to begging of array
    audioInputEl.unshift(<optgroup label="Input Devices" />);
    audioOutputEl.unshift(<optgroup label="Output Devices" />);
    dropDownEl = audioInputEl.concat(audioOutputEl);
  }

  return (
    <div className="caret-dropdown" style={{ top: "-25px" }}>
      <select defaultValue={defaultValue} onChange={changeHandler}>
        {dropDownEl}
      </select>
    </div>
  );
};

export default ActionButtonCaretDropDown;
```

- copy from VideoButton useEffect with `caretOpen` dependency
- instead of `video`, its `audio`
- we are concerned with carot open

#### useState audioDeviceList/setAudioDeviceList

- when we call `setAudioDeviceList()` we add both the `devices.audioOutputDevices` AND `devices.audioInputDevices`
- using html's `<optgroup>` we can separate audio input/output for `audioDeviceList`

<img
src='exercise_files/section05-webrtc+react-61-using-optgroup-for-audio.png'
alt='section05-webrtc+react-61-using-optgroup-for-audio.png'
width=600
/>

#### ActionButtonCaretDropDown

- then in ActionButtonCaretDropDown fix by separating deviceList audio input / audio output
- and separate video handling from audio handling.

- then in AudioButton,

#### just the changes

```js
//AudioButton
import { useState, useEffect } from "react";
import getDevices from "../VideoButton/getDevices";
import ActionButtonCaretDropDown from "../ActionButtonCaretDropDown";

//...
const [caretOpen, setCaretOpen] = useState(false);
const [audioDeviceList, setAudioDeviceList] = useState([]);

useEffect(() => {
  const getDevicesAsync = async () => {
    if (caretOpen) {
      //then we need to check for audio devices
      const devices = await getDevices();
      console.log(devices.videoDevices);
      setAudioDeviceList(
        devices.audioOutputDevices.concat(devices.audioInputDevices)
      );
    }
  };
  getDevicesAsync();
}, [caretOpen]);

const changeAudioDevice = async (e) => {};

return (
  <div className="button-wrapper d-inline-block">
    //... //instead of `video`, its `audio`
    <i
      className="fa fa-caret-up choose-audio"
      onClick={() => setCaretOpen(!caretOpen)}
    ></i>
    //....
    {caretOpen ? (
      <ActionButtonCaretDropDown
        defaultValue={callStatus.audioDevice}
        changeHandler={changeAudioDevice}
        deviceList={audioDeviceList}
        type="audio"
      />
    ) : (
      <></>
    )}
  </div>
);
```

### AudioButton

```js
//videoComponents/AudioButton/AudioButton.js
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionButtonCaretDropDown from "../ActionButtonCaretDropDown";
import getDevices from "../VideoButton/getDevices";
import updateCallStatus from "../../redux-elements/actions/updateCallStatus";
import addStream from "../../redux-elements/actions/addStream";
import startAudioStream from "./startAudioStream";

const AudioButton = ({ smallFeedEl }) => {
  const dispatch = useDispatch();
  const callStatus = useSelector((state) => state.callStatus);
  const streams = useSelector((state) => state.streams);
  const [caretOpen, setCaretOpen] = useState(false);
  const [audioDeviceList, setAudioDeviceList] = useState([]);

  let micText;
  if (callStatus.audio === "off") {
    micText = "Join Audio";
  } else if (callStatus.audio === "enabled") {
    micText = "Mute";
  } else {
    micText = "Unmute";
  }

  useEffect(() => {
    const getDevicesAsync = async () => {
      if (caretOpen) {
        //then we need to check for audio devices
        const devices = await getDevices();
        console.log(devices.videoDevices);
        setAudioDeviceList(
          devices.audioOutputDevices.concat(devices.audioInputDevices)
        );
      }
    };
    getDevicesAsync();
  }, [caretOpen]);

  const startStopAudio = () => {
    //first, check if the audio is enabled, if so disabled
    if (callStatus.audio === "enabled") {
      //update redux callStatus
      dispatch(updateCallStatus("audio", "disabled"));
      //set the stream to disabled
      const tracks = streams.localStream.stream.getAudioTracks();
      tracks.forEach((t) => (t.enabled = false));
    } else if (callStatus.audio === "disabled") {
      //second, check if the audio is disabled, if so enable
      //update redux callStatus
      dispatch(updateCallStatus("audio", "enabled"));
      const tracks = streams.localStream.stream.getAudioTracks();
      tracks.forEach((t) => (t.enabled = true));
    } else {
      //audio is "off" What do we do?
      changeAudioDevice({ target: { value: "inputdefault" } });
      //add the tracks
      startAudioStream(streams);
    }
  };

  const changeAudioDevice = async (e) => {
    //the user changed the desired ouput audio device OR input audio device
    //1. we need to get that deviceId AND the type
    const deviceId = e.target.value.slice(5);
    const audioType = e.target.value.slice(0, 5);
    console.log(e.target.value);

    if (audioType === "output") {
      //4 (sort of out of order). update the smallFeedEl
      //we are now DONE! We dont care about the output for any other reason
      smallFeedEl.current.setSinkId(deviceId);
    } else if (audioType === "input") {
      //2. we need to getUserMedia (permission)
      const newConstraints = {
        audio: { deviceId: { exact: deviceId } },
        video:
          callStatus.videoDevice === "default"
            ? true
            : { deviceId: { exact: callStatus.videoDevice } },
      };
      const stream = await navigator.mediaDevices.getUserMedia(newConstraints);
      //3. update Redux with that videoDevice, and that video is enabled
      dispatch(updateCallStatus("audioDevice", deviceId));
      dispatch(updateCallStatus("audio", "enabled"));
      //5. we need to update the localStream in streams
      dispatch(addStream("localStream", stream));
      //6. add tracks - actually replaceTracks
      const [audioTrack] = stream.getAudioTracks();
      //come back to this later

      for (const s in streams) {
        if (s !== "localStream") {
          //getSenders will grab all the RTCRtpSenders that the PC has
          //RTCRtpSender manages how tracks are sent via the PC
          const senders = streams[s].peerConnection.getSenders();
          //find the sender that is in charge of the video track
          const sender = senders.find((s) => {
            if (s.track) {
              //if this track matches the videoTrack kind, return it
              return s.track.kind === audioTrack.kind;
            } else {
              return false;
            }
          });
          //sender is RTCRtpSender, so it can replace the track
          sender.replaceTrack(audioTrack);
        }
      }
    }
  };

  return (
    <div className="button-wrapper d-inline-block">
      <i
        className="fa fa-caret-up choose-audio"
        onClick={() => setCaretOpen(!caretOpen)}
      ></i>
      <div className="button mic" onClick={startStopAudio}>
        <i className="fa fa-microphone"></i>
        <div className="btn-text">{micText}</div>
      </div>
      {caretOpen ? (
        <ActionButtonCaretDropDown
          defaultValue={callStatus.audioDevice}
          changeHandler={changeAudioDevice}
          deviceList={audioDeviceList}
          type="audio"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AudioButton;
```

#### TROUBLESHOOT - carot dropdown content

- this might be obvious, but when i got to this lesson 61 (set up audioButton Component) i had trouble with populating the carot dropdown content for audio:
- just in case, note that your camera and microphone needs to be enabled:
- control panel -> sound -> recording -> right-click -> enable

<img
src='exercise_files/section05-webrtc+react-61-sound-enabled.png'
alt='section05-webrtc+react-61-sound-enabled.png'
width=600
/>

- win -> privacy & security -> microphone -> microphone access -> on
- win -> privacy & security -> camera -> camera access -> on
- and drivers etc installed ensuring the actual hardware is working.
- AND audio/video constraints -> `true`

```js
const constraints = {
  video: true, //atleast one is required, just dont show it yet
  audio: true,
};
```

### 62. Switch Audio Input and Output Devices - (11min)

- lesson deals with `changeAudioDevice()` function (use changeVideoDevice as template instead of `video` its `audio`)
- the user changed the desired `output audio device` or `input audio device`
- NOTE: limitation is you can only choose one at a time with option (input or output)

1. we need to get that deviceAudioId

2. we need to getUserMedia (permission) 4min.26sec

- from ActionButtons:
  - the AudioButton needs the smallFeedEl passed into AudioButton `<AudioButton smallFeedEl={smallFeedEl}/>`
- HTMLMediaElement.`setSinkId()` sets the id of the audio device to use for output (eg. switch audio)
  <img
  src='exercise_files/section05-webrtc+react-62-setSinkId.png'
  alt='section05-webrtc+react-62-setSinkId.png'
  width=600
  />

3. update Redux with that videoDevice, and that video is enabled

```js
//AudioButtons
const AudioButton = (smallFeedEl) => {
  //...

  const changeAudioDevice = async (e) => {
    //the user changed the desired ouput audio device OR input audio device
    //1. we need to get that deviceId AND the type
    const deviceId = e.target.value.slice(5); //gets device id
    const audioType = e.target.value.slice(0, 5); //`input` or `output`

    //2. we need to getUserMedia (permission) 4min.26sec
    if (audioType === "output") {
      //4. (NOTE: 4 is out of order) update the smallFeedEl
      //we are now DONE! we dont care about the output for any other reason
      smallFeedEl.current.setSinkId(deviceId);
    } else if (audioType === "input") {
      //we need to getUserMedia (permission) 6min.39sec
      const newConstraints = {
        audio: { deviceId: { exact: deviceId } },
        video:
          callStatus.videoDevice === "default"
            ? true
            : { deviceId: { exact: callStatus.videoDevice } },
      };
      const stream = await navigator.mediaDevices.getUserMedia(newConstraints);
      //3. update Redux with that audioDevice, and that audio is enabled
      dispatch(updateCallStatus("audioDevice", deviceId));
      dispatch(updateCallStatus("audio", "enabled"));

      //5. we need to update the localStream in streams
      dispatch(addStream("localStream", stream));
    }
  };
};
```

### caret dropdown

- videoComponents/ActionButtonCaretDropDown ability to distinguish between audio input and audio output devices (key's and value) because they have the same device id.
- solution: by adding a string prefix to the devicelist:
  - key={`input${d.deviceId}`} AND
  - device id: value={`input${d.deviceId}`}

```js
//videoComponents/ActionButtonCaretDropDown

  //...

  else if (type === "audio") {
    const audioInputEl = [];
    const audioOutputEl = [];
    deviceList.forEach((d, i) => {
      if (d.kind === "audioinput") {
        audioInputEl.push(<option key={`input${d.deviceId}`} value={`input${d.deviceId}`}>{d.label}</option>)
      } else if (d.kind === "audiooutput") {
        audioOutputEl.push(<option key={`ouput${d.deviceId}`} value={`ouput${d.deviceId}`}>{d.label}</option>)
      }
    })

    //add to begging of array
    audioInputEl.unshift(<optgroup label="Input Devices" />)
    audioOutputEl.unshift(<optgroup label="Output Devices" />)
    dropDownEl = audioInputEl.concat(audioOutputEl)
  }
}
```

# end of client 1 portion (excluding the signaling part)

---

### 63. Start, mute, unmute audio - (10min)

- this lesson deals with the ability to mute/unmute audio
- the join audio button joins the default audio by default
- AudioButton -> `startStopAudio()` toggle (if enabled, disable it and visa versa)
- build the stream using newConstraints
- dispatch to reducers
- NOTE: to the localstream we do NOT need to add audio because we can hear ourself talking, its in the other end where we need to add localstream audio track..
- startStopAudio() -> when we first call `changeAudioDevice()` we need to add the tracks because its the first time

```js
//AudioButton
//...

let micText;
  if (callStatus.audio === "off") {
    micText = "Join Audio"
  } else if (callStatus.audio === "enabled") {
    micText = "Mute"
  } else {
    micText = "Unmute"
  }

//...

const startStopAudio = () => {
  //first, check if the audio is enabled, if so disabled
  if (callStatus.audio === "enabled") {
    //update redux callStatus
    dispatch(updateCallStatus('audio', "disabled"));
    //set the stream to disabled
    const tracks = streams.localStream.stream.getAudioTracks();
    tracks.forEach(t => t.enabled = false);
  } else if (callStatus.audio === "disabled") {
    //second, check if the audio is disabled, if so enable
    //update redux callStatus
    dispatch(updateCallStatus('audio', "enabled"));
    const tracks = streams.localStream.stream.getAudioTracks();
    tracks.forEach(t => t.enabled = true);
  } else {
    //audio is "off" What do we do?
    changeAudioDevice({ target: { value: "inputdefault" } })
    //add the tracks - actually replace tracks
    startAudioStream(streams);
  }
}

const changeAudioDevice = async(e)=>{
  const deviceId = e.target.value.slice(5); //'default'

  //...
  else if(audioType === 'input'){
  //2. we need to getUserMedia (permission)
    const newConstraints = {
      audio: { deviceId: { exact: deviceId } },
      video: callStatus.videoDevice === "default" ? true : { deviceId: { exact: callStatus.videoDevice } },
    }
  }

  //...
  //actually replace tracks
  const tracks = stream.getAudioTracks();
}
```

- NOTE: `startStopAudio()` we call `changeAudioDevice()` and pass it an object with target.value...
- this is to mimic props expected for `changeAudioDevice()`

### Constraints

- when we run our app locally our constraints have audio as `false` (testing locally), this is to stop the feedback effect.
- in production, MainVideoPage.js -> constraints (audio AND video) should both be true otherwise you will be asked separately firstly getUserMedia() for video, then again for audio, which is not a good experience.

### refactor startLocalVideoStream.js -> AudioButton/StartAudioStream.js

- AudioButton/StartAudioStream.js
- send in as props `dispatch` and `streams`
- grab localStream `const localStream = streams.localStream;`
- loop through all the streams, as long as its not the localStream
  - add our conveniece variable `curStream` for the current stream in streams
  - get the streams audioTracks, loop through them
- call curStream.peerConnection.addTrack() and pass it `track` and `streams.localStream.stream`
- ie. set the current streams peerConnection to this localStream.stream

```js
//AudioButton/StartAudioStream.js
//this functions job is to update all peerConnections (addTracks) and update redux callStatus
import updateCallStatus from "../../redux-elements/actions/updateCallStatus";

const startAudioStream = (streams) => {
  const localStream = streams.localStream;
  for (const s in streams) {
    //s is the key
    if (s !== "localStream") {
      //we don't addTracks to the localStream
      const curStream = streams[s];
      //addTracks to all peerConnecions
      localStream.stream.getAudioTracks().forEach((t) => {
        curStream.peerConnection.addTrack(t, streams.localStream.stream);
      });
    }
  }
};
export default startAudioStream;
```

- then in AudioButton call this `startAudioStream(streams)`

---

---

---

---

---

---

---

---

---

---

## Signaling Server

### 64. Organize offers on backEnd and add uuid - (8min)

- back to `backend` socket server (telelLegalSite/back-end-telelegal)

### Chatserver

<img
src='exercise_files/section05-webrtc+react-64-server.js-chatserver-offer.png'
alt='section05-webrtc+react-64-server.js-chatserver-offer.png'
width=600
/>

- previously...offers in a chat server shared this data
  const offer = {
  `offererUsername`,
  `offer`,
  `offerIceCandidates`,
  `answererUsername`,
  `answer`,
  `answererIceCandidates`
  }

### Telelegal chat

<img
src='exercise_files/section05-webrtc+react-64-server.js-telelegalsite-offer.png'
alt='section05-webrtc+react-64-server.js-telelegalsite-offer.png'
width=600
/>

- with a telelegal site, the offer is coming from person A and needs to get to a specific person B...

```js
const allKnownOffers = {
  `uniqueId` - key (uuid),
  `offer`,
  `professionalsFullname`,
  `clientName`,
  `apptDate` (appointment date),
  `offererIceCandidates`,
  `answer`,
  `answererIceCandidates`
}
```

- to use [UUID](https://www.npmjs.com/package/uuid) (universally unique identifier (128bits long))
- UUID guarantees uniquess accross space and time

- on the `back-end-telelegal/`

```
pnpm i uuid
```

### ES6 modules syntax

```js
import { v4 as uuidv4 } from "uuid";
uuidv4(); // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

### on server how to manage a no-database store...via app.get() and app.set()

### commonjs syntax

- paste in `expressRoutes.js`

```js
//back-end-telelegal/expressRoutes.js

const { v4: uuidv4 } = require("uuid");
//...
const professionalAppointments = [];
app.set("professionalAppointments", professionalAppointments);

app.get("/user-link", (req, res) => {
  const uuid = uuidv4(); // eg. '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' substitute for primary key

  const appData = {
    professionalsFullName: "Robert Bunch",
    apptDate: Date.now() + 50000,
    uuid,
  };

  professionalAppointments.push(apptData);
});

app.post("/validate-link", (req, res) => {
  //...
  console.log(professionalAppointments);
});
```

### app.set() and app.get()

- @4min.58sec
- `appData` will go to both users:

  - to user -> receives a link (email)
  - to professional (eg. the doctor) -> receives it in the dashboard

- NOTE: we dont have a database so improvise with app.set() and app.get()
- we create a new variable for the professionals' appointments: `const professionalAppointments = [];`
- make it accessible via `app` by attaching it via set: `app.set('professionalAppointments', professionalAppointments);`
- note we define app in `./server.js` - `const app = require("./server").app;`
- example of accessing this via app in socketServer.js `const professionalAppointments = app.get('professionalAppointments');`
- NOTE: this is how we would use `app.get()` and `app.set()`
- but here... it will be stale data as it is loaded as soon as server loads up.

- anways, we test by pushing data to `professionalAppointments.push(apptData);`

```js
//backend expressRoutes.js
app.post("/validate-link", (req, res) => {
  const token = req.body.token;
  const decodedData = jwt.verify(token, linkSecret);
  res.json(decodedData);

  console.log(professionalAppointments);
});
```

```js
//backend /socketServer.js
//example of accessing this via app
const app = require("./server").app; //note: we define app in ./server.js

//const professionalAppointments = app.get('professionalAppointments'); //just an example, as it would be stale data. dont use it this way..

//...
io.on("connection", (socket) => {
  console.log(socket.id, "has connection");
  socket.on("newOffer", ({ offer, apptInfo }) => {
    //offer = sdp/type, apptInfo has the uuid that we can add to allKnownOffers
    //so that the professional can find EXACTLY the right allKnownOffers
  });
});
```

### outcome

- console log
- the professionals name will be the key
- the uuid will be the thing that guarantees a connection between our 2 users.

<img
src='exercise_files/section05-webrtc+react-64-expressRoutes.js-console.log(professionalAppointments).png'
alt='section05-webrtc+react-64-expressRoutes.js-console.log(professionalAppointments).png'
width=600
/>

### 65. createOffer() once the tracks are shared - (13min)

- frontend
- do a socket emit to create offer
- everything is in place now (audio and video is enabled).
- MainVideoPage.js `fetchMedia()` -> socket.emit...but in an `useEffect`

#### when will we be ready to send offer?

- when will offer be sent? when we have atleast all the audio/video tracks (to create valid SDP)
- import `const callStatus = useSelector(state=> state.callStatus);`
- DECISION -> you can get both then mute the track (callStatus.audio and callStatus.video)
- then in CallStatusReducer add `haveCreatedOffer`
- in future if you need to renegotiate, just change callStatus.haveCreatedOffer back to false
- so we have our audio and video enabled, now we can create our offer

### offer
- MainVideoPage.js -> send offer to backend (below is the code for the receiving end)
- NOTE: we called setApptInfo() in useEffect where we create the token...and `fetchDecodedToken`
- create an offer against a peer connection ie. need stream `socket.emit('newOffer', {offer, apptInfo} )`;
- const streams = useSelector(state=> state.streams);
```js
//snippet 

for(const s in streams){
  if(s !== 'localStream'){

    //pc === peerConnection
    const pc = streams[s].peerConnection;
    const offer = await pc.createOffer()
    socket.emit('newOffer', {offer, apptInfo} )
  }
}
```


```js
//MainVideoPage.js snippet
const MainVideoPage = ()=>{
  //...

  const callStatus = useSelector(state=> state.callStatus);
  const streams = useSelector(state=> state.streams);
  const [apptInfo, setApptInfo] = useState({});

  useEffect(()=>{
    //fetch the user media
    const fetchMedia = async() =>{
    }
    fetchMedia();

  }, [])

  useEffect(()=>{
    const token = ...
    const fetchDecodedToken = async()=>{
      const resp = await axios.post('https://localhost:9000/validate-link', {token})
      setApptInfo(resp.data);
    }
    fetchDecodedToken();
  },[]);

  useEffect(()=>{
    const createOfferAsync = async ()=>{
      //we have audio and video, now we make an offer
      //create an offer against a peer connection ie. need stream
      for(const s in streams){
        if(s !== 'localStream'){

          //pc === peerConnection
          const pc = streams[s].peerConnection;
          const offer = await pc.createOffer()
          socket.emit('newOffer', {offer, apptInfo} )
        }
      }
    }

    if(callStatus.audio === 'enabled' && callStatus.video === 'enabled' && !callStatus.haveCreatedOffer){
      createOfferAsync();
    }

  }, [callStatus.audio, callStatus.video, callStatus.haveCreatedOffer])
}
```

```js
//expressRoutes.js
io.on("connection", (socket) => {
  console.log(socket.id, "has connected");
  socket.on('newOffer', ({offer, apptInfo})=>{
    //offer = sdp/type, apptInfo has the uuid that we can add to allKnownOffers so that the professional can find EXACTLY the right allKnownOffers
    console.log('offer: ', offer);
    console.log('==============================');
    console.log('apptInfo: ', apptInfo);
  });
});
```

<img
src='exercise_files/section05-webrtc+react-65-createOffer-once-the-tracks-are-shared-sdp.png'
alt='section05-webrtc+react-65-createOffer-once-the-tracks-are-shared-sdp.png'
width=600
/>
<img
src='exercise_files/section05-webrtc+react-65-createOffer-once-the-tracks-are-shared-appointment.png'
alt='section05-webrtc+react-65-createOffer-once-the-tracks-are-shared-appointment.png'
width=600
/>

### SERVER - we have an offer

- @6min44sec we have an offer... now what?
- allKnownOffers[apptInfo.uuid] will give us the specific appointment in allKnownOffers
- and we want to add values for the properties
- we add clientName to apptData in expressRoutes (backend)...
- socketServer can then access `clientName` via `apptInfo`
- socketServer - we dont emit this to everyone like we did our chat server - we only want this to go to our professional.
  - `const connectedProfessionals = [];`
  - `const connectedClients = [];`
- on connection we can push an object on connectedProfessionals []
```js
//snippet
connectedProfessionals.push({
  socketId: socket.id,
  fullName
});
```

```js
//socketServer.js
io.on("connection", (socket) => {
  console.log(socket.id, "has connected");

  const fullName = socket.handshake.auth.fullName;

  connectedProfessionals.push({
    socketId: socket.id,
    fullName
  });

  socket.on('newOffer', ({offer, apptInfo})=>{
    //offer = sdp/type, apptInfo has the uuid that we 

    allKnownOffers[apptInfo.uuid] = {
      ...apptInfo,
      offer,
      offererIceCandidates: [],
      answer: null,
      answerIceCandidates: [],
    }

    //we dont emit this to everyone like we did our chat server
    //we only want this to go to our professional.


  })
});

```
- we add clientName to apptData in expressRoutes (backend)...
```js
//backend expressServer.js
const apptData = {
  professionalsFullName: "Robert Bunch, J.D.",
  apptDate: Date.now() + 500000,
  uuid,
  clientName: "Jim Jones",
}
```

### 66. Add Dashboard markup for professional - (5min)  

<img
src='exercise_files/section05-webrtc+react-66-dashboard.png'
alt='section05-webrtc+react-66-dashboard. png'
width=600
/>

- on the professional side
- we are focusing on coming appointments (join video)

### TODOS
1. Import markup for dashboard
2. Create path to dashboard
3. create JWT for attorney auth and validate handshake
4. reorganize appt data
5. pull back and diplay appointment data on connect
6. add listener for user ready when connected
7. on click join button, go to /join-video (request userMedia)
8. prompt for vidoe and audio before connecting
9. create answer, gather iceCandidates and connect! 

@2min42sec
- create frontend `/src/siteComponents/ProDashboard.js` and `ProDashboard.css`
- use the course starterFiles and paste starting code

### Create route on frontend
- TODO: add route for dashboard in -> App.js

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/join-video" Component={MainVideoPage}/>
        <Route exact path="/dashboard" Component={ProDashboard}/>
      </Routes>
    </BrowserRouter>
  );
}
```

- TODO: create a link to dashboard: `https://localhost:3000/dashboard`


### 67. Optional - Overview of markup - (2min)
- walthrough of html markup

### 68. Authenticate professional - (10min)
- REMINDER: on client side for user, a link is sent with a token which includes the data regarding who the person is
- creating a jwt for professional when he/she/it joins BUT...for the dashboard
- instead of directing to `/get-link` it goes to `/dashboard`
- need to know professional is logged-in (clicking on link (you see jwt in url))

### what to do with dashboard jwt?
- @3min04sec
- because we use the same secret we can validate the token via `/validate-link` (production should use different secrets) and then get the data from the jwt....
- but what we really want is 5. pull back and display appointment data on connect
- so `https://localhost:3000/dashboard?token=${token}` should show appointment details
- TODO: then.. create socket connection 
- TODO: then validate the handshake on backend

### professional link with JWT
- https://localhost:9000/pro-link
- this creates the link with the jwt for the professional in dashboard

```js
//expressRoutes
app.get('/pro-link', (req, res)=> {
  const userData = {
    fullName: 'Peter Chan, J.D.',
    proId:1234,

  }
  const token = jwt.sign(userData,linkSecret);
  res.send(`<a href="https://localhost:3000/dashboard?token=${token}" target="_blank">link here</a>`);
}); 

```

- in MainVideoPage.js
- copy the useEffect that fetches the decoded token `fetchDecodedToken()`... because we want to use this for the dashboard
- put it in ProDashboard.js
- console.log(resp.data) outputs the clients' `userData`
<img
src='exercise_files/section05-webrtc+react-68-authenticated-professional-dashboard-decodedToken.png'
alt='section05-webrtc+react-68-authenticated-professional-dashboard-decodedToken.png'
width=600
/>


```js
//ProDashboard.js
import socket from '../webRTCutilities/socketConnection';

useEffect(()=>{
  //grab the token out of the query string
  const token = searchParams.get('token');  //get token out querystring
  console.log(token);
  const fetchDecodedToken = async () =>{
    const resp = await axios.post('https://localhost:9000/validate-link', {token});
    console.log(resp.data);
    setApptInfo(resp.data);
  }
  fetchDecodedToken();
}, []);

```
- NOTE: we import socket which automatically connects, but we actually need to send data up on connection
- `src/webRTCutilities/socketConnection.js`
- we send up to backend the jwt
- socketServer.js (*backend) instead of grabbing fullName `const fullName = socket.handshake.auth.fullName;`
- grab the jwt:  `const jwt = socket.handshake.auth.jwt;`
- grab decodedData from expressRoutes.js (/validate-link) `const decodedData = jwt.verify(token, linkSecret); //decode jwt with secret`
- grab from expressRoutes: linkSecret into socketServer.js (note: use env variable here...)
- const {fullName, proId} = decodedData;
- then we can push this onto connectedProfessionals


```js
//src/webRTCutilities/socketConnection.js
import {io} from 'socket.io-client';

const socketConnection = (jwt)=>{
  const socket = io.connect('https://localhost:9000', {
    auth: {
      jwt
    }
  });
}
export default socketConnection;
```

```js
//backend /socketServer.js
io.on("connection", (socket) => {
  console.log(socket.id, "has connected");

  const jwt = socket.handshake.auth.jwt;
  const decodedData = jwt.verify(token, linkSecret); //decode jwt with secret

   connectedProfessionals.push({
    socketId: socket.id,
    fullName,
    proId
  });


  //...
});

```

### 69. socket refactoring - (9min)
- backend
- frontend - localhost:9000/dashboard
- need to make socket connection (since up to here we only import it and we have since updated it to include jwt prop)
- socketConnection's socket() becomes a function `socketConnection()` which needs jwt
- ProDashboard.js -> make the socket connection -> `socketConnection(token);`
- this starts the socket connection, and we update it to return socket;
- TODO: 
    - check to see if user is already in connectedProfessionals
    - push onto connectedProfessionals ONLY if it cant find proId
    - this would happen because they have reconnected
- NOTE: currently on connect and reconnect a new socket id (but it only shows up once)...
- PROBLEM: it returns socket, and if we call the function each time we will connect each time
- FIX: singleton pattern (see socketConnection.js)



```js
//socketServer.js

//...
const connectedPro = connectedProfessionals.find(cp=> cp.proId === proId);

if(connectedPro){
  //just update the new socket.id

}else{
  //otherwise, push on connectedProfessionals
  connectedProfessionals.push({
    socketId: socket.id,
    fullName,
    proId
  });

}
```

```js
// socketConnection.js
import { io } from "socket.io-client";

const socketConnection = (jwt) => {
  let socket;

  //check to see if socket is already connected, 
  if (socket && socket.connected) {
    //if so, just return it...
    return socket;
  }

  //otherwise its not connected, connect!
  socket = io.connect("https://localhost:9000", {
    auth: {
      jwt,
    },
  });
  return socket;
};
export default socketConnection;

```
- @4min45sec
- back in MainVideoPage.js 
- rename `import socket ...` to `import socketConnection ...`
- get the token from the url
- create socket (which will have emit)
- get the socket from socketConnection
- with socketServer.js wrap the jwt.verify in try/catch to weed out users who dont belong (socket.disconnect())

```js
//socketServer.js
let decodedData;
try{
  decodedData = jwt.verify(handShakeData, linkSecret); //decode jwt with secret
}catch(err){
  console.log(err);
  socket.disconnect();
  return;
}
```

```js
//MainVideoPage.js

// import socket from '../webRTCutilities/socketConnection';
import socketConnection from '../webRTCutilities/socketConnection';

//...
//get the token from the url for the socket connection
const token = searchParams.get('token');
//get the socket form the socketConnection
const socket = socketConnection(token);
socket.emit('newOffer', {offer, apptInfo} );
```

- BACKEND
```js
//backend socketServer.js
const handShakeData = socket.handshake.auth.jwt;
let decodedData;
try{
  decodedData = jwt.verify(handShakeData, linkSecret); //decode jwt with secret
}catch(err){
  console.log(err);
  socket.disconnect();
  return;
}

//...
const {fullName, proId} = decodedData;
if(proId){
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
}else{
  //this is a client
}
```

### 70. Reorganize Appointment Data - (3min)
- our links: 
  - https://localhost:9000/pro-link

- OUTCOME -> 4. reorganize apptData (see frontend/ src/siteComponents/important-markup-for-dashboard.txt)
- it should be live data
- copy from source files -> `teleLegalSite/starterFiles/apptSeedData.js`
- what the code below does is fake persistent data
- benefit is that we dont have a random long uuid and refreshing the webpage has some fake persistent data
- NOTE: NOT FOR PRODUCTION

```js
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

//...
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
  professionalAppointments.push(apptData);
  //...
});
```

### 71. Pull Appointment Data - (9min)
- see [siteComponents/important-markup-for-dashboard](src/teleLegalSite/front-end-telelegal/src/siteComponents/important-markup-for-dashboard.txt)
- 5. pull back and diplay appointment data on connect
- backend socketServer.js
  - on connection, if there is a prodId (from decoded jwt), it means its a professional
  - send the appt data out to the professional
  - because we imported app, `const app = require('./server').app;`
  - `const professionalAppointments = app.get('professionalAppointments');`
  - NOTE: the lecturer uses the fullName as to filter, but there could be people with exact same name...
  - `socket.emit('appData', professionalAppointments.filter(pa=> pa.professionalsFullName === fullName))`... 
    - yields an array with just professionalFullName's appointments
- frontend ProDashboard.js
  - lesson71 - @2min55 - pull appointment data - below commented out...in favor of passing via socket (instead of sending it to backend)

```js
    // console.log(token);
    // const fetchDecodedToken = async () => {
    //   const resp = await axios.post("https://localhost:9000/validate-link", {
    //     token,
    //   });
    //   console.log(resp.data);
    //   setApptInfo(resp.data);
    // };
    // fetchDecodedToken(); 
```
- create `webRTCutilities/proSocketListeners.js` for socket listeners


- call it
- pass through `socket` and `setApptInfo()` 
```js
//ProDashboard.js
  const [apptInfo, setApptInfo] = useState([]);

  useEffect(()=>{
    const token = searchParams.get('token');
    const socket = socketConnection(token);
    proSocketListeners(socket, setApptInfo);

  }, [])
```

```js
//proSocketListeners.js
const proSocketListeners = (socket, setApptInfo)=>{
  socket.on(`apptData`, apptData => {
    //apptData is this specific professionals data
    console.log(apptData);
    setApptInfo(apptData);
  })
}
export default proSocketListeners;
```

### 72. Listen for offers on the client - (11min) 
- 2 use cases for when an offer comes in 
  - `socket.on('newOffer', ()=>{});`
  1. when user initiates by clicking to enable audio+video 
    - fetch offer,
    - match it to the professional (find who you want to chat to)
    - send out socket `.emit('newOfferWaiting')`

```js
//backend/ socketServer.js
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
```

  2. when professional initiates from dashboard because user already initiated (clicked join audio/start video) and is waiting 

```js
//backend/ socketServer.js
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
```

### 73. Create join video route for professional - (6min)

### 74. Add Call Info to Professional Video Page - (4min)

### 75. Create Answer and set Descriptions - (10min)

### 76. Review Task List and Cheer for Our Progress - (7min)

### 77. Emit Answer Up To Server - (8min)

### 78. Listen for New Answer On the Client - (12min)

### 79. Emit Ice Candidates To Server - (9min)

### 80. Send Ice Candidates to clients - (13min)

### 81. Add Ice Candidates to Peer Connection - (12min)

### 82. AddTracks and... VICTORY!!! (test app) - (6min)

### 83. Fix 2 small bugs - (2min)

### 84. Make the HangupButton do something! - (5min)

### 85. ReplaceTracks on change device - (8min)

---

---

---

---

---

---

---

---

---

## Section 06 - Deploying our Apps to AWS

### 86. Drawing Out And Explaining The Process - (15min)

### 87. Warning... this section is deploying, not WebRTC and might be hard - (1min)

### 88. Setting up a (hopefully) free AWS server to run our app on - (36min)

### 89. Getting a Domain & Setting it to point at our server & Install Apache - (17min)

### 90. Pulling files onto our server from github and building React - (20min)

### 91. htaccess file and vhost for next lecture - (1min)

### 92. Vhost - Telling Apache Where Our Sites Are - (12min)

### 93. Reverse Proxy Vhost - For the backend - (1min)

### 94. HTTPS and Reverse Proxy Vhost - (23min)

---

---

---

---

---

---

---

---

---

## Section 07 - Scaling WebRTC - beyond the mesh

### 95. Your options - an SFU, MCU, and mesh - (13min)

---

---

---

---

---

---

---

---
