import React from 'react';
import sampleImage from '../images/sample-image.png';

export default function Comment() {
    return (
        <div className='each-feed'>
            <textarea 
                className='comment'
                rows="4" 
                cols="50" 
                placeholder='Write your comment here...'
            ></textarea>
            <div className='footer'>
                <button className='btn'>work stuff</button>
                <button className='btn'>VIEW full POST and COMMENTS</button>
            </div>
        </div>
    )
}
