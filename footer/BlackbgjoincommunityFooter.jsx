import React from "react"
import Link from "next/link"
import NextLink from "@/reusablecomponent/NextLink"
import SocialLinks from "@/reusablecomponent/SocialLinks"
import { helps, learnMore } from "./footer"

const BlackbgjoincommunityFooter = () => {
    return (
        <div className="footer8maindiv" >
            <div className="container ">
                <div className="row gy-5  gy-lg-0 mb-5">
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4 className="mb-4 fs-2">
                            Join the Community
                        </h4>
                        <p className="mb-4">Lets make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
                        <Link href="" legacyBehavior ><a className="btn bg-white rounded-pill py-2 px-4 "> Join Us</a></Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2  ms-lg-auto ">
                        <h4>Need Help?</h4>
                        {helps.map(({ id, title, url }) => (
                            <p key={id} className="m-0">
                                <NextLink title={`${title}`} href={url} className="icondate" />
                            </p>
                        ))}
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <h4>Learn More</h4>
                        {
                            learnMore.map(({ id, title, url }) => (
                                <p key={id} className="m-0">
                                    <NextLink title={`${title}`} href={url} className="icondate" />
                                </p>
                            ))
                        }
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 col-xl-2">
                        <div>
                            <h4 className="">Get in Touch</h4>
                            <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
                            <p> <NextLink title="info@email.com" href="mailto:#" />
                                <br /> 00 (123) 456 78 90</p>
                        </div>
                    </div>
                </div>
                <hr className="mt-5 text-white" />
                <div className="row ">
                    <p className="col-12 col-md-6" >© 2022 Sandbox. All rights reserved.</p>
                    <br />
                    <div className="col-12 col-md-6 text-md-end">
                        <SocialLinks
                            className="nav1icon text-white me-3 fs-4"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default BlackbgjoincommunityFooter