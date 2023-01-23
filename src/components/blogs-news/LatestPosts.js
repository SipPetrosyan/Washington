import React from 'react';
import PostItem from "@/components/Home/PostItem";

const LatestPosts = ({title}) => {
    const postsArr = [1,2];
    return (
        <div className='latestPosts'>
            <h1 className='font-20 bolder blue'>{title}</h1>
            {postsArr.map((post, idx) => {
                return (
                    <PostItem key={idx} btnName="Read More" />
                )
            })}
        </div>
    );
};

export default LatestPosts;