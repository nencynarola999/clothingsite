import Link from "next/link"
import React from "react"
import { Carousel } from "react-bootstrap"

const Men = () => {
    return (
        <>
            <div className="row">
                <div className="d-flex justify-content-evenly womensetdiv">
                    <div className="col-9 d-flex justify-content-evenly">
                        <div className="my-3 mx-3">
                            <Link href="/men/topwear" legacyBehavior><a><h6>TOP WEAR</h6></a></Link>
                            <Link href="/men/topwear/casualshirts" legacyBehavior><a><p>Casual Shirts</p></a></Link>
                            <Link href="/men/topwear/formalshirts" legacyBehavior><a><p>Formal Shirts</p></a></Link>
                            <Link href="/men/topwear/polos" legacyBehavior><a><p> Polos</p></a></Link>
                            <Link href="/men/topwear/tshirts" legacyBehavior><a><p> T-Shirts</p></a></Link>
                            <Link href="/men/topwear/jackets" legacyBehavior><a><p>Jackets</p></a></Link>
                            <Link href="/men/topwear/hoodiesandsweatshirts" legacyBehavior><a><p>Hoodies & Sweatshirts</p></a></Link>
                            <br />
                            <Link href="/men/bottomwear" legacyBehavior><a><h6>BOTTOM WEAR</h6></a></Link>
                            <Link href="/men/bottomwear/casualtrousers" legacyBehavior><a><p> Casual Trousers</p></a></Link>
                            <Link href="/men/bottomwear/formaltrousers" legacyBehavior><a><p>Formal Trousers</p></a></Link>
                            <Link href="/men/bottomwear/jeans" legacyBehavior><a><p>Jeans</p></a></Link>
                            <Link href="/men/bottomwear/trackpants" legacyBehavior><a><p>Track Pants</p></a></Link>
                            <Link href="/men/bottomwear/trousers" legacyBehavior><a><p>Trousers</p></a></Link>
                            <Link href="/men/bottomwear/shorts" legacyBehavior><a><p>Shorts & 3/4ths</p></a></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 mx-2">
                            <Link href="/men/watches" legacyBehavior><a><h6>Watches</h6></a></Link>
                            <Link href="/men/watches/roundwatches" legacyBehavior><a><p>Round watches</p></a></Link>
                            <Link href="/men/watches/analogwatches" legacyBehavior><a><p>Analog watches</p></a></Link>
                            <Link href="/men/watches/automaticwatches" legacyBehavior><a><p>Automatic watches</p></a></Link>
                            <Link href="/men/watches/chronographwatches" legacyBehavior><a><p>Chronograph watches</p></a></Link>
                            <Link href="/men/watches/multifunctionwatches" legacyBehavior><a><p>Multi Function watches</p></a></Link>
                            <Link href="/men/watches/smartwatches" legacyBehavior><a><p>Smart watches</p></a></Link>
                            <Link href="/men/watches/fitnesstrackers" legacyBehavior><a><p>Fitness trackers</p></a></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 mx-2">
                            <Link href="/men/sunglasses" legacyBehavior><a><h6>SUNGLASSES</h6></a></Link>
                            <Link href="/men/sunglasses/aviator" legacyBehavior><a><p>Aviator</p></a></Link>
                            <Link href="/men/sunglasses/wayfarer" legacyBehavior><a><p>Wayfarer</p></a></Link>
                            <Link href="/men/sunglasses/square" legacyBehavior><a><p>Square</p></a></Link>
                            <Link href="/men/sunglasses/sporty" legacyBehavior><a><p>Sporty</p></a></Link>
                            <Link href="/men/sunglasses/rectangle" legacyBehavior><a><p>Rectangle</p></a></Link>
                            <Link href="/men/sunglasses/round" legacyBehavior><a><p>Round</p></a></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 mx-2">
                            <Link href="/men/shoes" legacyBehavior><a><h6>SHOES</h6></a></Link>
                            <Link href="/men/shoes/loafersandmoccasin" legacyBehavior><a><p>Loafers & Moccasin</p></a></Link>
                            <Link href="/men/shoes/slipons" legacyBehavior><a><p>Slip-Ons</p></a></Link>
                            <Link href="/men/shoes/sportsshoesandsneakers" legacyBehavior><a><p>Sports Shoes & Sneakers</p></a></Link>
                            <Link href="/men/shoes/laceup" legacyBehavior><a><p>Lace up</p></a></Link>
                            <Link href="/men/shoes/slippersandsliders" legacyBehavior><a><p>Slippers and Sliders</p></a></Link>
                            <Link href="/men/shoes/floatersandsandals" legacyBehavior><a><p>Floaters & Sandals</p></a></Link>
                            <Link href="/men/shoes/boots" legacyBehavior><a><p>Boots</p></a></Link>

                        </div>
                    </div>

                    <div className="col-3 my-3 mx-2 d-flex justify-content-center align-items-center">
                        <Carousel className="carousel-indicatorsnavbar ">
                            <Carousel.Item className="Psec" interval={1000}>
                                <div className="row row-cols-1 row-cols-md-2 g-5 p-5 ">
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
                                <div className="row row-cols-1 row-cols-md-2 g-5 p-5 ">
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