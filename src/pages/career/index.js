import {Button} from "@mui/material";
import Link from "next/link";

export default function Career() {

    return (
        <div className="page-main careerPage">
            <div className="ourReviews m-padding flex-between">
                <div className="content m-60">
                    <hr className="hr"/>
                    <h1 className="blue bolder font-32 m-40">Our Reviews</h1>
                    <p>If you’re thinking about a career in the auto transportation industry, the car transport business
                        is a good place to start. First of all, the transport industry is growing rapidly. Secondly,
                        almost anyone can own a car, and because of this, the shipping of cars is becoming more common.
                        Therefore, if you have an interest in pursuing a career in the industry, now is the time!
                    </p>
                    <p>Washington DC Auto Transport is part of a national network of exceptional car shippers and
                        dispatchers. Because we coordinate shipments all over the country, we need our team to grow to
                        process all of the orders we get. If you like fast-paced work environments, we might be the
                        place for you!</p>
                </div>
                <div className="imageArea">
                    <img src="/images/career.png" alt="review writers"/>
                </div>
            </div>
            <div className="mainContent m-padding">
                <h1>How about a career at Washington DC Auto Transport?</h1>
                <p>Washington DC Auto Transport is growing into one of the leading auto shipping companies in the US. As
                    a result of this accelerated growth, we’re always on the lookout for smart and capable employees. We
                    want ambitious and hard-working people to join our team today!</p>
                <p>We’re always looking for new team members to help us provide excellent car transport services all
                    over the country. We have affiliates all over, even as far as Hawaii ! Because of this, we are in
                    constant need of drivers who are dedicated to safety and efficiency. If you would like to grow in
                    the car transport industry and be a part of a well-known, well-respected team, then you sound like a
                    good fit for our team!</p>
                <h2 className="blue font-24 bold mb-40">Contact us and we’ll put you on the path towards your future!</h2>
                <Button className="toContact mb-60">
                    <Link href="contact" className="bold red font-16">
                        Contact <span className="icon-chevron-thin-right"></span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}