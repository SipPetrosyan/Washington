import React from 'react';
import Head from "next/head";
import PostItem from "@/components/Home/PostItem";
import Pagination from "@/components/customUI/Pagination";
import GetQuote from "@/components/Quote/GetQuote";

const PostsPage = ({title, postsData}) => {
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
                    <div className='w-100'>
                        <h1 className='font-32 blue'>{title}</h1>
                        <div className='postsList'>
                            {postsData.map((post, idx) => {
                                return (
                                    <PostItem key={idx} btnName="Continue Reading" />
                                )
                            })}
                        </div>
                        <Pagination count={postsData.length}/>
                    </div>
                    <GetQuote />
                </div>
            </main>
        </>
    );
};

export default PostsPage;