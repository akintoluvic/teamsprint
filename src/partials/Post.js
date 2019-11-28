import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Post() {
    const [state, setState] = useState({
        title: "",
        article: "",
        department: "",
        tag: "",
        done: ""
      });
    
      const clear = {
        title: "",
        article: "",
        department: "",
        tag: ""
      }
      const handleChange = e => {
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
            "Authorization": token
          }
        };
        const response = await fetch("http://localhost:3001/api/v1/auth/create-user", options)
          .then(res => res.json())
            if (response.error) {
              console.log(response.error);
              // return this.props.history.push("/");
            }
            console.log(response);
            // let history = useHistory();
            // this.props.history.push("/feed");
            alert(`${response.data.message}`)
            setState({ ...clear, done: response.data.message })
      }
    
    
  return (
    <>
      <div className="each-feed post">
        <div className="headers">
          <h2 className="title">Post</h2>
          <Link to="/feed">
            <button className="btn"> Back to My feed</button>
          </Link>
        </div>
      </div>

      {/* { (state.done === "") ? "" : 
      <div className="each-feed post">
        {state.done}
      </div>} */}
      
      <div className="each-feed post">
        <label for="title">Post Title*</label>
        <br></br>
        <input
          placeholder="username@email.com"
          className="comment"
          name="title"
          autoFocus
          type="text"
          value={state.title}
          onChange={handleChange}
          required
        />
        <label for="article">Post Body*</label>
        <br></br>
        <textarea
          className="comment"
          name="article"
          rows="4"
          cols="50"
          placeholder="Write your comment here..."
          value={state.article}
          onChange={handleChange}
        ></textarea>
        <div>
          <label for="image">Upload Image</label>
          <input type="file" name="image" id="" disabled />
        </div>

        <div className="headers">
          <div className="left">
            <label for="tag">Article Tag*</label>
            <input
              placeholder="Type tag here..."
              className="comment"
              name="tag"
              type="text"
              value={state.tag}
              onChange={handleChange}
              />
          </div>
          <button className="btn">POST ARTICLE</button>
        </div>
      </div>
    </>
  );
}
