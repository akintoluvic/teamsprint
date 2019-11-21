import React from 'react';
import Article from "../components/Article";
import Image from "../components/Image";
import Comment from "../components/Comment";
import AllComment from "../components/AllComment";
import Navbar from "../components/Navbar";
import SmallProfile from "../components/SmallProfile";
import SidebarTags from "../components/SidebarTags";


export default function Feed() {
    return (
        <div>
          <Navbar />
          <div className="page-container">
            <div className="sidebar">
              <SmallProfile />
              <SidebarTags />
              <p>©2019 Greene Teamwork. All rights reserved.</p>
            </div>
            <div className="main-feed">
            <Article />
            <Comment />
            <AllComment />
            </div>
          </div>
        </div>
      );
}

