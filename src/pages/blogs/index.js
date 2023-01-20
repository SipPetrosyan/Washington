import React from 'react';
import PostsPage from "@/components/blogs-news/PostsPage";
const Blogs = () => {
    const arr = Array.from(Array(9));
    // const arr = [1,2,3]

    return (
        <PostsPage title='Our Blog' postsData={arr} />
    );
};

export default Blogs;