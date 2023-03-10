import {Button} from "@mui/material";
import InputField from "@/components/customUI/InputField";
import InfoToolTip from "@/components/customUI/InfoToolTip";

export default function Two(props) {
    const {formik, vehicle, setVehicle, errors, setErrors} = props;
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

    const onVehicleChange = (e, i) => {
        setVehicle((prev) => {
            prev[i][e.target.name] = e.target.value || "";
            return [...prev];
        });
        setErrors((prev) => {
            prev[i][e.target.name] = e.target.value ? "" : "required";
            return [...prev]
        })
    }

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

    const deleteLastVehicle = () => {
        if (vehicle.length > 1) {
            setVehicle(prev => {
                prev.pop();
                return [...prev];
            });
            setErrors(prev => {
                prev.pop();
                return [...prev];
            })
        }
    }

    return (
        <div className="stepForm quoteForm step2">
            <div className="inputs">
                <p className="formTitle">Get real <span>Quote</span> now : Car Shipping Cost</p>
                <div className="vehicle-container">
                    {vehicle.map((item, i) => (
                        <div key={i} className="vehicle flex-between">
                            <InputField
                                error={errors[i]?.year}
                                label={<> Vehicle <InfoToolTip text="!!!!!! !!!!!!!!! !!!!!!!! !!!!!!!! !!!!!!!!!! !!!!! " /></>}
                                onChange={(e) => onVehicleChange(e, i)}
                                value={vehicle[i].year}
                                id="year"
                                name="year"
                                placeholder="Year"
                            />
                            <InputField
                                error={errors[i]?.make}
                                onChange={(e) => onVehicleChange(e, i)}
                                value={vehicle[i].make}
                                id="make"
                                name="make"
                                placeholder="Make"
                            />
                            <InputField
                                error={errors[i]?.model}
                                onChange={(e) => onVehicleChange(e, i)}
                                value={vehicle[i].model}
                                id="model"
                                name="model"
                                placeholder="Model"
                            />
                        </div>
                    ))}
                    <div className="addVehicle">
                        <div className="empty"></div>
                        <Button
                            onClick={handleAddVehicle}
                        >
                            <span className="icon-Vector-2 plusIcon"></span>
                            <span> Add Multiple Vehicle</span>
                        </Button>
                        {vehicle.length > 1 ? <Button
                            onClick={deleteLastVehicle}
                            className="delete">
                            <span className="icon-bin"></span>
                        </Button> : <div></div>}
                    </div>
                </div>

                <div className="time">
                    <div className="method">
                        <p className="title font-18 white bold">
                            <span>Shipping Method?</span><InfoToolTip text="!!!!!! !!!!!!!!! !!!!!!!! !!!!!!!! !!!!!!!!!! !!!!! " />
                        </p>
                        <div className="selectMethod flex-between">
                            <label>
                                <input
                                    value="1"
                                    type="radio"
                                    name="method"
                                    checked={formik.values.method === "1"}
                                    onChange={formik.handleChange}
                                />
                                Open
                            </label>
                            <label>
                                <input
                                    value="2"
                                    type="radio"
                                    name="method"
                                    checked={formik.values.method === "2"}
                                    onChange={formik.handleChange}
                                />
                                Enclosed
                            </label>
                            <p className="err-message">{formik.touched.method && formik.errors.method}</p>
                        </div>
                    </div>
                    <div className="method">
                        <p className="title font-18 white bold">
                            <span>Is It Operable?</span><InfoToolTip text="!!!!!! !!!!!!!!! !!!!!!!! !!!!!!!! !!!!!!!!!! !!!!! " />
                        </p>
                        <div className="selectMethod flex-between">
                            <label>
                                <input
                                    value="1"
                                    type="radio"
                                    name="operable"
                                    checked={formik.values.operable === "1"}
                                    onChange={formik.handleChange}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    value="2"
                                    type="radio"
                                    name="operable"
                                    checked={formik.values.operable === "2"}
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
            <Button className="continueBtn font-24 white bolder" onClick={validate2}>Continue</Button>
            {/*<ActionButtons {...props} nextStep={validate} />*/}
        </div>
    );
};