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
  const [state, setState] = React.useState({
    isAuthenticated: false,
    profile: {}
  })
  function pageAuth(val, valu) {
    setState({
      isAuthenticated: val,
      profile: valu
    });
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} setAuth={pageAuth} />
            {/* <Home/>
          </Route> */}
          <ProtectedRoute auth={state.isAuthenticated}>
            <AllFeed />
          </ProtectedRoute>
          {/* <Route exact path="/feed" component={AllFeed} /> */}
        </Switch>

        {/* { isUserAuthenticated() ? props.children : <Redirect to={routes.login} /> } */}
      </div>
    </Router>
  );
}

export default App;


function ProtectedRoute(props) {
  if (!props.auth) {
    // props.history.push("/");
    return <Route component={Home}/>
  }
  return (
    <Route component={AllFeed}/>
  );
}

