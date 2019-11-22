import React from 'react';
import Article from "../components/Article";
import Image from "../components/Image";
import Comment from "../components/Comment";
import AllComment from "../components/AllComment";

export default function Feed() {
    return (
        <div>
            <Article />
            <Comment />
            <AllComment />
        </div>
      );
}

