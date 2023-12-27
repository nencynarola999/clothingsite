import Link from "next/link"
import React from "react"
import { Carousel } from "react-bootstrap"

const Women = () => {
    return (
        <>
            <div className="d-flex justify-content-evenly womensetdiv">
                <div className="row ">
                    <div className="col-9 d-flex justify-content-evenly">
                        <div className="my-3 mx-3">
                            <Link href="/women/ethnicfusion" legacyBehavior><a><h5>Ethnic & Fusion Wear</h5></a></Link>
                            <Link href="/women/ethnicfusion/kurtaandkurtis" legacyBehavior><a><p>Kurtas & Kurtis</p></a></Link>
                            <Link href="/women/ethnicfusion/kurtasets" legacyBehavior><a><p>Kurta Sets</p></a></Link>
                            <Link href="/women/ethnicfusion/ethnicdresses" legacyBehavior><a><p>Ethnic Dresses</p></a></Link>
                            <Link href="/women/ethnicfusion/topsandtunics" legacyBehavior><a><p>Tops & Tunics</p></a></Link>
                            <Link href="/women/ethnicfusion/leggingsandchuridars" legacyBehavior><a><p>Leggings & Churidars</p></a></Link>
                            <Link href="/women/ethnicfusion/pantsandpalazzos" legacyBehavior><a><p>Pants & Palazzos</p></a></Link>
                            <Link href="/women/ethnicfusion/skirts" legacyBehavior><a><p>Skirts</p></a></Link>
                            <Link href="/women/ethnicfusion/dupattasandstoles" legacyBehavior><a><p>Dupattas & Stoles</p></a></Link>
                            <Link href="/women/ethnicfusion/saree" legacyBehavior><a><p>Saree</p></a></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 mx-2">
                            <Link href="/women/westernwear" legacyBehavior><a><h5>Western Wear</h5></a></Link>
                            <Link href="/women/westernwear/topsandtees" legacyBehavior><a><p>Tops & Tees</p></a></Link>
                            <Link href="/women/westernwear/dressesandjumpsuits" legacyBehavior><a><p>Dresses & Jumpsuits</p></a></Link>
                            <Link href="/women/westernwear/jeansandjeggings" legacyBehavior><a><p>Jeans & Jeggings</p></a></Link>
                            <Link href="/women/westernwear/shortsandskirts" legacyBehavior><a><p>Shorts & Skirts</p></a></Link>
                            <Link href="/women/westernwear/trousers" legacyBehavior><a><p>Trousers</p></a></Link>
                            <Link href="/women/westernwear/jacketsandshrugs" legacyBehavior><a><p>Jackets & Shrugs</p></a></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 mx-2">
                            <Link href="/women/sportswear" legacyBehavior><a><h5>Sportswear</h5></a></Link>
                            <Link href="/women/sportswear/topstees" legacyBehavior><a><p>Tops & Tees</p></a></Link>
                            <Link href="/women/sportswear/leggings" legacyBehavior><a><p>Leggings</p></a></Link>
                            <Link href="/women/sportswear/joggersandtracks" legacyBehavior><a><p>Joggers & Tracks</p></a></Link>
                            <Link href="/women/sportswear/sweatshirtsandjackets" legacyBehavior><a><p>Sweatshirts & Jackets</p></a></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 mx-2">
                            <Link href="/women/beauty" legacyBehavior><a><h6>Beauty</h6></a></Link>
                            <Link href="/women/footwearandbags" legacyBehavior><a><h6>Footwear/Bags</h6></a></Link>
                            <Link href="/women/watches" legacyBehavior><a><h6>Watches</h6></a></Link>
                            <Link href="/women/jewellery" legacyBehavior><a><h6>Jewellery</h6></a></Link>
                            <Link href="/women/fragrances" legacyBehavior><a><h6>Fragrances</h6></a></Link>
                        </div>
                    </div>

                    <div className="col-3  d-flex justify-content-center align-items-center">
                        <Carousel className="carousel-indicatorsnavbar ">
                            <Carousel.Item className="Psec" interval={1000}>
                                <div className="row row-cols-1 row-cols-md-2 g-5 p-5 ">
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/women/earning1.jpg" alt="" className="w-100 h-100" />

                                        </div>
                                    </div>
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/women/purse1.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/women/shoes1.jpg" alt="" className="w-100 h-100" />
                                        </div>

                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/women/watch1.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="Psec" interval={1000}>
                                <div className="row row-cols-1 row-cols-md-2 g-5 p-5 ">
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/women/earning1.jpg" alt="" className="w-100 h-100" />

                                        </div>
                                    </div>
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/women/purse2.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/women/heel1.jpg" alt="" className="w-100 h-100" />
                                        </div>

                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/women/watch2.jpg" alt="" className="w-100 h-100" />
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

export default Women