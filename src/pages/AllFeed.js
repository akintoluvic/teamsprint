import React, { Component } from "react";
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
  Route
  // Redirect,
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
  getPosts = () => {
    const token = sessionStorage.getItem('token')
    const options = {
      method: "GET",
      // body: {JSON.stringify(user)},
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    };
    fetch("http://localhost:3001/api/v1/feed", options)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          // this.setState({
          //   ...this.state,
          //   err: res.error
          // });
          return console.log(res, token);
        }
        console.log(res.data);
        return this.setState({
          feed: res.data
        });
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.getPosts();
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-container">
          <div className="sidebar">
            <SmallProfile />
            <SidebarTags />
            <p>©2019 Greene Teamwork. All rights reserved.
            {/* {this.state.feed[0].article} */}
            {this.state.profile.area}
            </p>
          </div>
          <div className="main-feed">
            <Switch>
              <Route path="/feed">
                <Feed feeds={this.state.feed}/>
              </Route>
              <Route path="/create-user">
                <ProfileForm
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
