import React from 'react';
import Article from "../components/Article";
import Image from "../components/Image";


export default function Feed(props) {
    const { myFeeds } = props
    console.log(myFeeds)
    if(myFeeds.lenght === 0) {
        return <div>Loading...</div>
    }
    return (
      <>
        { myFeeds.map(feed => { 
            if (feed.imageurl === null) 
            return <Article key={feed.postid} tfeed={feed}/>
            else {return <Image key={feed.postid}  tfeed={feed} />} 
            }) }
      </>
    );
}
