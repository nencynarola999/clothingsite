import Alliconnavbar from "@/navbarcomponent/Alliconnavbar";
import { getPostApi } from "@/store/Action/PostAction";
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Col, Nav, Row, Tab } from "react-bootstrap"
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";


// {{{{{{{{{{{{{{{{{{{{comment ma che atlu karvanu jyare getserversideprops thi data levo hoi tyare direct api muki devani aano use je component ma mukyo hoi atla component purto j hoi }}}}}}}}}}}}}}}}}}}}
// getserversideprops linitation ae only pages ma j work karse pages ni bar na component ma nai


// export const getServerSideProps = async () => {
//     const res = await fetch('http://localhost:3000/post')
//     const repo = await res.json()
//     console.log('first', repo)
//     return {
//         props: {
//             data: repo
//         },
//     }
// }
const index = () => {
    // const index = ({ data }) => {
    // console.log("data--------", data)
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let backgroundimage = [
        {
            image: "/Women/womenpage/bg1.webp",
            h1: "FASHION STYLE",
            h6: "LOOK OUR PRODUCTS"
        },
        {
            image: "/Women/womenpage/bg2.webp",
            h1: "FASHION STYLE",
            h6: "LOOK OUR PRODUCTS"
        },
        {
            image: "/Women/womenpage/bg3.avif",
            h1: "FASHION STYLE",
            h6: "LOOK OUR PRODUCTS"
        },
    ]
    let extrasec = [
        {
            image: "/Women/womenpage/i1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i2.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i3.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/i4.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i5.png",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i6.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i3.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i2.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i5.png",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i6.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/i4.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },

    ]
    let kurtakurti = [
        {
            image: "/Women/womenpage/A1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/A4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let kurtasets = [
        {
            image: "/Women/womenpage/A7.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/A10.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A11.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A12.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let ethnicwear = [
        {
            image: "/Women/womenpage/A13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/A16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let topstunic = [
        {
            image: "/Women/womenpage/A19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A21.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/A22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A23.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let leggings = [
        {
            image: "/Women/womenpage/A25.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A26.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A27.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/A28.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A29.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A30.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let pantspalazzos = [
        {
            image: "/Women/womenpage/A31.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A32.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A33.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/A34.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A35.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A36.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let skirts = [
        {
            image: "/Women/womenpage/A37.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A38.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A39.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/A40.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A41.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A42.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let dupattasstoles = [
        {
            image: "/Women/womenpage/A43.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A44.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A45.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/A46.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A47.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A48.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let saree = [
        {
            image: "/Women/womenpage/A49.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A50.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A51.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/A52.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A53.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/A54.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let topstees = [
        {
            image: "/Women/womenpage/W1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/W4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let dressesjumpsuits = [
        {
            image: "/Women/womenpage/W7.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/W10.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W11.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W12.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let jeansjeggings = [
        {
            image: "/Women/womenpage/W13.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W14.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W15.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/W16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W18.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let shortsskirts = [
        {
            image: "/Women/womenpage/W19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W21.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/W22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W23.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let trousers = [
        {
            image: "/Women/womenpage/W25.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W26.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W27.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/W28.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W29.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W30.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let jacketsshrugs = [
        {
            image: "/Women/womenpage/W31.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W32.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W33.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/W34.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W35.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/W36.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let stopstees = [
        {
            image: "/Women/womenpage/S1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S2.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S3.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/S4.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S5.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S6.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let sleggings = [
        {
            image: "/Women/womenpage/S7.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S8.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S9.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/S10.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S11.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S12.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let joggerstracks = [
        {
            image: "/Women/womenpage/S13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/S16.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S17.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let sweatshirtsjackets = [
        {
            image: "/Women/womenpage/S19.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S20.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S21.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Women/womenpage/S22.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S23.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Women/womenpage/S24.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]

    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 750,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 750,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 750,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 750,
                    pauseOnHover: true
                }
            }
        ]
    }
    let logo = [
        {
            image: "/Women/womenpage/logo1.jpg",
        },
        {
            image: "/Women/womenpage/logo2.jpg",
        },
        {
            image: "/Women/womenpage/logo3.jpg",
        },
        {
            image: "/Women/womenpage/logo4.jpg",
        },
        {
            image: "/Women/womenpage/logo5.jpg",
        },
        {
            image: "/Women/womenpage/logo6.jpg",
        }
    ]
    let roundimages = [
        {
            image: "/Extrasec/extrasec1/i29.webp",
            slug: "/women/fragrances"
        },
        {
            image: "/Extrasec/extrasec1/i25.avif",
            slug: "/women/beauty"
        },
        {
            image: "/Extrasec/extrasec1/i18.avif",
            slug: "/women/footwearandbags"
        },
        {
            image: "/Extrasec/extrasec2/si3.webp",
            slug: "/women/footwearandbags"
        },
        {
            image: "/Women/womenpage/Jewellery.webp",
            slug: "/women/jewellery"
        },
        {
            image: "/Women/womenpage/watch.webp",
            slug: "/women/watches"
        }
    ]
    let imagediv = [
        {
            image: "/Women/womenpage/bggirl.jpg",
            img: "/Women/womenpage/bgi1.jpg",
            img2: "/Women/womenpage/bgi2.jpg",
            img3: "/Women/womenpage/bgi3.jpg",
            img4: "/Women/womenpage/bgi5.jpg",
            h1: "NEW",
            h12: "SALE",
            h2: "WOMEN'S",
            h3: "FOOTWEAR",
            h4: "GET UP 20% OFF",
            h5: "GET ONE FOR FREE",
            h6: "NEW ARRIVALS",
            p: "BUY 2 ITEMS",
            p2: "GET UP 50% OFF",
            button: "SHOP NOW",
        }
    ]


    return (
        <>
            <div className="container-fluid g-0">
                <div className="container g-0">
                    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-indicatorswomenpage"  >
                        {
                            backgroundimage?.map((m, i) => {
                                return (
                                    <Carousel.Item interval={100000} key={i} className="womenpage" >
                                        <div>
                                            <img src={m?.image} alt="" width="100%" />
                                            <div className="text">
                                                <h2>{m.h1}</h2>
                                                <h6>{m.h6}</h6>
                                            </div>

                                        </div>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    {/* <div className="mt-5"> */}
                    <div className="container-fluid g-0 mt-5 p-0">
                        <div className="container g-0">
                            <h3 className="Homewomen1h3 px-3">Top Categories</h3>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="athleticsextra">
                                <div className="row p-0  mt-5 h-100 womenpagemaindiv">
                                    <div className="col-4 col-md-3 col-lg-2  womenpagesubdiv1 px-0">
                                        <div className="h-100 ">
                                            <div className="womenpagesideheadingset">
                                                <h4>Ethnic & Fusion Wear</h4>
                                                <Nav.Link eventKey="athleticsfirst">
                                                    <h6 className="px-3">Kurtas & Kurtis</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="athleticssecond">
                                                    <h6 className="px-3">Kurta Sets</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="athleticsthird">
                                                    <h6 className="px-3">Ethnic Dresses</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="athleticsforth">
                                                    <h6 className="px-3">Tops & Tunics</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="athleticsfifth">
                                                    <h6 className="px-3">Leggings & Churidars</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="athleticssixth">
                                                    <h6 className="px-3">Pants & Palazzos</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="athleticsseventh">
                                                    <h6 className="px-3">Skirts</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="athleticseighth">
                                                    <h6 className="px-3">Dupattas & Stoles</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="athleticsninth">
                                                    <h6 className="px-3">Saree</h6>
                                                </Nav.Link>
                                            </div>
                                            <div className="womenpagesideheadingset">
                                                <h4>Western Wear</h4>
                                                <Nav.Link eventKey="westernwearfirst">
                                                    <h6 className="px-3">Tops & Tees</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="westernwearsecond">
                                                    <h6 className="px-3">Dresses & Jumpsuits</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="westernwearthird">
                                                    <h6 className="px-3">Jeans & Jeggings</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="westernwearforth">
                                                    <h6 className="px-3">Shorts & Skirts</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="westernwearfifth">
                                                    <h6 className="px-3">Trousers</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="westernwearsixth">
                                                    <h6 className="px-3">Jackets & Shrugs</h6>
                                                </Nav.Link>
                                            </div>
                                            <div className="womenpagesideheadingset">
                                                <h4>Sports  Wear</h4>
                                                <Nav.Link eventKey="sportswearfirst">
                                                    <h6 className="px-3">Tops & Tees</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="sportswearsecond">
                                                    <h6 className="px-3">Leggings</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="sportswearthird">
                                                    <h6 className="px-3">Joggers & Tracks</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="sportswearforth">
                                                    <h6 className="px-3">Sweatshirts & Jackets</h6>
                                                </Nav.Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 col-md-9 col-lg-10  womenpagesubdiv2 px-0">
                                        <div className=" h-100">
                                            <Tab.Content>
                                                <Tab.Pane eventKey="athleticsextra">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4 ">
                                                        {
                                                            extrasec?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className="p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 " />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center ">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="athleticsfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            kurtakurti?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/ethnicfusion/kurtaandkurtis"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="athleticssecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            kurtasets?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/ethnicfusion/kurtasets"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="athleticsthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            ethnicwear?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/ethnicfusion/ethnicdresses"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="athleticsforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            topstunic?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/ethnicfusion/topsandtunics"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="athleticsfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {leggings?.map((x, i) => {
                                                            return (
                                                                <div className="col p-3 m-0" key={i}>
                                                                    <div className="imagedivborder h-100">
                                                                        <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                            <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                                        </div>
                                                                        <div className="imagetext">
                                                                            <h4 className="mt-2 px-2">{x?.name}</h4>
                                                                            <div className="m-auto d-flex justify-content-center">
                                                                                <div className="me-3 h5">{x?.cutprice}</div>
                                                                                <h5>{x?.price}</h5>
                                                                            </div>
                                                                        </div>
                                                                        <Link href={"/women/ethnicfusion/leggingsandchuridars"}>  <button>{x?.button}</button></Link>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="athleticssixth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            pantspalazzos?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/ethnicfusion/pantsandpalazzos"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="athleticsseventh">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            skirts?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/ethnicfusion/skirts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="athleticseighth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            dupattasstoles?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/ethnicfusion/dupattasandstoles"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="athleticsninth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            saree?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/ethnicfusion/saree"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="westernwearfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            topstees?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/westernwear/topsandtees"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="westernwearsecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            dressesjumpsuits?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/westernwear/dressesandjumpsuits"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="westernwearthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            jeansjeggings?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/westernwear/jeansandjeggings"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="westernwearforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            shortsskirts?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/westernwear/shortsandskirts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="westernwearfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            trousers?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/westernwear/trousers"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="westernwearsixth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            jacketsshrugs?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/westernwear/jacketsandshrugs"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sportswearfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            stopstees?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/sportswear/topstees"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sportswearsecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            sleggings?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/sportswear/leggings"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sportswearthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            joggerstracks?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/sportswear/joggersandtracks"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sportswearforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            sweatshirtsjackets?.map((x, i) => {
                                                                return (

                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/women/sportswear/sweatshirtsandjackets"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content >
                                        </div >
                                    </div >
                                </div >
                            </Tab.Container >
                        </div >
                    </div >



                    {/* </div> */}
                </div>
            </div>
            <div className="container-fluid  g-0  mt-5 womenpageroundsec">
                <div className="container py-4 g-0">
                    <h3 className="womenpageroundsech3 px-3">Accessories</h3>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 mt-5 ">
                        {
                            roundimages.map((x, i) => {
                                return (
                                    <div className="col p-3 d-flex justify-content-center" data-aos="zoom-in" key={i}>
                                        <div className="p-3 womenpageroundmaindiv"  >
                                            <Link href={`${x.slug}`}>
                                                <img src={x?.image} alt="" className=" img-fluid" />

                                            </Link>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 womenpagelogosec mt-5">
                <div className="container g-0">
                    <Slider {...settings} className=" slidermaindiv" style={{ overflow: "hidden" }}>
                        {
                            logo?.map((x, i) => {
                                return (
                                    <div className="slidersubdiv" key={i}>
                                        <div className=" slidersubdiv1">
                                            <div className="">
                                                <img src={x?.image} alt="" className="w-50 h-100 object-fit-contain" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0">
                    {/* <div className="border"> */}
                    {
                        imagediv?.map((x, i) => {
                            return (
                                <div key={i}>
                                    <div className="row h-100 g-0" >
                                        <div className="col-8 p-1 p-md-2 p-lg-3">
                                            <div className=" h-100 womensiximage">
                                                <img src={x?.image} alt="" width="100%" className="img-fluid object-fit-cover " />
                                                <div className="womensiximageh1">
                                                    <div className="m-0 womensiximageh1text">{x?.h1}</div>
                                                    <h4 className="m-0">{x?.h4}</h4>
                                                    <Link href="" className="m-0"> <button>{x?.button}</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 p-1 p-md-2 p-lg-3 ">
                                            <div className="row h-100 py-0 g-0 d-flex align-content-between">
                                                <div className="col-12 p-0">
                                                    <div className="h-100 womensiximage">
                                                        <img src={x?.img} alt="" width="100%" className="img-fluid object-fit-cover" />
                                                        <div className="womensiximageh1">
                                                            <h6 className="m-0">{x?.h6}</h6>
                                                            <h2 className="m-0">{x?.h2}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 p-0">
                                                    <div className="h-100 womensiximage">
                                                        <img src={x?.img2} alt="" width="100%" className="img-fluid object-fit-cover" />
                                                        <div className="womensiximageh1">
                                                            <h6 className="m-0">{x?.h6}</h6>
                                                            <h2 className="m-0">{x?.h2}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-3 g-0 p-0 h-100">
                                        <div className="col p-1 p-md-2 p-lg-3">
                                            <div className=" h-100 bg-black womensiximage">
                                                <div className="womensiximageh1">

                                                    <div className="m-0 womensiximageh1text">{x?.h12}</div>
                                                    <p className="m-0">{x?.p2}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col p-1 p-md-2 p-lg-3">
                                            <div className=" h-100 womensiximage border">
                                                <img src={x?.img3} alt="" width="100%" className="img-fluid object-fit-cover" />
                                                <div className="womensiximageh1">
                                                    <p className="m-0">{x?.p}</p>
                                                    <h5 className="m-0">{x?.h5}</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col p-1 p-md-2 p-lg-3">
                                            <div className=" h-100 womensiximage">
                                                <img src={x?.img4} alt="" width="100%" className="img-fluid object-fit-cover" />
                                                <div className="womensiximageh1">
                                                    <h6 className="m-0">{x?.h6}</h6>
                                                    <h3 className="m-0">{x?.h3}</h3>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default index