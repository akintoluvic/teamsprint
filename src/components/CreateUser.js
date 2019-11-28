import React, { useState } from "react";

export default function CreateUser(props) {
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

  // function profileChange(e) {
  //   const value = e.target.value;
  //   setState({
  //     ...state,
  //     [e.target.name]: value
  //   });
  // }

  const handlePost = (e) => {
    e.preventDefault();
    const user = {
      email: state.email,
      password: state.password
    };
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
        
      }
    };
    fetch("http://localhost:3001/api/v1/auth/signin", options)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          console.log(res.error);
          this.setState({
            ...this.state,
            err: res.error
          });
          console.log(this.state.err);
          return this.props.history.push("/");
        }
        console.log(res);
        this.setState({
          isAuthenticated: true,
          profile: res.data
        });
        // let history = useHistory();
        this.props.history.push("/feed");
      })
      .catch(error => console.log(error));

    // props.userHasAuthenticated(true);
  }


  const { userProfile, button, profileChange } = props;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
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
            required
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
            required
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
        <label for="street">
          Street Address
          <input
            type="text"
            placeholder="17, Opposite Nadia Bread, Oka Road"
            name="street"
            value={userProfile.street}
            onChange={profileChange}
            required
          />
        </label>
        <label for="area">
          Area/City and County
          <input
            placeholder="Ugbor Express Road, Benin, Nigeria"
            name="area"
            type="text"
            value={userProfile.area}
            onChange={profileChange}
            required
          />
        </label>
        <label for="submit">
          Submit
          <button type="submit" name="submit" onClick={handlePost}>
            {button}
          </button>
        </label>
      </form>
    </>
  );
}
