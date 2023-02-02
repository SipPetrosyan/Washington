import Link from "next/link";
import {Button} from "@mui/material";

export default function CalculationInfo() {

    return (
        <div className="m-padding calculationInfo">
            <h2 className="mb-60 blue font-24 bolder">How we calculated your transport fee </h2>
            <div className="flex-between calculationPhases mb-60">
                <div className="calculationPhase">
                    <div className="phaseIcon">
                        <span className="icon-Car"><span className="path1"></span><span className="path2"></span><span
                            className="path3"></span><span className="path4"></span><span className="path5"></span><span
                            className="path6"></span></span>
                    </div>
                    <p className="blue bold font-18">The size and weight of your vehicle</p>
                </div>
                <div className="calculationPhase distancePhase">
                    <div className="phaseIcon">
                        <span className="icon-location-icon"><span className="path1"></span><span
                            className="path2"></span></span>
                        <span className="white bold">...</span>
                        <span className="icon-location-icon"><span className="path1"></span><span
                            className="path2"></span></span>
                    </div>
                    <p className="blue bold font-18">Distance between vehicle pickup and delivery </p>
                </div>
                <div className="calculationPhase">
                    <div className="phaseIcon">
                        <span className="icon-Enclosed-Hauler-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span><span
                            className="path8"></span><span className="path9"></span><span
                            className="path10"></span><span className="path11"></span><span
                            className="path12"></span><span className="path13"></span><span
                            className="path14"></span><span className="path15"></span></span>
                    </div>
                    <p className="blue bold font-18">Choosing open or enclosed car transport</p>
                </div>
                <div className="calculationPhase">
                    <div className="phaseIcon">
                        <span className="icon-Exotic-Car-Transport-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3 blue"></span><span className="path4"></span><span
                            className="path5"></span></span>
                    </div>
                    <p className="blue bold font-18">The condition of your vehicle</p>
                </div>
            </div>
            <div className="flex-center ">
                <Button>
                    <Link href="/faq" className="white bolder">
                        FAQ
                    </Link>
                </Button>
            </div>
        </div>
    )
}