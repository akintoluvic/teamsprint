import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function ProfileDisplay(props) {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const {userProfile, button} = props;
  
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
      <>
        <div className="each-feed post">
          <div className="headers">
            <h2 className="title">Profile</h2>
            <button className="btn"> Back to My feed</button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <label for="fname">
            Firstname
            <input
              placeholder="Firstname"
              name="fname"
              autoFocus
              type="text"
              value={userProfile.firstName}
              // onChange={e => setEmail(e.target.value)}
              disabled
            />
          </label>
          <label for="lastname">
            Lastname
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={userProfile.lastName}
            //   onChange={e => setPassword(e.target.value)}
              disabled
            />
          </label>
          <label for="uname">
            Email address
            <input
              placeholder="username@email.com"
              name="uname"
              type="email"
              value={userProfile.email}
              // onChange={e => setEmail(e.target.value)}
              disabled
            />
          </label>
          <label for="psw">
            Password
            <input
              type="password"
              placeholder="xxxxxxxx"
              name="psw"
              // value={password}
              // onChange={e => setPassword(e.target.value)}
              disabled
            />
          </label>
          <label for="gender">
            Gender
            <input
              placeholder="Gender"
              name="gender"
              type="text"
              value={userProfile.gender}
            //   onChange={e => setEmail(e.target.value)}
              disabled
            />
          </label>
          <label for="job">
            Job Role
            <input
              type="text"
              placeholder="Job Role"
              name="job"
              value={userProfile.jobRole}
            //   onChange={e => setPassword(e.target.value)}
              disabled
            />
          </label>
          <label for="dept">
            Department
            <input
              placeholder="Department"
              name="dept"
              type="text"
              value={userProfile.department}
            //   onChange={e => setEmail(e.target.value)}
              disabled
            />
          </label>
          <label for="street">
            Street Address
            <input
              type="text"
              placeholder="17, Opposite Nadia Bread, Oka Road"
              name="street"
              value={userProfile.street}
            //   onChange={e => setPassword(e.target.value)}
              disabled
            />
          </label>
          <label for="area">
            Area/City and County
            <input
              placeholder="Ugbor Express Road, Benin, Nigeria"
              name="area"
              type="text"
              value={userProfile.area}
            //   onChange={e => setEmail(e.target.value)}
              disabled
            />
          </label>
          <label for="submit">Submit
            <Link to='/edit-profile'>
              <button type="submit" name="submit" disabled>{button}</button>
              </Link>
          </label>
          
        </form>
      </>
    );
}
