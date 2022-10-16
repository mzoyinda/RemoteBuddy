import Choose from 'pages/choose/Choose';
import Login from 'pages/Login';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Meetings from './pages/Meetings';
import Remind from './pages/Remind';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/choose' element={<Choose/>}/>
        <Route path='/remind' element={<Remind/>}/>
        <Route path='/meetings' element={<Meetings/>}/>
      </Routes>
    </div>
  );
};

export default App;
