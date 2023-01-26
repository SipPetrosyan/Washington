import {useState} from "react";
import QuoteSteps from "@/components/quote/quoteSteps";

export default function QuoteBanner () {

    return(
        <div className="quoteBanner" >
            <img className="bgImage" alt="bg-image" src="/images/Peterbilt.png" />
            <div className="filter"></div>
            <div className="stepIndexes">
            </div>
            {/*<QuoteSteps   />*/}
        </div>
    )
}