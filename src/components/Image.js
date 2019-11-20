import React from 'react';
import sampleImage from '../images/sample-image.png';

export default function Article() {
    return (
        <div className='each-feed'>
            <div className='headers'>
                <button className='user'>AS</button>
                <h2 className='title'>Simple Text Headers in this World</h2>
            </div>
            <img className='image' src={sampleImage} alt='feed title'/>
            <div className='footer'>
                <button className='btn'>work stuff</button>
                <button className='btn'>VIEW full POST and COMMENTS</button>
            </div>
        </div>
    )
}
