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
                width > 768 ? <QuoteForm formik={formik} vehicle={vehicle} setVehicle={setVehicle}/> : ""
                //  there are 2 conditions here, because under condition 1,
                //  else will be displayed first,
                //  then when window is available in Next.js, the first condition will work !!!
            }
        </div>
    )
}