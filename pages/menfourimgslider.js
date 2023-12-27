import Link from "next/link"
import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Menfourimgslider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let array = [
        {
            slug: "/men/topwear",
            image: "/Men/homemensec3/i1.jpg",
            h4: "T-Shirts",
            p: "Shop Now",
            img: "/Men/homemensec3/i11.jpg",
            h62: "50% Discount"
        },
        {
            slug: "/men/sunglasses",
            image: "/Men/homemensec3/i4.webp",
            h4: "Sunglasses",
            p: "Shop Now",
            img: "/Men/homemensec3/i44.webp",
            h62: "40% Discount"
        },
        {
            slug: "/men/watches",
            image: "/Men/homemensec3/i3.jpg",
            h4: "Watches",
            p: "Shop Now",
            img: "/Men/homemensec3/i33.jpg",
            h62: "50% Discount"
        },
        {
            slug: "/men/topwear/hoodiesandsweatshirts",
            image: "/Men/homemensec3/i5.jpg",
            h4: "Hoodies",
            p: "Shop Now",
            img: "/Men/homemensec3/i55.jpg",
            h62: "60% Discount"
        },
    ]
    let array2 = [
        {
            slug: "/men/shoes/loafersandmoccasin",
            image: "/Men/homemensec3/i2.webp",
            h4: "Loafers",
            p: "Shop Now",
            img: "/Men/homemensec3/i22.webp",
            h62: "20% Discount"
        },
        {
            slug: "/men/topwear",
            image: "/Men/homemensec3/i6.webp",
            h4: "Shirts",
            p: "Shop Now",
            img: "/Men/homemensec3/i66.jpg",
            h62: "20% Discount"
        },
        {
            slug: "/men/shoes/floatersandsandals",
            image: "/Men/homemensec3/i7.webp",
            h4: "Sandals",
            p: "Shop Now",
            img: "/Men/homemensec3/i77.webp",
            h62: "40% Discount"
        },
        {
            slug: "/men/bottomwear/jeans",
            image: "/Men/homemensec3/i8.webp",
            h4: "Jeans",
            p: "Shop Now",
            img: "/Men/homemensec3/i88.webp",
            h62: "50% Discount"
        }
    ]
    return (
        <>
            <div className="container-fluid g-0" style={{ marginTop: "100px" }}>
                <div className="container g-0 ">
                    <Carousel activeIndex={index} className="carousel-indicators3 homemensec3maindiv" onSelect={handleSelect}>
                        <Carousel.Item className="" interval={100000000}>
                            <div className="row row-cols-4 g-2 g-md-3">
                                {
                                    array?.map((x, i) => {
                                        return (
                                            <Link href={x?.slug} legacyBehavior key={i}><a>
                                                <div className="col ">
                                                    <div className="homemensec3subdiv ">
                                                        <div className="homemensec3subdiv1 ">
                                                            <img src={x?.image} alt="" className="w-100 h-100 rounded-3" />
                                                            <div className="rounded-bottom-3">
                                                                <h4 className="m-0">{x?.h4}</h4>
                                                                <p className="m-0">{x?.p}</p>
                                                            </div>
                                                        </div>
                                                        <div className="homemensec3subdiv2">
                                                            <img src={x?.img} alt="" className="w-100 h-100 rounded-3" />
                                                            <div>
                                                                <p className="fs-6 mb-0">{x?.h62}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            </Link>

                                        )
                                    })
                                }

                            </div>
                            <div className="carousel-control-prev1 "><a className="shadow"><IoIosArrowForward /></a></div>
                        </Carousel.Item>
                        <Carousel.Item className="" interval={100000000}>
                            <div className="row row-cols-4 g-2 g-md-3">

                                {
                                    array2?.map((x, i) => {
                                        return (
                                            <Link href={x?.slug} legacyBehavior key={i}><a>
                                                <div className="col ">
                                                    <div className="homemensec3subdiv ">
                                                        <div className="homemensec3subdiv1 ">
                                                            <img src={x?.image} alt="" className="w-100 h-100 rounded-3" />
                                                            <div className="rounded-bottom-3">
                                                                <h4 className="m-0">{x?.h4}</h4>
                                                                <p className="m-0">{x?.p}</p>
                                                            </div>
                                                        </div>
                                                        <div className="homemensec3subdiv2">
                                                            <img src={x?.img} alt="" className="w-100 h-100 rounded-3" />
                                                            <div>
                                                                <p className="fs-6 mb-0">{x?.h62}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            </Link>

                                        )
                                    })
                                }
                            </div>
                            <div className="carousel-control-next1 "><a className="shadow"><IoIosArrowBack /></a></div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div >

        </>
    )
}

export default Menfourimgslider