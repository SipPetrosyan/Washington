import React from 'react';
import Head from "next/head";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact"/>
            </Head>
            <main>
                <div className='page-main m-padding contactPage'>
                    <div className='hrField'>
                        <hr className="hr" />
                    </div>
                    <h1 className='font-32 blue pageTitle'>Contact Us</h1>
                    <div className='contacts'>
                        <div className='contactGroup'>
                            <h3 className='font-24 blue bolder'>Working Hours</h3>

                            <div className='font-20 bold blue'>
                                <span>Office Hours (EST) :</span>
                            </div>
                            <div className='font-20 bold blue'>
                                <span>Weekdays, </span>
                                <span className='blue-60'> 10:00am to 8:00pm</span>
                            </div>
                            <div className='font-20 bold blue'>
                                <span>Saturdays, </span>
                                <span className='blue-60'> 12:00pm to 3:00pm</span>
                            </div>
                            <div className='font-20 bold blue'>
                                <span>Sunday, </span>
                                <span className='blue-60'> Closed</span>
                            </div>
                        </div>
                        <div className='contactGroup'>
                            <h3 className='font-24 blue bolder'>Contacts</h3>
                            <div className='font-20 bold blue'>
                                <span>Phone: </span>
                                <span className='red'> ( 202 ) 930 - 8005</span>
                            </div>
                            <div className='font-20 bold blue'>
                                <span>Email: </span>
                                <span className='red'> info@washingtondcautotransport.com</span>
                            </div>
                        </div>
                        <div className='img'>
                            <img src='/images/contact.png' alt='Contact-Us' />
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
};

export default Contact;