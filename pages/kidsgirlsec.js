import Link from "next/link"
import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Kidsgirlsec = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let array = [
        {
            slug: "/kids/girls/dressesandjumpsuits",
            image: "/Kids/homekidssec4/gi1.webp",
            h2: "Jumpsuits",
            h5: "Up to 50% Off"

        },

        {
            slug: "/kids/girls/topsandtees",
            image: "/Kids/homekidssec4/gi2.avif",
            h2: "Tops & Tees",
            h5: "Up to 40% Off"

        },
        {
            slug: "/kids/girls/jeans",
            image: "/Kids/homekidssec4/gi3.webp",
            h2: "Jeans",
            h5: "Up to 50% Off"

        },
        {
            slug: "/kids/girls/shortsandskirts",
            image: "/Kids/homekidssec4/gi4.webp",
            h2: "Shorts & Skirts",
            h5: "Up to 50% Off"

        },
        {
            slug: "/kids/shopgirlsfootwear",
            image: "/Kids/homekidssec4/gi5.webp",
            h2: "Footwear",
            h5: "Up to 60% Off"

        },
        {
            slug: "/kids/accessories/capsandhats",
            image: "/Kids/homekidssec4/gi6.avif",
            h2: "Caps & Hats",
            h5: "Up to 60% Off"

        },
        {
            slug: "/kids/accessories/kidswatches",
            image: "/Kids/homekidssec4/gi7.webp",
            h2: "Watches",
            h5: "Up to 50% Off"

        },
        {
            slug: "/kids/accessories/kidssunglasses",
            image: "/Kids/homekidssec4/gi8.jpg",
            h2: "Sunglasses",
            h5: "Up to 40% Off"

        }
    ]
    return (
        <>
            <div className="container-fluid g-0 girl py-5 mt-5">
                <div className="container g-0">
                    <div className="row homekidssec4maindiv my-5 g-0">

                        <div className="col-12 col-md-5 col-lg-4 m-0 mb-4 mb-md-0 ">
                            <div className=" homekidssec4subdiv2 ">
                                <Carousel activeIndex={index} className=" carousel-indicators4 homekidssec4car  rounded-3" onSelect={handleSelect}>
                                    {
                                        array?.map((x, i) => {
                                            return (
                                                <Carousel.Item interval={10000} className="" key={i}>
                                                    <div className="p-0" >
                                                        <Link href={x?.slug} legacyBehavior   >
                                                            <a >
                                                                <div className="homekidssec4carsubdiv1">
                                                                    <img src={x?.image} alt="" className="rounded-3 w-100 h-100" />
                                                                </div>
                                                                <div className="px-1 px-md-3 homekidssec4carsubdiv2">
                                                                    <h2 className="m-0">{x?.h2} </h2>
                                                                    <h5 className="m-0">{x?.h5}</h5>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="carousel-control-prev1 "><a className="shadow"><IoIosArrowForward /></a></div>
                                                    <div className="carousel-control-next1 "><a className="shadow"><IoIosArrowBack /></a></div>
                                                </Carousel.Item>
                                            )
                                        })
                                    }

                                </Carousel>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4 mb-md-0 col-lg-6  m-0">
                            <div className="  homekidssec4subdiv1 p-0 p-md-5 py-3 px-1">
                                <div>
                                    <img src="/Kids/homekidssec4/gmain.webp" alt="" />

                                    <div className="mt-3">
                                        <h2 className="fs-1">Girls Fashion Casual</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non doloremque, illo eius, voluptatem iure et hic ducimus inventore beatae est nihil! Sint, nisi vitae labore nemo earum voluptatem a!</p>
                                        <Link href="/kids/girls" legacyBehavior><a>Show More</a></Link>
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


export default Kidsgirlsec