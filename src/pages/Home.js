import React, { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className='home'>
            <div className='home-text' >
                <h1>Greene Teamwork App</h1>
                <p>
                Welcome to teamwork, great teams are powered by teamwork. Teamwork is all about collaboration, team building and excellent results. Get cranking.
                </p>
                {/* <button>Get started today</button> */}
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
