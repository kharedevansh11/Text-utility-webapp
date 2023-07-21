/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


function App() {

    const [mode,setMode] =useState("light");
    const [btnText,setbtnText] = useState("enable dark mode");


    const toggleMode = () =>{
      if(mode ==="light")
      {
        setMode("dark");
        setbtnText("disable dark mode");
        document.body.style.backgroundColor = "#052c65";
      }
      else{
        setMode("light");
        setbtnText("enable dark mode");
        document.body.style.backgroundColor = "white";
      }
    };
  return (
     <>
    
      <BrowserRouter>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
          <div className="container my-3" >
                <Switch>
                    <Route  path='/about' >
                        <About mode={mode}/>
                    </Route>
                  
                    <Route path='/'>
                          <TextForm heading ="Enter text to analyze " mode={mode}/>
                    </Route>
                 </Switch>   
           </div>
       </BrowserRouter>       
     </>
     

    
  );
}

export default App;
