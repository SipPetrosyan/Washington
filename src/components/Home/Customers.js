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

        </section>
    )
}