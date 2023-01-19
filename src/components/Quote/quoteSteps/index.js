import {Step, Stepper} from "@mui/material";
import StepWizard from "react-step-wizard";
import One from "@/components/Quote/quoteSteps/One";
import Two from "@/components/Quote/quoteSteps/Two";
import Three from "@/components/Quote/quoteSteps/Three";
import {useState} from "react";
import Four from "@/components/Quote/quoteSteps/Four";

export default function QuoteSteps({activeStep, setActiveStep}) {
    const [stepWizard, setStepWizard] = useState(null);
    const [user, setUser] = useState({});

    const assignStepWizard = (instance) => {
        setStepWizard(instance);
    };

    const assignUser = (val) => {
        setUser((user) => ({
            ...user,
            ...val
        }));
    };

    const handleStepChange = (e) => {
        setActiveStep(e.activeStep - 1);
    };

    const handleComplete = () => {
        alert("You r done. TQ");
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                <Step label="Step 1" children={<div className={`indicator ${activeStep===0 && "active"}`}><span>1</span> <p>Select a Rout</p></div>}/>
                <Step label="Personal Detail" children={<div className={`indicator ${activeStep===1 && "active"}`}><span>2</span> <p>Select an Options</p></div>}/>
                <Step label="Confirmation" children={<div className={`indicator ${activeStep===2 && "active"}`}><span>3</span> <p>Confirmation</p></div>}/>
                <Step label="Four" children={<div className={`indicator ${activeStep===3 && "active"}`}><span>4</span> <p>Finish</p></div>}/>
            </Stepper>
            <StepWizard className="stepsController" instance={assignStepWizard} onStepChange={handleStepChange}>
                <One userCallback={assignUser}/>
                <Two user={user} userCallback={assignUser}/>
                <Three user={user}/>
                <Four user={user} completeCallback={handleComplete} setActiveStep={setActiveStep}/>
            </StepWizard>
        </div>
    );
}