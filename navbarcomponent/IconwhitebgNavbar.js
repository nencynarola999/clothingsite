import SocialLinks from "@/reusablecomponent/SocialLinks";
import useSticky from "@/reusablecomponent/useSticky";
import React from "react"
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import WomenMobile from "@/pages/optionmenu/WomenMobile";
import Women from "@/pages/optionmenu/Women";
import Men from "@/pages/optionmenu/Men";
import MenMobile from "@/pages/optionmenu/MenMobile";
import Kids from "@/pages/optionmenu/Kids";
import KidsMobile from "@/pages/optionmenu/KidsMobile";
import Search from "./partials/Search";
import Info from "./partials/Info";

const IconwhitebgNavbar = (props) => {
  const { search, info } = props
  const sticky = useSticky(300);

  const fixedClassName = `container-fluid  bg-white fixed-top navbarheight shadow p-0 px-3`;
  const navClassName = " bg-white  navbarheight  container rounded-3 shadow p-0 px-3";
  return (

    <Navbar expand="lg" className={sticky ? fixedClassName : navClassName}>
      <Container className="p-0">
        <div className="d-block px-3 py-4 d-lg-none">
          <Link href="/"><img src="/navbar/logo/logo-dark.png" alt="" width="146px" /></Link>

        </div>
        <div className="d-none d-lg-block">
          <SocialLinks
            className="nav1icon fs-4 me-2"
          />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-evenly align-content-evenly  w-100">
            <div className="d-flex flex-column flex-lg-row">

              <Dropdown autoClose="outside" className="d-none d-lg-block">
                <Link href="/women">
                  <Dropdown.Toggle variant="auto" className="nav1link mt-xl-0 d-block">
                    Women <span><BiChevronDown /></span>
                  </Dropdown.Toggle>
                </Link>
                <Dropdown.Menu className="womendrop g-0 p-0 dropdown-menu">
                  <Women />
                </Dropdown.Menu>
              </Dropdown>

              <div className="d-block d-lg-none">
                <WomenMobile />
              </div>

              <Dropdown autoClose="outside" className="d-none d-lg-block">
                <Link href="/men">
                  <Dropdown.Toggle variant="auto" className="nav1link mt-xl-0 d-block">
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
                  <Dropdown.Toggle variant="auto" className="nav1link mt-xl-0 d-block">
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
              <Link href="/service" variant="auto" className="nav1link mt-xl-0  w-100 d-flex justify-content-evenly align-items-center d-block d-lg-none">
                Service <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span>
              </Link>

              <Link href="/blog" variant="auto" className="nav1link mt-xl-0 d-none d-lg-block">
                Blog <span><BiChevronDown /></span>
              </Link>
              <Link href="/blog" variant="auto" className="nav1link mt-xl-0  w-100 d-flex justify-content-evenly align-items-center d-block d-lg-none">
                Blog <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span>
              </Link>

              <Link href="/contact-us" variant="auto" className="nav1link mt-xl-0 d-none d-lg-block">
                Contact <span><BiChevronDown /></span>
              </Link>
              <Link href="/contact-us" variant="auto" className="nav1link mt-xl-0  w-100 d-flex justify-content-evenly align-items-center d-block d-lg-none">
                Contact <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span>
              </Link>
            </div>
            <div className="d-flex">
              {/* search */}
              {search && <Search />}
              {/* sidebar info */}
              {info && <Info />}
            </div>
            <div className="d-block d-lg-none mt-3">
              <SocialLinks className=" nav1icon fs-4 me-2" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default IconwhitebgNavbar