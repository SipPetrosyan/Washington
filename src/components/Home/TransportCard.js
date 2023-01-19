import {Button} from "@mui/material";
import Link from "next/link";

export default function TransportCard ({title, text, icon, link}) {
    return(
        <div className="transportCard">
            <h1 className="font-24 bold blue">{title}</h1>
            <p>{text}</p>
            <div className="flex-between align-center">
                <Button>
                    <Link className="white font-20 bold" href={link || ""}>
                        Read More
                    </Link>
                </Button>
                {icon}
            </div>
        </div>
    )
}