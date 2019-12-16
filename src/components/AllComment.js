import React from 'react';

export default function AllComment(props) {
    const { allComment } = props;
    if(allComment === 0) {
        return <div>Loading...</div>
    }
    console.log(allComment)
    return (
        <div className='each-feed'>
            {/* <h3>COMMENTS</h3> */}
            {/* {allComment.lenght === 0 ? 'No' :
            allComment.map(comment => <EachComment eachComment={comment} />)
            } */}

            { allComment.map(comment => <EachComment key={comment.commentid} eachComment={comment} />)}
            
        </div>
    )
}
function EachComment(props) {
    const { eachComment } = props;
    return (
        <div className='each-comment'>
            <div className='left'>
                <button className='user'>AS</button>
                <span>21m</span>
            </div>
            <p>
                {eachComment.comment} 
            </p>
        </div>
    )
}
