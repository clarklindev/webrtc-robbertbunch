import {BrowserRouter, Routes, Route  } from 'react-router-dom';
import socketConnection from './webRTCutilities/socketConnection';
import MainVideoPage from './videoComponents/MainVideoPage';
import ProMainVideoPage from './videoComponents/ProMainVideoPage';

import ExternalRedirect from './utilities/ExternalRedirect';
import ProDashboard from './siteComponents/ProDashboard';

import './App.css';

const Home = ()=>{
  return (
  <>
    <h1>Home page</h1>
    <div>
      Visit <a href="https://localhost:9000/user-link" target="_self" rel="noopener noreferrer">User Link</a>
    </div>
  </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/join-video" Component={MainVideoPage}/>
        <Route path="/dashboard" Component={ProDashboard}/>
        <Route path="/join-video-pro" Component={ProMainVideoPage}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
