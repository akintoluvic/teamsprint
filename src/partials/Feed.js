import React from 'react';
import Article from "../components/Article";
import Image from "../components/Image";


export default function Feed(props) {
    const { myFeeds } = props
    console.log(myFeeds)
    if(myFeeds === []) {
        return <div>Loading...</div>
    }
    return (
      <>
        {/* <div>{feeds[0].article}</div> */}
        <Article />
        <Image />
        {/* {feeds.image ? <Article /> : <Image />} */}
        {/* { myFeeds.map(feed => { return <Image />}) } */}
        { myFeeds.map(feed => { 
            if (feed.imageurl === null) return <Article key={feed.postid}/>
            else {return <Image key={feed.postid} />} 
            }) }
        {/* {
            if (feed.image !== null) return <Article />
            return <Image />
        })} */}
      </>
    );
}
