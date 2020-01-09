import React, { useState } from "react";
import { Link } from "react-router-dom"

export default function CreateUser(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    jobRole: "",
    department: "",
    address: "",
    done: ""
  });

  const clear = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    jobRole: "",
    department: "",
    address: ""
  }

  const profileChange = e => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const handlePost = async e => {
    e.preventDefault();
    const token = sessionStorage.getItem('token')
    const options = {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        // "crossorigin": "anonymous"
      }
    };
    const response = await fetch("http://localhost:3001/api/v1/auth/create-user", options)
      .then(res => res.json())
        if (response.error) {
          console.log(response.error);
        }
        console.log(response);
        alert(`${response.data.message}`)
        setState({ ...clear, done: response.data.message })
  }

  const { button } = props;

  return (
    <>
      <div className="each-feed post">
        <div className="headers">
          <h2 className="title">Create User</h2>
          <Link to='/feed'>
            <button className="btn"> Back to My feed</button>
          </Link>
        </div>
      </div>
      { (state.done === "") ? "" : 
      <div className="each-feed post">
        {state.done}
      </div>}
      <form onSubmit={handlePost} className="profile-form" disabled>
        <label htmlFor="firstName">
          Firstname
          <input
            placeholder="Firstname"
            name="firstName"
            autoFocus
            type="text"
            value={state.firstName}
            onChange={profileChange}
            required
          />
        </label>
        <label htmlFor="lastName">
          Lastname
          <input
            type="text"
            placeholder="Lastname"
            name="lastName"
            value={state.lastName}
            onChange={profileChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email address
          <input
            placeholder="username@email.com"
            name="email"
            type="email"
            value={state.email}
            onChange={profileChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            placeholder="xxxxxxxx"
            name="password"
            value={state.password}
            onChange={profileChange}
            required
          />
        </label>
        <label htmlFor="gender">
          Gender
          <input
            placeholder="Gender"
            name="gender"
            type="text"
            value={state.gender}
            onChange={profileChange}
            required
          />
        </label>
        <label htmlFor="jobRole">
          Job Role
          <input
            type="text"
            placeholder="Job Role"
            name="jobRole"
            value={state.jobRole}
            onChange={profileChange}
            required
          />
        </label>
        <label htmlFor="department">
          Department
          <input
            placeholder="Department"
            name="department"
            type="text"
            value={state.department}
            onChange={profileChange}
            required
          />
        </label>
        <label htmlFor="address">
          Address
          <input
            type="text"
            placeholder="17, Opposite Nadia Bread, Oka Road"
            name="address"
            value={state.address}
            onChange={profileChange}
            required
          />
        </label>
        <label htmlFor="area">
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
        <label htmlFor="submit">
          Submit
          <button type="submit" name="submit" onClick={handlePost}>
            {button}
          </button>
        </label>
      </form>
    </>
  );
}
