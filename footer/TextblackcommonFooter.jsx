import NextLink from "@/reusablecomponent/NextLink"
import SocialLinks from "@/reusablecomponent/SocialLinks"
import React from "react"
import footerNav from "./footer"

const TextblackcommonFooter = () => {
    return (
        <div className="blackcommonfootermaindiv" >
            <div className="container ">
                <div className="row gy-5  gy-lg-0">
                    <div className="col-md-4 col-xl-3">
                        <div>
                            <img className="mb-4 mt-3" src="/navbar/logo/logo-dark.png" alt="" />
                            <p className="mb-4">
                                © 2022 Sandbox. <br className="d-none d-lg-block" />
                                All rights reserved.
                            </p>
                            <SocialLinks className=" nav2icon fs-4 me-2" />
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-3">
                        <div>
                            <h4 className=" mt-3 mb-3">Get in Touch</h4>
                            <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
                            <p> <NextLink title="info@email.com" href="mailto:#" />
                                <br /> 00 (123) 456 78 90</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-3">
                        <div>
                            <h4 className=" mb-3 mt-3">Learn More</h4>
                            <ul className="list-unstyled  mb-0">
                                {footerNav.map(({ title, url }) => (
                                    <li key={title}>
                                        <NextLink title={title} href={url} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xl-3">
                        <div>
                            <h4 className=" mb-3 mt-3">Our Newsletter</h4>
                            <p className="mb-5">Subscribe to our newsletter to get our news &amp; deals delivered to you.</p>
                            <div>
                                <div id="mc_embed_signup2">
                                    <form
                                        method="post"
                                        target="_blank"
                                        id="mc-embedded-subscribe-form2"
                                        name="mc-embedded-subscribe-form"
                                        action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                                    >
                                        <div id="mc_embed_signup_scroll2">
                                            <div className="mc-field-group input-group form-floating">
                                                <input
                                                    type="email"
                                                    name="EMAIL"
                                                    id="mce-EMAIL2"
                                                    placeholder="Email Address"
                                                    className="footer1email"
                                                />
                                                <input
                                                    value="Join"
                                                    type="submit"
                                                    name="subscribe"
                                                    id="mc-embedded-subscribe2"
                                                    className="btn btn_login"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default TextblackcommonFooter