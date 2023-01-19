import {Box, Button, Grid, Rating} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import ReviewsItem from "@/components/home/ReviewsItem";

export default function Reviews() {

    return (
        <div className="m-padding reviewsBanner">
            <hr className="hr"/>
            <div className="reviewsMain">
                <div className="content">
                    <h1 className="white font-32">Washington DC Auto Transport Review</h1>
                    <p>As the most reliable name in the car shipping industry, Washington, DC Auto Transport is your
                        trusted
                        friend when moving your vehicle. Starting from the time you request a quote online or contact us
                        by
                        phone until your vehicle is delivered to you, we are the most trustworthy company in the
                        business.</p>
                </div>
                <div className="reviewsContainer">
                    <div className="common">
                        <h1>4.8 / 5</h1>
                        <Rating
                            name="text-feedback"
                            value={4.7}
                            readOnly
                            precision={0.5}
                        />
                        <p className="white font-32 bold">199 Review</p>
                        <Button>
                            <Link href="/reviews">
                                Give us your feedback
                            </Link>
                        </Button>
                    </div>
                    <div className="partial">
                        <div className="graphics">
                            <ReviewsItem from={177} total={5}/>
                            <ReviewsItem from={9} total={4}/>
                            <ReviewsItem from={6} total={3}/>
                            <ReviewsItem from={0} total={2}/>
                            <ReviewsItem from={7} total={1}/>
                        </div>
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