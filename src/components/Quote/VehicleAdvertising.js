import {Button} from "@mui/material";
import Link from "next/link";

export default function VehicleAdvertising() {


    return (
        <div className="vehicleAdvertising">
            <div className="img"><img src="/images/Peterbilt.png" alt="vehicle"/></div>
            <div className="content">
                <h1 className="white bolder font-32">Luxury car shipping with enclosed vehicle services</h1>
                <p className="white font-20">Enclosed Auto Shipping is an amazing service our company offers. Plus, we
                    have the best carriers available to safely transport your vehicle. Our drivers have years of
                    experience in transporting cars using this method. If you want the highest quality service, then
                    choosing the enclosed option is the right choice for you.</p>
                <Button>
                    <Link className="white bolder" href="/contact">
                        Contact
                    </Link>
                </Button>
            </div>
        </div>
    )
}