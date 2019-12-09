import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function ProfileDisplay({userProfile, button}) {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const {userProfile, button} = props;
  
    function handleSubmit(event) {
        event.preventDefault();
    }
    // if(userProfile === undefined) {
    //   return <div>Loading...</div>
    // }
    console.log(userProfile)
    return (
      <>
        <div className="each-feed post">
          <div className="headers">
            <h2 className="title">Profile</h2>
            <Link to='/feed'>
              <button className="btn"> Back to My feed</button>
          </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <label htmlFor="fname">
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
          <label htmlFor="lastname">
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
          <label htmlFor="uname">
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
          <label htmlFor="psw">
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
          <label htmlFor="gender">
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
          <label htmlFor="job">
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
          <label htmlFor="dept">
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
          <label htmlFor="address">
            Address
            <input
              type="text"
              placeholder="17, Opposite Nadia Bread, Oka Road"
              name="address"
              value={userProfile.address}
            //   onChange={e => setPassword(e.target.value)}
              disabled
            />
          </label>
          <label htmlFor="area">
            User Type
            <input
              placeholder="Ugbor Express Road, Benin, Nigeria"
              name="area"
              type="text"
              value="Employee"
            //   onChange={e => setEmail(e.target.value)}
              disabled
            />
          </label>
          <label htmlFor="submit">Submit
            <Link to='/edit-profile'>
              <button type="submit" name="submit">{button}</button>
              </Link>
          </label>
          
        </form>
      </>
    );
}
