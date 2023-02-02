import {Button} from "@mui/material";
import Link from "next/link";

export default function History() {

    return (
        <div className="m-padding page-main historyPage">
            <hr className="hr"/>
            <h1 className="blue font-24 bolder">History</h1>
            <div className="content">
                <p>The history of Washington DC Auto Transport stretches back more than a decade. Our story began in
                    2006 when we started this small, family-run company out of a garage. That’s right, talk about humble
                    beginnings. In fact, at the time we only shipped cars locally, because we only had a few carriers
                    working with our team.</p>
                <img src="/images/Peterbilt.png" alt="history"/>
                <p>The history of Washington DC Auto Transport stretches back more than a decade. Our story began in
                    2006 when we started this small, family-run company out of a garage. That’s right, talk about humble
                    beginnings. In fact, at the time we only shipped cars locally, because we only had a few carriers
                    working with our team.</p>
            </div>
            <Button className="toServices">
                <Link href="services" className="bold red font-16">
                    Check Out Our Services <span className="icon-chevron-thin-right"></span>
                </Link>
            </Button>
            <div className="description">
                <div>
                    <h2 className="blue font-20 bold">Contact us at Washington DC Auto Transport today and we’ll take
                        care of all your car shipping needs.</h2>
                    <div className="operator">
                        <a href="tel:( 202 ) 930 - 8005">
                            <span className="icon-Operator-icon-1"><span className="path1"></span><span
                                className="path2"></span><span className="path3"></span></span>
                            <span className="phone">( 202 ) 930 - 8005</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}