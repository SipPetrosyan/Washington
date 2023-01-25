import TopPanel from "@/components/layout/TopPanel";
import LinkPopper from "@/components/customUI/LinkPopper";
import {useState} from "react";
import Link from "next/link";
import {aboutSubLinks, commercialServicesSubLinks, servicesSubLinks} from "@/utils/helper";
import {Collapse, Drawer, ListItemText} from "@mui/material";
import {List, ListItemButton} from "@mui/joy";
import {useWindowSize} from "@/utils/hooks";


export default function Header({quotePopup, setQuotePopUp}) {
    const {width} = useWindowSize();
    const [anchorEl, setAnchorEl] = useState(null);
    const [menu, setMenu] = useState(false);
    const [mobileSubmenu, setMobileSubMenu] = useState(null)
    const handleClick = (event) => {
        setAnchorEl(anchorEl === event.currentTarget ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleCloseMenu = () => {
        setMenu(false)
    }

    return (
        <>
            <TopPanel quotePopup={quotePopup} setQuotePopUp={setQuotePopUp} />
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
                <div className="operator">
                    <Link href="tel:( 202 ) 930 - 8005">
                    <span className="icon-Operator-icon-1"><span className="path1"></span><span
                        className="path2"></span><span className="path3"></span></span>
                        <span className="phone">( 202 ) 930 - 8005</span>
                    </Link>
                </div>
                {width <= 768 && <Link href="tel:( 202 ) 930 - 8005" className="mobileOperator">
                    <span className="icon-Operator-icon-2"><span className="path1"></span><span
                        className="path2"></span><span className="path3"></span></span>
                    <p className="blue-60">Call Now</p>
                </Link>}
                <div className="header-search">
                    <input
                        placeholder="Search"
                    />
                    <button><span className="icon-search"></span></button>
                </div>
                <div onClick={() => setMenu(!menu)} className="burgerMenu">
                    {menu ? <span className="icon-cancel-circle"></span> : <span className="icon-menu"></span>}
                </div>
                {width <= 1024 && <Drawer
                    className="mobileMenuDrawer"
                    anchor="left"
                    open={menu}
                    onClose={handleCloseMenu}
                >
                    <div>
                        <div className="header-search">
                            <input
                                placeholder="Search"
                            />
                            <button><span className="icon-search"></span></button>
                        </div>
                        <List
                            sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper", height: "unset"}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={() => {
                                setMobileSubMenu(mobileSubmenu === 1 ? null : 1)
                            }}>
                                <p className="white font-22">About Us</p>
                                {mobileSubmenu === 1 ? <span className="icon-chevron-thin-right less"></span> :
                                    <span className="icon-chevron-thin-right more"></span>}
                            </ListItemButton>
                            <Collapse in={mobileSubmenu === 1} timeout="auto" unmountOnExit>
                                <List onClick={handleCloseMenu} component="div" disablePadding>
                                    {aboutSubLinks.map((el, i) => (
                                        <ListItemButton key={i} sx={{pl: 4}}>
                                            <Link href={el.slug} className="white font-22">{el.name}</Link>
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                            <ListItemButton onClick={() => {
                                setMobileSubMenu(mobileSubmenu === 2 ? null : 2)
                            }}>
                                <p className="white font-22">Services</p>
                                {mobileSubmenu === 2 ? <span className="icon-chevron-thin-right less"></span> :
                                    <span className="icon-chevron-thin-right more"></span>}
                            </ListItemButton>
                            <Collapse in={mobileSubmenu === 2} timeout="auto" unmountOnExit>
                                <List onClick={handleCloseMenu} component="div" disablePadding>
                                    {servicesSubLinks.map((el, i) => (
                                        <ListItemButton key={i} sx={{pl: 4}}>
                                            <Link href={el.slug} className="white font-22">{el.name}</Link>
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                            <ListItemButton onClick={() => {
                                setMobileSubMenu(mobileSubmenu === 3 ? null : 3)
                            }}>
                                <p className="white font-22">Commercial Services</p>
                                {mobileSubmenu === 3 ? <span className="icon-chevron-thin-right less"></span> :
                                    <span className="icon-chevron-thin-right more"></span>}
                            </ListItemButton>
                            <Collapse in={mobileSubmenu === 3} timeout="auto" unmountOnExit>
                                <List onClick={handleCloseMenu} component="div" disablePadding>
                                    {commercialServicesSubLinks.map((el, i) => (
                                        <ListItemButton key={i} sx={{pl: 4}}>
                                            <Link href={el.slug} className="white font-22">{el.name}</Link>
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                            <ListItemButton>
                                <Link onClick={handleCloseMenu} href="faq" className="white font-22">FAQ</Link>
                            </ListItemButton>
                            <ListItemButton>
                                <Link onClick={handleCloseMenu} href="contact" className="white font-22">Contact</Link>
                            </ListItemButton>
                        </List>
                    </div>
                </Drawer>}
            </header>
        </>
    )
}