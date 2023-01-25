import {useDispatch, useSelector} from "react-redux";
import {selectLoader, setLoader} from "@/store/slices/common";
import {Button, CircularProgress} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialPanel from "@/components/home/SocialPanel";

export default function Layout({children}) {
    const toTopRef = useRef(null);
    const dispatch = useDispatch();
    const loader = useSelector(selectLoader);
    const [quotePopup, setQuotePopUp] = useState(false)

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 100) {
            toTopRef.current.classList.add("available")
        } else {
            if (toTopRef.current.classList.contains("available")) {
                toTopRef.current.classList.remove("available")
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            {loader ?
                <div className="loader">
                    <CircularProgress/>
                </div> : null
            }
            <Header quotePopup={quotePopup} setQuotePopUp={setQuotePopUp}/>
            {children}
            <SocialPanel quotePopup={quotePopup} setQuotePopUp={setQuotePopUp}/>
            <Button
                ref={toTopRef}
                onClick={() => {
                    window.scrollTo({top: 0, behavior: "smooth"})
                }}
                className="btnToTop">
                <span className="icon-chevron-thin-right"></span>
            </Button>
            <Footer/>
        </>
    )
}