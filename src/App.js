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
  handleLogin = async (e) => {
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
    const response = await fetch(`${baseUrl}/auth/signin`, options)
      .then(res => res.json())
        if (response.error) {
          this.setState({
            ...this.state,
            err: response.error
          });
          return this.props.history.push("/");
        }
        this.setState({
          isAuthenticated: true,
          profile: response.data,
          token: response.token
        });
        const token = `Bearer ${response.token} ${response.userId}`
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('id', response.userId);
        // let history = useHistory();
        this.props.history.push("/feed");
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

// export const baseUrl = "http://localhost:3001/api/v1"
export const baseUrl = "https://workplace-teamwork.herokuapp.com/api/v1"
