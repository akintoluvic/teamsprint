import React from 'react';
// import AuthExample from './testPAge';
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        {/* <AuthExample /> */}
      </div>
    </Router>
  );
}

export default App;
