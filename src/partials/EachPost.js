import React, { useState } from 'react';
import Article from "../components/Article";
import Comment from "../components/Comment";
import AllComment from "../components/AllComment";

export default function EachPost(props) {
        const [state, setState] = useState({
            slug: props.match.params.slug
        });
        console.log(state.slug);
        // componentDidMount() {
            
        // }

    return (
        <div>
            <Article />
            <Comment />
            <AllComment />
        </div>
      );
}

