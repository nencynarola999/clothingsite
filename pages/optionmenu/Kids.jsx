import Link from "next/link"
import React from "react"
import { Carousel } from "react-bootstrap"

const Kids = () => {
    return (
        <>
            <div className="row">
                <div className="d-flex justify-content-evenly womensetdiv">
                    <div className="col-9 d-flex justify-content-evenly">
                        <div className="my-3 mx-3">
                            <Link href="/kids/boys" ><h6>Boys</h6></Link>
                            <Link href="/kids/boys/tshirtsandpolos" ><p>T-Shirts/Polos</p></Link>
                            <Link href="/kids/boys/shirts" ><p>Shirts</p></Link>
                            <Link href="/kids/boys/jeans" ><p>Jeans</p></Link>
                            <Link href="/kids/boys/shorts" ><p>Shorts</p></Link>
                            <Link href="/kids/boys/trackpantsandjoggers" ><p>Trackpants & Joggers</p></Link>
                            <Link href="/kids/boys/sweatshirtsandhoodies" ><p>Sweatshirts & hoodies</p></Link>
                            <Link href="/kids/boys/pants" ><p>Pants</p></Link>
                            <Link href="/kids/boys/clothing" ><p>Clothing </p></Link>
                            <Link href="/kids/boys/jacketsandwaistcoat" ><p>Jackets & Waistcoat</p></Link>
                            <Link href="/kids/boys/innerwear" ><p>Innerwear</p></Link>
                            <Link href="/kids/boys/ethnicwear" ><p>Ethnic Wear</p></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 mx-2">
                            <Link href="/kids/girls" ><h6>Girls</h6></Link>
                            <Link href="/kids/girls/topsandtees" ><p>Tops & Tees</p></Link>
                            <Link href="/kids/girls/dressesandjumpsuits" ><p>Dresses/Jumpsuits</p></Link>
                            <Link href="/kids/girls/clothingsets" ><p>Clothing Sets</p></Link>
                            <Link href="/kids/girls/jeans" ><p>Jeans</p></Link>
                            <Link href="/kids/girls/knitbottoms" ><p>Knit Bottoms</p></Link>
                            <Link href="/kids/girls/innerwear" ><p>Innerwear</p></Link>
                            <Link href="/kids/girls/shortsandskirts" ><p>Shorts & Skirts</p></Link>
                            <Link href="/kids/girls/trackpantsandjoggers" ><p>TrackPants/Joggers</p></Link>
                            <Link href="/kids/girls/ethnicwear" ><p>Ethnic Wear</p></Link>
                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 mx-2">
                            <Link href="/kids/accessories" ><h6>Accessories</h6></Link>
                            <Link href="/kids/accessories/kidssunglasses" ><p>Kids Sunglasses</p></Link>
                            <Link href="/kids/accessories/kidswatches" ><p>Kids Watches</p></Link>
                            <Link href="/kids/accessories/capsandhats" ><p>Caps & Hats</p></Link>


                        </div>
                        <h2 className="m-2"></h2>
                        <div className="my-3 mx-2">
                            <Link href="/kids/agestore" ><h6>Age Store</h6></Link>
                            <Link href="/kids/agestore/0-2year" ><p>0-2 yrs</p></Link>
                            <Link href="/kids/agestore/2-4year" ><p>2-4 yrs</p></Link>
                            <Link href="/kids/agestore/4-6year" ><p>4-6 yrs</p></Link>
                            <Link href="/kids/agestore/6-10year" ><p>6-10 yrs</p></Link>
                            <Link href="/kids/agestore/10-13year" ><p>10-13 yrs</p></Link>
                            <Link href="/kids/agestore/13-16year" ><p>13-16 yrs</p></Link>
                            <br />
                            <Link href="/kids/shopboysfootwear" ><h6>Shop Boys Footwear</h6></Link>

                            <Link href="/kids/shopgirlsfootwear" ><h6>Shop Girls Footwear</h6></Link>
                        </div>
                    </div>

                    <div className="col-3 my-3 mx-2 d-flex justify-content-center align-items-center">
                        <Carousel className="carousel-indicatorsnavbar ">
                            <Carousel.Item className="Psec" interval={1000}>
                                <div className="row row-cols-1 row-cols-md-2 g-5 p-5 ">
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/kids/cap1.jpg" alt="" className="w-100 h-100" />

                                        </div>
                                    </div>
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/kids/glasses1.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/kids/shoes1.jpg" alt="" className="w-100 h-100" />
                                        </div>

                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/kids/watch1.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="Psec" interval={1000}>
                                <div className="row row-cols-1 row-cols-md-2 g-5 p-5 ">
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/kids/shoes2.jpg" alt="" className="w-100 h-100" />

                                        </div>
                                    </div>
                                    <div className="col p-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/kids/tshirt1.jpg" alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/kids/glasses2.jpg" alt="" className="w-100 h-100" />
                                        </div>

                                    </div>
                                    <div className="col p-0 m-0">
                                        <div style={{ height: "110px" }}>
                                            <img src="/navbar/kids/watch2.jpg" alt="" className="w-100 h-100" />
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

export default Kids