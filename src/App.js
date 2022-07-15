import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Theme from './components/Theme';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const [theme, setTheme] = useState('dark')

  function toggleTheme(e) {
    setTheme(e.target.value)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTheme('light');
      document.body.style.backgroundColor = "black"

      document.title = "TextUtils - Dark Mode";

      showAlert("Dark mode has been enabled", "Success");

      // For Fun
      // setInterval(() => {
      //   document.title = 'Virus is here!!!!'
      // }, 2000)
      // setInterval(() => {
      //   document.title = 'Install TextUtils!!!'
      // }, 1500)

    }
    else {
      setMode('light');
      setTheme('dark');
      document.body.style.backgroundColor = "white"

      document.title = "TextUtils - Light Mode";

      showAlert("Light mode has been enabled", "Success");
    }
  }
  const [mode, setMode] = useState("light");  // Whether dark mode is enable or not


  return (
    <>
    <Router>

      <Navbar title="TextUtils" homepage="Home" currMode={mode} toggleMode={toggleMode} currTheme={theme} />

      <Theme toggleTheme={toggleTheme} />

      <div className="container">
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/about" element={<About currMode={mode} currTheme={theme} />}>
          </Route>

          <Route exact path="" element={<TextForm showAlert={showAlert} heading="Enter text to Analyze:" currMode={mode} currTheme={theme} />}></Route>
        </Routes>

      </div>

    </Router>
    </>
  );
}

export default App;
