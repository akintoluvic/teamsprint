import React, { useState } from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='navbar'>
            <div className='contents'>
                <div className='brand'>
                    <img src={logo} alt='Team Logo'/>
                    <h2>Teamsprint</h2>
                </div>
                <div className='navs'>
                    <Link to="/feed" className='link'>my feed</Link>
                    <Link to="/profile" className='link'>profile</Link>
                    {/* <Link to="/#" className='link'>tags</Link> */}
                    <Link to="/post" className='link'>create-post</Link>
                    <Link to="/create-user" className='link'>create-user</Link>
                    {/* <Link to={`/feed/${id}`} className='link'>single post</Link> */}
                    <Link to="/" onClick={() => sessionStorage.clear()} className='link'>Logout</Link>
                    <button className='user'>
                        AS
                    </button>
                </div>
                <ul className={isOpen?"nav-links show-nav":"nav-links"} >
                    <li>
                        <Link to="/feed" className='link'>my feed</Link>
                    </li>
                    <li>
                        <Link to="/profile" className='link'>profile</Link>
                    </li>
                    <li>
                        <Link to="/post" className='link'>create-post</Link>
                    </li>
                    <li>
                        <Link to="/create-user" className='link'>create-user</Link>
                    </li>
                    <li>
                        <Link to="/feed/tags" className='link'>create-user</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => sessionStorage.clear()} className='link'>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
