import React, { useState } from 'react';

export default function ProfileDisplay(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    jobRole: "",
    department: "",
    street: "",
    area: "",
    toDashboard: false,
    // handleSubmit: this.handleSubmit.bind(this)
  })

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

    const {profile, button, profileChange} = props;
  
    function handleSubmit(e) {
        e.preventDefault();
        console.log(state)
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
          <label for="firstName">
            Firstname
            <input
              placeholder="Firstname"
              name="firstName"
              autoFocus
              type="text"
              value={profile.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label for="lastName">
            Lastname
            <input
              type="text"
              placeholder="Lastname"
              name="lastName"
              value={profile.lastName}
            //   onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <label for="email">
            Email address
            <input
              placeholder="username@email.com"
              name="email"
              type="email"
              value={profile.email}
              // onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label for="password">
            Password
            <input
              type="password"
              placeholder="xxxxxxxx"
              name="password"
              value={profile.password}
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
          <label for="jobRole">
            Job Role
            <input
              type="text"
              placeholder="Job Role"
              name="jobRole"
              value={profile.jobRole}
            //   onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <label for="department">
            Department
            <input
              placeholder="Department"
              name="department"
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
