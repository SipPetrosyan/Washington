import React from 'react';

const ContactsInfo = () => {
    return (
        <div className='contacts'>
            <div className='contactGroup'>
                <h3 className='font-18 blue bolder'>Working Hours</h3>

                <div className='font-16 bold blue'>
                    <span>Office Hours (EST) :</span>
                </div>
                <div className='font-16 bold blue'>
                    <span>Weekdays, </span>
                    <span className='blue-60'> 10:00am to 8:00pm</span>
                </div>
                <div className='font-16 bold blue'>
                    <span>Saturdays, </span>
                    <span className='blue-60'> 12:00pm to 3:00pm</span>
                </div>
                <div className='font-16 bold blue'>
                    <span>Sunday, </span>
                    <span className='blue-60'> Closed</span>
                </div>
            </div>
            <div className='contactGroup'>
                <h3 className='font-16  blue bolder'>Contacts</h3>
                <div className='font-16 bold blue'>
                    <span>Phone: </span>
                    <a href="tel:( 202 ) 930 - 8005" className='red'> ( 202 ) 930 - 8005</a>
                </div>
                <div className='font-16 bold blue'>
                    <span>Email: </span>
                    <a href = "mailto: info@washingtondcautotransport.com" className='red'> info@washingtondcautotransport.com</a>
                </div>
            </div>
        </div>
    );
};

export default ContactsInfo;