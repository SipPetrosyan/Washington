import {useState} from "react";
import QuoteSteps from "@/components/quote/quoteSteps";

export default function QuoteBanner () {
    const [activeStep, setActiveStep] = useState(0);

    return(
        <div className="quoteBanner" >
            <img className="bgImage" alt="bg-image" src="/images/Peterbilt.png" />
            <div className="filter"></div>
            <div className="stepIndexes">
            </div>
            <QuoteSteps activeStep={activeStep} setActiveStep={setActiveStep}  />
        </div>
    )
}