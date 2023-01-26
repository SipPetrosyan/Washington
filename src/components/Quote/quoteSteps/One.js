import {Autocomplete, Button, TextField} from "@mui/material";
import InputField from "@/components/customUI/InputField";
import InfoToolTip from "@/components/customUI/InfoToolTip";

export default function One(props) {
    const {formik} = props;

    const validate = () => {
        const errors = {};
        if (formik.values.from && formik.values.to && formik.values.time) {
            props.nextStep();
        }else{
            !formik.values.from ? errors.from = "From is required": "";
            !formik.values.to ? errors.to = "To is required": "";
            !formik.values.time ? errors.time = "Time is required": "";
            formik.setErrors({
                ...formik.errors,
                ...errors
            });
            formik.setTouched({
                ...formik.touched,
                ...errors
            })
        }
    };

    return (
        <div className="stepForm quoteForm">
            <div className="inputs">
                <h2 className="formTitle">Get real <span>Quote</span> now : Car Shipping Cost</h2>
                <p className="white bolder subtitle">Route Details</p>
                <div className="fromTo">
                    <InputField
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.from}
                        error={formik.touched.from && formik.errors.from}
                        id="from"
                        name="from"
                        placeholder="City,State or ZIP"
                        label={<>From <InfoToolTip text="!!!!!! !!!!!!!!! !!!!!!!! !!!!!!!! !!!!!!!!!! !!!!! " /></>}
                    />
                    <InputField
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.to}
                        error={formik.touched.to && formik.errors.to}
                        id="to"
                        name="to"
                        placeholder="City,State or ZIP"
                        label={<>To <InfoToolTip text="!!!!!! !!!!!!!!! !!!!!!!! !!!!!!!! !!!!!!!!!! !!!!! " /></>}
                    />
                </div>
                <div className="time">
                    <InputField
                        className="inputField"
                        error={formik.touched.time && formik.errors.time}
                        label={<>Time <InfoToolTip text="!!!!!! !!!!!!!!! !!!!!!!! !!!!!!!! !!!!!!!!!! !!!!! " /> </>}
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
                </div>
            </div>
            <Button className="continueBtn font-24 white bolder" onClick={validate}>Continue</Button>
        </div>
    );
};