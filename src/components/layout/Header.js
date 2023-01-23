import TopPanel from "@/components/layout/TopPanel";
import LinkPopper from "@/components/customUI/LinkPopper";
import {useState} from "react";
import Link from "next/link";
import {aboutSubLinks, commercialServicesSubLinks, servicesSubLinks} from "@/utils/helper";



export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl === event.currentTarget ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    return (
        <>
            <TopPanel/>
            <header>
                <Link href="/" className="header-logo">
                    <img src="/images/logo.png" alt="logo"/>
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
                        subLinks={servicesSubLinks}
                    />
                    <LinkPopper
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        handleClick={handleClick}
                        link="Commercial Services"
                        subLinks={commercialServicesSubLinks}
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