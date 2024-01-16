import Link from "next/link"
import React from "react"
import { Carousel } from "react-bootstrap"

const Men = () => {
    return (
        <>
            <div className="d-flex justify-content-evenly mensetdiv">
                <div className="row g-0">
                    <div className="col-9 d-flex ">
                        <div className="my-3 ms-2">
                            <Link className="dropdown-item" href="/men/topwear" ><h6>TOP WEAR</h6></Link>
                            <Link className="dropdown-item" href="/men/topwear/casualshirts" ><p>Casual Shirts</p></Link>
                            <Link className="dropdown-item" href="/men/topwear/formalshirts" ><p>Formal Shirts</p></Link>
                            <Link className="dropdown-item" href="/men/topwear/polos" ><p> Polos</p></Link>
                            <Link className="dropdown-item" href="/men/topwear/tshirts" ><p> T-Shirts</p></Link>
                            <Link className="dropdown-item" href="/men/topwear/jackets" ><p>Jackets</p></Link>
                            <Link className="dropdown-item" href="/men/topwear/hoodiesandsweatshirts" ><p>Hoodies & Sweatshirts</p></Link>
                            <br />
                            <Link className="dropdown-item" href="/men/bottomwear" ><h6>BOTTOM WEAR</h6></Link>
                            <Link className="dropdown-item" href="/men/bottomwear/casualtrousers" ><p> Casual Trousers</p></Link>
                            <Link className="dropdown-item" href="/men/bottomwear/formaltrousers" ><p>Formal Trousers</p></Link>
                            <Link className="dropdown-item" href="/men/bottomwear/jeans" ><p>Jeans</p></Link>
                            <Link className="dropdown-item" href="/men/bottomwear/trackpants" ><p>Track Pants</p></Link>
                            <Link className="dropdown-item" href="/men/bottomwear/trousers" ><p>Trousers</p></Link>
                            <Link className="dropdown-item" href="/men/bottomwear/shorts" ><p>Shorts & 3/4ths</p></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 ">
                            <Link className="dropdown-item" href="/men/watches" ><h6>Watches</h6></Link>
                            <Link className="dropdown-item" href="/men/watches/roundwatches" ><p>Round watches</p></Link>
                            <Link className="dropdown-item" href="/men/watches/analogwatches" ><p>Analog watches</p></Link>
                            <Link className="dropdown-item" href="/men/watches/automaticwatches" ><p>Automatic watches</p></Link>
                            <Link className="dropdown-item" href="/men/watches/chronographwatches" ><p>Chronograph watches</p></Link>
                            <Link className="dropdown-item" href="/men/watches/multifunctionwatches" ><p>Multi Function watches</p></Link>
                            <Link className="dropdown-item" href="/men/watches/smartwatches" ><p>Smart watches</p></Link>
                            <Link className="dropdown-item" href="/men/watches/fitnesstrackers" ><p>Fitness trackers</p></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 ">
                            <Link className="dropdown-item" href="/men/sunglasses" ><h6>SUNGLASSES</h6></Link>
                            <Link className="dropdown-item" href="/men/sunglasses/aviator" ><p>Aviator</p></Link>
                            <Link className="dropdown-item" href="/men/sunglasses/wayfarer" ><p>Wayfarer</p></Link>
                            <Link className="dropdown-item" href="/men/sunglasses/square" ><p>Square</p></Link>
                            <Link className="dropdown-item" href="/men/sunglasses/sporty" ><p>Sporty</p></Link>
                            <Link className="dropdown-item" href="/men/sunglasses/rectangle" ><p>Rectangle</p></Link>
                            <Link className="dropdown-item" href="/men/sunglasses/round" ><p>Round</p></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 ">
                            <Link className="dropdown-item" href="/men/shoes" ><h6>SHOES</h6></Link>
                            <Link className="dropdown-item" href="/men/shoes/loafersandmoccasin" ><p>Loafers & Moccasin</p></Link>
                            <Link className="dropdown-item" href="/men/shoes/slipons" ><p>Slip-Ons</p></Link>
                            <Link className="dropdown-item" href="/men/shoes/sportsshoesandsneakers" ><p>Sports Shoes & Sneakers</p></Link>
                            <Link className="dropdown-item" href="/men/shoes/laceup" ><p>Lace up</p></Link>
                            <Link className="dropdown-item" href="/men/shoes/slippersandsliders" ><p>Slippers and Sliders</p></Link>
                            <Link className="dropdown-item" href="/men/shoes/floatersandsandals" ><p>Floaters & Sandals</p></Link>
                            <Link className="dropdown-item" href="/men/shoes/boots" ><p>Boots</p></Link>

                        </div>
                    </div>

                    <div className="col-3  d-flex justify-content-center align-items-center">
                        <Carousel className="carousel-indicatorsnavbar ">
                            <Carousel.Item className="Psec" interval={1000}>
                                <div className="row row-cols-1 row-cols-md-2 g-0 pe-5 ">
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/men/glasses1.jpg" alt="" className="w-100 h-100" />

                                        </div>
                                    </div>
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/men/hoodi1.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/men/shoes1.jpg" alt="" className="w-100 h-100" />
                                        </div>

                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/men/watch1.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="Psec" interval={1000}>
                                <div className="row row-cols-1 row-cols-md-2 g-0 pe-5 ">
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/men/hoodi2.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/men/shoes2.jpg" alt="" className="w-100 h-100" />
                                        </div>

                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/men/watch2.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/men/glasses2.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Men