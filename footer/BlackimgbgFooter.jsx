import React from "react"
import Link from "next/link"
import { categories, tags } from "./footer"
import { BsCalendarWeekFill } from "react-icons/bs";
import NextLink from "@/reusablecomponent/NextLink";
import SocialLinks from "@/reusablecomponent/SocialLinks";
const BlackimgbgFooter = () => {
  return (
    <div className="footer3maindiv">
      <div className="container py-3 py-md-5">
        <div className="row gy-5 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <h4 className="text-white mb-3">Popular Posts</h4>
            <div>
              <div className="text-white d-flex">
                <Link href="" legacyBehavior>
                  <a>
                    <img src="/footer/footer3img/a4.jpg" alt="" className="rounded-4" style={{ width: "80px" }} />
                  </a>
                </Link>
                <div className="ms-3">
                  <h6 className="mb-2">
                    <NextLink title="Magna Mollis Ultricies" href="#" />
                  </h6>
                  <div className="icondate">
                    <a><BsCalendarWeekFill /></a>
                    <span className="ms-2">26 Mar 2022</span>
                  </div>
                </div>
              </div>
              <div className="text-white d-flex mt-4">
                <Link href="" legacyBehavior>
                  <a>
                    <img src="/footer/footer3img/a5.jpg" alt="" className="rounded-4" style={{ width: "80px" }} />
                  </a>
                </Link>
                <div className="ms-3">
                  <h6 className="mb-2">
                    <NextLink title="Ornare Nullam Risus" href="#" />
                  </h6>
                  <div className="icondate">
                    <a><BsCalendarWeekFill /></a>
                    <span className="ms-2">16 Feb 2022</span>
                  </div>
                </div>
              </div>
              <div className="text-white d-flex mt-4">
                <Link href="" legacyBehavior>
                  <a>
                    <img src="/footer/footer3img/a6.jpg" alt="" className="rounded-4" style={{ width: "80px" }} />
                  </a>
                </Link>
                <div className="ms-3">
                  <h6 className="mb-2">
                    <NextLink title="Euismod Nullam Fusce" href="#" />
                  </h6>
                  <div className="icondate">
                    <a><BsCalendarWeekFill /></a>
                    <span className="ms-2">8 Jan 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <h4 className="text-white mb-3">Tags</h4>
            <div className="d-flex flex-wrap">
              {tags.map(({ id, title, url }) => (
                <div key={id} className="px-1">
                  <NextLink title={title} href={url} className="taground col btn text-white bg-primary rounded-pill mb-2 px-md-3 px-xl-4" />
                </div>
              ))}
            </div>
            <div className="text-white">
              <h4 className="mb-3">Categories</h4>
              <ul className="fs-5">
                {categories.map(({ id, post, title, url }) => (
                  <li key={id}>
                    <NextLink title={`${title} (${post})`} href={url} className="icondate" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 icondate" style={{ fontSize: "18px" }}>
            <div className="">
              <h4 className="text-white mb-3 ">Get in Touch</h4>
              <address className="" style={{ paddingRight: "100px" }}>Moonshine St. 14/05 Light City, London, United Kingdom</address>
              <a href="mailto:#" className="">info@email.com</a>
              <br /> 00 (123) 456 78 90
            </div>
            <div className=" mt-3">
              <h4 className="text-white mb-3">Elsewhere</h4>
              <SocialLinks className="nav1icon text-white fs-5 me-3" />
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="">
              <h4 className="text-white mb-3">Learn More</h4>
              <div className="icondate" style={{ fontSize: "18px" }}>
                <div>
                  <Link href="/Service">About Us</Link>
                </div>
                <div>
                  <Link href="">Our Story</Link>
                </div>
                <div>
                  <Link href="">Projects</Link>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-white mb-3">Need Help?</h4>
              <div className="icondate" style={{ fontSize: "18px" }}>
                <div>
                  <Link href="">Support</Link>
                </div>
                <div>
                  <Link href="">Get Started</Link>
                </div>
                <div>
                  <Link href="/contact-us">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 className="mt-3 mb-0 text-center icondate">© 2022 Sandbox. All rights reserved.</h5>
      </div>
    </div>
  )
}
export default BlackimgbgFooter