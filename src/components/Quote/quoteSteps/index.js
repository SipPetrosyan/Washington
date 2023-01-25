import {Step, Stepper} from "@mui/material";
import StepWizard from "react-step-wizard";
import One from "@/components/quote/quoteSteps/One";
import Two from "@/components/quote/quoteSteps/Two";
import Three from "@/components/quote/quoteSteps/Three";
import {useState} from "react";
import Four from "@/components/quote/quoteSteps/Four";
import * as yup from "yup"
import {useFormik} from "formik";
import {quoteInitialValues} from "@/utils/helper";

export const quoteSchema = yup.object({
    from: yup.string().required("From is required"),
    to: yup.string().required("To is required"),
    time: yup.string().required("Time is required"),
    method: yup.string().required("Method is required"),
    operable: yup.string().required("required"),
    name: yup.string().required("required"),
    email: yup.string().email().required("required"),
    phone: yup.string().required("required"),
});


export default function QuoteSteps() {
    const [activeStep, setActiveStep] = useState(0);
    const [vehicle, setVehicle] = useState([{
        year:"",
        make: "",
        model:""
    }])

    const formik = useFormik({
        initialValues: quoteInitialValues,
        onSubmit: (values, {resetForm}) => {
            alert(JSON.stringify(values));
            resetForm(quoteInitialValues);
            setVehicle([{
                year:"",
                make: "",
                model:""
            }])
        },
        validationSchema: quoteSchema
    });

    const handleStepChange = (e) => {
        setActiveStep(e.activeStep - 1);
    };

    return (
        <div>
            <Stepper activeStep={activeStep} >
                <Step label="Select a Rout" className={`${activeStep===0 && "active"}`} children={<div className={`indicator ${activeStep===0 && "active"}`}><span>1</span> <p>Select a Rout</p></div>}/>
                <Step label="Select an Options" className={`${activeStep===1 && "active"}`} children={<div className={`indicator ${activeStep===1 && "active"}`}><span>2</span> <p>Select an Options</p></div>}/>
                <Step label="Confirmation" className={`${activeStep===2 && "active"}`} children={<div className={`indicator ${activeStep===2 && "active"}`}><span>3</span> <p>Confirmation</p></div>}/>
                <Step label="Four" className={`${activeStep===3 && "active"}`} children={<div className={`indicator ${activeStep===3 && "active"}`}><span>4</span> <p>Finish</p></div>}/>
            </Stepper>
            <StepWizard className="stepsController" onStepChange={handleStepChange} >
                <One formik={formik} setActive  />
                <Two vehicle={vehicle} setVehicle={setVehicle} formik={formik} />
                <Three vehicle={vehicle} user={formik.values}  />
                <Four formik={formik} />
            </StepWizard>
        </div>
    );
}