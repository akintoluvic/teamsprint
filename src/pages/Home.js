import React, { useState } from 'react';
import {
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

export default function Home(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let location = useLocation();
  
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
    return (
        <div className='home'>
            <div className='home-text' >
                <h1>Greene Teamwork App</h1>
                <p>
                Welcome to teamwork, great teams are powered by teamwork. Teamwork is all about collaboration, team building and excellent results. Get cranking.
                </p>
                <button onSubmit={handleSubmit}>Get started today</button>
            </div>
            <form onSubmit={handleSubmit} className='home-form'>
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
                <button type="submit">SIGNIN ></button>
            </form>
            <footer>©2019 Greene Teamwork. All rights reserved.</footer>
        </div>
    )
}
