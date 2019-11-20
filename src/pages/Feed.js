import React from 'react';
import Navbar from "../components/Navbar";
import SmallProfile from "../components/SmallProfile";
import SidebarTags from "../components/SidebarTags";

export default function Feed() {
    return (
        <div>
            <Navbar />
            <div className='page-container'>
                <div className='sidebar'>
                    <SmallProfile />
                    <SidebarTags />
                    <p>©2019 Greene Teamwork. All rights reserved.</p>
                </div>
                <div className='main-feed'>
                    
                </div>
            </div>
        </div>
    )
}
