import Link from "next/link";

export default function SocialPanel () {

    return(
        <aside className="socialPanel">
            <Link href="">
                <span className="icon-Facebook-Icon"><span className="path1"></span><span
                    className="path2"></span></span>
            </Link>
            <Link href="">
                <span className="icon-Twitter-Icon"><span className="path1"></span><span
                    className="path2"></span></span>
            </Link>
            <Link href="">
                <span className="icon-Pinterest-Icon"><span className="path1"></span><span
                    className="path2"></span></span>
            </Link>
            <Link href="">
                <span className="icon-Google-Icon"><span className="path1"></span><span className="path2"></span><span
                    className="path3"></span><span className="path4"></span></span>
            </Link>
            <Link href="">
                <span className="icon-Bing-Icon"><span className="path1"></span><span className="path2"></span></span>
            </Link>
            <Link href="">
                <span className="icon-Yelp-Icon"><span className="path1"></span><span className="path2"></span></span>
            </Link>
            <Link href="">
                <span className="icon-Yp-Icon"><span className="path1"></span><span className="path2"></span><span
                    className="path3"></span></span>
            </Link>
        </aside>
    )
}