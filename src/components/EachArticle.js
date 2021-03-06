import React from 'react';
import { Link } from "react-router-dom";

export default function EachArticle(props) {
    const { tfeed } = props
    console.log(tfeed);
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
            <p>
                {tfeed.article}
            </p>
            <div className='footer'>
                <button className='btn'>{tfeed.tag}</button>
                <Link to='/feed' className='link'>
                    <button className='btn'>BACK TO feed</button>
                </Link>
            </div>
        </div>
    )
}
