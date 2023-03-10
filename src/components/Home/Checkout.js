import {Button, Rating} from "@mui/material";
import Link from "next/link";

export default function Checkout() {

    return (
        <div className="checkOutReviews m-padding">
            <h1 className="font-24 bold">Check out more reviews on:</h1>
            <div className="flex-between align-center socs">
                <div className="socItem">
                    <div className="flex-between align-center">
                        <span className="icon-Google-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span
                            className="path4"></span>
                        </span>
                        <Rating
                            name="text-feedback"
                            value={4.7}
                            readOnly
                            precision={0.5}
                        />
                    </div>
                    <p className="name white font-24">Google</p>
                </div>
                <div className="socItem">
                    <div className="flex-between align-center">
                        <span className="icon-Yp-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span></span>
                        <Rating
                            name="text-feedback"
                            value={4.7}
                            readOnly
                            precision={0.5}
                        />
                    </div>
                    <p className="name white font-24">YellowPages</p>
                </div>
                <div className="socItem">
                    <div className="flex-between align-center">
                        <span className="icon-Yelp-Icon"><span className="path1"></span><span className="path2"></span></span>
                        <Rating
                            name="text-feedback"
                            value={4.7}
                            readOnly
                            precision={0.5}
                        />
                    </div>
                    <p className="name white font-24">Yelp</p>
                </div>
            </div>
            <Button>
                <Link href="/reviews">
                    Read More <span className="icon-chevron-thin-right"></span>
                </Link>
            </Button>
        </div>
    )
}