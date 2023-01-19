import {useDispatch, useSelector} from "react-redux";
import {selectLoader, setLoader} from "@/store/slices/common";
import {CircularProgress} from "@mui/material";
import {useEffect} from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout({children}) {
    const dispatch = useDispatch();
    const loader = useSelector(selectLoader);

    return (
        <>
            {loader ?
                <div className="loader">
                    <CircularProgress/>
                </div> : null
            }
            <Header/>
            {children}
            <Footer/>
        </>
    )
}