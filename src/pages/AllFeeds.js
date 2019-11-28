import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SmallProfile from "../components/SmallProfile";
import SidebarTags from "../components/SidebarTags";
import EditProfile from "../components/EditProfile";
import ProfileDisplay from "../components/ProfileDisplay";
import CreateUser from "../components/CreateUser";
import Feed from "../partials/Feed";
import EachPost from "../partials/EachPost";
import Post from "../partials/Post";
import {
  Switch,
  Route,
  // useParams,
  // useHistory,
  // useLocation
} from "react-router-dom";

export default function AllFeed(props)  {
    const [profile, setProfile] = useState({})
    const [feed, setFeed] = useState([])
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        jobRole: "",
        department: "",
        street: "",
        area: ""
      })
  const getPosts = async () => {
    const token = sessionStorage.getItem('token')
    const options = {
      method: "GET",
      // body: {JSON.stringify(user)},
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    };
    const response = await fetch("http://localhost:3001/api/v1/feed", options)
    const feed = await response.json();
    if(feed.error) {console.log(feed.error)}
    setFeed({
              feed: feed.data
            });
  }
  const getProfile = async () => {
    const token = sessionStorage.getItem('token')
    const options = {
      method: "GET",
      // body: {JSON.stringify(user)},
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    };
    const response = await fetch("http://localhost:3001/api/v1/auth/profile/49", options)
    const profile = await response.json();
    if(profile.error) {console.log(profile.error)}
    setProfile({
      profile: profile.data
    });
    console.log(profile.error)
  }
useEffect(() => {
    getPosts();
     getProfile();
})
    
    //  this.setState({
    //   feed
    // });
//   }

  const handleChange = e => {
    console.log(e.target.value);
    const newValue = { [e.target.name]: e.target.value }
    this.setState({
          // [e.target.name]: e.target.value
          newUser: {...this.state.newUser, newValue }
          // [this.state.newUser{e.target.name}]: e.target.value
        });
  };
    // let { id } = useParams();
    return (
      <div>
        <Navbar />
        <div className="page-container">
          <div className="sidebar">
            <SmallProfile />
            <SidebarTags />
            <p>©2019 Greene Teamwork. All rights reserved.
            </p>
          </div>
          <div className="main-feed">
            <Switch>
              <Route path="/feed">
                <Feed myFeeds={feed}/>
              </Route>
              <Route path="/create-user">
                <CreateUser
                  userProfile={newUser}
                  button="CREATE USER"
                //   profileChange={handleChange}
                />
              </Route>
              <Route path="/profile">
                <ProfileDisplay
                  userProfile={profile}
                  button="EDIT PROFILE"
                />
              </Route>
              <Route path="/edit-profile">
                <EditProfile 
                  userProfile={profile}
                  button="UPDATE PROFILE"
                />
              </Route>
              <Route path="/post">
                <Post />
              </Route>
              {/* <Route path="/feed/:id">
                <EachPost />
              </Route> */}
              <Route path="/feed/:id" children={<EachPost />}/>

              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
