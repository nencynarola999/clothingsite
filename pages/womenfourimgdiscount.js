import Link from "next/link"
import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
const Womenfourimgdiscount = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let array = [
        {
            image: "/Women/homewomensec2/i1.webp",
            slug: "/women/ethnicfusion/topsandtunics",
            h3: "Tops & Tunics",
            h4: "Up to 50% Off"
        },
        {
            image: "/Women/homewomensec2/i2.avif",
            slug: "/women/ethnicfusion/kurtasets",
            h3: " Kurta & Sets",
            h4: "Up to 40% Off"
        },
        {
            image: "/Women/homewomensec2/i3.webp",
            slug: "/women/sportswear/topstees",
            h3: "Tops & Tees",
            h4: "Up to 50% Off"
        },
        {
            image: "/Women/homewomensec2/i4.jpg",
            slug: "/women/ethnicfusion/saree",
            h3: "Saree",
            h4: "Up to 50% Off"
        }
    ]
    let array2 = [
        {
            image: "/Women/homewomensec2/i5.jpg",
            slug: "/women/beauty",
            h3: "Beauty",
            h4: "Up to 60% Off"
        },
        {
            image: "/Women/homewomensec2/i6.webp",
            slug: "/women/jewellery",
            h3: " Jewellery",
            h4: "Up to 60% Off"
        },
        {
            image: "/Women/homewomensec2/i7.jpg",
            slug: "/women/footwearandbags",
            h3: "Footwear & Bags",
            h4: "Up to 50% Off"
        },
        {
            image: "/Women/homewomensec2/i8.webp",
            slug: "/women/watches",
            h3: "Watches",
            h4: "Up to 40% Off"
        }
    ]

    return (
        <>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0 ">
                    <Carousel activeIndex={index} className="carousel-indicators3  Homewomen2maindiv" onSelect={handleSelect}>
                        <Carousel.Item className="" interval={100000000}>
                            <div className="row row-cols-4  g-3 h-100 ">
                                {
                                    array?.map((x, i) => {
                                        return (
                                            <div className="col " key={i}  data-aos="zoom-in">
                                                <div className="p-0 h-100">
                                                    <Link href={x?.slug} legacyBehavior >
                                                        <a>
                                                            <div className="" >
                                                                <img src={x?.image} alt="" className="w-100 h-100 rounded-3" />
                                                            </div>
                                                            <div className="px-1 px-md-3">
                                                                <h3 className="m-0">{x?.h3}</h3>
                                                                <p className="m-0">{x?.h4}</p>
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
                                            <div className="col " key={i}  data-aos="zoom-in">
                                                <div className="p-0 h-100">
                                                    <Link href={x?.slug} legacyBehavior >
                                                        <a>
                                                            <div className="" >
                                                                <img src={x?.image} alt="" className="w-100 h-100 rounded-3" />
                                                            </div>
                                                            <div className="px-1 px-md-3">
                                                                <h3 className="m-0">{x?.h3}</h3>
                                                                <p className="m-0">{x?.h4}</p>
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

export default Womenfourimgdiscount