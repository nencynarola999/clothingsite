import Alliconnavbar from "@/navbarcomponent/Alliconnavbar";
import Link from "next/link"
import React, { useState } from "react"
import { Col, Nav, Row, Tab } from "react-bootstrap"
import { Carousel } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { GiEmeraldNecklace } from "react-icons/gi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { SlSupport } from "react-icons/sl";
import Slider from "react-slick";

const index = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let backgroundimage = [
        {
            image: "/Men/menpage/bgwhite.avif",
            class: "menpagetext",
            imgclass: "imgsetdiv",
            h6: "DRESS IN",
            h1: "FASHION STYLE",
            h5: "WITH OUR EXCLUSIVE",
            h4: "MEN'S COLLECTION",
            firstclass: "menpagefirstclass",
            smalltext: "smalltext",
            bigtext: "bigtext"
        },
        {
            image: "/Men/menpage/bg2.avif",
            h6: "DRESS IN",
            h1: "FASHION STYLE",
            h5: "WITH OUR EXCLUSIVE",
            h4: "MEN'S COLLECTION",
            firstclass: "menpagefirstclass",
            smalltext: "smalltext",
            bigtext: "bigtext"
        },
        {
            image: "/Men/menpage/bg3.avif",
            h2: "EXPRESS YOUR",
            h3: "TRUE STYLES",
            thirdclass: "menpagethirdclass",
            smalltext2: "smalltext2",
            bigtext2: "bigtext2"
        },
    ]
    let menextra = [
        {
            image: "/Men/menpage/Ti1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Bi8.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si5.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi21.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si24.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti17.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti25.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let casualshirts = [
        {
            image: "/Men/menpage/Ti1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Ti4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let formalshirts = [
        {
            image: "/Men/menpage/Ti7.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Ti10.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti11.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti12.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let polos = [
        {
            image: "/Men/menpage/Ti13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Ti16.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti17.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let tshirts = [
        {
            image: "/Men/menpage/Ti19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti21.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Ti22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti23.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let jackets = [
        {
            image: "/Men/menpage/Ti25.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti26.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti27.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Ti28.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti29.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti30.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let hoodiessweatshirts = [
        {
            image: "/Men/menpage/Ti31.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti32.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti33.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Ti34.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti35.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Ti36.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let casualtrousers = [
        {
            image: "/Men/menpage/Bi1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Bi4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let formaltrousers = [
        {
            image: "/Men/menpage/Bi7.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi8.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi9.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Bi10.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi11.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi12.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let jeans = [
        {
            image: "/Men/menpage/Bi13.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi14.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi15.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Bi16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi17.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let trackpants = [
        {
            image: "/Men/menpage/Bi19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi21.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Bi22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi23.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let shorts = [
        {
            image: "/Men/menpage/Bi25.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi26.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi27.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Bi28.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi29.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Bi30.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let roundwatch = [
        {
            image: "/Men/menpage/Wi1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi2.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi3.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Wi4.jpeg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi5.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi6.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let analog = [
        {
            image: "/Men/menpage/Wi7.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi8.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi9.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Wi10.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi11.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi12.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
    ]
    let automatic = [
        {
            image: "/Men/menpage/Wi13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Wi16.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi17.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let chronograph = [
        {
            image: "/Men/menpage/Wi19.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi20.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi21.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Wi22.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi23.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi24.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let multifunction = [
        {
            image: "/Men/menpage/Wi25.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi26.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi27.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Wi28.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi29.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi30.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let smart = [
        {
            image: "/Men/menpage/Wi31.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi32.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi33.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Wi34.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi35.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi36.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let fitnesstrackers = [
        {
            image: "/Men/menpage/Wi37.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi38.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi39.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Wi40.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi41.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Wi42.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let aviator = [
        {
            image: "/Men/menpage/SGi1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi2.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi3.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/SGi4.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi5.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi6.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let wayfarer = [
        {
            image: "/Men/menpage/SGi7.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi8.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi9.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/SGi10.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi11.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi12.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let square = [
        {
            image: "/Men/menpage/SGi13.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi14.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi15.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/SGi16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi18.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let sporty = [
        {
            image: "/Men/menpage/SGi19.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi20.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi21.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/SGi22.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi23.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi24.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let rectangle = [
        {
            image: "/Men/menpage/SGi25.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi26.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi27.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/SGi28.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi29.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi30.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let round = [
        {
            image: "/Men/menpage/SGi31.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi32.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi33.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/SGi34.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi35.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/SGi36.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let loafersmoccasin = [
        {
            image: "/Men/menpage/Si1.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si2.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si3.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Si4.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si5.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si6.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let slipons = [
        {
            image: "/Men/menpage/Si7.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si8.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si9.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Si10.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si11.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si12.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let sportsshoessneakers = [
        {
            image: "/Men/menpage/Si13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Si16.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si17.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let laceup = [
        {
            image: "/Men/menpage/Si19.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si20.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si21.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Si22.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si23.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si24.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let slippersandsliders = [
        {
            image: "/Men/menpage/Si25.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si26.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si27.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Si28.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si29.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si30.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let floaterssandals = [
        {
            image: "/Men/menpage/Si31.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si32.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si33.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Si34.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si35.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si36.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    let boots = [
        {
            image: "/Men/menpage/Si37.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si38.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si39.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540"
        },
        {
            image: "/Men/menpage/Si40.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si41.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        },
        {
            image: "/Men/menpage/Si42.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340"
        }
    ]
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    pauseOnHover: true
                }
            }
        ]
    }
    let sliderimage = [
        {
            image: "/Men/menpage/bgi1.jpg",
            h1: "Lightweight jackets",
            h5: "Shop All"
        },
        {
            image: "/Men/menpage/bgi2.jpg",
            h1: "Accessories",
            h5: "Shop All"
        },
        {
            image: "/Men/menpage/bgi3.jpg",
            h1: "Men's jackets",
            h5: "Shop All"
        },
        {
            image: "/Men/menpage/bgi4.jpg",
            h1: "Shirts",
            h5: "Shop All"
        }
    ]
    let roundimages = [
        {
            image: "/Men/menpage/fragrances.webp",
            h4: "Fragrances",
            p: "lorem ipsum dolor sit amet consectetur",
            icon: <AiOutlineHeart />,
            h6: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus!: "
        },
        {
            image: "/Men/menpage/jewellery.webp",
            h4: "Jewellery",
            p: "lorem ipsum dolor sit amet consectetur",
            icon: <GiEmeraldNecklace />,
            h6: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus!: "
        },
        {
            image: "/Men/menpage/beauty.webp",
            h4: "Beauty",
            p: "lorem ipsum dolor sit amet consectetur",
            icon: <SlSupport />,
            h6: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus!: "
        }
    ]
    let threeimg = [
        {
            h1: "hi",
            image: "/Men/menpage/threeimg1.avif",
            threefirstimgdivset: "threefirstimgdivset"
        },
        {
            h1: "hi",
            image: "/Men/menpage/threeimg2.jpg"
        },
        {
            h1: "hi",
            image: "/Men/menpage/threeimg4.avif",
            threelastimgdivset: "threelastimgdivset",
            perfect: "Perfect Summer Style",
            tops: "Tops up to",
            off: "off",
            span: "60%",
            discover: "Dicover,new,fantastic deals every day!",
            shopnow: "Shop Now"
        }
    ]
    return (
        <>
            <div className="container-fluid g-0">
                <div className="container g-0">
                    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-indicatorsmenpage"  >
                        {
                            backgroundimage?.map((m, i) => {
                                return (
                                    <Carousel.Item interval={100000} key={i} className="menpage h-100 w-100" >
                                        <div style={{ width: "100%" }}>
                                            <img src={m?.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
                                            <div className={m?.class}>
                                                <div className={m?.imgclass}></div>
                                            </div>
                                            <div className={m?.firstclass}>
                                                <div className={m?.smalltext}>{m?.h6}</div>
                                                <div className={m?.bigtext}>{m?.h1}</div>
                                                <div className={m?.smalltext}>{m?.h5}</div>
                                                <div className={m?.smalltext}>{m?.h4}</div>
                                            </div>
                                            <div className={m?.thirdclass}>
                                                <div className={m?.bigtext2}>{m?.h2}</div>
                                                <div className={m?.smalltext2}>{m?.h3}</div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    <div className="container-fluid g-0 mt-5 p-0">
                        <div className="container g-0">
                            <h3 className="Homewomen1h3 px-3">Top Categories</h3>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="menextra">
                                <div className="row p-0  mt-5 h-100 womenpagemaindiv">
                                    <div className="col-4 col-md-3 col-lg-2  womenpagesubdiv1 px-0">
                                        <div className="h-100 ">
                                            <div className="womenpagesideheadingset">
                                                <h4>Top Wear</h4>
                                                <Nav.Link eventKey="topfirst">
                                                    <h6 className="px-3">Casual Shirts</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="topsecond">
                                                    <h6 className="px-3">Formal Shirts</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="topthird">
                                                    <h6 className="px-3">Polos</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="topforth">
                                                    <h6 className="px-3">T-Shirts</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="topfifth">
                                                    <h6 className="px-3">Jackets</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="topsixth">
                                                    <h6 className="px-3">Hoodies & Sweatshirts</h6>
                                                </Nav.Link>
                                            </div>
                                            <div className="womenpagesideheadingset">
                                                <h4>Bottom Wear</h4>
                                                <Nav.Link eventKey="bottomfirst">
                                                    <h6 className="px-3">Casual Trousers</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="bottomsecond">
                                                    <h6 className="px-3">Formal Trousers</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="bottomthird">
                                                    <h6 className="px-3">Jeans</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="bottomforth">
                                                    <h6 className="px-3">Track Pants</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="bottomfifth">
                                                    <h6 className="px-3">Shorts & 3/4ths</h6>
                                                </Nav.Link>
                                            </div>
                                            <div className="womenpagesideheadingset">
                                                <h4>Watches</h4>
                                                <Nav.Link eventKey="watchesfirst">
                                                    <h6 className="px-3">Round watches</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="watchessecond">
                                                    <h6 className="px-3">Analog watches</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="watchesthird">
                                                    <h6 className="px-3">Automatic watches</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="watchesforth">
                                                    <h6 className="px-3">Chronograph watches</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="watchesfifth">
                                                    <h6 className="px-3">Multi Function watches</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="watchessixth">
                                                    <h6 className="px-3">Smart watches</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="watchesseventh">
                                                    <h6 className="px-3">Fitness trackers</h6>
                                                </Nav.Link>
                                            </div>
                                            <div className="womenpagesideheadingset">
                                                <h4>Sunglasses</h4>
                                                <Nav.Link eventKey="sunglassesfirst">
                                                    <h6 className="px-3">Aviator</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="sunglassessecond">
                                                    <h6 className="px-3">Wayfarer</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="sunglassesthird">
                                                    <h6 className="px-3">Square</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="sunglassesforth">
                                                    <h6 className="px-3">Sporty</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="sunglassesfifth">
                                                    <h6 className="px-3">Rectangle</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="sunglassessixth">
                                                    <h6 className="px-3">Round</h6>
                                                </Nav.Link>
                                            </div>
                                            <div className="womenpagesideheadingset">
                                                <h4>Shoes</h4>
                                                <Nav.Link eventKey="shoesfirst">
                                                    <h6 className="px-3">Loafers & Moccasin</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="shoessecond">
                                                    <h6 className="px-3">Slip-Ons</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="shoesthird">
                                                    <h6 className="px-3">Sports Shoes & Sneakers</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="shoesforth">
                                                    <h6 className="px-3">Lace up</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="shoesfifth">
                                                    <h6 className="px-3">Slippers and Sliders</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="shoessixth">
                                                    <h6 className="px-3">Floaters & Sandals</h6>
                                                </Nav.Link>
                                                <Nav.Link eventKey="shoesseventh">
                                                    <h6 className="px-3">Boots</h6>
                                                </Nav.Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 col-md-9 col-lg-10  womenpagesubdiv2 px-0">
                                        <div className=" h-100">
                                            <Tab.Content>
                                                <Tab.Pane eventKey="menextra">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4 ">
                                                        {
                                                            menextra?.map((x, i) => {
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
                                                                            <Link href={"/men"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="topfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            casualshirts?.map((x, i) => {
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
                                                                            <Link href={"/men/topwear/casualshirts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="topsecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            formalshirts?.map((x, i) => {
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
                                                                            <Link href={"/men/topwear/formalshirts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="topthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            polos?.map((x, i) => {
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
                                                                            <Link href={"/men/topwear/polos"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="topforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            tshirts?.map((x, i) => {
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
                                                                            <Link href={"/men/topwear/tshirts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="topfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            jackets?.map((x, i) => {
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
                                                                            <Link href={"/men/topwear/jackets"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="topsixth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            hoodiessweatshirts?.map((x, i) => {
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
                                                                            <Link href={"/men/topwear/hoodiesandsweatshirts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="bottomfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            casualtrousers?.map((x, i) => {
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
                                                                            <Link href={"/men/bottomwear/casualtrousers"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="bottomsecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            formaltrousers?.map((x, i) => {
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
                                                                            <Link href={"/men/bottomwear/formaltrousers"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="bottomthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            jeans?.map((x, i) => {
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
                                                                            <Link href={"/men/bottomwear/jeans"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="bottomforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            trackpants?.map((x, i) => {
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
                                                                            <Link href={"/men/bottomwear/trackpants"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="bottomfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            shorts?.map((x, i) => {
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
                                                                            <Link href={"/men/bottomwear/shorts"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="watchesfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            roundwatch?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/watches/roundwatches"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="watchessecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            analog?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/watches/analogwatches"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="watchesthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            automatic?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/watches/automaticwatches"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="watchesforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            chronograph?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/watches/chronographwatches"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="watchesfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            multifunction?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/watches/multifunctionwatches"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="watchessixth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            smart?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/watches/smartwatches"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="watchesseventh">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            fitnesstrackers?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/watches/fitnesstrackers"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sunglassesfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            aviator?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/sunglasses/aviator"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sunglassessecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            wayfarer?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/sunglasses/wayfarer"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sunglassesthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            square?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/sunglasses/square"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sunglassesforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            sporty?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-50 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/sunglasses/sporty"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sunglassesfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            rectangle?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/sunglasses/rectangle"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sunglassessixth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            round?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/sunglasses/round"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="shoesfirst">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            loafersmoccasin?.map((x, i) => {
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
                                                                            <Link href={"/men/shoes/loafersandmoccasin"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="shoessecond">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            slipons?.map((x, i) => {
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
                                                                            <Link href={"/men/shoes/slipons"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="shoesthird">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            sportsshoessneakers?.map((x, i) => {
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
                                                                            <Link href={"/men/shoes/sportsshoesandsneakers"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="shoesforth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            laceup?.map((x, i) => {
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
                                                                            <Link href={"/men/shoes/laceup"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="shoesfifth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            slippersandsliders?.map((x, i) => {
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
                                                                            <Link href={"/men/shoes/slippersandsliders"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="shoessixth">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            floaterssandals?.map((x, i) => {
                                                                return (
                                                                    <div className="col p-3 m-0" key={i}>
                                                                        <div className=" p-2 imagedivborder h-100">
                                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                                <img src={x?.image} alt="" className="img-fluid w-75 m-auto h-75" />
                                                                            </div>
                                                                            <div className=" imagetext">
                                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                                <div className="m-auto d-flex justify-content-center">
                                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                                    <h5 >{x?.price}</h5>
                                                                                </div>
                                                                            </div>
                                                                            <Link href={"/men/shoes/floatersandsandals"}>  <button>{x?.button}</button></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="shoesseventh">
                                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                        {
                                                            boots?.map((x, i) => {
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
                                                                            <Link href={"/men/shoes/boots"}>  <button>{x?.button}</button></Link>
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
            <div className="container-fluid  g-0  mt-5 menpageblacksec">
                <div className="container py-4 g-0 px-3 px-md-0">
                    <h3 className="menpageblacksech3 m-0">Accessories</h3>
                    <p className="menpageblacksecp m-0">Lorem ipsum dolor sit amet consectetur</p>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 mt-5 ">
                        {
                            roundimages.map((x, i) => {
                                return (
                                    <div className="col p-3" key={i}>
                                        <div className="p-3 menicondivset">
                                            <div className="menicon mb-3">{x?.icon}</div>
                                            <h4>{x?.h4}</h4>
                                            <p>{x?.p}</p>
                                            <img src={x?.image} alt="" width="100%" height="250px" className="rounded-2" />
                                            <p className="p-3 px-5">{x?.h6}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0">
                    <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 h-100" >
                        {
                            threeimg?.map((x, i) => {
                                return (
                                    <div className="col p-3" key={i}>
                                        <div className="h-100 w-100 menthreeimgdiv">
                                            <div className="menthreeimage">
                                                <img src={x?.image} alt="" className=" object-fit-cover" height="100%" width="100%" />
                                                <div className={x?.threefirstimgdivset}></div>
                                                <div className={x?.threelastimgdivset}>
                                                    <div className="d-flex flex-column justify-content-around">
                                                        <h5 className="text-black">{x?.perfect}</h5>
                                                        <span className="d-flex flex-column text-center">
                                                            <h1>{x?.tops}<span className="display-3 text-danger fw-semibold">{x?.span}</span>{x?.off}</h1>
                                                            <h5>{x?.discover}</h5>
                                                        </span>
                                                        <Link href="" className="mb-5">{x?.shopnow}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 menpagesliderdiv">
                <div className="container g-0 p-5">
                    <Slider {...settings} className=" menslidermaindiv" style={{ overflow: "hidden" }}>
                        {
                            sliderimage?.map((x, i) => {
                                return (
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-3 h-100 menslidersubdiv w-50 m-auto " key={i}>
                                        <div className="col menslidersubdiv1">
                                            <div className="p-4  px-lg-4 h-100 bg-white">
                                                <div className="d-flex">
                                                    <h6></h6>
                                                    <h1>{x?.h1}</h1>
                                                </div>
                                                <Link href=""><h5 >{x?.h5} <MdOutlineKeyboardDoubleArrowRight /></h5></Link>
                                                <div className="d-flex justify-content-center align-items-center mt-4">
                                                    <img src={x?.image} alt="" className="img-fluid" height="100%" width="100%" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div >
            </div >
        </>
    )
}
export default index