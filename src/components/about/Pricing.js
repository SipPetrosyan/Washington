import React from 'react';
import {Button} from "@mui/material";

const Pricing = () => {
    return (
        <div className='pricingBlock'>
            <h1 className='font-24 blue'>Pricing</h1>
            <p className='font-18 blue'>
                Our prices are very affordable. If you find a price lower than Washington DC Auto Transports, we’ll do
                our absolute best to match it.
            </p>
            <p className='font-18 blue bolder'>
                We offer discounts for military, students, and senior citizens. You can request a free quote online
                today and one of our agents will contact you shortly.
            </p>
            <div className='orPart'>
                <hr/>
                <span className='font-16 blue-60'>OR</span>
                <hr/>
            </div>
            <div className="btn">
                <Button>
                    <span className="icon-Operator-icon-1 font-24"><span className="path1"></span><span
                        className="path2"></span><span className="path3"></span></span>
                    <a className='font-16 bold'>( 202 ) 930 - 8005</a>
                </Button>
            </div>
        </div>
    );
};

export default Pricing;