import Link from "next/link";

export default function TopPanel () {
    return(
        <div className="top-panel">
            <div className="get-quote">
                <Link href="/quote">
                    <span>Get Quote</span>
                    <span className="icon-chevron-thin-right"></span>
                </Link>
            </div>
            <div className="new-item">
                <Link href="/blogs" >
                    Blog
                </Link>
            </div>
            <div className="new-item">
                <Link href="/news" >
                    News
                </Link>
            </div>
            <div className="new-item">
                <Link href="/faq" >
                    FAQ
                </Link>
            </div>
            <div className="new-item">
                <Link href="/contact" >
                    Contact
                </Link>
            </div>
            <div className="operator">
                <Link href="tel:( 202 ) 930 - 8005">
                    <span className="icon-Operator-icon-1"><span className="path1"></span><span
                        className="path2"></span><span className="path3"></span></span>
                    <span className="phone">( 202 ) 930 - 8005</span>
                </Link>
            </div>
        </div>
    )
}