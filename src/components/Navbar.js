import React from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='contents'>
                <div className='brand'>
                    <img src={logo} alt='Team Logo'/>
                    <h2>Teamwork</h2>
                </div>
                <div className='navs'>
                    <Link to="/public" className='link'>my feed</Link>
                    <Link to="/public" className='link'>profile</Link>
                    <Link to="/public" className='link'>tags</Link>
                    <Link to="/public" className='link'>create-post</Link>
                    <button className='user'>
                        AS
                    </button>
                </div>
            </div>
        </div>
    )
}
