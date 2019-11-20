import React from 'react';

export default function AllComment() {
    return (
        <div className='each-feed'>
            <h3>COMMENTS</h3>
            <EachComment />
        </div>
    )
}
function EachComment() {
    return (
        <div className='each-comment'>
            <div className='left'>
                <button className='user'>AS</button>
                <span>21m</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla faucibus egestas elit, at eleifend elit ornare ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
            </p>
        </div>
    )
}
