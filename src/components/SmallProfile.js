import React from 'react';
import avatar from '../images/avatar.jpg';

export default function SmallProfile() {
    return (
        <div className='small-profile'>
            <img src={avatar} alt='user-avatar' />
            <p>Web Designer</p>
            <h3>Vick Greenfields SO</h3>
            <div>View Profile</div>
        </div>
    )
}
