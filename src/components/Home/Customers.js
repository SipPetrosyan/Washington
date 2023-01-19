import {Rating} from "@mui/material";

export default function Customers() {

    return (
        <section className="customersSection">
            <div className="customersSays">
                <div className="content">
                    <hr className="hr"/>
                    <h1 className="font-32 blue">What Our Customers Say About Us</h1>
                    <p>The most essential part of our auto shipping business is our clients. They are the reason the
                        wheels of our company keep on rolling. After all, without customers, a company cannot
                        succeed.</p>
                    <p>Our clients are priority #1. This means we not only set out to offer the fullest menu of
                        services, but we strive to be the most friendly and informative team going! Our agents are
                        experts in the field and our clientele recognizes and appreciates that. </p>
                    <p>Customer reviews are essential to any business. Whether they’re good or bad, they help the
                        business improve their practices while aiding the customer in making a smart choice.Just check
                        out some of our reviews.</p>
                </div>
                <div className="customersImg">
                    <img src="/images/customers.png" alt="customers"/>
                </div>
            </div>
            <div className="customerExample">
                <div className="exampleContent">
                    <span className="start">“</span>
                    <p>
                        When I needed my car transported, I was shopping around looking for the lowest quote but when I
                        called Washington dc auto transport, they informed me never to go with the lowest quote because
                        that would most probably be a scam! Well, I am glad I went with these guys because even though I
                        paid an extra $100 than the average quote, these guys took care of me and I worked with their 3
                        day pick up window so everything went perfect. 5 stars!!
                    </p>
                    <div className="info flex-between">
                        <p className="author">Review By Ammara T. </p>
                        <div>
                            <img src="/images/yelp.png" alt="yelp" />
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
        </section>
    )
}