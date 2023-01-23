import {Button} from "@mui/material";
import Link from "next/link";

export default function Services() {
    return (
        <div className="page-main m-padding allServices">
            <hr className="hr"/>
            <h1 className="blue bolder font-32 text-center mb-20">Vehicle Transport Services</h1>
            <h2 className="blue-80 font-24 text-center mb-60">Check out our car shipping options</h2>
            <div className="servicesCards">
                <div className="leftSide">
                    <div className="card1 gbBlue">
                        <h1>Door to Door Car Shipping</h1>
                        <p>Do you need to get your car from one place to another but don’t want to drive? If so, our
                            door-to-door car shipping service can assist you with this. </p><p> Why put extra miles on
                        your car
                        and waste valuable time driving? Especially when there’s a way to have your car brought
                        directly to your door at a</p>
                        <Button>
                            <Link href="/services/door-to-door" className="white bolder font-20">
                                Continue Reading <span className="icon-chevron-thin-right"></span>
                            </Link>
                        </Button>
                    </div>
                    <div className="card2s">
                        <div className="card2 bgGreen">
                            <h1>Exotic Vehicle Shipping</h1>
                            <p>Certain things need to be considered when shipping an exotic vehicle, especially when the
                                distance is long. After all, an exotic car truly deserves special treatment.</p>
                            <p> Rare,
                                collectible, or luxury automobiles can be super expensive. Consequently, it’s worth
                                making</p>
                            <Button>
                                <Link href="/services/exotic-vehicle-shipping" className="white bolder font-20">
                                    Continue Reading <span className="icon-chevron-thin-right"></span>
                                </Link>
                            </Button>
                        </div>
                        <div className="card2 bgGreen">
                            <h1>Military Automobile Shipping</h1>
                            <p>Relocation is not an easy process. Especially, when PCS season is upon you. In fact, you
                                might require some assistance to handle the load. That’s why we provide military
                                automobile
                                shipping.</p><p> At Washington DC Auto Transport we understand moving is a difficult
                            process.
                            There
                            are so many</p>
                            <Button>
                                <Link href="/services/millitary-automobile-shipping" className="white bolder font-20">
                                    Continue Reading <span className="icon-chevron-thin-right"></span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* .leftSide*/}
                <div className="rightSide">
                    <div className="card2s">
                        <div className="card2 bgRed">
                            <h1>Enclosed Auto Shipping</h1>
                            <p>There are two main car shipping methods a customer can choose from when booking vehicle
                                transport service. The most common is Open Car Transport.</p><p>This option is more
                            affordable,
                            therefore it is more widely used. However, enclosed auto shipping provides more protection
                            for</p>
                            <Button>
                                <Link href="/services/enclosed-auto-shipping" className="white bolder font-20">
                                    Continue Reading <span className="icon-chevron-thin-right"></span>
                                </Link>
                            </Button>

                        </div>
                        <div className="card2 bgRed">
                            <h1>Expedited Auto Transport</h1>
                            <p>We live in a hectic, fast-paced world. We want and often need things to get done in a
                                hurry.
                                And like the age-old saying, time is money.</p><p> Consequently, some people don’t have
                            the
                            wiggle
                            room to wait for their car to be shipped on an appointed date. They need it</p>
                            <Button>
                                <Link href="/services/expedited-auto-transport" className="white bolder font-20">
                                    Continue Reading <span className="icon-chevron-thin-right"></span>
                                </Link>
                            </Button>

                        </div>
                    </div>
                    <div className="card1 gbBlue">
                        <h1>Open Car Moving</h1>
                        <p>The most popular method of auto transport is Open Car Moving. Enclosed Auto Shipping is
                            great
                            for exotic or classic vehicles but is slightly more expensive. </p><p>Most auto shipping
                        customers
                        prefer this shipping method because it’s a cheaper alternative. Moreover, due to
                        higher</p>
                        <Button>
                            <Link href="/services/open-car-moving" className="white bolder font-20">
                                Continue Reading <span className="icon-chevron-thin-right"></span>
                            </Link>
                        </Button>
                    </div>
                </div>
                {/*    .rightSide*/}
            </div>
            <div className="flex-center">
                <div className="card1 gbBlue">
                    <h1>Snowbird Auto Moving</h1>
                    <p>A Snowbird is someone who moves to warmer states for the winter instead of dealing with cold
                        weather. This can be seen as a mini-relocation.</p><p> For most snowbirds, this process also
                    involves moving their vehicle to the sunnier locale. This task can be</p>
                    <Button>
                        <Link href="/services/snowbird-auto-moving" className="white bolder font-20">
                            Continue Reading <span className="icon-chevron-thin-right"></span>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="servicesInfo">
                <h1 className="blue font-32 bolder mb-20">Vhy Choose Our Services ?</h1>
                <p className="font-24 blue mb-20">The car transport services offered by Washington DC Auto Transport are
                    the best in the market. Our
                    service is exceptional and the satisfaction of our customers is our number one priority.</p>
                <p className="font-24 blue mb-20">
                    Our vehicle transport services are available nationwide. Plus, we’re able to ship to all 50 states,
                    including Hawaii and Alaska. Not only that, but we have over a decade of experience. Therefore,
                    thousands of clients have shipped their cars with us. Many of those are return clients who always
                    leave fully satisfied with our services.
                </p>
            </div>
        </div>
    )
}