import Link from "next/link";
import {Dialog} from "@mui/material";
import {useState} from "react";
import QuoteForm from "@/components/home/QuoteForm";
import {useWindowSize} from "@/utils/hooks";
import QuoteSteps, {quoteSchema} from "@/components/quote/quoteSteps";
import {useFormik} from "formik";
import {quoteInitialValues} from "@/utils/helper";

export default function SocialPanel({quotePopup, setQuotePopUp}) {
    const {width} = useWindowSize();

    const [vehicle, setVehicle] = useState([{
        year: "",
        make: "",
        model: ""
    }]);
    const [errors, setErrors] = useState([{}]);


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
            }]);
            setQuotePopUp(false);
        },
        validationSchema: quoteSchema
    });

    const handleClickOpen = () => {
        setQuotePopUp(true);
    };

    const handleClose = () => {
        setQuotePopUp(false);
    };

    return (
        <aside className="socialPanel">
            <div className="socialLinks">
                <button className="openGetQuote" onClick={handleClickOpen}>
                    <span>Get Quote </span>
                    <div className="quoteIcon"><span className="icon-chevron-thin-right"></span></div>
                </button>
                <Dialog
                    className="getQuotePopUp"
                    open={quotePopup}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {width <= 768 ? <>
                        <div className="top-panel">
                            <div className="get-quote">
                                <Link onClick={() => {
                                    setQuotePopUp(!quotePopup)
                                }} href="">
                                    <span>Get Quote</span>
                                    <span className="icon-chevron-thin-right"></span>
                                </Link>
                            </div>
                        </div>
                        <QuoteSteps errors={errors} setErrors={setErrors} formik={formik} vehicle={vehicle} setVehicle={setVehicle}/>
                    </> : <>
                        <QuoteForm errors={errors} setErrors={setErrors} formik={formik} vehicle={vehicle} setVehicle={setVehicle}/>
                        <div className="closePopUp" onClick={handleClose}>
                            <span className="icon-cancel-circle"></span>
                        </div>
                    </>}
                </Dialog>
                <Link href="">
                <span className="icon-Facebook-Icon"><span className="path1"></span><span
                    className="path2"></span></span>
                </Link>
                <Link href="">
                <span className="icon-Twitter-Icon"><span className="path1"></span><span
                    className="path2"></span></span>
                </Link>
                <Link href="">
                <span className="icon-Pinterest-Icon"><span className="path1"></span><span
                    className="path2"></span></span>
                </Link>
                <Link href="">
                <span className="icon-Google-Icon"><span className="path1"></span><span className="path2"></span><span
                    className="path3"></span><span className="path4"></span></span>
                </Link>
                <Link href="">
                    <span className="icon-Bing-Icon"><span className="path1"></span><span
                        className="path2"></span></span>
                </Link>
                <Link href="">
                    <span className="icon-Yelp-Icon"><span className="path1"></span><span
                        className="path2"></span></span>
                </Link>
                <Link href="">
                <span className="icon-Yp-Icon"><span className="path1"></span><span className="path2"></span><span
                    className="path3"></span></span>
                </Link>
            </div>
        </aside>
    )
}