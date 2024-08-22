
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was Clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");

    }

    const handleLoClick=()=>{
        // console.log("Uppercase was Clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to Lowercase","success");
    }

    const handleClearClick=()=>{
      let newText="";
      setText(newText)
  }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }


    const[text,setText]= useState(" ");
  
    return (
      <>
    {/* <div className="container"> */}
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <h1>{props.heading}</h1>
      {/* <div className="mb-3"> */}
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <textarea 
        // className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8">
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
                backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="myBox"
            rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>


    </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}




