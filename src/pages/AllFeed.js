import React from 'react';
import Navbar from "../components/Navbar";
import SmallProfile from "../components/SmallProfile";
import SidebarTags from "../components/SidebarTags";
import Feed from "../partials/Feed";
import EachPost from "../partials/EachPost";
import Post from "../partials/Post";

export default function AllFeed() {
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
                    {/* <Feed /> */}
                    {/* <EachPost /> */}
                    <Post />
                </div>
            </div>
        </div>
    )
}
