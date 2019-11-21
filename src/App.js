import React from 'react';
// import AuthExample from './testPAge';
import Home from "./pages/Home";
import AllFeed from "./pages/AllFeed";
import ProfileForm from "./components/ProfileForm";
import Feed from "./pages/Feed";
import EachPost from "./pages/EachPost";
import Post from "./partials/Post";
import CreatePost from "./pages/CreatePost";

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
      <Switch>
            <Route exact path="/" component={Home}/>
              <Route exact path="/feed">
                <Feed />
              </Route>
              <Route exact path="/create-user">
                <ProfileForm />
              </Route>
              <Route exact path="/post">
                <CreatePost />
              </Route>
              <Route exact path="/a-post">
                <EachPost />
              </Route>
              <Route component={Error} />
        </Switch>


        {/* { isUserAuthenticated() ? props.children : <Redirect to={routes.login} /> } */}
      </div>
    </Router>
  );
}

export default App;
