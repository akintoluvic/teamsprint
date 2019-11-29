import React, { useState } from "react";
import { Link } from "react-router-dom"

export default function EditProfile(props) {
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
    toDashboard: false
    // handleSubmit: this.handleSubmit.bind(this)
  });
  const { userProfile, button, updateProfile } = props;

  const componentDidMount = () => {
    setState({
      ...userProfile
    });
  }
  // componentDidMount()
  function profileChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }
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

      <form onSubmit={handleSubmit} className="profile-form" disabled>
        <label for="firstName">
          Firstname
          <input
            placeholder="Firstname"
            name="firstName"
            autoFocus
            type="text"
            value={userProfile.firstName}
            onChange={profileChange}
            required
          />
        </label>
        <label for="lastName">
          Lastname
          <input
            type="text"
            placeholder="Lastname"
            name="lastName"
            value={userProfile.lastName}
            onChange={profileChange}
            required
          />
        </label>
        <label for="email">
          Email address
          <input
            placeholder="username@email.com"
            name="email"
            type="email"
            value={userProfile.email}
            onChange={profileChange}
            disabled
          />
        </label>
        <label for="password">
          Password
          <input
            type="password"
            placeholder="xxxxxxxx"
            name="password"
            value={userProfile.password}
            onChange={profileChange}
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
            onChange={profileChange}
            required
          />
        </label>
        <label for="jobRole">
          Job Role
          <input
            type="text"
            placeholder="Job Role"
            name="jobRole"
            value={userProfile.jobRole}
            onChange={profileChange}
            required
          />
        </label>
        <label for="department">
          Department
          <input
            placeholder="Department"
            name="department"
            type="text"
            value={userProfile.department}
            onChange={profileChange}
            required
          />
        </label>
        <label for="address">
          Address
          <input
            type="text"
            placeholder="17, Opposite Nadia Bread, Oka Road"
            name="address"
            value={userProfile.address}
            onChange={profileChange}
            required
          />
        </label>
        <label for="area">
          User Type
          <input
            placeholder="Ugbor Express Road, Benin, Nigeria"
            name="area"
            type="text"
            value="Employee"
            // onChange={profileChange}
            disabled
          />
        </label>
        <label for="submit">
          Submit
          <button type="submit" name="submit">
            {button}
          </button>
        </label>
      </form>
    </>
  );
}
