import React from 'react';
import Head from "next/head";
import {Button} from "@mui/material";
import Pricing from "@/components/about/Pricing";

const AboutOurCompany = () => {

    return (
        <>
            <Head>
                <title>Our Company</title>
                <meta name="description" content="Our Company"/>
            </Head>
            <main className='page-main m-padding companyPage'>
                <div className='hrField'>
                    <hr className="hr" />
                </div>
                <h1 className='font-32 blue'>About Our Company</h1>
                <div className='companyContent'>
                    <p className='font-24 blue'>
                        Washington DC Auto Transport is a leader in the vehicle shipping industry for a reason. First, we know what a valuable possession your automobile is and treat it that way. Second, we understand how hard it can be to find a car mover you can trust. In fact, the search can be overwhelming.
                    </p>
                    <p className='font-24 blue'>
                        At Washington DC Auto Transport we make the process easy by understanding that your vehicle’s security is priority number one. We treat your car as if it were our own and get it to wherever it’s going safely.
                    </p>
                    <div className='img'>
                        <img src='/images/company.png' alt='Our Company' />
                    </div>
                    <div className='subTopic'>
                        <h1 className='font-32 red'>What Washington DC Auto Transport has to offer</h1>
                        <p className='font-24 blue'>
                            Washington DC Auto Transport provides a wide variety of helpful services. We offer two main transportation methods: enclosed auto shipping and open car transport.
                        </p>
                        <p className='font-24 blue'>
                            Enclosed auto shipping is slightly more costly because the automobile isn’t exposed to the elements. The risks, the dust, the weather conditions of the road are completely shielded by using the method.
                        </p>
                        <p className='font-24 blue'>
                            Open car transport is still secure but unlike enclosed auto shipping, there is no cover. Consequently, there is some risk of exposure to dust and weather conditions. This remains the single most popular method for car shipping.
                        </p>
                        <p className='font-24 blue'>
                            For customers in a rush, we offer expedited shipping services. This method costs more than regular door-to-door shipping which is our standard method.
                        </p>
                        <p className='font-24 blue'>
                            The door-to-door shipping service allows us to pick up and drop off the vehicle right from your doorstep. If there are conditions that prevent our truck from getting to your doorstep, such as a narrow road, we’ll drop it off at the next most convenient location.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='red bold font-16 titleSection'>
                        <span>Check Out Our Services</span>
                        <span className="icon-chevron-thin-right iconArrow"></span>
                    </div>
                    <div className='pricingPart'>
                        <Pricing />
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutOurCompany;