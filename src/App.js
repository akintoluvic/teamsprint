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
          this.setState({
            ...this.state,
            err: res.error
          });
          return this.props.history.push("/");
        }
        console.log(res);
        this.setState({
          isAuthenticated: true,
          profile: res.data,
          token: res.token
        });
        const token = `Bearer ${res.token} ${res.userId}`
        sessionStorage.setItem('token', token);
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
          <ProtectedRoute path='/feed/:id' auth={this.state.isAuthenticated} />
          <ProtectedRoute path='/profile' auth={this.state.isAuthenticated} />
          <ProtectedRoute path='/edit-profile' auth={this.state.isAuthenticated} />
        </Switch>
        {/* { isUserAuthenticated() ? props.children : <Redirect to={routes.login} /> } */}
      </div>
  );
        }
}

export default withRouter(App);


function ProtectedRoute(props) {
  let token = sessionStorage.getItem('token');
  return (
    <>
    {/* return this.props.history.push("/"); */}
    {/* { !props.auth ? <Route exact path='/' component={Home}/> : <Route component={AllFeed}/> } */}
    { !token ? <Route exact path='/' component={Home}/> : <Route component={AllFeed}/> }
    </>
  );
}

