import {Autocomplete, Button, FormGroup, TextField} from "@mui/material";
import {useState} from "react";
import InputField from "@/components/customUI/InputField";

export default function Two(props) {
    const [vehicle, setVehicle] = useState(1);
    const [info2, setInfo2] = useState({});
    const [error, setError] = useState("");

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setInfo2((info2) => ({
            ...info2,
            [targetName]: targetValue
        }));
    };

    const validate2 = () => {
        if (!info2.age) setError("Age is mandatory field");
        else {
            setError("");
            props.nextStep();
            props.userCallback(info2);
        }
    };

    return (
        <div className="stepForm quoteForm step2">
            <div className="inputs">
                <p className="formTitle">Get real <span>Quote</span> now : Car Shipping Cost</p>
                <div className="vehicle-container">
                    {Array.from(Array(vehicle).keys()).map((item, i) => (
                        <div key={i} className="vehicle flex-between">
                            <InputField
                                label={<>
                                    <span className="icon-Vehicle-Icon"></span> Vehicle <span
                                    className="icon-Gide-Icon"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span></span>
                                </>}
                                select={true}
                                element={<Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={[{label: '1994', year: 1994},
                                        {label: '1972', year: 1972}]}
                                    renderInput={(params) => <TextField {...params} label="Year"/>}
                                />}
                            />
                            <InputField
                                select={true}
                                element={<Autocomplete
                                    indicator={<div>sdf</div>}
                                    disablePortal
                                    id="combo-box-demo"
                                    options={[{label: 'The Shawshank Redemption', year: 1994},
                                        {label: 'The Godfather', year: 1972}]}
                                    renderInput={(params) => <TextField {...params} label="Make"/>}
                                />}
                            />
                            <InputField
                                select={true}
                                element={<Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={[{label: 'The Shawshank Redemption', year: 1994},
                                        {label: 'The Godfather', year: 1972}]}
                                    renderInput={(params) => <TextField {...params} label="Model"/>}
                                />}
                            />
                        </div>
                    ))}

                    <div className="addVehicle">
                        <Button
                            onClick={() => {
                                setVehicle(vehicle + 1)
                            }}
                        >
                            <span className="icon-Vector-2 plusIcon"></span>
                            <span> Add Multiple Vehicle</span>
                        </Button>
                    </div>
                </div>

                <div className="time">
                    <div className="method">
                        <p className="title font-18 white bold">
                            <span>Shipping Method?</span>
                            <span className="icon-Gide-Icon"><span
                                className="path1"></span><span className="path2"></span><span
                                className="path3"></span></span>
                        </p>
                        <div className="selectMethod flex-between">
                            <label>
                                <input
                                    value="1"
                                    type="radio"
                                    name="method"
                                />
                                Open
                            </label>
                            <label>
                                <input
                                    value="2"
                                    type="radio"
                                    name="method"
                                />
                                Enclosed
                            </label>
                        </div>
                    </div>

                    <div className="method">
                        <p className="title font-18 white bold">
                            <span>Is It Operable?</span>
                            <span className="icon-Gide-Icon"><span
                                className="path1"></span><span className="path2"></span><span
                                className="path3"></span></span>
                        </p>
                        <div className="selectMethod flex-between">
                            <label>
                                <input
                                    value="1"
                                    type="radio"
                                    name="operable"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    value="2"
                                    type="radio"
                                    name="operable"
                                />
                                No
                            </label>
                        </div>
                    </div>
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