import Link from "next/link";
import {Button, TextField} from "@mui/material";
import PhoneInput from "react-phone-number-input";
import {useState} from "react";
import Head from "next/head";
import {Textarea} from "@mui/joy";
import {formatPhoneNumber} from 'react-phone-number-input';
import flags from "react-phone-number-input/flags";
import Input from 'react-phone-number-input'
import InputField from "@/components/customUI/InputField";


export default function Help() {
    const [phone, setPhone] = useState("")


    function formatPhoneNumber(value) {
        // if input value is falsy eg if the user deletes the input, then just return
        if (!value) return value;

        // clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, '');

        // phoneNumberLength is used to know when to apply our formatting for the phone number
        const phoneNumberLength = phoneNumber.length;

        // we need to return the value with no formatting if its less then four digits
        // this is to avoid weird behavior that occurs if you  format the area code to early

        if (phoneNumberLength < 4) return phoneNumber;

        // if phoneNumberLength is greater than 4 and less the 7 we start to return
        // the formatted number
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        // finally, if the phoneNumberLength is greater then seven, we add the last
        // bit of formatting and return it.
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
            3,
            6
        )}-${phoneNumber.slice(6, 10)}`;
    }

    return (
        <div className="m-padding help">
            <hr className="hr"/>
            <h1 className="m-60 font-32 blue">If you need an any HELP, just let us know !</h1>
            <div className="flex-between">
                <div className="getConsultation">
                    <div className="head  font-36 bold">
                        <span className="blue">Get a </span>
                        <span className="red"> FREE </span>
                        <span className="blue"> consultation</span>
                        <div className="square"></div>
                    </div>
                    <p className="blue font-18 bold else">If you haven't yet get a quote</p>
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
                <form className="contacts">
                    <div className="personal flex-between">
                        <div className="namePhone">
                            <TextField id="standard-basic" label="Name Surname" variant="standard"/>
                            <div className="phoneNumber">
                                <span>Phone Number</span>
                                <PhoneInput
                                    value={phone}
                                    onChange={setPhone}
                                    international
                                    defaultCountry="US"
                                    limitMaxLength={true}
                                />
                            </div>
                        </div>
                        <div className="message">
                            <span>Leave us message</span>
                            <Textarea
                                placeholder=""
                                defaultValue=""
                                minRows={2}
                                maxRows={4}
                            />
                        </div>
                    </div>
                    <div className="email flex-between ">
                        <TextField id="outlined-basic" label="Email address" type="emial" variant="outlined"/>
                        <Button className="white font-18">
                            Submit <span className="icon-Arrow-5"></span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}