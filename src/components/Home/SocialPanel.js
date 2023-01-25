import Link from "next/link";
import {Button, Dialog} from "@mui/material";
import {useState} from "react";
import QuoteForm from "@/components/home/QuoteForm";

export default function SocialPanel () {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <aside className="socialPanel">
            <Button className="openGetQuote" onClick={handleClickOpen}>
                <span>Get Quote </span>
                <div className="quoteIcon"><span className="icon-chevron-thin-right"></span></div>
            </Button>
            <Dialog
                className="getQuotePopUp"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <QuoteForm handleClose={handleClose} />
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
                <span className="icon-Bing-Icon"><span className="path1"></span><span className="path2"></span></span>
            </Link>
            <Link href="">
                <span className="icon-Yelp-Icon"><span className="path1"></span><span className="path2"></span></span>
            </Link>
            <Link href="">
                <span className="icon-Yp-Icon"><span className="path1"></span><span className="path2"></span><span
                    className="path3"></span></span>
            </Link>
        </aside>
    )
}