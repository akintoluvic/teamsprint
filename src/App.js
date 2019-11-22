import React from "react";
// import AuthExample from './testPAge';
import Home from "./pages/Home";
import AllFeed from "./pages/AllFeed";

import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={AllFeed} />
        </Switch>

        {/* { isUserAuthenticated() ? props.children : <Redirect to={routes.login} /> } */}
      </div>
    </Router>
  );
}

export default App;
