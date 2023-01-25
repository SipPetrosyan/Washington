import bgImg from "../../../public/images/banner.png";
import QuoteSteps, {quoteSchema} from "@/components/quote/quoteSteps";
import QuoteForm from "@/components/home/QuoteForm";
import {useWindowSize} from "@/utils/hooks";
import {useState} from "react";
import {useFormik} from "formik";
import {quoteInitialValues} from "@/utils/helper";

export default function MainBanner() {
    const {width} = useWindowSize();

    const [vehicle, setVehicle] = useState([{
        year: "",
        make: "",
        model: ""
    }])

    const formik = useFormik({
        initialValues: quoteInitialValues,
        onSubmit: (values, {resetForm}) => {
            alert(JSON.stringify({
                ...values,
                vehicle
            }));
            resetForm(quoteInitialValues);
            setVehicle([{
                year: "",
                make: "",
                model: ""
            }])
        },
        validationSchema: quoteSchema
    });

    return (
        <div className="mainBanner m-padding" style={{backgroundImage: `url(${bgImg.src})`}}>
            {width <= 768 ? <QuoteSteps formik={formik} vehicle={vehicle} setVehicle={setVehicle}/> :
                <QuoteForm formik={formik} vehicle={vehicle} setVehicle={setVehicle}/>
            }
        </div>
    )
}