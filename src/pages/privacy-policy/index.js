import React from 'react';
import Head from "next/head";

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Terms</title>
                <meta name="description" content="Terms And Conditions"/>
            </Head>
            <main className='page-main m-padding privacyPage'>
                <div className='hrField'>
                    <hr className="hr" />
                </div>
                <h1 className='font-32 bolder blue'>Privacy Policy</h1>
                <div className='privacyContent'>
                    <h3 className='font-24 bold blue-60'>Washington DC Auto Transport</h3>
                    <p className='font-24 blue-80'>
                        This privacy statement describes the privacy policies of https://www.washingtondcautotransport.com/ website.
                    </p>
                    <ul>
                        <p className='font-24 blue-80'>
                            In this privacy policy guideline we will notify you about the following:
                        </p>
                        <li className='font-24 blue-80'>
                            How we gather your personal information through our website and how we use or share it
                        </li>
                        <li className='font-24 blue-80'>
                            The security of your financial information
                        </li>
                        <li className='font-24 blue-80'>
                            Website security and content
                        </li>
                    </ul>
                    <div>
                        <h2 className='font-28 bolder blue-90'>INFORMATION COLLECTION AND USE</h2>
                        <ul>
                            <p className='font-24 blue-80'>
                                We are the only owner of the information collected by the website through a secured network and software system linked to the safest processing system, Authorized.net. We require and collect information from our customers on a voluntary basis. However, as a car transport business, we need to be able to provide an accurate estimate on your car transport. Therefore, we may require some data from our customers, such as:
                            </p>
                            <li className='font-24 blue-80'>
                                Customer’s name, email address, mailing address, phone number
                            </li>
                            <li className='font-24 blue-80'>
                                Information on the vehicle to be transported
                            </li>
                            <li className='font-24 blue-80'>
                                Zip codes, pick-up, and delivery locations
                            </li>

                        </ul>
                        <p className='font-24 blue-80'>
                            We will request your personal information by email or another direct contact from you. We don’t misuse or sell or rent your personal information to any third party outside of our company, other than to fulfill your request (for instance, to book your car shipment).
                        </p>
                        <p className='font-24 blue-80 separatedText'>
                            The information will only be disclosed as necessary, as required by law.
                        </p>
                    </div>
                    <div>
                        <h2 className='font-28 bolder blue-90'>FINANCIAL INFORMATION</h2>
                        <p className='font-24 blue-80'>
                            We do not process financial transactions through our website and don’t collect your billing information. For security reasons, we only collect payments from our customers via email, phone, or fax.
                        </p>
                    </div>
                    <div>
                        <h2 className='font-28 bolder blue-90'>WEBSITE SECURITY AND CONTENT</h2>
                        <p className='font-24 blue-80'>
                            Since we prioritize the privacy of our customers, our web developers constantly update the website to maintain its security at the highest level. Therefore, the websites’ security systems protect it from unauthorized access.
                        </p>
                    </div>
                    <div>
                        <h2 className='font-28 bolder blue-90'>WEBSITE DEVELOPING AND USE OF CONTENT</h2>
                        <p className='font-24 blue-80'>
                            Our up-to-date website provides our customers with helpful information about our car transport services. Our website also serves as a guideline for our customers to better understand the car transport industry.
                        </p>
                        <p className='font-24 blue-80'>
                            The content of our website can be modified without notice to maintain the accuracy of the information.
                        </p>
                        <p className='font-24 blue-80'>
                            The same applies to our Terms & Conditions without any given notice.
                        </p>
                        <p className='font-24 blue-80'>
                            The website’s information is not subject to use without permission.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PrivacyPolicy;