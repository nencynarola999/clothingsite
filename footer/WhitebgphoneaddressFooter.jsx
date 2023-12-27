import SocialLinks from "@/reusablecomponent/SocialLinks"
import React from "react"
import { FiPhoneCall } from "react-icons/fi"
import { PiMapPinLineBold } from "react-icons/pi"

const WhitebgphoneaddressFooter = () => {
    return (
        <div className="footer6maindiv" >
            <div className="container ">
                <div className="row gy-5  gy-lg-0">
                    <div className="col-md-6 col-xl-6">
                        <div>
                            <img className="mb-4 mt-3" src="/navbar/logo/logo-dark.png" alt="" />
                            <p className="mb-4 footerpaddingset">
                                I"m Caitlyn Sandbox, a photographer specializing in food, drink and product photography.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-3 ">
                        <div className="d-flex">
                            <div className="me-3 fs-4">
                                <a><FiPhoneCall className="iconset" /></a>
                            </div>
                            <div>
                                <h4 className="">Phone</h4>
                                <p>00 (123) 456 78 90 <br /> 00 (987) 654 32 10</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-3">
                        <div className="d-flex">
                            <div className="me-3 fs-4">
                                <a><PiMapPinLineBold className="iconset" /></a>
                            </div>
                            <div>
                                <h4 className="">Address</h4>
                                <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row ">
                    <p className="col-12 col-md-6" >© 2022 Sandbox. All rights reserved.</p>
                    <br />
                    <div className="col-12 col-md-6 text-md-end">
                        <SocialLinks
                            className="nav1icon me-3 fs-4"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default WhitebgphoneaddressFooter