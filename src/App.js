
import './App.css';

import React from 'react';

import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Validate from './template/react';
import Header from './responsive webpage/Header';
import Section1 from './responsive webpage/Section1';
import Section2 from './responsive webpage/Section2';
import Section3 from './responsive webpage/Section3';
import Section4 from './responsive webpage/Section4';





function App() {
 

  return (
    <div>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    

   </div>
  );
}

export default App;
