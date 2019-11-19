import React, { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    
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
                <button>Get Started ></button>
            </div>
            <form onSubmit={handleSubmit} className='home-form'>
                <p>Signin</p>
                <label for="uname">Email address</label>
                <br></br>
                <input type="email" placeholder="username@email.com" name="uname" required />
                <br></br>
                <label for="psw">Password
                <br></br>
                <input type="password" placeholder="Enter Password" name="psw" required /></label>
                <br></br>
                <button type="submit">SIGNIN ></button>
            </form>
        </div>
    )
}
