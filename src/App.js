import React, { useState } from 'react'
import './App.css';
// import Alert from './components/Alert';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
   const  [mode, setMode] = useState("light") ;
  return (
    <>
    
    
   
  
   <Navbar title="textutiles" />
   <div className='container my-3'>
   
        <TextForm  heading="Enter the text to analyze"/>
    

   </div>
   
   
   </>
  );
}

export default App;
