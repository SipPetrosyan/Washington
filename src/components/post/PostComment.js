import React from 'react';
import {Button, TextField} from "@mui/material";
import {Textarea} from "@mui/joy";

const PostComment = () => {
    return (
        <div className='postComment'>
            <h1 className='font-32 blue'>Leave a Reply </h1>
            <form className='commentForm'>
                <div className='inputs'>
                    <div className=''>
                        <TextField id="standard-basic" label="Name" variant="standard"/>
                        <TextField id="standard-basic" label="Email Address *" variant="standard"/>
                        <TextField id="standard-basic" label="Phone Number *" variant="standard"/>
                    </div>
                    <div className="message">
                        <span>Your comment here...</span>
                        <Textarea
                            placeholder=""
                            defaultValue=""
                            minRows={2}
                            maxRows={4}
                        />
                    </div>
                </div>
                <div className='buttonPart'>
                    <div className='selectSave'>
                        <input type="checkbox" name="checkbox" id="save" className='blue font-24'/>
                        <label htmlFor="save"  className='blue font-24'>Save my name, email, and website in this browser for the next time I comment</label>
                    </div>
                    <div className="btn">
                        <Button>Post Comment</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostComment;