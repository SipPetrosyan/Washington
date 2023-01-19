import {Autocomplete, Button, TextField} from "@mui/material";
import InputField from "@/components/InputField";
import Input from "react-phone-number-input";
import {useState} from "react";

export default function Four (props) {
    const [phone, setPhone] =useState("")

    console.log(props, "four")
    return (
        <div className="stepForm quoteForm step4">
            <div className="inputs">
                <p className="formTitle">We get you the best <span>Quote</span> in the market !</p>
                <div className="flex-between contacts">
                    <InputField
                        label="Name"
                        placeholder="Enter full name"
                    />
                    <InputField
                        label="Email"
                        placeholder="example@domain.com"
                    />

                </div>
                <div className="time m-60">
                    <InputField
                        label="Phone number"
                        className="phoneMask"
                        element={<Input
                            defaultCountry="US"
                            placeholder="( 999 ) 999 - 999"
                            value={phone}
                            limitMaxLength="18"
                            onChange={setPhone}
                            flags={null}
                        />}
                    />
                </div>
            </div>

            {/*<span style={{ color: "red" }}>{error}</span>*/}
            {/*<h1>This is step 1 content</h1>*/}
            {/*<FormGroup>*/}
            {/*    <label>Name: </label>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        name="name"*/}
            {/*        placeholder="Enter your name"*/}
            {/*        onChange={onInputChanged}*/}
            {/*    />*/}
            {/*</FormGroup>*/}
            {/*<br />*/}
            <Button className="continueBtn font-32 white bolder" onClick={props.firstStep}>Continue</Button>
            {/*<ActionButtons {...props} nextStep={validate} />*/}
        </div>
    );
};