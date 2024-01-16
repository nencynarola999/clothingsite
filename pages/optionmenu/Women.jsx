import Link from "next/link"
import React from "react"
import { Carousel, Dropdown } from "react-bootstrap"

const Women = () => {
    return (
        <>
            <div className="d-flex justify-content-evenly womensetdiv">
                <div className="row g-0">
                    <div className="col-9 d-flex">
                        <div className="my-3 ms-2">
                            <Link className="dropdown-item" href="/women/ethnicfusion" ><h5>Ethnic & Fusion Wear</h5></Link>
                            <Link className="dropdown-item" href="/women/ethnicfusion/kurtaandkurtis"><p>Kurtas & Kurtis</p></Link>
                            <Link className="dropdown-item" href="/women/ethnicfusion/kurtasets"><p>Kurta Sets</p></Link>
                            <Link className="dropdown-item" href="/women/ethnicfusion/ethnicdresses"><p>Ethnic Dresses</p></Link>
                            <Link className="dropdown-item" href="/women/ethnicfusion/topsandtunics"><p>Tops & Tunics</p></Link>
                            <Link className="dropdown-item" href="/women/ethnicfusion/leggingsandchuridars"><p>Leggings & Churidars</p></Link>
                            <Link className="dropdown-item" href="/women/ethnicfusion/pantsandpalazzos"><p>Pants & Palazzos</p></Link>
                            <Link className="dropdown-item" href="/women/ethnicfusion/skirts"><p>Skirts</p></Link>
                            <Link className="dropdown-item" href="/women/ethnicfusion/dupattasandstoles"><p>Dupattas & Stoles</p></Link>
                            <Link className="dropdown-item" href="/women/ethnicfusion/saree"><p>Saree</p></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3">
                            <Link className="dropdown-item" href="/women/westernwear" ><h5>Western Wear</h5></Link>
                            <Link className="dropdown-item" href="/women/westernwear/topsandtees" ><p>Tops & Tees</p></Link>
                            <Link className="dropdown-item" href="/women/westernwear/dressesandjumpsuits" ><p>Dresses & Jumpsuits</p></Link>
                            <Link className="dropdown-item" href="/women/westernwear/jeansandjeggings" ><p>Jeans & Jeggings</p></Link>
                            <Link className="dropdown-item" href="/women/westernwear/shortsandskirts" ><p>Shorts & Skirts</p></Link>
                            <Link className="dropdown-item" href="/women/westernwear/trousers" ><p>Trousers</p></Link>
                            <Link className="dropdown-item" href="/women/westernwear/jacketsandshrugs" ><p>Jackets & Shrugs</p></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3">
                            <Link className="dropdown-item" href="/women/sportswear" ><h5>Sportswear</h5></Link>
                            <Link className="dropdown-item" href="/women/sportswear/topstees" ><p>Tops & Tees</p></Link>
                            <Link className="dropdown-item" href="/women/sportswear/leggings" ><p>Leggings</p></Link>
                            <Link className="dropdown-item" href="/women/sportswear/joggersandtracks" ><p>Joggers & Tracks</p></Link>
                            <Link className="dropdown-item" href="/women/sportswear/sweatshirtsandjackets" ><p>Sweatshirts & Jackets</p></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3">
                            <Link className="dropdown-item" href="/women/beauty" ><h6>Beauty</h6></Link>
                            <Link className="dropdown-item" href="/women/footwearandbags" ><h6>Footwear/Bags</h6></Link>
                            <Link className="dropdown-item" href="/women/watches" ><h6>Watches</h6></Link>
                            <Link className="dropdown-item" href="/women/jewellery" ><h6>Jewellery</h6></Link>
                            <Link className="dropdown-item" href="/women/fragrances" ><h6>Fragrances</h6></Link>
                        </div>
                    </div>

                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <Carousel className="carousel-indicatorsnavbar ">
                            <Carousel.Item className="Psec" interval={1000}>
                                <div className="row row-cols-1 row-cols-md-2 g-5 pe-5 ">
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
                                <div className="row row-cols-1 row-cols-md-2 g-0 pe-5 ">
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