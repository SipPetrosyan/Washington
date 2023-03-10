import React from 'react';
import Head from "next/head";
import ContactsInfo from "@/components/contact/ContactsInfo";
import SendMessageForm from "@/components/Quote/SendMessageForm";
import Pricing from "@/components/about/Pricing";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact"/>
            </Head>
            <main className='page-main m-padding contactPage'>
                <hr className="hr"/>
                <h1 className='font-24 blue pageTitle'>Contact Us</h1>
                <div className='contactsInfoBlock'>
                    <ContactsInfo/>
                </div>
                <div className='img'>
                    <img src='/images/contact.png' alt='Contact-Us'/>
                </div>
                <div className='contactFormBlock'>
                    <h1 className='font-24 bolder red'>Send Us a Message</h1>
                    <SendMessageForm/>
                </div>
                <div className='pricingSection'>
                    <Pricing/>
                </div>
            </main>
        </>

    );
};

export default Contact;