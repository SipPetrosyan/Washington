import {Button} from "@mui/material";
import Link from "next/link";

export default function PostItem({btnName}) {

    return (
        <div className="postItem">
            <div className="img">
                <img src="/images/post.png" alt="post"/>
            </div>
            <div className="content">
                <div className="info">
                    <span className="icon-calendar red font-20"></span>
                    <span className="blue-60 bold">JAN 05, 2023 </span>
                    <span className="blue-60">|</span>
                    <span className="red bold"> Blogs</span>
                </div>
                <h1 className="blue font-20 bold">
                    Ram Looks To Change The
                    Market With Brand New Electric
                    Pickup
                </h1>
                <p className="blue-80">
                    All the other car companies are occupied with creating the latest and the greatest in automobiles
                    and electric motors.
                </p>
                <div className="btn">
                    <Button>
                        <Link href="" className="red bold">
                            <span>{btnName}</span> <span className="icon-chevron-thin-right"></span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}