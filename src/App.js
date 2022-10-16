import Choose from 'pages/choose/Choose';
import Login from 'pages/Login';
import Playlist from 'pages/playlist/Playlist';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/choose' element={<Choose/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
      </Routes>
    </div>
  );
};

export default App;
