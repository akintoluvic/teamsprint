import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../App";

export default function Post() {
    const [state, setState] = useState({
        title: "",
        article: "",
        dataFile: null,
        tag: "",
        imageUrl: null,
        done: ""
      });
    
      // const clear = {
      //   title: "",
      //   article: "",
      //   department: "",
      //   tag: ""
      // }
      const handleChange = e => {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      }
      const authorId = sessionStorage.getItem('id')
      const token = sessionStorage.getItem('token')

      const handlePost = async e => {
        e.preventDefault();
        const formData = new FormData();
        const fileInput = document.querySelector('#file') ;
        const file = e.target.files[0]
        console.log(file);
        formData.append("dataFile", fileInput.files[0]);

        const options = {
          method: "POST",
          body: formData,
          // files: formData,
          headers: {
            // "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
            // boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s
            "Authorization": token
          }
        };
        await fetch(`${baseUrl}/gifs`, options)
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              console.log(res.error);
              // return this.props.history.push("/");
            }
            console.log(res);
          })
          .catch(error => console.log(error));
      }

      const handlePostA = async e => {
        const data = {authorId, ...state}
        const options = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            // encType: "multipart/form-data"
            // "crossorigin": "anonymous"
          }
        };
        const response = await fetch(`${baseUrl}/articles`, options)
          .then(res => res.json())
          // .catch(error => console.log(error));
             if (response.error) {
              console.log(response.error);
              // return this.props.history.push("/");
            }
            console.log(response);
            // alert(`${response.data.message}`)
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

      { (state.done === "") ? "" : 
      <div className="each-feed post">
        {state.done}
      </div>}
      
      <div className="each-feed post">
        <label htmlFor="title">Post Title*</label>
        <br></br>
        <input
          placeholder="Write your title here..."
          className="comment"
          name="title"
          autoFocus
          type="text"
          value={state.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="article">Post Body*</label>
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

        <form  action={`${baseUrl}/gifs`} encType="multipart/form-data"  method="POST" authorization={token}>
          <div className="form-group"> Add Media
            <input className="form-control" id="file" onChange={handlePost} name="dataFile" type="file" />
            {/* <input type="submit" value='Upload'/> */}
          </div>
        </form>

        <div className="headers">
          <div className="left">
            <label htmlFor="tag">Article Tag*</label>
            <input
              placeholder="Type tag here..."
              className="comment"
              name="tag"
              type="text"
              value={state.tag}
              onChange={handleChange}
              />
          </div>
          <button className="btn" onClick={handlePostA}>POST ARTICLE</button>
        </div>
      </div>

    </>
  );
}
