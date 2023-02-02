import {Button} from "@mui/material";
import Link from "next/link";

export default function PostItem({btnName, desc}) {
    const slug = 'post-item-1';
    return (
        <div className="postItem">
            <Link href={'post?slug=' + slug}>
                <div className='img'>
                    <img src="/images/post.png" alt="post"/>
                </div>
            </Link>
            <div className="content">
                <div className="info">
                    <span className="icon-calendar red font-16"></span>
                    <span className="blue-60 bold font-16">JAN 05, 2023 </span>
                    <span className="blue-60">|</span>
                    <span className="red bold"> Blogs</span>
                </div>
                <h1 className="blue font-16 bold">
                    Ram Looks To Change The
                    Market With Brand New Electric
                    Pickup
                </h1>
                {desc !==false ? (<p className="blue-80 desc">
                    There's a senior official that is seen in Mayor Bowser's administration who is unfortunately under fire once she's been fired. This is followed by the aftermath of ethics investigation.</p>) : null}
                {btnName ? (<div className="btn">
                    <Button>
                        <Link href="" className="red bold">
                            <span>{btnName}</span> <span className="icon-chevron-thin-right"></span>
                        </Link>
                    </Button>
                </div>) : null}
            </div>
        </div>
    )
}