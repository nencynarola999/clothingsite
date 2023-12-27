import Link from "next/link";
import React, { useState } from "react"
import { Carousel, Nav, Tab } from "react-bootstrap";

const index = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let backgroundimage = [
        {
            image: "/Kids/kidspage/bgi1.avif",
            h1: "BEST KIDS WEAR",
            firstclass: "kidspagefirstclass",
            // smalltext: "smalltext",
            bigtext: "bigtext1"
        },
        {
            image: "/Kids/kidspage/bgi2.avif",
            h1: "BEST KIDS WEAR",
            firstclass: "kidspagesecondclass",
            // smalltext: "smalltext2",
            bigtext: "bigtext2"
        },
        {
            image: "/Kids/kidspage/bgi3.avif",
            h1: "BEST KIDS WEAR",
            firstclass: "kidspagethirdclass",
            // smalltext: "smalltext3",
            bigtext: "bigtext3"
        }
    ]
    let kidsextra = [
        {
            image: "/Kids/kidspage/Bi1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai10.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Gi9.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai3.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi7.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi1.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai28.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai21.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai26.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi25.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi30.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let btshirtsandpolos = [
        {
            image: "/Kids/kidspage/Bi1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Bi4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let bshirts = [
        {
            image: "/Kids/kidspage/Bi7.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi8.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi9.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Bi10.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi11.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi12.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let bjeans = [
        {
            image: "/Kids/kidspage/Bi13.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi14.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi15.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Bi16.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let bshorts = [
        {
            image: "/Kids/kidspage/Bi19.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi20.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi21.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Bi22.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi23.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi24.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let btrackpantsandjoggers = [
        {
            image: "/Kids/kidspage/Bi25.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi26.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi27.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Bi28.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi29.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi30.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let bsweatshirtsandhoodies = [
        {
            image: "/Kids/kidspage/Bi31.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi32.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi33.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Bi34.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi35.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi36.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let bpants = [
        {
            image: "/Kids/kidspage/Bi37.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi38.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi39.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Bi40.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi41.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi42.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let bjacketsandwaistcoat = [
        {
            image: "/Kids/kidspage/Bi43.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi44.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi45.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Bi46.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi47.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi48.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let bethnicwear = [
        {
            image: "/Kids/kidspage/Bi49.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi50.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi51.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Bi52.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi53.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Bi54.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let gtopsandtees = [
        {
            image: "/Kids/kidspage/Gi1.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi2.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi3.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Gi4.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi5.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi6.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let gdressesandjumpsuits = [
        {
            image: "/Kids/kidspage/Gi7.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi8.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi9.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Gi10.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi11.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi12.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let gclothingsets = [
        {
            image: "/Kids/kidspage/Gi13.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi14.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi15.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Gi16.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi17.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi18.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let gjeans = [
        {
            image: "/Kids/kidspage/Gi19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi20.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi21.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Gi22.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi23.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi24.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let gknitbottoms = [
        {
            image: "/Kids/kidspage/Gi25.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi26.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi27.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Gi28.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi29.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi30.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let gshortsandskirts = [
        {
            image: "/Kids/kidspage/Gi31.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi32.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi33.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Gi34.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi35.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi36.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let gtrackpantsandjoggers = [
        {
            image: "/Kids/kidspage/Gi37.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi38.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi39.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Gi40.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi41.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi42.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let gethnicwear = [
        {
            image: "/Kids/kidspage/Gi43.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi44.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi45.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Gi46.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi47.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Gi48.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let kidssunglasses = [
        {
            image: "/Kids/kidspage/Ai1.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai2.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai3.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Ai4.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai5.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai6.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let kidswatches = [
        {
            image: "/Kids/kidspage/Ai7.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai8.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai9.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Ai10.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai11.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai12.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let capsandhats = [
        {
            image: "/Kids/kidspage/Ai13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Ai16.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai17.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let shopboysfootwear = [
        {
            image: "/Kids/kidspage/Ai19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai20.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai21.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Ai22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai23.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai24.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let shopgirlsfootwear = [
        {
            image: "/Kids/kidspage/Ai25.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai26.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai27.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Kids/kidspage/Ai28.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai29.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Kids/kidspage/Ai30.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    return (
        <>
            <div className="container-fluid g-0">
                <div className="container g-0 p-0">
                    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-indicatorskidspage"  >
                        {
                            backgroundimage?.map((m, i) => {
                                return (
                                    <Carousel.Item interval={100000} key={i} className="kidspage" >
                                        <div>
                                            <img src={m?.image} alt="" width="100%" height="100%" className="img-fluid" />
                                            <div className={m?.firstclass}>
                                                <div className={m?.bigtext}>{m?.h1}</div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    <div className="container-fluid g-0 mt-5 p-0">
                        <div className="container g-0 p-0">
                            <h3 className="Homewomen1h3 px-3">Top Categories</h3>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="kidsextra">
                                <div className="row p-0  mt-5 h-100 womenpagemaindiv">
                                    <div className="col-4 col-md-3 col-lg-2  womenpagesubdiv1 px-0">
                                        <div className="h-100 ">
                                            <div className="womenpagesideheadingset">
                                                <h4>Boys Collection</h4>
                                                <Nav.Link eventKey="boysfirst">
                                                    <h6 className="px-3">T-Shirts/Polos</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="boyssecond">
                                                    <h6 className="px-3">Shirts</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="boysthird">
                                                    <h6 className="px-3">Jeans</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="boysforth">
                                                    <h6 className="px-3">Shorts</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="boysfifth">
                                                    <h6 className="px-3">Trackpants & Joggers</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="boyssixth">
                                                    <h6 className="px-3">Sweatshirts & hoodies</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="boysseventh">
                                                    <h6 className="px-3">Pants</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="boyseighth">
                                                    <h6 className="px-3">Jackets & Waistcoat</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="boysninth">
                                                    <h6 className="px-3">Ethnic Wear</h6>
                                                </Nav.Link>
                                            </div>
                                            <div className="womenpagesideheadingset">
                                                <h4>Girls Collection</h4>
                                                <Nav.Link eventKey="girlsfirst">
                                                    <h6 className="px-3">Tops & Tees</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="girlssecond">
                                                    <h6 className="px-3">Dresses/ Jumpsuits</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="girlsthird">
                                                    <h6 className="px-3">Clothing Sets</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="girlsforth">
                                                    <h6 className="px-3">Jeans</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="girlsfifth">
                                                    <h6 className="px-3">Knit Bottoms</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="girlssixth">
                                                    <h6 className="px-3">Shorts & Skirts</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="girlsseventh">
                                                    <h6 className="px-3">TrackPants/ Joggers</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="girlseighth">
                                                    <h6 className="px-3">Ethnic Wear</h6>
                                                </Nav.Link>
                                            </div>
                                            <div className="womenpagesideheadingset">
                                                <h4>Accessories</h4>
                                                <Nav.Link eventKey="accessoriesfirst">
                                                    <h6 className="px-3">Kids Sunglasses</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="accessoriessecond">
                                                    <h6 className="px-3">Kids Watches</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="accessoriesthird">
                                                    <h6 className="px-3">Caps & Hats</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="accessoriesforth">
                                                    <h6 className="px-3">Shop Boys Footwear</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="accessoriesfifth">
                                                    <h6 className="px-3">Shop Girls Footwear</h6>
                                                </Nav.Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 col-md-9 col-lg-10  womenpagesubdiv2 px-0">
                                        <div className=" h-100">
                                            <Tab.Content>
                                                <Tab.Pane eventKey="kidsextra">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4 ">
                                                        {
                                                            kidsextra?.map((x, i) => {
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
                                                                            <Link href={"/kids"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="boysfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            btshirtsandpolos?.map((x, i) => {
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
                                                                            <Link href={"/kids/boys/tshirtsandpolos"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="boyssecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            bshirts?.map((x, i) => {
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
                                                                            <Link href={"/kids/boys/shirts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="boysthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            bjeans?.map((x, i) => {
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
                                                                            <Link href={"/kids/boys/jeans"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="boysforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            bshorts?.map((x, i) => {
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
                                                                            <Link href={"/kids/boys/shorts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="boysfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            btrackpantsandjoggers?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className="imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2 px-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/kids/boys/trackpantsandjoggers"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="boyssixth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            bsweatshirtsandhoodies?.map((x, i) => {
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
                                                                            <Link href={"/kids/boys/sweatshirtsandhoodies"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="boysseventh">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            bpants?.map((x, i) => {
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
                                                                            <Link href={"/kids/boys/pants"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="boyseighth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            bjacketsandwaistcoat?.map((x, i) => {
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
                                                                            <Link href={"/kids/boys/jacketsandwaistcoat"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="boysninth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            bethnicwear?.map((x, i) => {
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
                                                                            <Link href={"/kids/boys/ethnicwear"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="girlsfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            gtopsandtees?.map((x, i) => {
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
                                                                            <Link href={"/kids/girls/topsandtees"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="girlssecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            gdressesandjumpsuits?.map((x, i) => {
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
                                                                            <Link href={"/kids/girls/dressesandjumpsuits"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="girlsthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            gclothingsets?.map((x, i) => {
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
                                                                            <Link href={"/kids/girls/clothingsets"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="girlsforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            gjeans?.map((x, i) => {
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
                                                                            <Link href={"/kids/girls/jeans"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="girlsfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            gknitbottoms?.map((x, i) => {
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
                                                                            <Link href={"/kids/girls/knitbottoms"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="girlssixth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            gshortsandskirts?.map((x, i) => {
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
                                                                            <Link href={"/kids/girls/shortsandskirts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="girlsseventh">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            gtrackpantsandjoggers?.map((x, i) => {
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
                                                                            <Link href={"/kids/girls/trackpantsandjoggers"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="girlseighth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            gethnicwear?.map((x, i) => {
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
                                                                            <Link href={"/kids/girls/ethnicwear"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="accessoriesfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            kidssunglasses?.map((x, i) => {
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
                                                                            <Link href={"/kids/accessories/kidssunglasses"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="accessoriessecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            kidswatches?.map((x, i) => {
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
                                                                            <Link href={"/kids/accessories/kidswatches"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="accessoriesthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            capsandhats?.map((x, i) => {
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
                                                                            <Link href={"/kids/accessories/capsandhats"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="accessoriesforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            shopboysfootwear?.map((x, i) => {
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
                                                                            <Link href={"/kids/shopboysfootwear"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="accessoriesfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            shopgirlsfootwear?.map((x, i) => {
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
                                                                            <Link href={"/kids/shopgirlsfootwear"}>  <button>{x?.button}</button></Link>
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
                </div>
            </div>
            <div className="container-fluid g-0 mt-5">
                <div className="container p-0">
                    <div className="row h-100 g-0">
                        <div className="col-8 p-1 p-md-2">
                            <div className="border h-100">
                                <div className="row g-0">
                                    <div className="col-6  p-1 p-md-2 p-lg-3">
                                        <div className="border h-100">
                                            <img src="/Kids/kidspage/kid1.jpg" alt="" width="100%" height="100%" className="object-fit-cover" />
                                        </div>
                                    </div>
                                    <div className="col-6  p-1 p-md-2 p-lg-3">
                                        <div className="border h-100">
                                            <img src="/Kids/kidspage/kid2.jpg" alt="" width="100%" height="100%" className="object-fit-cover" />

                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-6  p-1 p-md-2 p-lg-3">
                                        <div className="border h-100">
                                            <img src="/Kids/kidspage/kid3.jpg" alt="" width="100%" height="100%" className="object-fit-cover" />

                                        </div>
                                    </div>
                                    <div className="col-6  p-1 p-md-2 p-lg-3">
                                        <div className="border h-100">
                                            <img src="/Kids/kidspage/kid4.jpg" alt="" width="100%" height="100%" className="object-fit-cover" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 p-1 p-md-2 ">
                            <div className="border p-1 p-md-2 h-100 kidspagetext">
                                <h1>BEST </h1>
                                <h3>CHILDREN"S CLOTHES</h3>
                                <h2>COLLLECTION</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index