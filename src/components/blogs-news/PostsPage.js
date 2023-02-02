import React from 'react';
import Head from "next/head";
import PostItem from "@/components/Home/PostItem";
import Pagination from "@/components/customUI/Pagination";
import LatestPosts from "@/components/blogs-news/LatestPosts";

const PostsPage = ({title, latestTitle, postsData}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Posts"/>
            </Head>
            <main className='page-main m-padding'>
                <div className='hrField'>
                    <hr className="hr" />
                </div>
                <div className="blogPage">
                    <div>
                        <h1 className='font-24 blue'>{title}</h1>
                        <div className='postsList'>
                            {postsData.map((post, idx) => {
                                return (
                                    <PostItem key={idx} btnName="Continue Reading" />
                                )
                            })}
                        </div>
                        <Pagination count={postsData.length}/>
                    </div>
                    <LatestPosts title={latestTitle}/>
                </div>
            </main>
        </>
    );
};

export default PostsPage;