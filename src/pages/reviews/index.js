import Reviews from "@/components/home/Reviews";
import ReviewsSlider from "@/components/quote/ReviewsSlider";
import Head from "next/head";
import {Rating} from "@mui/material";

export default function ReviewsPage() {

    return (
        <>
            <Head>
                <title>Our Reviews</title>
                <meta name="description" content="Our Reviews"/>
                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </Head>
            <div className="page-main reviewsPage">
                <div className="ourReviews m-padding flex-between">
                    <div className="content m-60">
                        <hr className="hr"/>
                        <h1 className="blue bolder font-32 m-40">Our Reviews</h1>
                        <p>The reason for our success over the years has been dependent on our loyal customers. They
                            appreciate the stellar service we’ve given them, and consequently, they’ve come back over
                            and
                            over again. Plus, they’ve spread the word. We’re eternally grateful for this.
                        </p>
                        <p>We give them the best experience so that when they need to ship a vehicle the second time
                            they’ll
                            come back to us. And they do. But, whether it’s a return client or a new one, they can count
                            on
                            expert information and our full attention. Plus, we’re equipped to handle more than
                            businesses
                            and individual clients. In fact, we do a lot of work with dealerships. We’re also capable of
                            partnering with businesses internationally.</p>
                        <p>Washington Auto Transport has one of the best reputations in the industry. And, we feel good
                            knowing that our customers come to us – and return to us – because of our exemplary
                            reviews.</p>
                    </div>
                    <div className="imageArea">
                        <img src="/images/reviewWriters.png" alt="review writers"/>
                    </div>
                </div>
                <Reviews/>
                <ReviewsSlider/>
                <div className="customerExample">
                    <div className="exampleContent">
                        <span className="start">“</span>
                        <p>
                            When I needed my car transported, I was shopping around looking for the lowest quote but
                            when I
                            called Washington dc auto transport, they informed me never to go with the lowest quote
                            because
                            that would most probably be a scam! Well, I am glad I went with these guys because even
                            though I
                            paid an extra $100 than the average quote, these guys took care of me and I worked with
                            their 3
                            day pick up window so everything went perfect. 5 stars!!
                        </p>
                        <div className="info flex-between">
                            <p className="author">Review By Ammara T. </p>
                            <div>
                                <img src="/images/yelp.png" alt="yelp"/>
                                <Rating
                                    name="text-feedback"
                                    value={5}
                                    readOnly
                                />
                            </div>
                        </div>
                        <span className="end">“</span>
                    </div>
                </div>
                <div className="images">
                    <div className="imageItem">
                        <img src="/images/Peterbilt.png" alt="move"/>
                    </div>
                    <div className="imageItem">
                        <img src="/images/Peterbilt.png" alt="move"/>
                    </div>
                    <div className="imageItem">
                        <img src="/images/Peterbilt.png" alt="move"/>
                    </div>
                    <div className="imageItem">
                        <img src="/images/Peterbilt.png" alt="move"/>
                    </div>
                </div>
            </div>
        </>
    )
}