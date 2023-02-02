import TransportCard from "@/components/home/TransportCard";

export default function Transportation() {

    return (
        <div className="transportation m-padding">
            <hr className="hr mb-60"/>
            <div className="mainContent">
                <div className="contentItem">
                    <h1 className="font-24 blue">Auto Transport Made Easy</h1>
                    <h3 className="font-18 blue">Washington DC Auto Transport can help move your car to the destination
                        of your choice. Whether
                        you are moving to or from Washington DC, we ship cars nationwide. </h3>
                    <h3 className="font-18 blue">Once you choose us as your vehicle transporter, you are assigned a
                        personal coordinator to help
                        you through the paperwork, scheduling and billing processes.</h3>
                    <h3 className="font-18 blue">Washington DC Auto Transport can help move your car to the destination
                        of your choice. Whether
                        you are moving to or from Washington DC, we ship cars nationwide. </h3>
                    <h3 className="font-18 blue">Once you choose us as your vehicle transporter, you are assigned a
                        personal coordinator to help
                        you through the paperwork, scheduling and billing processes.</h3>
                </div>
                <div className="contentItem cards">
                    <TransportCard
                        title="Open Car Transport"
                        text="The most popular method of auto transport is Open Car Moving."
                        link="/services/open-car-transport"
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
                        title="Exotic Vehicle Shipping"
                        text="Exotic vehicle shipping ensures your beloved car avoids any possible damage."
                        link="/services/exotic-vehicle-shipping"
                        icon={<span className="icon-Exotic-Car-Transport-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span></span>
                        }
                    />
                </div>
                <div className="contentItem cards">
                    <TransportCard
                        title="Enclosed Car Transport"
                        text="Enclosed car shipping is reserved for exotic or luxury automobiles."
                        link="/services/enclosed-car-transport"
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
                        title="Door to Door Car Transport"
                        text="Washington DC Auto Transport’s standard shipping option is the door to door option."
                        link="/services/door-to-door"
                        icon={<span className="icon-Door-to-Door-Icon"></span>}
                    />
                </div>
            </div>
        </div>
    )
}