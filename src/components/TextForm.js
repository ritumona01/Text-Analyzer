import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick =()=>{
    console.log("Lowercase was clicked" + text);
    let newText = (" ");
    setText(newText)
  }

  const handleClearClick = ()=>{
     let newText = (" ");
    setText(newText)
  }

  const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value);
  }

   const handleCopy=()=>{
     console.log("I am copy")
    var text = document.getElementsById("myBox");
     text.select();
    //  text.setselectionRange(0, 9999);
     navigator.clipboard.writeText(text.value);
   }

   const handleExtraSpace =()=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
   }

  const [text, setText]= useState(' ');
  // text ="new text"; wrong way to change the state
  // setText =("new text"); correct way to change the state
    return(
      <>
        <div className='container'>
        <h1>{props.heading}</h1>
  
  <div className="mb-3">
  
  <textarea className="form-cntrol" value={text} onChange={handleOnChange} id="myBox"  cols="100" rows="8"></textarea> 
  </div>
  
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" class="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  
  <button type="button" class="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
  
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button type="button" class="btn btn-success mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
  
  
  
  
</div>
<div className="container my-2">
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length }charecters</p>
  <p>{0.008 * text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>


    )
    
};

