import PostItem from "@/components/home/PostItem";
import Link from "next/link";

export default function LatestArticles () {

    return(

        <div className="latestArticles m-padding">
            <hr className="hr" />
            <h1 className="font-32 blue bolder">Our Latest Articles</h1>
            <div className="container flex-between">
                <div className="posts">
                    <Link href="blogs" className="bolder blue font-20">Latest Blogs</Link>
                    <div className="flex-between self ">
                        <PostItem btnName="Read More"/>
                        <PostItem btnName="Read More"/>
                    </div>
                </div>
                <div className="posts">
                    <Link href="news" className="bolder blue font-20">Latest News</Link>
                    <div className="flex-between self">
                        <PostItem btnName="Read More"/>
                        <PostItem btnName="Read More"/>
                    </div>
                </div>
            </div>
        </div>
    )
}