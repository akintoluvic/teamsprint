import React, { useState } from 'react';

export default function ProfileDisplay(props) {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    toDashboard: false,
    // handleSubmit: this.handleSubmit.bind(this)
  })

    const {profile, button, profileChange} = props;
  
    function handleSubmit(e) {
        e.preventDefault();
        console.log()
    }
    return (
      <>
        <div className="each-feed post">
          <div className="headers">
            <h2 className="title">Profile</h2>
            <button className="btn"> Back to My feed</button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="profile-form" disabled>
          <label for="fname">
            Firstname
            <input
              placeholder="Firstname"
              name="fname"
              autoFocus
              type="text"
              value={profile.firstName}
              onChange={this.profileChange}
              required
            />
          </label>
          <label for="lastname">
            Lastname
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={profile.lastName}
            //   onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <label for="uname">
            Email address
            <input
              placeholder="username@email.com"
              name="uname"
              type="email"
              value={profile.email}
              // onChange={e => setEmail(e.target.value)}
              required
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
              required
            />
          </label>
          <label for="gender">
            Gender
            <input
              placeholder="Gender"
              name="gender"
              type="text"
              value={profile.gender}
            //   onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label for="job">
            Job Role
            <input
              type="text"
              placeholder="Job Role"
              name="job"
              value={profile.jobRole}
            //   onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <label for="dept">
            Department
            <input
              placeholder="Department"
              name="dept"
              type="text"
              value={profile.department}
            //   onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label for="street">
            Street Address
            <input
              type="text"
              placeholder="17, Opposite Nadia Bread, Oka Road"
              name="street"
              value={profile.street}
            //   onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <label for="area">
            Area/City and County
            <input
              placeholder="Ugbor Express Road, Benin, Nigeria"
              name="area"
              type="text"
              value={profile.area}
            //   onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label for="submit">Submit
              <button type="submit" name="submit">{button}</button>
          </label>
          
        </form>
      </>
    );
}
