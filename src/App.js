import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/Error';


function App() {
  const [mode, setMode] = useState("light")
  const [btntext, setBtnText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      setBtnText("Disable Dark Mode")
      document.body.style.backgroundColor = 'rgb(21 22 37)'
      showAlert("Dark Mode Set", 'success')

    }
    else {
      setMode("light")
      setBtnText("Enable Dark Mode")
      document.body.style.backgroundColor = 'white'
      showAlert("light Mode Set", 'success')

    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} btntext={btntext} />
        <Alert alert={alert} />
        <Routes>
          <Route  path='/' element={(<TextFrom showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces " mode={mode} />)}></Route>
          <Route  path='/index.html' element={(<TextFrom showAlert={showAlert} heading="Enter the text to Analyze." mode={mode} />)}></Route>
          <Route  path='/about' element={(<About mode={mode} />)}></Route>
          <Route  path='*' element={(<Error mode={mode} />)}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
