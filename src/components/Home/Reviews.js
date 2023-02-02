import {Button,  Rating} from "@mui/material";
import Link from "next/link";
import ReviewsGraphicItem from "@/components/home/ReviewsGraphicItem";

export default function Reviews({welcome}) {

    return (
        <div className="m-padding reviewsBanner">
            {welcome && <div className="welcomePart">
                <h1>
                    <span className="red">Welcome to </span>
                    <span className="white">Washington DC Auto Transport </span>
                    <span className="red font-24 bold"> #1 Car Shipper and Auto Mover in the US </span>
                </h1>
            </div>}
            <hr className="hr"/>
            <div className="reviewsMain">
                <div className="content">
                    <h1 className="white font-24">Washington DC Auto Transport Review</h1>
                    <p>As the most reliable name in the car shipping industry, Washington, DC Auto Transport is your
                        trusted
                        friend when moving your vehicle. Starting from the time you request a quote online or contact us
                        by
                        phone until your vehicle is delivered to you, we are the most trustworthy company in the
                        business.</p>
                </div>
                <div className="reviewsContainer">
                    <div className="flex-between stars">
                        <div className="common">
                            <h1>4.8 / 5</h1>
                            <Rating
                                name="text-feedback"
                                value={4.7}
                                readOnly
                                precision={0.5}
                            />
                            <p className="white font-32 bold">199 Review</p>
                        </div>
                        <div className="partial">
                            <div className="graphics">
                                <ReviewsGraphicItem from={177} total={5}/>
                                <ReviewsGraphicItem from={9} total={4}/>
                                <ReviewsGraphicItem from={6} total={3}/>
                                <ReviewsGraphicItem from={0} total={2}/>
                                <ReviewsGraphicItem from={7} total={1}/>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button>
                            <Link href="/reviews">
                                Give us your feedback
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/reviews">
                                Read Reviews
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}