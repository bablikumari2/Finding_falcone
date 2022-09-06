import "./App.css";
import Main from "./Components/Main";

import Result from "./Components/Result";
import React from 'react'
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    
     
        <Routes>
        <Route path = '/' element={<Main/>} exact = {true} />
        <Route path = '/Result' element={<Result/>}/>
        </Routes>
     
    
  );
}

export default App;
