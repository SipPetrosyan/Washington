import {Autocomplete, Button, FormGroup, TextField} from "@mui/material";
import {useState} from "react";
import InputField from "@/components/customUI/InputField";

export default function One(props) {
    const [info1, setInfo1] = useState({});
    const [error, setError] = useState("");

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setInfo1((info1) => ({
            ...info1,
            [targetName]: targetValue
        }));
    };

    const validate = () => {
        if (!info1.name) setError("Name is mandatory field");
        else {
            setError("");
            props.nextStep();
            props.userCallback(info1);
        }
    };

    return (
        <div className="stepForm quoteForm">
            <div className="inputs">
                <p className="formTitle">Get real <span>Quote</span> now : Car Shipping Cost</p>
                <div className="flex-between fromTo">
                    <InputField
                        placeholder="City,State or ZIP"
                        label={<>
                            <span className="icon-location-icon"><span className="path1"></span><span
                                className="path2"></span></span> From <span className="icon-Gide-Icon"><span
                            className="path1"></span><span className="path2"></span><span
                            className="path3"></span></span>
                        </>}
                    />

                    <InputField
                        placeholder="City,State or ZIP"
                        label={<>
                            <span className="icon-location-icon to-icon"><span className="path1"></span><span
                                className="path2"></span></span>
                            <span className="icon-location-icon"><span className="path1"></span><span
                                className="path2"></span></span>To <span className="icon-Gide-Icon"><span
                            className="path1"></span><span className="path2"></span><span
                            className="path3"></span></span>
                        </>}
                    />
                </div>
                <div className="time m-60">
                    <InputField
                        className="inputField"
                        label={<>
                            <span className="icon-Vector-3"></span> Time <span className="icon-Gide-Icon"><span
                            className="path1"></span><span className="path2"></span><span
                            className="path3"></span></span>
                        </>}
                        select={true}
                        element={<Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={[{label: 'The Shawshank Redemption', year: 1994},
                                {label: 'The Godfather', year: 1972}]}
                            renderInput={(params) => <TextField {...params} label="Pick up Date"/>}
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
            <Button className="continueBtn font-32 white bolder" onClick={props.nextStep}>Continue</Button>
            {/*<ActionButtons {...props} nextStep={validate} />*/}
        </div>
    );
};