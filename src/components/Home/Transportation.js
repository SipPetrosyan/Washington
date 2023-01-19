import TransportCard from "@/components/Home/TransportCard";

export default function Transportation() {

    return (
        <div className="transportation m-padding">
            <hr className="hr"/>
            <h1 className="font-32 blue">Auto Transport Made Easy</h1>
            <div className="mainContent">
                <div className="contentItem">
                    <h3 className="font-22 blue">Washington DC Auto Transport can help move your car to the destination of your choice. Whether
                        you are moving to or from Washington DC, we ship cars nationwide. </h3>
                    <TransportCard
                        title="Open Car Transport"
                        text="The most popular method of auto transport is Open Car Moving."
                        link="/open"
                        icon={<span className="icon-Open-Hauler-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span
                            className="path4"></span><span className="path5"></span><span
                            className="path6"></span><span className="path7"></span><span
                            className="path8"></span><span className="path9"></span><span
                            className="path10"></span><span
                            className="path11"></span><span className="path12"></span><span
                            className="path13"></span><span className="path14"></span><span
                            className="path15"></span><span className="path16"></span></span>
                        }
                    />
                    <TransportCard
                        title="Open Car Transport"
                        text="The most popular method of auto transport is Open Car Moving."
                        link="/open"
                        icon={<span className="icon-Exotic-Car-Transport-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span></span>
                        }
                    />
                    <h3 className="font-22 blue">Once you choose us as your vehicle transporter, you are assigned a personal coordinator to help
                        you through the paperwork, scheduling and billing processes.</h3>
                </div>

                <div className="contentItem">
                    <h3 className="font-22 blue">Washington DC Auto Transport can help move your car to the destination of your choice. Whether
                        you are moving to or from Washington DC, we ship cars nationwide. </h3>
                    <TransportCard
                        title="Open Car Transport"
                        text="The most popular method of auto transport is Open Car Moving."
                        link="/open"
                        icon={<span className="icon-Enclosed-Hauler-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span><span
                            className="path8"></span><span className="path9"></span><span
                            className="path10"></span><span className="path11"></span><span
                            className="path12"></span><span className="path13"></span><span
                            className="path14"></span><span className="path15"></span></span>
                        }
                    />
                    <TransportCard
                        title="Open Car Transport"
                        text="The most popular method of auto transport is Open Car Moving."
                        link="/open"
                        icon={<span className="icon-Door-to-Door-Icon"></span>
                        }
                    />
                    <h3 className="font-22 blue">Once you choose us as your vehicle transporter, you are assigned a personal coordinator to help
                        you through the paperwork, scheduling and billing processes.</h3>
                </div>

            </div>
        </div>
    )
}