import React from 'react';
import {useRouter} from "next/router";
import PostContent from "@/components/post/PostContent";
import PostItem from "@/components/Home/PostItem";
import PostComment from "@/components/post/PostComment";
import Head from "next/head";
import LatestPosts from "@/components/blogs-news/LatestPosts";

const Post = () => {
    const router = useRouter();
    const {slug} = router.query;

    return (
        <>
            <Head>
                <title>Post</title>
                <meta name="description" content="Post"/>
            </Head>
            <main>
                <div className='page-main m-padding postPage'>
                    <div className='topSection'>
                        <div className='leftPart'>
                            <div className='imgAndShare'>
                                <div className='img'>
                                    <img src='/images/post-1.png' alt='Post'/>
                                </div>
                                <div className='bottomPart'>
                                    <div className="info">
                                        <span className="icon-calendar red font-32"></span>
                                        <span className="blue-60 bold">JAN 05, 2023 </span>
                                        <span className="blue-60">|</span>
                                        <span className="red bold"> Blogs</span>
                                    </div>
                                    <div className='shareBlock'>
                                        <span className='blue-60 bold font-20'>Share</span>
                                        <a href="https://facebook.com/" target='_blank' className="icon-Facebbok-Icon blue font-30 shareTo"></a>
                                        <a href="https://twitter.com/" target='_blank' className="icon-Twiter-Icon blue font-30 shareTo"></a>
                                        <a href="https://linkedin.com/" target='_blank' className="icon-Linkedin-Icon blue font-30 shareTo"></a>
                                    </div>
                                </div>
                            </div>
                            <PostContent/>
                            <hr className='postLine'/>
                            <div className='relativeBlock'>
                                <div className='blogTitle'>
                                    <span className="icon-chevron-thin-right red"></span>
                                    <h1 className='font-32 bold blue'>You Might Also Like</h1>
                                </div>
                                <div className='postsList'>
                                    {[1, 2, 3].map((post, idx) => (
                                        <PostItem key={idx} desc={false}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <LatestPosts title='Latest News' />
                    </div>

                    <hr className='postLine'/>
                    <PostComment/>
                </div>
            </main>
        </>
    );
};

export default Post;