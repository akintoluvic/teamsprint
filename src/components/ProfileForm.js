import React, { useState } from 'react';
import sampleImage from '../images/sample-image.png';

export default function Post() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <>
        <div className='each-feed post'>
            <div className='headers'>
                <h2 className='title'>Profile</h2>
                <button className='btn'>Back to My feed</button>
            </div>
        </div>
        {/* <div className='each-feed post'>
            <div>
                <label for="title">Post Title*</label>
                <br></br>
                <input 
                    placeholder="username@email.com" 
                    className='comment'
                    name="title" 
                    autoFocus
                    type="text"
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                    required 
                />
            </div> */}
            <form onSubmit={handleSubmit} className='profile-form'>
                <label for="uname">Email address
                <br></br>
                <input 
                    placeholder="username@email.com" 
                    name="uname" 
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required 
                /></label>
                <label for="psw">Password
                <br></br>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required 
                /></label>
                <button type="submit">SIGNIN ></button>
                <button type="submit">SIGNIN ></button>
            </form>
            
        {/* </div> */}
        </>
    )
}
