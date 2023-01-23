import React from 'react';
import PostsPage from "@/components/blogs-news/PostsPage";

const News = () => {
    const arr = Array.from(Array(9));
    return (
        <PostsPage title='Our News' latestTitle='Latest Blogs' postsData={arr} />
    );
};

export default News;