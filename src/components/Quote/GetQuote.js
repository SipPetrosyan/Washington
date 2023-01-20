import React from 'react';
import InputField from "@/components/customUI/InputField";
import {Autocomplete, Button, TextField} from "@mui/material";

const GetQuote = () => {
    return (
        <form className='getQuoteForm quoteForm'>
            <div className='inputs'>
                <InputField
                    placeholder="City,State or ZIP"
                    label={<>
                            <span className="icon-location-icon"><span className="path1"></span><span
                                className="path2"></span></span>
                        <span>From</span>
                    </>}
                />
                <InputField
                    placeholder="City,State or ZIP"
                    label={<>
                            <span className="icon-location-icon to-icon"><span className="path1"></span><span
                                className="path2"></span></span>
                        <span className="icon-location-icon"><span className="path1"></span><span
                            className="path2"></span></span>
                        <span>To</span>
                    </>}
                />
                <InputField
                    className="inputField"
                    label={<>
                        <span className="icon-Vector-3"></span>
                        <span>Time</span>
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
                <InputField
                    label={<>
                        <span className="icon-Vehicle-Icon"></span>
                        <span>Vehicle</span>
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
            </div>
            <div className="quoteBtn">
                <Button>Get Quote</Button>
            </div>
        </form>
    );
};

export default GetQuote;