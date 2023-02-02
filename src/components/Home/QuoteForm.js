import InputField from "@/components/customUI/InputField";
import {Autocomplete, Button, TextField} from "@mui/material";
import Input from "react-phone-number-input";
import {useState} from "react";
import InfoToolTip from "@/components/customUI/InfoToolTip";

export default function QuoteForm({formik, vehicle, setVehicle, errors, setErrors}) {
    const [vehicleErrors, setVehicleErrors] = useState([]);

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
        <form className="quoteForm homeQuoteForm">
            <p className="formTitle">Get real <span>Quote</span> now : Car Shipping Cost</p>
            <div className="flex-between fromTo">
                <InputField
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.from}
                    error={formik.touched.from && formik.errors.from}
                    id="from"
                    name="from"
                    placeholder="City,State or ZIP"
                    label={<>From <InfoToolTip text="!!!!!! !"/> </>}
                />

                <InputField
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.to}
                    error={formik.touched.to && formik.errors.to}
                    id="to"
                    name="to"
                    placeholder="City,State or ZIP"
                    label={<>To <InfoToolTip text="!!!!!!  "/> </>}
                />
            </div>
            <div className="vehicle-container">
                {vehicle.map((item, i) => (
                    <div key={i} className="vehicle flex-between">
                        <InputField
                            error={errors[i]?.year}
                            label={<> Vehicle <InfoToolTip text="!!!!!! !!!! !!!!!!!!!! !!!!! "/>
                            </>}
                            onChange={(e) => onVehicleChange(e, i)}
                            value={vehicle[i]?.year}
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
                        className="add"
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
                <InputField
                    error={formik.touched.time && formik.errors.time}
                    className="inputField"
                    label={<> Time <InfoToolTip text="!!!!!! ! "/> </>}
                    select={true}
                    element={<Autocomplete
                        onChange={(e, time) => {
                            formik.setValues({
                                ...formik.values,
                                time: time || ""
                            })
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.time}
                        id="time"
                        name="time"
                        options={["As soon as possible", "Within 1 week", "Within 2 weeks", "Within 30 days", "More than 30 days"]}
                        renderInput={(params) => <TextField {...params} label="Pick up Date"/>}
                    />}
                />
                <div className="method">
                    <p className="title font-16 white bold">
                        <span>Shipping Method?</span><InfoToolTip
                        text="!!!!! !! !!! ! "/>
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
                    <p className="title font-16 white bold">
                        <span>Is It Operable?</span><InfoToolTip
                        text="!!!!!! !!!!!!!!! !!!"/>
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
            <div className="flex-between contacts">
                <InputField
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    error={formik.touched.name && formik.errors.name}
                    id="name"
                    name="name"
                    className="name"
                    label="Name"
                    placeholder="Enter full name"
                />
                <InputField
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && formik.errors.email}
                    id="email"
                    name="email"
                    className="email"
                    label="Email"
                    placeholder="example@domain.com"
                />
                <InputField
                    label="Phone number"
                    className="phoneMask"
                    error={formik.touched.phone && formik.errors.phone}
                    element={<Input
                        onChange={e => {
                            formik.setValues({
                                ...formik.values,
                                phone: e
                            })
                        }}
                        limitMaxLength={true}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        error={formik.touched.phone && formik.errors.phone}
                        id="phone"
                        name="phone"
                        defaultCountry="US"
                        placeholder="( 999 ) 999 - 999"
                        flags={null}
                    />}
                />
            </div>
            <div className="quoteBtn">
                <Button onClick={() => {
                    const errorsArr = [];
                    const allErrors = [...errors];
                    vehicle.forEach((vh, index) => {
                        Object.keys(vh).forEach((prop, i) => {
                            if (!vh[prop]) {
                                allErrors[index][prop] = "required";
                                errorsArr.push([index, i])
                            }
                        })
                    })
                    setErrors(allErrors);
                    setVehicleErrors(errorsArr)
                    formik.handleSubmit()
                }}>Get Quote</Button>
            </div>
        </form>
    )
}