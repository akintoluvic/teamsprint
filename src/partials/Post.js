import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Post() {
    const [state, setState] = useState({
        title: "",
        article: "",
        dataFile: null,
        tag: "",
        imageUrl: "",
        done: "",
        authorId: ""
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
      const handleFile = e => {
        // e.preventDefault();
        console.log(e.target.files[0])
        setState({
          ...state,
          dataFile: e.target.files[0],
        });
      }
      const id = sessionStorage.getItem('id')
      const token = sessionStorage.getItem('token')
      const handlePost = async e => {
        // e.preventDefault();
        
        const formData = new FormData();
        formData.append("title", state.title);
        formData.append("dataFile", state.dataFile);
        formData.append("article", state.article);
        formData.append("tag", state.tag);

        const options = {
          method: "POST",
          body: JSON.stringify(state),
          files: state.dataFile,
          headers: {
            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
            // boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s
            "Authorization": token
          }
        };
        await fetch("https://workplace-teamwork.herokuapp.com/api/v1/gifs", options)
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
        const data = {id, ...state}
        const options = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            "Authorization": token
            // "crossorigin": "anonymous"
          }
        };
        const response = await fetch("https://workplace-teamwork.herokuapp.com/api/v1/articles", options)
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

      <form  action="http://localhost:3001/api/v1/gifs" encType="multipart/form-data"  method="POST" authorization={token}>
        <div className="form-group"> Data or Responses file
          <input className="form-control" name="dataFile" type="file" />
          <input type="submit"/>
        </div>
        
      </form>

    </>
  );
}
