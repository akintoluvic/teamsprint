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
        <div>
            <div className='home-text' >
                <h1>Greene Teamwork App</h1>
                <p>
                Welcome to teamwork, great teams are powered by teamwork. Teamwork is all about collaboration, team building and excellent results. Get cranking.
                </p>
                <button>Get Started ></button>
            </div>
            <div className='home-form' >
                <form onSubmit={handleSubmit}>
                    <label for="uname"><b>Email address</b></label>
                    <input type="text" placeholder="username@email.com" name="uname" required />
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
