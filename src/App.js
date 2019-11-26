import React, { Component } from "react";
// import AuthExample from './testPAge';
import Home from "./pages/Home";
import AllFeed from "./pages/AllFeed";

import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import "./App.css";


class App extends Component {
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
      profile: {},
        email: '',
        password: '',
        err: '',
    };
  }
  handleInputValue = (e) => {
    console.log(e.target.value);
    console.log(this.props.history);
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
  handleLogin = (e) => {
    e.preventDefault();
    console.log(this.state.email);
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
        this.setState({
          isAuthenticated: true,
          profile: res.data
        });
        // let history = useHistory();
        this.props.history.push("/feed");
      })
      .catch(error => console.log(error));

    // props.userHasAuthenticated(true);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home 
            handleSubmit={this.handleLogin} 
            handleChange={this.handleInputValue} 
            value={this.state} />
          </Route>
          <ProtectedRoute path='/feed' auth={this.state.isAuthenticated}>
            <AllFeed />
          </ProtectedRoute>
          <ProtectedRoute path='/profile' auth={this.state.isAuthenticated} />
          <ProtectedRoute path='/post' auth={this.state.isAuthenticated} />
          <ProtectedRoute path='/create-user' auth={this.state.isAuthenticated} />
          <ProtectedRoute path='/a-post' auth={this.state.isAuthenticated} />
          <ProtectedRoute path='/profile' auth={this.state.isAuthenticated} />
          <ProtectedRoute path='/profile' auth={this.state.isAuthenticated} />
        </Switch>
        {/* { isUserAuthenticated() ? props.children : <Redirect to={routes.login} /> } */}
      </div>
  );
        }
}

export default withRouter(App);


function ProtectedRoute(props) {
  // if (!props.auth) {
  //   // props.history.push("/");
  //   return <Route component={Home}/>
  // }
  return (
    <>
    {/* <Route component={AllFeed}/> */}
    { !props.auth ? <Route component={Home}/> : <Route component={AllFeed}/> }
    </>
  );
}

