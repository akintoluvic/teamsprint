import React from 'react';
import Navbar from "../components/Navbar";
import SmallProfile from "../components/SmallProfile";
import SidebarTags from "../components/SidebarTags";
import ProfileForm from "../components/ProfileForm";
import Feed from "../partials/Feed";
import EachPost from "../partials/EachPost";
import Post from "../partials/Post";
import {
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  

export default function AllFeed() {
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
            <Switch>
              <Route path="/feed">
                <Feed />
              </Route>
              <Route path="/create-user">
                <ProfileForm />
              </Route>
              <Route path="/post">
                <Post />
              </Route>
              <Route path="/a-post">
                <EachPost />
              </Route>
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </div>
    );
}
