import React from 'react';
import Article from "../components/Article";
import Image from "../components/Image";


export default function Feed(props) {
    const { feeds } = props
    // console.log(feeds)
    return (
      <>
        {/* <div>{feeds[0].article}</div> */}
        <Article />
        <Image />
        {/* {feeds.image ? <Article /> : <Image />} */}
        {/* { feeds.map(feed => { return <Image />}) } */}
        {/* {
            if (feed.image !== null) return <Article />
            return <Image />
        })} */}
      </>
    );
}
