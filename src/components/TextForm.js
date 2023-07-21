
import React, { useState } from 'react'


export default function TextForm(props) {
  const[text,setText] = useState("Enter text here");


   const [searchText,setSearchText] = useState("");
   
        
    const handleSearch = ()=>{
         let newSearch = prompt("enter word you want to search");
      setSearchText(newSearch );
      if(text.includes(searchText))
    {
      alert("word found");
    }
    else{
      alert("no such word found");
    }
    };
    const handleReplace = ()=>{
      
      const updatedText = text.replaceAll(searchText,prompt("enter the new text"));
      setText(updatedText);
    };
    
        const handleUpClick = ()=>{
          console.log("upper case was clicked");
          let newText = text.toUpperCase();
          setText(newText);
        }

        const handleLoClick =() =>{
          let newText = text.toLowerCase();
          setText(newText);
        }

        const handleClearClick =()=>{
          let newText ="";
          setText(newText);
        }

        const onChange = (event) =>{
          console.log("on change");
          setText(event.target.value);
        }
  
  return (
    <>
    <div className='container' style={{color:props.mode ==="dark"?"white":"#052c65"}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="myBox"></label>
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={onChange} style={{backgroundColor:props.mode==="dark"?"rgb(49 90 158)":"white",color:props.mode==="dark"?"white":"#052c65"}}></textarea>
    </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 " onClick={handleUpClick}>convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleSearch}  >Search</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleReplace}  >replace</button>
        

    </div>
    <div className="container my-2" style={{color: props.mode ==="dark"?"white":"#052c65"}}>
        <h2>Text Summary</h2>
        <p>{ text.split(/\s|\n/).filter((element)=>{ return element.length!==0}).length } words,{text.length} characters</p> 
        <p>{0.008 * text.split(/\s|\n/).filter((element)=>{ return element.length!==0}).length} minute read</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
    </div>


    </>

  )
}
