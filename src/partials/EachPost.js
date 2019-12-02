import React from "react";
import Article from "../components/Article";
import Image from "../components/Image";
import Comment from "../components/Comment";
import AllComment from "../components/AllComment";
import { useParams } from "react-router-dom";


export default function EachPost(props) {
  let { id } = useParams();
  const { myFeeds } = props;
  const feed =  myFeeds.filter(async myFeed =>  await myFeed.postid === id);
  console.log(feed);
  console.log(myFeeds);
  
  const getProfile = async () => {
    const token = sessionStorage.getItem('token')
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    };
    const response = await fetch("http://localhost:3001/api/v1/auth/profile/49", options)
      .then(res => res.json())
    if(response.error) {console.log(response.error)}
    this.setState({
      profile: response.data
    });
    console.log(response.error)
  }

  // componentDidMount() {

  // }
  if(feed.lenght === 0) {
    return <div>Loading...</div>
}

  return (
    <div>
      {(feed.imageurl === null) ? <Article key={feed.postid} tfeed={feed}/>:
      <Image key={feed.postid}  tfeed={feed} />} 

      <Comment />
      <AllComment />
    </div>
  );
}
