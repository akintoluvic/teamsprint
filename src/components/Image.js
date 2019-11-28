import React from 'react';
import sampleImage from '../images/sample-image.png';

export default function Article(props) {
    const { tfeed } = props
    if(tfeed === undefined) {
        return <div>Loading...</div>
    }
    return (
        <div className='each-feed'>
            <div className='headers'>
                <div className='left'>
                    <button className='user'>AS</button>
                    <h2 className='title'>{tfeed.title}</h2>
                </div>
                <button className='btn'>{(Date.now() - parseInt(tfeed.createdon))/1 }</button>
            </div>
            <img className='image' src={tfeed.imageurl} alt='feed title'/>
            <div className='footer'>
                <button className='btn'>{tfeed.tag}</button>
                <button className='btn'>VIEW full POST and COMMENTS</button>
            </div>
        </div>
    )
}
