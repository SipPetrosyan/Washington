import { Button} from "@mui/material";
import InputField from "@/components/customUI/InputField";
import Input from "react-phone-number-input";

export default function Four(props) {
    const {formik} = props;

    return (
        <div className="stepForm quoteForm step4">
            <div className="inputs">
                <p className="formTitle">We get you the best <span>Quote</span> in the market !</p>
                    <InputField
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={formik.touched.name && formik.errors.name}
                        id="name"
                        name="name"
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
                        label="Email"
                        placeholder="example@domain.com"
                    />

                <div className="time">
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
                            limitMaxLength={12}
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
            </div>
            <Button
                className="continueBtn font-24 white bolder"
                onClick={() => {
                    formik.handleSubmit();
                    if (formik.values.name && formik.values.email && formik.values.phone) {
                        props.firstStep();
                    }
                }}
            >Get Quote</Button>
        </div>
    );
};