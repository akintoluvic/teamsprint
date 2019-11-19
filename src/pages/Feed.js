import React from 'react';
import Navbar from "../components/Navbar";
import SmallProfile from "../components/SmallProfile";

export default function Feed() {
    return (
        <div>
            <Navbar />
            <div className='page-container'>
                <div className='sidebar'>
                    <SmallProfile />
                </div>
                <div className='main-feed'>

                </div>
            </div>
        </div>
    )
}
