import Link from "next/link"
import React from "react"
import CountUp from "react-countup"
const Menfourhoverimage = () => {
    return (
        <>
            <div className="container-fluid g-0" style={{ marginTop: "100px" }}>
                <div className="container g-0 p-0">
                    <div className="row g-0  ">
                        <div className="col-12 col-lg-6 g-0  mb-4  mb-lg-0 px-3 p-2">
                            <div className=" h-100 homemensec2imagehoverset">
                                <img src="/Men/homemensec2/i1.avif" alt="" width="100%" height="100%" />
                                <div className="">
                                    <h4 className="mb-3 mb-md-4">SALE UP TO 70% OFF</h4>
                                    <h2 className="mb-3 mb-md-4">SOME THINGS SIMPLY <br />
                                        WON’T GO OUT OF STYLE</h2>
                                    <Link href="/men" legacyBehavior><a>SHOP NOW</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 px-3 mb-4  mb-md-0 p-2">
                            <div className=" h-100 homemensec2imagehoverset2">
                                <img src="/Men/homemensec2/i2.webp" alt="" width="100%" height="100%" />
                                <div className="">
                                    <h5>NEW ARRIVAL</h5>
                                    <h4>CLASSIC <br />
                                        GENTALMAN</h4>
                                    <span className="m-0 fs-5 homemensec2h6">Up to  <p className="m-0 fs-1"><CountUp
                                        start={0}
                                        end={69}
                                        duration={3}
                                        enableScrollSpy
                                    />%</p>
                                        Off</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 px-3 p-2" >
                            <div className=" h-100">
                                <div className="row g-0">
                                    <div className="col-12 mb-4">
                                        <div className="homemensec2imagehoverset">
                                            <img src="/Men/homemensec2/i3.webp" alt="" className="" width="100%" height="300px" />
                                            <div className="">
                                                <h2>Shoes For <br /> Sports</h2>
                                                <Link href="/men" legacyBehavior><h6>BUY NOW </h6>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="border homemensec2imagehoverset">
                                            <img src="/Men/homemensec2/i4.webp" alt="" className="" width="100%" height="300px" />
                                            <div className="">
                                                <h3>Watches For <br /> Fashion</h3>
                                                <Link href="/men" legacyBehavior><h6>BUY NOW </h6>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menfourhoverimage