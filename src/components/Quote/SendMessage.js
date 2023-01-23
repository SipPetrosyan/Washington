import {Button, TextField} from "@mui/material";
import {Textarea} from "@mui/joy";
import React from "react";
import SendMessageForm from "@/components/quote/SendMessageForm";

export default function SendMessage() {

    return (
        <div className="sendMessage m-padding">
            <h1 className="red font-36 bolder">Submit Now</h1>
            <div className="flex-between container">
                <SendMessageForm/>
                <div className="pricing">
                    <h2 className="blue bolder font-32">Pricing</h2>
                    <p className="font-24 blue">Our prices are very affordable. If you find a price lower than
                        Washington DC Auto Transports,
                        we’ll do our absolute best to match it.</p>
                    <p className="offer blue bold font-24">We offer discounts for military, students, and senior citizens. You can request a
                        free quote online today and one of our agents will contact you shortly.</p>
                    <div className="or">
                        <hr/>
                        <span>OR</span>
                        <hr/>
                    </div>
                    <div className="operator">
                        <a href="tel:( 202 ) 930 - 8005">
                            <span className="icon-Operator-icon-1"><span className="path1"></span><span
                                className="path2"></span><span className="path3"></span></span>
                            <span className="phone">( 202 ) 930 - 8005</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}