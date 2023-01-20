export default function CalculationInfo() {

    return (
        <div className="m-padding CalculationInfo">
            <h2 className="m-60 blue font-32 bolder">How we calculated your transport fee </h2>
            <div className="flex-between calculationPhases">
                <div className="calculationPhase">
                        <span className="icon-Enclosed-Hauler-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span><span
                            className="path8"></span><span className="path9"></span><span
                            className="path10"></span><span className="path11"></span><span
                            className="path12"></span><span className="path13"></span><span
                            className="path14"></span><span className="path15"></span></span>
                    <p className="blue bold font-24">The size and weight of your vehicle</p>
                </div>
                <div className="calculationPhase">
                        <span className="icon-Enclosed-Hauler-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span><span
                            className="path8"></span><span className="path9"></span><span
                            className="path10"></span><span className="path11"></span><span
                            className="path12"></span><span className="path13"></span><span
                            className="path14"></span><span className="path15"></span></span>
                    <p className="blue bold font-24">Distance between vehicle pickup and delivery </p>
                </div>
                <div className="calculationPhase">
                        <span className="icon-Enclosed-Hauler-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span><span
                            className="path8"></span><span className="path9"></span><span
                            className="path10"></span><span className="path11"></span><span
                            className="path12"></span><span className="path13"></span><span
                            className="path14"></span><span className="path15"></span></span>
                    <p className="blue bold font-24">Choosing open or enclosed car transport</p>
                </div>
                <div className="calculationPhase">
                        <span className="icon-Exotic-Car-Transport-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span></span>
                    <p className="blue bold font-24">The condition of your vehicle</p>
                </div>
            </div>
        </div>
    )
}