import React from 'react';
import sampleImage from '../images/sample-image.png';

export default function Post() {
    return (
        <>
        <div className='each-feed post'>
            <div className='headers'>
                <h2 className='title'>Post</h2>
                <button className='btn'>Back to My feed</button>
            </div>
        </div>
        <div className='each-feed post'>
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
            <label for="article">Post Body*</label>
            <br></br>
            <textarea 
                className='comment'
                name="article"
                rows="4" 
                cols="50" 
                placeholder='Write your comment here...'
            ></textarea>
            <div>
                <label for="image">Upload Image</label>
            <input type="file" name="image" id="" disabled/>
            </div>
            
            
            <div className='headers'>
                <div className='left'>
                    <label for="tag">Article Tag*</label>
                    <input 
                        placeholder="Type tag here..." 
                        className='comment'
                        name="tag" 
                        autoFocus
                        type="text"
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button className='btn'>POST ARTICLE</button>
            </div>
        </div>
        </>
    )
}
