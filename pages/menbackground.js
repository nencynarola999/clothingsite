import Link from "next/link"
import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
const Menbackground = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let array = [
        {
            image: "/Men/homemensec1/bg1.jpg",
            class: "hwomentextdiv2",
            h2: "Womenswear",
            p: "UP TO 60% OFF",
            slug: "/men",
            icon1: <IoIosArrowBack />,
            icon2: <IoIosArrowForward />
        },
        {
            image: "/Men/homemensec1/bg2.jpg",
            class: "hwomentextdiv1",
            h2: "LIBAS",
            p: "UP TO 70% OFF",
            slug: "/men",
            icon1: <IoIosArrowBack />,
            icon2: <IoIosArrowForward />
        },
        {
            image: "/Men/homemensec1/bg3.avif",
            class: "hwomentextdiv3",
            h2: "New Arrivals",
            p: "2000+STYLES",
            slug: "/men",
            icon1: <IoIosArrowBack />,
            icon2: <IoIosArrowForward />
        },
        {
            image: "/Men/homemensec1/bg4.avif",
            class: "hwomentextdiv3",
            h2: "New Arrivals",
            p: "2000+STYLES",
            slug: "/men",
            icon1: <IoIosArrowBack />,
            icon2: <IoIosArrowForward />
        },
        {
            image: "/Men/homemensec1/bg5.avif",
            class: "hwomentextdiv4",
            h2: "Price Available",
            p: "From₹399",
            slug: "/men",
            icon1: <IoIosArrowBack />,
            icon2: <IoIosArrowForward />
        }
    ]
    return (
        <>
            <div className="container-fluid g-0 mt-5 ">
                <div className="container g-0">
                    <h3 className="Homewomen1h3">Men"s Store</h3>
                    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-indicators3 Homewomen1maindiv ">
                        {
                            array?.map((x, i) => {
                                return (
                                    <Carousel.Item className="Homewomen1submaindiv " key={i}>
                                        <img src={x?.image} alt="" className="position-relative" />
                                        <div className={x?.class}>
                                            <h2>{x?.h2}</h2>
                                            <p className="mt-0 mt-md-2 mt-lg-3 mb-1 mb-md-3 mb-lg-5">{x?.p}</p>
                                            <Link href={x?.slug} legacyBehavior><a><h6>Shop Now</h6></a></Link>
                                        </div>
                                        <div className="carousel-control-next1 "><a className="shadow">{x?.icon1}</a></div>
                                        <div className="carousel-control-prev1 "><a className="shadow">{x?.icon2}</a></div>
                                    </Carousel.Item>

                                )
                            })
                        }
                      
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Menbackground