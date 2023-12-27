import Link from "next/link"
import React from "react"
import { FaShippingFast } from "react-icons/fa"
import { GiReturnArrow } from "react-icons/gi"

const Serviceimagesec = () => {
    return (
        <>
            <div className="container-fluid g-0 mt-5 ">
                <div className="container g-0 service2maindiv">
                    <div className="p-0 m-0 service2subdiv1">
                        <div className="p-0 m-0 service2subdiv2"></div>
                        <div className="service2subdiv3">
                            <div className="d-flex ">
                                <Link href="" legacyBehavior><a className="me-2 me-md-4"> <GiReturnArrow /></a></Link>
                                <h2>Easy and Free Returns*</h2>
                            </div>
                            <div className="d-flex mt-3">
                                <Link href="" legacyBehavior><a className="me-2 me-md-4"> <FaShippingFast /></a></Link>
                                <h2>FREE DELIVERY* <br />on First Order</h2>
                            </div>
                        </div>
                        <Link href="/register" legacyBehavior><a>  <p className="service2subdiv4 mb-0">
                         *Apply For Registeration</p></a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Serviceimagesec