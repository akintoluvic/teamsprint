import React, { Component } from "react";
import { baseUrl } from "../App"
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

export default class AllFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loading: true,
      // redirect: false,
      profile: {
        userId: 1,
        firstName: "Lola",
        lastName: "Loki",
        email: "ase@we.co",
        gender: "male",
        jobRole: "Bardy",
        department: "Accounting",
        street: "12, Adewou street",
        area: "Were LAne, Ota, Ogun"
      },
      feed: [],
    };
  }
  getPosts = async () => {
    const token = sessionStorage.getItem('token')
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        // "crossorigin": "anonymous"
      }
    };
    const response = await fetch(`${baseUrl}/feed`, options)
    const feed = await response.json();
    if(feed.error) {console.log(feed.error)}
    this.setState({
              feed: feed.data
            });
    console.log(feed.data)
  }
  getProfile = async () => {
    const token = sessionStorage.getItem('token')
    const id = sessionStorage.getItem('id')
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        // "crossorigin": "anonymous"
      }
    };
    const response = await fetch(`${baseUrl}/auth/profile/${id}`, options)
    const profile = await response.json();
    if(profile.error) {console.log(profile.error)}
    this.setState({
      profile: profile.data
    });
    console.log(profile.data)
  }
  
  componentDidMount() {
     this.getPosts();
     this.getProfile();
    //  this.setState({
    //   feed
    // });
  }

  handleChange = e => {
    console.log(e.target.value, e.target.name);
    const newValue = `[e.target.name]: e.target.value `
    this.setState({
          // [e.target.name]: e.target.value
          newUser: {...this.state.profile, newValue }
          // [this.state.newUser{e.target.name}]: e.target.value
        });
  };
  render() {
    // let { id } = useParams();
    return (
      <div>
        <Navbar />
        <div className="page-container">
          <div className="sidebar">
            <SmallProfile />
            <SidebarTags />
            <p>©2019 Vick Greenfields. All rights reserved.
            </p>
          </div>
          <div className="main-feed">
            <Switch>
              <Route exact path="/feed">
                <Feed myFeeds={this.state.feed}/>
              </Route>
              <Route exact path="/create-user">
                <CreateUser
                  button="CREATE USER"
                />
              </Route>
              <Route exact path="/profile">
                <ProfileDisplay
                  userProfile={this.state.profile}
                  button="EDIT PROFILE"
                />
              </Route>
              <Route exact path="/edit-profile">
                <EditProfile 
                  userProfile={this.state.profile}
                  button="UPDATE PROFILE"
                  profileChange={this.handleChange}
                  updateProfile={this.getProfile}
                />
              </Route>
              <Route exact path="/post">
                <Post />
              </Route>
              <Route path='/feed/:id'>
                <EachPost myFeeds={this.state.feed}/>
              </Route>
              {/* <Route path="/feed/:id" component={<EachPost />}/> */}

              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
