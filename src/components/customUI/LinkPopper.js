import {useState} from "react";
import {Button, Menu, MenuItem} from "@mui/material";
import Link from "next/link";

export default function LinkPopper({link, subLinks}) {

    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <span>{link}</span>
                <span className="icon-keyboard_arrow_down"></span>
            </Button>
            <Menu
                className="headerMenuPopUp"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {subLinks.map((item, i)=> (
                    <MenuItem key={i} onClick={handleClose}>
                        <Link href={item.slug}  > {item.name}</Link>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}