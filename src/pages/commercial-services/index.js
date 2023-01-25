import {Button} from "@mui/material";
import Link from "next/link";

export default function CommercialServices() {
    return (
        <div className="page-main m-padding allServices">
            <hr className="hr"/>
            <h1 className="blue bolder font-32 text-center mb-20">Commercial Vehicle Transport Services</h1>
            <h2 className="blue-80 font-24 text-center mb-60">Check out our car commercial shipping options</h2>
            <div className="commercialServicesCards">
                <div className="topSide">
                    <div className="card1" style={{backgroundImage: "url(/images/post.png)"}}>
                        <div className="filter bgBlue"></div>
                        <h1>Auction Car Shipping</h1>
                        <p> An auction is a good place to get a good deal on a car or even to find that hard to locate
                            exotic car. But whichever group you fall into, there’s still the matter of getting the
                            vehicle home, or to your designated location.
                        </p><p>
                        Washington DC Auto Transport can help. We know that the car you want or the best</p>
                        <Button>
                            <Link href="/commercial-services/auction-car-shippint" className="white bolder font-20">
                                Continue Reading <span className="icon-chevron-thin-right"></span>
                            </Link>
                        </Button>
                    </div>
                    <div className="card1" style={{backgroundImage: "url(/images/post.png)"}}>
                        <div className="filter bgRed"></div>
                        <h1>Corporate Relocation</h1>
                        <p>Moving a business is not easy. There are lots of things to coordinate and plan. Plus, like
                            anything else, timing is everything.</p>
                        <p> If something goes wrong with your move, it can cost you revenue. Nobody wants that. For this
                            reason, it’s</p>
                        <Button>
                            <Link href="/commercial-services/corporate-relocation" className="white bolder font-20">
                                Continue Reading <span className="icon-chevron-thin-right"></span>
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex-between bottomSide">
                    <div className="card2" style={{backgroundImage: "url(/images/post.png)"}}>
                        <div className="filter bgGreen"></div>
                        <h1>Commercial Vehicle Transport</h1>
                        <p> For many companies, commercial vehicles are a vital part of their business. They are counted
                            on a great deal. When they need to be moved a long distance, it must be done professionally
                            and efficiently. Time is of the essence.
                        </p><p> For this reason, many companies use commercial transport services to ship their
                        vehicles. Therefore, it’s
                    </p>
                        <Button>
                            <Link href="/commercial-services/commercial-vehicle-transport"
                                  className="white bolder font-20">
                                Continue Reading <span className="icon-chevron-thin-right"></span>
                            </Link>
                        </Button>
                    </div>
                    <div className="card1" style={{backgroundImage: "url(/images/post.png)"}}>
                        <div className="filter bgBlue"></div>
                        <h1>Dealer Car Moving Services</h1>
                        <p> When buying a car, you generally start your search with local dealerships. This is the most
                            convenient way to scout out the car of your dreams.
                        </p><p> Unfortunately, what’s in stock doesn’t always match up with the perfect car in your
                        head. Maybe the make and model is in stock but...
                    </p>
                        <Button>
                            <Link href="/commercial-services/dealer-car-moving-services"
                                  className="white bolder font-20">
                                Continue Reading <span className="icon-chevron-thin-right"></span>
                            </Link>
                        </Button>
                    </div>
                    <div className="card2" style={{backgroundImage: "url(/images/post.png)"}}>
                        <div className="filter bgGreen"></div>
                        <h1>Military Heavy Equipment Shipping</h1>
                        <p> Military Heavy Equipment Shipping is one of our premium vehicle moving services. It takes
                            the knowledge of a professional crew with lots of experience to perform this type of vehicle
                            transport.
                        </p><p> In fact, not every auto shipping company provides this service. Plus, the ones that do
                        don’t always...
                    </p>
                        <Button>
                            <Link href="/commercial-services/millitary-heavy-equipment-shipping"
                                  className="white bolder font-20">
                                Continue Reading <span className="icon-chevron-thin-right"></span>
                            </Link>
                        </Button>
                    </div>
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