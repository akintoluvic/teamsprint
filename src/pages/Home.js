import React, { useState } from 'react';
import {
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

export default function Home(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let location = useLocation();
    
    // state = {
    //     toDashboard: false,
    //   }
    //   handleSubmit = (user) => {
    //     saveUser(user)
    //       .then(() => this.setState(() => ({
    //         toDashboard: true
    //       })))
    //   }
    //   render() {
    //     if (this.state.toDashboard === true) {
    //       return <Redirect to='/dashboard' />
    //     }
    
  
    function handleSubmit(event) {
        // event.preventDefault();
        return <Redirect
        to={{
          pathname: "/feed",
          state: { from: location }
        }}
        // props.userHasAuthenticated(true);
        // props.history.push("/");
      />
    }
    function onSubmit() {
        if("true" === true){
            props.history.push('/feed');
            return  <Redirect  to="/feed" />
        }
    }
    return (
        <div className='home'>
            <div className='home-text' >
                <h1>Greene Teamwork App</h1>
                <p>
                Welcome to teamwork, great teams are powered by teamwork. Teamwork is all about collaboration, team building and excellent results. Get cranking.
                </p>
                <Link to='/feed'>
                <button onClick={handleSubmit}>Get started today</button>
                </Link>
            </div>
            <form onClick={handleSubmit} className='home-form'>
                <p>Signin</p>
                <label for="uname">Email address</label>
                <br></br>
                <input 
                    placeholder="username@email.com" 
                    name="uname" 
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required 
                />
                <br></br>
                <label for="psw">Password</label>
                <br></br>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required 
                />
                <br></br>
                <button onClick={onSubmit}>Get started today</button>
            </form>
            <footer>©2019 Greene Teamwork. All rights reserved.</footer>
        </div>
    )
}
