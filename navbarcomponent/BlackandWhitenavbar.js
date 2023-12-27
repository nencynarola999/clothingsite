import React from "react"
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import Women from "../pages/optionmenu/Women";
import WomenMobile2black from "../pages/optionmenu/WomenMobile2black";
import Men from "../pages/optionmenu/Men";
import MenMobile2black from "../pages/optionmenu/MenMobile2black";
import Kids from "../pages/optionmenu/Kids";
import KidsMobile2black from "../pages/optionmenu/KidsMobile2black";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useSticky from "@/reusablecomponent/useSticky";

const BlackandWhitenavbar = () => {
    const sticky = useSticky(300);
    // dynamically added navbar classname
    const fixedClassName = `bg-dark navbarheight p-4 `;
    const navClassName = "bg-white navbarheight shadow fixed-top p-4";
    const nav2link1 = "nav2link1 d-block";
    const nav2link2 = "nav2link2 d-block"
    const nav2img1 = "nav2img1 ms-0 me-0 mt-0 p-0 ms-lg-5 me-lg-5 d-none d-lg-block d-flex justify-content-center align-items-center mt-lg-4";
    const nav2img2 = "nav2img2 ms-0 me-0 mt-0 p-0  ms-lg-5 me-lg-5 d-none d-lg-block d-flex justify-content-center align-items-center mt-lg-4"
    const nav2img11 = "nav2img1 d-block d-lg-none d-flex justify-content-center align-items-center";
    const nav2img22 = "nav2img2 d-block d-lg-none d-flex justify-content-center align-items-center"
    const tog1 = "shadow-none text-white bg-white";
    const tog2 = "shadow-none text-white bg-white"

    return (
        <>
            <Navbar expand="lg" className={sticky ? navClassName : fixedClassName}>
                <Container className="">
                    <span className={sticky ? nav2img22 : nav2img11}></span>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className={sticky ? tog1 : tog2} />
                    <Navbar.Collapse id="basic-navbar-nav" className="">
                        <Nav className=" w-100 d-lg-flex justify-content-lg-center align-items-lg-center">
                            <div className="d-flex flex-column flex-lg-row">
                                    <Dropdown autoClose="outside" className="d-none d-lg-block ">
                                <Link href="/women">
                                        <Dropdown.Toggle variant="auto" className={sticky ? nav2link2 : nav2link1}>
                                            Women <span><BiChevronDown /></span>
                                        </Dropdown.Toggle>
                                </Link>
                                        <Dropdown.Menu className="womendrop g-0 p-0 dropdown-menu">
                                            <Women />
                                        </Dropdown.Menu>
                                    </Dropdown>

                                <div className="d-block d-lg-none ">
                                    <WomenMobile2black />
                                </div>

                                    <Dropdown autoClose="outside" className="d-none d-lg-block ">
                                <Link href="/men">
                                        <Dropdown.Toggle variant="auto" className={sticky ? nav2link2 : nav2link1}>
                                            Men <span><BiChevronDown /></span>
                                        </Dropdown.Toggle>
                                </Link>
                                        <Dropdown.Menu className="womendrop g-0 p-0 dropdown-menu">
                                            <Men />
                                        </Dropdown.Menu>
                                    </Dropdown>

                                <div className="d-block d-lg-none ">
                                    <MenMobile2black />
                                </div>
                                    <Dropdown autoClose="outside" className="d-none d-lg-block ">
                                <Link href="/kids">
                                        <Dropdown.Toggle variant="auto" className={sticky ? nav2link2 : nav2link1}>
                                            Kids <span><BiChevronDown /></span>
                                        </Dropdown.Toggle>
                                </Link>
                                        <Dropdown.Menu className="womendrop g-0 p-0 dropdown-menu">
                                            <Kids />
                                        </Dropdown.Menu>
                                    </Dropdown>

                                <div className="d-block d-lg-none ">
                                    <KidsMobile2black />
                                </div>

                                {/* <div className="p-0"> */}
                                <Link href="/"> <span className={sticky ? nav2img2 : nav2img1}></span></Link>
                                {/* </div> */}
                                <Link href="/service" variant="auto" className="d-none d-lg-block">
                                    <div className={sticky ? nav2link2 : nav2link1}>
                                        Service <span><BiChevronDown /></span>
                                    </div>
                                </Link>
                                <div className={sticky ? nav2link2 : nav2link1}>
                                    <Link href="/service" variant="auto" className=" w-100 d-flex justify-content-evenly align-items-center d-block d-lg-none">
                                        Service <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span>
                                    </Link>
                                </div>

                                <Link href="/blog" variant="auto" className="d-none d-lg-block">
                                    <div className={sticky ? nav2link2 : nav2link1}>
                                        Blog <span><BiChevronDown /></span>
                                    </div>
                                </Link>
                                <div className={sticky ? nav2link2 : nav2link1}>
                                    <Link href="/blog" variant="auto" className=" w-100 d-flex justify-content-evenly align-items-center d-block d-lg-none">
                                        Blog <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span>
                                    </Link>
                                </div>

                                <Link href="/contact-us" variant="auto" className="d-none d-lg-block">
                                    <div className={sticky ? nav2link2 : nav2link1}>
                                        Contact <span><BiChevronDown /></span>
                                    </div>
                                </Link>
                                <div className={sticky ? nav2link2 : nav2link1}>
                                    <Link href="/contact-us" variant="auto" className=" w-100 d-flex justify-content-evenly align-items-center d-block d-lg-none">
                                        Contact <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span>
                                    </Link>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default BlackandWhitenavbar