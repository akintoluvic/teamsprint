import React, { Component } from "react";
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


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loading: true,
      // redirect: false,
      // profile: {
      //   userId: 1,
      //   firstName: 'Lola', lastName: 'Loki', email: 'ase@we.co',
      //   gender: 'male', jobRole: 'Bardy', department: 'Accounting',
      //   street: '12, Adewou street', area: 'Were LAne, Ota, Ogun'
      // },
      feed: {},
      token: '',
      isAuthenticated: false,
      profile: {}
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
        this.setState({
          // ...state,
          [e.target.name]: value
        });
  }
  pageAuth(val, valu) {
    console.log(val)
    this.setState({
      isAuthenticated: val,
      profile: valu
    });
  }
  handleLogin(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:3001/api/v1/auth/signin", options)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          console.log(res.error);
          this.setState({
            ...this.state,
            err: res.error
          });
          console.log(this.state.err);
          return this.props.history.push("/");
        }
        console.log(res);
        this.pageAuth(true, res.data);
        this.props.history.push("/feed");
      })
      .catch(error => console.log(error));

    // props.userHasAuthenticated(true);
  }
  render() {
    return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} setAuth={this.pageAuth} />
            {/* <Home/>
          </Route> */}
          <ProtectedRoute auth={this.state.isAuthenticated}>
            <AllFeed />
          </ProtectedRoute>
          {/* <Route exact path="/feed" component={AllFeed} /> */}
        </Switch>

        {/* { isUserAuthenticated() ? props.children : <Redirect to={routes.login} /> } */}
      </div>
    </Router>
  );
        }
}


function ProtectedRoute(props) {
  if (!props.auth) {
    // props.history.push("/");
    return <Route component={Home}/>
  }
  return (
    <Route component={AllFeed}/>
  );
}

