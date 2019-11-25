import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import SmallProfile from "../components/SmallProfile";
import SidebarTags from "../components/SidebarTags";
import ProfileForm from "../components/ProfileForm";
import ProfileDisplay from "../components/ProfileDisplay";
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

  export default class AllFeed extends Component {
    constructor() {
      super();
      this.state = {
        // loading: true,
        // redirect: false,
        profile: {
          userId: 1,
          firstName: 'Lola', lastName: 'Loki', email: 'ase@we.co',
          gender: 'male', jobRole: 'Bardy', department: 'Accounting',
          street: '12, Adewou street', area: 'Were LAne, Ota, Ogun'
        },
        feed: {}
      };
    }
    handleChange = (e) => {
      console.log(e.target.value);
    }
    render() {
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
                <ProfileForm 
                userProfile={this.profile}
                button='CREATE USER'
                profileChange={this.handleChange}
              />
              </Route>
              <Route path="/profile" >
                <ProfileDisplay 
                  userProfile={this.state.profile}
                  button='EDIT PROFILE'
                />
              </Route>
              <Route path="/edit-profile">
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
}
