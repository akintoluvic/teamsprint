import React from 'react';
import { Link } from "react-router-dom";

export default function Home(props) {
    const {value, handleChange, handleSubmit} = props;

    return (
        <div className='home'>
            <div className='home-text' >
                <h1 className='desktop'>Greene Teamsprint App</h1>
                {/* <h2 className='mobile'>Teamsprint</h2> */}
                <p>
                Welcome to teamsprint. Teamsprint is all about collaboration, team building and excellent results. Great teams are powered by teamsprint, get cranking.
                </p>
                <Link to='/feed'>
                {/* <button >Get started today</button> */}
                </Link>
            </div>
            <form onSubmit={handleSubmit} className='home-form' 
                >
                <p>Signin</p>
                <label htmlFor="email">Email address</label>
                <br></br>
                <input 
                    placeholder="username@email.com" 
                    name="email" 
                    autoFocus
                    type="email"
                    value={value.email}
                    onChange={handleChange}
                    required 
                />
                <br></br>
                <label htmlFor="password">Password</label>
                <br></br>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                    required 
                />
                {(value.err.lenght === '') ? <br></br> : <p className='error'>{value.err}</p>}
                <button >start sprint</button>
            </form>
            <footer>©2020 Vick Greenfields. All rights reserved.</footer>
        </div>
    )
}
