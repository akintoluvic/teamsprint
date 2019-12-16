import React, { useState } from 'react';
import { baseUrl } from "../App";

export default function Comment(props) {
    const [comment, setComment] = useState('');
    const { Id } = props;
    const authorId = sessionStorage.getItem('id')
    const post =  { comment, authorId, Id }
    const postComment = async () => {
        const token = sessionStorage.getItem("token");
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          body: JSON.stringify(post)
        };
        const response = await fetch(`${baseUrl}/articles/${Id}/comment`, options)
          .then(res => res.json())
          .catch(error => console.log(error));
        if (response.error) {
          console.log(response.error);
        }
        // setPost({
        //   ...response.data
        // });
        console.log(response);
      };
      const handleComment = e => {
          const comment = e.target.value;
          setComment({
              ...comment
          })
      }
    return (
        <div className='each-feed'>
            <textarea 
                className='comment'
                rows="4" 
                cols="50" 
                name="comment"
                value={comment}
                placeholder='Write your comment here...'
                onChange={e => setComment(e.target.value)}
            ></textarea>
            <div className='comment-container'>
                <button
                    className='btn'
                    onClick={postComment}
                >
                    POST COMMENT
                </button>
            </div>
        </div>
    )
}
