import {Autocomplete, Button, TextField} from "@mui/material";
import { useState} from "react";
import InputField from "@/components/customUI/InputField";

export default function Two(props) {
    const {formik, vehicle, setVehicle} = props;
    const [errors, setErrors] = useState([{}]);
    const {method, operable} = formik.values;

    const validate2 = () => {
        const errorsArr = [];
        vehicle.forEach((vh, index) => {
            const allErrors = [...errors];
            Object.keys(vh).forEach((prop, i) => {
                if (!vh[prop]) {
                    allErrors[index][prop] = "required";
                    errorsArr.push([index, i])
                }
            })
            setErrors(allErrors)
        })
        if (!method || !operable) {
            formik.setErrors({
                ...formik.errors,
                method: method ? "" : "required",
                operable: operable ? "" : "required"
            })
            formik.setTouched({
                ...formik.touched,
                method: !method,
                operable: !operable
            })
        }
        if(errorsArr.length === 0 && method && operable){
            props.nextStep();
        }
    };

    console.log(formik.errors, 'errros')
    console.log(formik.touched, 'touched')

    const handleAddVehicle = () => {
        setVehicle([
            ...vehicle,
            {
                year: "",
                make: "",
                model: ""
            }
        ]);
        setErrors([
            ...errors,
            {}
        ])
    }

    return (
        <div className="stepForm quoteForm step2">
            <div className="inputs">
                <p className="formTitle">Get real <span>Quote</span> now : Car Shipping Cost</p>
                <div className="vehicle-container">
                    {vehicle.map((item, i) => (
                        <div key={i} className="vehicle flex-between">
                            <InputField
                                label={<>
                                    <span className="icon-Vehicle-Icon"></span> Vehicle <span
                                    className="icon-Gide-Icon"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span></span>
                                </>}
                                error={errors[i].year}
                                select={true}
                                element={<Autocomplete
                                    disablePortal
                                    onChange={(e, year) => {
                                        setVehicle((prev) => {
                                            prev[i].year = year || "";
                                            return [...prev];
                                        });
                                        setErrors((prev) => {
                                            prev[i].year = year ? "" : "required";
                                            return [...prev]
                                        })
                                    }}
                                    value={vehicle[i].year}
                                    id="year"
                                    name="year"
                                    options={["1994", "1985", "1989"]}
                                    renderInput={(params) => <TextField {...params} label="Year"/>}
                                />}
                            />
                            <InputField
                                select={true}
                                error={errors[i].make}
                                element={<Autocomplete
                                    disablePortal
                                    onChange={(e, make) => {
                                        setVehicle((prev) => {
                                            prev[i].make = make;
                                            return [...prev]
                                        })
                                        setErrors((prev) => {
                                            prev[i].make = make ? "" : "required";
                                            return [...prev]
                                        })
                                    }}
                                    value={vehicle[i].make || null}
                                    id="make"
                                    name="make"
                                    options={["make", "make1", "make2"]}
                                    renderInput={(params) => <TextField {...params} label="Make"/>}
                                />}
                            />
                            <InputField
                                select={true}
                                error={errors[i].model}
                                element={<Autocomplete
                                    disablePortal
                                    onChange={(e, model) => {
                                        setVehicle((prev) => {
                                            prev[i].model = model;
                                            return [...prev]
                                        })
                                        setErrors((prev) => {
                                            prev[i].model = model ? "" : "required";
                                            return [...prev]
                                        })
                                    }}
                                    value={vehicle[i].model || null}
                                    id="model"
                                    name="model"
                                    options={["model", "model2", "model3"]}
                                    renderInput={(params) => <TextField {...params} label="Model"/>}
                                />}
                            />
                        </div>
                    ))}
                    <div className="addVehicle">
                        <Button
                            onClick={handleAddVehicle}
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
                                    onChange={formik.handleChange}
                                />
                                Open
                            </label>
                            <label>
                                <input
                                    value="2"
                                    type="radio"
                                    name="method"
                                    onChange={formik.handleChange}
                                />
                                Enclosed
                            </label>
                            <p className="err-message">{formik.touched.method && formik.errors.method}</p>
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
                                    onChange={formik.handleChange}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    value="2"
                                    type="radio"
                                    name="operable"
                                    onChange={formik.handleChange}
                                />
                                No
                            </label>
                            <p className="err-message">{formik.touched.operable && formik.errors.operable}</p>
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
            <Button className="continueBtn font-32 white bolder" onClick={validate2}>Continue</Button>
            {/*<ActionButtons {...props} nextStep={validate} />*/}
        </div>
    );
};