import Link from "next/link"
import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Womenfourimgblacklogo = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    let array = [
        {
            slug: "/women",
            image: "/Women/homewomensec3/i1.webp",
            logoimage: "/Women/homewomensec3/c1.png",
            p: "Up to 30% Off"
        },
        {
            slug: "/women",
            image: "/Women/homewomensec3/i2.webp",
            logoimage: "/Women/homewomensec3/c2.png",
            p: "Up to 50% Off"
        },
        {
            slug: "/women",
            image: "/Women/homewomensec3/i3.webp",
            logoimage: "/Women/homewomensec3/c3.png",
            p: "Up to 40% Off"
        },
        {
            slug: "/women",
            image: "/Women/homewomensec3/i4.webp",
            logoimage: "/Women/homewomensec3/c4.png",
            p: "Up to 70% Off"
        },
    ]
    let array2 = [
        {
            slug: "/women",
            image: "/Women/homewomensec3/i5.webp",
            logoimage: "/Women/homewomensec3/c5.png",
            p: "Buy 3 Get 1 Free"
        },
        {
            slug: "/women",
            image: "/Women/homewomensec3/i6.webp",
            logoimage: "/Women/homewomensec3/c6.png",
            p: "Up to 60% Off"
        },
        {
            slug: "/women",
            image: "/Women/homewomensec3/i7.webp",
            logoimage: "/Women/homewomensec3/c7.png",
            p: "Flat 20% Off"
        },
        {
            slug: "/women",
            image: "/Women/homewomensec3/i8.webp",
            logoimage: "/Women/homewomensec3/c8.webp",
            p: "Up to 50% Off"
        },
    ]

    return (
        <>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0 ">
                    <Carousel activeIndex={index} className="carousel-indicators3 Homewomen3maindiv" onSelect={handleSelect}>
                        <Carousel.Item className="" interval={100000000}>
                            <div className="row row-cols-4 g-3">
                                {
                                    array?.map((x, i) => {
                                        return (
                                            <div className="col" key={i}>
                                                <div className="border p-0 h-100">
                                                    <Link href={x?.slug} legacyBehavior >
                                                        <a>
                                                            <img src={x?.image} alt="" className="w-100 h-100 " />
                                                            <div className="homew3textset">
                                                                <img src={x?.logoimage} alt="" width="60%" height="60%" />
                                                                <p className="m-0">{x?.p}</p>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                            </div>
                            <div className="carousel-control-prev1 "><a className="shadow"><IoIosArrowForward /></a></div>
                        </Carousel.Item>
                        <Carousel.Item className="" interval={100000000}>
                            <div className="row row-cols-4 g-3">
                                {
                                    array2?.map((x, i) => {
                                        return (
                                            <div className="col" key={i}>
                                                <div className="border p-0 h-100">
                                                    <Link href={x?.slug} legacyBehavior >
                                                        <a>
                                                            <img src={x?.image} alt="" className="w-100 h-100 " />
                                                            <div className="homew3textset">
                                                                <img src={x?.logoimage} alt="" width="60%" height="60%" />
                                                                <p className="m-0 ">{x?.p}</p>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="carousel-control-next1 "><a className="shadow"><IoIosArrowBack /></a></div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}


export default Womenfourimgblacklogo