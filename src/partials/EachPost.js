import React, { useState, useEffect } from "react";
import { baseUrl } from "../App";
import Article from "../components/Article";
// import Image from "../components/Image";
import Comment from "../components/Comment";
import AllComment from "../components/AllComment";
import { Link, useParams } from "react-router-dom";

export default function EachPost(props) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  let { id } = useParams();
  // const { myFeeds } = props;
  // const feed = myFeeds.filter(myFeed => myFeed.postid === id);

  
  useEffect(() => {
    const getPost = async () => {
      const token = sessionStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      };
      const response = await fetch(`${baseUrl}/articles/${id}`, options)
        .then(res => res.json())
        .catch(error => console.log(error));
      if (response.error) {
        console.log(response.error);
      }
      setPost({
        ...response.data
      });
      setComments({
        ...response.data.comments
      });
      console.log(response.data);
    };
    getPost();
  }, [id]);

  // if (feed.lenght === 0) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <div className="each-feed post">
        <div className="headers">
          <h2 className="title">Single Post</h2>
          <Link to="/feed">
            <button className="btn"> Back to My feed</button>
          </Link>
        </div>
      </div>
      <Article key={post.postid} tfeed={post} />

      <Comment />
      <AllComment />
    </div>
  );
}

// const GetId(postid) {
//   let { id } = useParams();
//   return postid = id;
// }
