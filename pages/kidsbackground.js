import Link from "next/link"
import React from "react"

const Kidsbackground = () => {
    return (
        <>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0">
                    <h3 className="Homewomen1h3">Kids"s Store</h3>
                    <div className="homekidssec1maindiv">
                        <img src="/Kids/homekidssec1/bg3.jpg" alt="" width="100%" height="100%" className="" />
                        <div className="divvv">

                        </div>
                        <div className="row gx-5 kidsdiv">
                            <Link href="/kids/boys" legacyBehavior><a>
                                <div className="col d-flex justify-content-center">
                                    <div className="kidsdiv1">
                                        <img src="/Kids/homekidssec1/i4.avif" alt="" width="100%" height="100%" />
                                        <div className="subkidsdiv1">
                                            <p className="m-0 subkidsdiv1h1 mb-0">Boys</p>
                                            <p className="m-0 subkidsdiv1h2">Collection</p>
                                            <p className="mt-1 mt-md-2 mt-lg-3 mb-0 subkidsdiv1h6">SHOP NOW</p>
                                        </div>
                                        <div className="subkidsdiv2"></div>
                                    </div>
                                </div>
                            </a></Link>
                            <Link href="/kids/girls" legacyBehavior><a>
                                <div className="col d-flex justify-content-center">
                                    <div className=" kidsdiv2">
                                        <img src="/Kids/homekidssec1/i5.avif" alt="" width="100%" height="100%" />
                                        <div className="subkidsdiv1">
                                            <p className="m-0 subkidsdiv1h1 mb-0"> Girls</p>
                                            <p className="m-0 subkidsdiv1h2"> Collection</p>
                                            <p className="mt-1 mt-md-2 mt-lg-3 mb-0 subkidsdiv1h6">SHOP NOW</p>
                                        </div>
                                        <div className="subkidsdiv2"></div>
                                    </div>
                                </div>
                            </a></Link>
                            <div className="col d-flex justify-content-center">
                                <div className="">
                                    <div className="row g-3">
                                        <div className="col-12 d-flex justify-content-center">
                                            <div className="kidsdiv3 text-center">
                                                <p className="kidsdiv3h6 mb-0">New Looks We Love</p>
                                                <p className="m-0 mt-1 mt-md-3 mt-xl-4 kidsdiv3h2">Find unique style for your children</p>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-center">
                                            <div className="kidsdiv4 text-center">
                                                <p className="kidsdiv4h6 mb-0">New Arrivals</p>
                                                <p className="m-0 mt-1 mt-md-3 mt-xl-3 kidsdiv4h2">Get Flat 60% off on Kid"s Store</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className=" kidsdiv5">
                                <p className="m-0 kidsdiv5h1">Kids Store</p>
                                <p className="m-0 kidsdiv5h2">Price Avaliable</p>
                                <p className="m-0 m-md-1 kidsdiv5h3">From <sup>₹</sup>500</p>
                                <Link href="/kids/boys" legacyBehavior ><a className="mt-0 mt-lg-3">SHOP NOW</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kidsbackground