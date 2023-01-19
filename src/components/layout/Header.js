import TopPanel from "@/components/layout/TopPanel";
import LinkPopper from "@/components/select/LinkPopper";
import {useEffect, useState} from "react";
import Link from "next/link";
import {Button, TextField} from "@mui/material";

const aboutSubLinks = [
    {
        name: "About Our Company",
        slug: "about-our-company"
    },
    {
        name: "About Our Company",
        slug: "about-our-company"
    },
    {
        name: "About Our Company",
        slug: "about-our-company"
    },
    {
        name: "About Our Company",
        slug: "about-our-company"
    },
]

export default function Header () {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl === event.currentTarget ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

useEffect(()=> {
    const date = new Date();



}, [])


    return(
        <>
            <TopPanel/>
            <header>
                <Link href="/" className="header-logo">
                    <img src="/images/logo.png" alt="logo" />
                </Link>
                <nav className="header-nav">
                    <LinkPopper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        handleClick={handleClick}
                        link="About Us"
                        subLinks={aboutSubLinks}
                    />
                    <LinkPopper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        handleClick={handleClick}
                        link="Services"
                        subLinks={aboutSubLinks}
                    />
                    <LinkPopper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        handleClick={handleClick}
                        link="Commercial Services"
                        subLinks={aboutSubLinks}
                    />
                </nav>
                <div className="header-search">
                   <input
                        placeholder="Search"
                   />
                    <button><span className="icon-search"></span></button>
                </div>
            </header>
        </>
    )
}