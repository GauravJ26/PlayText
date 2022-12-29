  import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState } from 'react';
import Alert from './components/Alert';



function App() { 

  const[mode, setMode] = useState('light');

  const [alert, setAlert] = useState('initialState')

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
}

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enable", "success")
      }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable", "success")
    }
};


  return (
<>

<Navbar   title="GJ stylr" aboutText="for more info" mode={mode} toggleMode={toggleMode}/>

<Alert alert =" this is alert text" />

<div className="container my-3">
<TextForm heading="enter ur text to analyze"/>


</div>

</>
  ); 
}

export default App;
