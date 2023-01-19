import Link from "next/link";
import {Button} from "@mui/material";

export default function CommercialCard({title, text, link, className}) {

    return (
        <div className={`commercialCard ${className}`}>
            <h1 className="font-24 red">{title}</h1>
            <p className="font-20 blue">{text}</p>
            <Button>
                <Link className="font-20 bold white" href={link}>
                    Read More
                </Link>
            </Button>
        </div>
    )
}