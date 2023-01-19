import bgImg from "../../../public/images/banner.png"
import InputField from "@/components/InputField";
import {Autocomplete, Button, TextField} from "@mui/material";
import {useState} from "react";
import Input from "react-phone-number-input";

export default function MainBanner() {
    const [vehicle, setVehicle] = useState(1)
    const [phone, setPhone] = useState("")

    return (
        <div className="mainBanner m-padding" style={{backgroundImage: `url(${bgImg.src})`}}>
            <div className="welcomePart">
                <h1>
                    <span className="red">Welcome to </span>
                    <span className="blue">Washington DC Auto </span>
                    <span className="red">Transport</span>
                </h1>
                <p className={`blue font-36 bold`}>#1 Car Shipper and Auto Mover in the US </p>
            </div>
            <form className="quoteForm homeQuoteForm">
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
                <div className="flex-between contacts">
                    <InputField
                        label="Name"
                        placeholder="Enter full name"
                    />
                    <InputField
                        label="Email"
                        placeholder="example@domain.com"
                    />
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
                <div className="quoteBtn">
                    <Button>Get Quote</Button>
                </div>
            </form>
        </div>
    )
}