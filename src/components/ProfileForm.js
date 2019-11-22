import React, { useState } from 'react';

export default function Post(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
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
            Firstname {props.att}
            <input
              placeholder="Firstname"
              name="fname"
              autoFocus
              type="text"
            //   value={firstname}
            //   onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label for="lastname">
            Lastname
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
            //   value={lastname}
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
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label for="psw">
            Password
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <label for="gender">
            Gender
            <input
              placeholder="Gender"
              name="gender"
              type="text"
            //   value={gender}
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
            //   value={jobRole}
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
            //   value={department}
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
            //   value={street}
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
            //   value={area}
            //   onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label for="submit">Submit
              <button type="submit" name="submit">SUBMIT</button>
          </label>
          
        </form>
      </>
    );
}
