import React, {useState} from 'react'

export default function TextForm(props) {
   const handleUpCLick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
   }

   const handleLowCLick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
   }

   const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
   }
   
   const handleClear = (event) => {
    console.log("On CLear All");
    let newText = ""
    setText(newText)
   }
   
   
   const handleTitleCase = (event) => {
    console.log("Titlecase was clicked");
    let str = text.toLowerCase().split(' ');
    let final = [ ];
     for(let word of str){
       final.push(word.charAt(0).toUpperCase() + word.slice(1));
     }
    setText(final.join(' '))
   }
   
    const [text, setText] = useState('Enter text here2');
    
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>  
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpCLick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowCLick}>Convert To Lowerercase</button>
      <button className="btn btn-primary mx-1" onClick={handleTitleCase}>Convert To Titlecase</button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear All</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.length>0?text.split(" ").length:'0'} words and {text.length} characters</p>
        <p>{text.length>0?0.008 * text.split(" ").length:'0'} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textarea above!!"}</p>
    </div>
  </>
  )
}


//text = "hqhaha" --> Wrong way to chamge the text; This will give an error
//setText("new text") --> Correct way to change the state