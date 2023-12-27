import useSticky from "@/reusablecomponent/useSticky";
import React, { useState } from "react"
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import Women from "../pages/optionmenu/Women";
import WomenMobile from "../pages/optionmenu/WomenMobile";
import Men from "../pages/optionmenu/Men";
import MenMobile from "../pages/optionmenu/MenMobile";
import Kids from "../pages/optionmenu/Kids";
import KidsMobile from "../pages/optionmenu/KidsMobile";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Socialicon from "./partials/Socialicon";
import Language from "./partials/Language";
import Search from "./partials/Search";
import Info from "./partials/Info";
import Link from "next/link";

const Alliconnavbar = (props) => {
  const { navClassName, socialicon, language, search, info, button } = props
  const sticky = useSticky(200);
  // dynamically added navbar classname
  const fixedClassName = `container-fluid bg-white fixed-top navbarheight shadow p-0 g-0`;
  // const navClassName = "navbar navbar-expand-lg extended bg-white caret-none fixed navbarheight p-3 container rounded-3 shadow";

  return (
    <>
      <Navbar expand="lg" className={sticky ? fixedClassName : navClassName}>
        <Container className="px-3 px-lg-3 p-4 p-lg-0 g-0">
          <Link href="/">
            <img src={"/navbar/logo/logo-dark.png"} alt="" />

          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-evenly align-content-evenly  w-100">
              <div className="d-flex flex-column flex-lg-row">
                <Dropdown className="d-none d-lg-block">
                  <Link href="/women">
                    <Dropdown.Toggle  variant="auto" className="nav1link mt-xl-0">
                      Women <span><BiChevronDown /></span>
                    </Dropdown.Toggle>
                  </Link>
                  <Dropdown.Menu className="womendrop g-0 p-0  border">
                    <Women />
                  </Dropdown.Menu>
                </Dropdown>

      


                <div className="d-block d-lg-none">
                  <WomenMobile />
                </div>

                  <Dropdown autoClose="outside" className="d-none d-lg-block">
                <Link href="/men">
                    <Dropdown.Toggle variant="auto" className="nav1link mt-xl-0">
                      Men <span><BiChevronDown /></span>
                    </Dropdown.Toggle>
                </Link>

                    <Dropdown.Menu className="womendrop g-0 p-0">
                      <Men />
                    </Dropdown.Menu>
                  </Dropdown>

                <div className="d-block d-lg-none">
                  <MenMobile />
                </div>

                  <Dropdown autoClose="outside" className="d-none d-lg-block">
                <Link href="/kids">
                    <Dropdown.Toggle variant="auto" className="nav1link mt-xl-0 ">
                      Kids <span><BiChevronDown /></span>
                    </Dropdown.Toggle>
                </Link>

                    <Dropdown.Menu className="womendrop g-0 p-0">
                      <Kids />
                    </Dropdown.Menu>
                  </Dropdown>

                <div className="d-block d-lg-none">
                  <KidsMobile />
                </div>

                <Link href="/service" variant="auto" className="nav1link mt-xl-0 d-none d-lg-block">
                  Service <span><BiChevronDown /></span>
                </Link>
                <Link href="/service" variant="auto" className="nav1link mt-xl-0  w-100  d-block d-lg-none"   >
                  Service
                  {/* <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span> */}
                </Link>

                <Link href="/blog" variant="auto" className="nav1link mt-xl-0 d-none d-lg-block">
                  Blog <span><BiChevronDown /></span>
                </Link>
                <Link href="/blog" variant="auto" className="nav1link mt-xl-0  w-100  d-block d-lg-none">
                  Blog
                  {/* <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span> */}
                </Link>

                <Link href="/contact-us" variant="auto" className="nav1link mt-xl-0 d-none d-lg-block">
                  Contact <span><BiChevronDown /></span>
                </Link>
                <Link href="/contact-us" variant="auto" className="nav1link mt-xl-0  w-100 d-block d-lg-none">
                  Contact
                  {/* <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span> */}
                </Link>
              </div>
              <div className="d-flex d-flex flex-column flex-lg-row align-items-lg-center">
                {/* icon */}
                {socialicon && <Socialicon />}
                {/* language */}
                {language && <Language />}
                {/* search */}
                {search && <Search />}
                {/* sidebar info */}
                {info && <Info />}
                {/* ============= contact  && Free trial button ============= */}
                {button && <li className="">{button}</li>}
                {/* <Signin/>
                <Signup/> */}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
Alliconnavbar.defaultProps = {
  navClassName: "bg-white navbarheight container rounded-3 shadow p-0 g-0"
};

export default Alliconnavbar