import React, { Component } from "react";
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
      token: "",
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        jobRole: "",
        department: "",
        street: "",
        area: ""
      }
    };
  }
  getPosts = async () => {
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
    this.setState({
              feed: feed.data
            });
  }
  getProfile = async () => {
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
    this.setState({
      profile: profile.data
    });
    console.log(profile.error)
  }
  componentDidMount() {
     this.getPosts();
     this.getProfile();
    //  this.setState({
    //   feed
    // });
  }

  handleChange = e => {
    console.log(e.target.value);
    const newValue = { [e.target.name]: e.target.value }
    this.setState({
          // [e.target.name]: e.target.value
          newUser: {...this.state.newUser, newValue }
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
            <p>©2019 Greene Teamwork. All rights reserved.
            </p>
          </div>
          <div className="main-feed">
            <Switch>
              <Route path="/feed">
                <Feed myFeeds={this.state.feed}/>
              </Route>
              <Route path="/create-user">
                <CreateUser
                  userProfile={this.state.newUser}
                  button="CREATE USER"
                  profileChange={this.handleChange}
                />
              </Route>
              <Route path="/profile">
                <ProfileDisplay
                  userProfile={this.state.profile}
                  button="EDIT PROFILE"
                />
              </Route>
              <Route path="/edit-profile">
                <EditProfile 
                  userProfile={this.state.profile}
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
}
