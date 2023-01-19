import PostItem from "@/components/Home/PostItem";

export default function LatestArticles () {

    return(

        <div className="latestArticles m-padding">
            <hr className="hr" />
            <h1 className="font-32 blue bolder">Our Latest Articles</h1>
            <div className="container flex-between">
                <div className="posts">
                    <h2 className="bolder blue font-20">Latest Blogs</h2>
                    <div className="flex-between self ">
                        <PostItem btnName="Read More"/>
                        <PostItem btnName="Read More"/>
                    </div>
                </div>
                <div className="posts">
                    <h2 className="bolder blue font-20">Latest News</h2>
                    <div className="flex-between self">
                        <PostItem btnName="Read More"/>
                        <PostItem btnName="Read More"/>
                    </div>
                </div>
            </div>
        </div>
    )
}