import SendMessage from "@/components/quote/SendMessage";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {useState} from "react";


export default function FAQ() {

    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="page-main faqPage">
            <div className="faqHeaders m-padding">
                <hr className="hr"/>
                <h1 className="blue bolder font-32 m-40">FAQ’s</h1>
                <h2 className="blue-60 font-24">Frequently Asked Questions</h2>
            </div>
            <div className="faqsContainer">
                {Array.from(Array(5).keys()).map((el, i) => (
                    <Accordion key={i} expanded={expanded === i} onChange={handleChange(i)}>
                        <AccordionSummary
                            expandIcon={<div className="expandIcon"><span
                                className="icon-keyboard_arrow_down blue"></span></div>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h1 className="bold font-28">Accordion {i + 1}</h1>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="blue font-24">
                                Non nisi malesuada pellentesque condimentum blandit libero facilisis. Phasellus egestas
                                justo euismod habitant. In sapien pretium velit ornare ornare orci cursus vitae sed.
                                Quam arcu sem vel turpis pulvinar nulla dolor dictum.Non nisi malesuada pellentesque
                                condimentum blandit libero facilisis. Phasellus egestas justo euismod habitant. In
                                sapien pretium velit ornare ornare orci cursus vitae sed. Quam arcu sem vel turpis
                                pulvinar nulla dolor dictum.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            <SendMessage/>
        </div>
    )
}