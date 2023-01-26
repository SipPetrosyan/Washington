import {Button} from "@mui/material";

export default function Three(props) {
    const {user, vehicle} = props

    return (
        <div className="stepForm confirmation">
            <div className="inputs">
                <div className="flex-between headTitle">
                    <p className="white bolder font-30">Quote details</p>
                    <Button onClick={() => props.goToStep(1)}>
                        <span className="icon-Edit-Icon"></span>
                        <span className="white font-20 bold">Edit</span>
                    </Button>
                </div>
                <div className="flex-between content">
                    <div className="leftSide">
                        <div className="infoItem">
                            <p className="helper"><span className="icon-location-icon"><span
                                className="path1"></span><span
                                className="path2"></span></span> <b>From</b>
                            </p>
                            <p className="white font-24 bold">{user.from}</p>
                        </div>
                        <div className="infoItem toInfoItem">
                            <p className="helper"> <span className="icon-location-icon to-icon"><span
                                className="path1"></span><span
                                className="path2"></span></span>
                                <span className="icon-location-icon"><span className="path1"></span><span
                                    className="path2"></span></span><b>To</b>
                            </p>
                            <p className="white font-24 bold">{user.to}</p>
                        </div>
                        <div className="infoItem timeInfoItem">
                            <p className="helper"><span className="icon-Vector-3"></span> <b>Time</b>
                            </p>
                            <p className="white font-24 bold">{user.time}</p>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="infoItem">
                            <p className="helper"><span className="icon-Vehicle-Icon"></span> <b>Vehicle</b></p>
                            {vehicle.map((el, i) => (
                                <p key={i} className="white font-24 bold">{el.make + " " + el.model + " " + el.year}</p>
                            ))}
                        </div>
                        <div className="infoItem">
                            <p className="helper"> Shipping Method? </p>
                            <p className="red font-24 bold">{user.method === '1' ? "Open" : "Enclosed"}</p>
                        </div>
                        <div className="infoItem">
                            <p className="helper">Is It Operable? </p>
                            <p className="red font-24 bold"> {user.operable === '1' ? "Yes" : "No"} </p>
                        </div>
                    </div>
                </div>
            </div>
            <Button className="continueBtn font-24 white bolder" onClick={props.nextStep}>Continue</Button>
        </div>
    );
};