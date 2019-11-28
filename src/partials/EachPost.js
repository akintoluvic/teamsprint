import React, { useState } from "react";
import Article from "../components/Article";
import Comment from "../components/Comment";
import AllComment from "../components/AllComment";
import { Link, useParams } from "react-router-dom";


export default function EachPost(props) {
  let { id } = useParams();
  console.log(id);
  // componentDidMount() {

  // }

  return (
    <div>
      <Article />
      {id}
      <Comment />
      <AllComment />
    </div>
  );
}
