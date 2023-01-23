import {Button, TextField} from "@mui/material";
import {Textarea} from "@mui/joy";
import React from "react";

export default function SendMessageForm () {

    return(
        <div className='postComment sendMessageForm'>
            <h1 className='font-32 blue bold'>If you need an any HELP, just let us know !</h1>
            <form className='commentForm'>
                <div className='inputs'>
                    <div>
                        <TextField id="standard-basic" label="Name" variant="standard"/>
                        <TextField id="standard-basic" label="Email Address *" variant="standard"/>
                        <TextField id="standard-basic" label="Phone Number *" variant="standard"/>
                        <div className="message">
                            <span>Your Message</span>
                             <Textarea
                                placeholder=""
                                defaultValue=""
                                minRows={2}
                                maxRows={4}
                            />
                        </div>
                    </div>
                </div>
                <div className='buttonPart'>
                    <div className="btn">
                        <Button>Submit Now  <span className="icon-Arrow-5"></span></Button>
                    </div>
                </div>
            </form>
        </div>
    )
}