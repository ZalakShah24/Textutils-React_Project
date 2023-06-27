// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      document.title = 'Textutils - Dark'
      showAlert(" Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.title = 'Textutils - Light'
      showAlert(" Light mode has been enabled","success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils2" mode={mode} toggleMode = {toggleMode} />
    <Alert alert = {alert}/>
    <div className="container">
    {/* <Routes> */}
          {/* <Route exact path="/about" element = {<About/>}/> */}
          {/* <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading = "Enter The text to analyse below" mode={mode} />}/> */}
          <TextForm showAlert = {showAlert} heading = "Enter The text to analyse below" mode={mode} />
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
    );
}

export default App;
