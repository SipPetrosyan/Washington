import Head from "next/head";
import QuoteBanner from "@/components/quote/QuoteBanner";
import Reviews from "@/components/home/Reviews";
import ReviewsSlider from "@/components/quote/ReviewsSlider";
import VehicleAdvertising from "@/components/quote/VehicleAdvertising";
import Services from "@/components/quote/Services";
import CalculationInfo from "@/components/quote/CalculationInfo";

export default function Quote() {

    return (
        <>
            <Head>
                <title>Get Quote</title>
                <meta name="description" content="Get Quote"/>
                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </Head>
            <main>
                <QuoteBanner />
                <Reviews/>
                <ReviewsSlider/>
                <VehicleAdvertising/>
                <Services/>
                <CalculationInfo/>
            </main>
        </>
    )
}