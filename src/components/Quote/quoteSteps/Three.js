import {Button} from "@mui/material";

export default function Three(props) {

    const handleLastStep = () => {
        props.lastStep();
        props.completeCallback();
    };


    return (
        <div className="stepForm confirmation">
            <div className="inputs">
                <div className="flex-between">
                    <p className="white bolder font-30">Quote details</p>
                    <Button>
                        <span className="icon-Edit-Icon"></span>
                        <spna className="white font-20 bold">Edit</spna>
                    </Button>
                </div>
            </div>
            <Button className="continueBtn font-32 white bolder" onClick={props.nextStep}>Continue</Button>
        </div>

    );
};