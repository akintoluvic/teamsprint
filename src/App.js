import React from 'react';
// import AuthExample from './testPAge';
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        <Feed />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Feed} />
          <Route exact path="/rooms/:slug" component={SingleRoom} /> 
          <Route component={Error} />
        </Switch> */}
        {/* <AuthExample /> */}


        {/* { isUserAuthenticated() ? props.children : <Redirect to={routes.login} /> } */}
      </div>
    </Router>
  );
}

export default App;
