import React, { useState } from "react"
import { Nav, Tab } from "react-bootstrap"
import { FaRegCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
const Jewellery = () => {
    const [activeChild, setActiveChild] = useState(0);

    const handleChildClick = (index) => {
        setActiveChild(index);
    };
    let bgarray = [
        {
            img: "/Women/womenslug/Jewellery/bgi1.webp",
            h21: "Jesebelle",
            h22: "Collection"
        },
        {
            img: "/Women/womenslug/Jewellery/bgi2.webp",
            h21: "Diadora Jewelry",
            h22: "Collection"
        },
    ]
    let array = [
        {
            img: "/Women/womenslug/Jewellery/i1.webp",
            h3: "Golden Age"
        },
        {
            img: "/Women/womenslug/Jewellery/i2.webp",
            h3: "Queen's Set 20% Off",
            class: "px-5 px-sm-2 px-md-3 px-lg-5"
        },
        {
            img: "/Women/womenslug/Jewellery/i3.webp",
            h3: "Gold & Silver"
        },
    ]
    let luxurynewarray = [
        {
            img1: "/Women/womenslug/Jewellery/L1.webp",
            img2: "/Women/womenslug/Jewellery/Li1.webp",
            NEW: "NEW",
            newclass: "luxuryjewelp1 me-3",
        },
        {
            img1: "/Women/womenslug/Jewellery/L2.webp",
            img2: "/Women/womenslug/Jewellery/Li2.webp",
            NEW: "NEW",
            newclass: "luxuryjewelp1 me-3",
            FEATURED: "FEATURED",
            featuredclass: "luxuryjewelp2"
        },
        {
            img1: "/Women/womenslug/Jewellery/L3.webp",
            img2: "/Women/womenslug/Jewellery/Li3.webp",
            NEW: "NEW",
            newclass: "luxuryjewelp1 me-3",
        },
        {
            img1: "/Women/womenslug/Jewellery/L4.webp",
            img2: "/Women/womenslug/Jewellery/Li4.webp",
            NEW: "NEW",
            newclass: "luxuryjewelp1 me-3",
        },
        {
            img1: "/Women/womenslug/Jewellery/L5.webp",
            img2: "/Women/womenslug/Jewellery/Li5.webp",
            NEW: "NEW",
            newclass: "luxuryjewelp1 me-3",
        },
        {
            img1: "/Women/womenslug/Jewellery/L6.webp",
            img2: "/Women/womenslug/Jewellery/Li6.webp",

        },
    ]
    let luxuryfeaturedarray = [
        {
            img1: "/Women/womenslug/Jewellery/L7.webp",
            img2: "/Women/womenslug/Jewellery/Li7.webp",
            FEATURED: "FEATURED",
            featuredclass: "luxuryjewelp2"
        },
        {
            img1: "/Women/womenslug/Jewellery/L8.webp",
            img2: "/Women/womenslug/Jewellery/Li8.webp",
            percentage: "-10%",
            percentageclass: "luxuryjewelp3 me-3",
            FEATURED: "FEATURED",
            featuredclass: "luxuryjewelp2"
        },
        {
            img1: "/Women/womenslug/Jewellery/L9.webp",
            img2: "/Women/womenslug/Jewellery/Li9.webp",
            percentage: "-11%",
            percentageclass: "luxuryjewelp3 me-3",
            FEATURED: "FEATURED",
            featuredclass: "luxuryjewelp2"
        },
        {
            img1: "/Women/womenslug/Jewellery/L2.webp",
            img2: "/Women/womenslug/Jewellery/Li2.webp",
            NEW: "NEW",
            newclass: "luxuryjewelp1 me-3",
            FEATURED: "FEATURED",
            featuredclass: "luxuryjewelp2"
        },
        {
            img1: "/Women/womenslug/Jewellery/L10.webp",
            img2: "/Women/womenslug/Jewellery/Li10.webp",
            FEATURED: "FEATURED",
            featuredclass: "luxuryjewelp2"
        },
        {
            img1: "/Women/womenslug/Jewellery/L11.webp",
            img2: "/Women/womenslug/Jewellery/Li11.webp",
            FEATURED: "FEATURED",
            featuredclass: "luxuryjewelp2"
        },
    ]
    let luxurysalearray = [
        {
            img1: "/Women/womenslug/Jewellery/L8.webp",
            img2: "/Women/womenslug/Jewellery/Li8.webp"
        },
        {
            img1: "/Women/womenslug/Jewellery/L12.webp",
            img2: "/Women/womenslug/Jewellery/Li12.webp"
        },
        {
            img1: "/Women/womenslug/Jewellery/L9.webp",
            img2: "/Women/womenslug/Jewellery/Li9.webp"
        },
        {
            img1: "/Women/womenslug/Jewellery/L13.webp",
            img2: "/Women/womenslug/Jewellery/Li13.webp"
        }
    ]
    let shaparray = [
        {
            img: "/Women/womenslug/Jewellery/shape1.png",
            pname: "ROUND"
        },
        {
            img: "/Women/womenslug/Jewellery/shape2.png",
            pname: "EMERALD"
        },
        {
            img: "/Women/womenslug/Jewellery/shape3.png",
            pname: "OVAL"
        },
        {
            img: "/Women/womenslug/Jewellery/shape4.png",
            pname: "PEAR"
        },
        {
            img: "/Women/womenslug/Jewellery/shape5.png",
            pname: "MARQUISE"
        },
        {
            img: "/Women/womenslug/Jewellery/shape6.png",
            pname: "CUSHION"
        },
    ]
    let headingarray = [
        {
            key: "first",
            no: 0,
            extrasec2h6: "extrasec2h77",
            name: " NEW ARRIVED"
        },
        {
            key: "second",
            no: 1,
            extrasec2h6: "extrasec2h77",
            name: "FEATURED"
        },
        {
            key: "third",
            no: 2,
            extrasec2h6: "extrasec2h77",
            name: "ON A SALE"
        },

    ]
    let imgarray = [
        {
            img: "/Women/womenslug/Jewellery/hoverimg1.webp",
            h3: "BRACELETS"
        },
        {
            img: "/Women/womenslug/Jewellery/hoverimg2.webp",
            h3: "RINGS"
        },
        {
            img: "/Women/womenslug/Jewellery/hoverimg3.webp",
            h3: "EARRINGS"
        },
        {
            img: "/Women/womenslug/Jewellery/hoverimg4.webp",
            h3: "NACKLACES"
        },
        {
            img: "/Women/womenslug/Jewellery/hoverimg5.webp",
            h3: "SETS"
        },
        {
            img: "/Women/womenslug/Jewellery/hoverimg6.webp",
            h3: "OTHER"
        },
    ]

    const testiMonials = [
        {
            name: 'Rekob Ramya',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Brandon Savage',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        }
    ]
    const options = {
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: false,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2.4
            }
        }
    };
    return (
        <div>
            <div className="cotainer-fluid g-0 mt-5">
                <div className="container g-0">
                    <div className=" row row-cols-2 g-0 d-flex justify-content-around">
                        {
                            bgarray?.map((x, i) => {
                                return <div className="col jewelbgimg" key={i}>
                                    <img src={x?.img} alt="" className="img-fluid" />
                                    <h2 className="jewelbgh2">{x?.h21} <br />{x?.h22}</h2>
                                    <button className="jewelbgbtn">SHOP NOW</button>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0">
                    <div className="row row-cols-1 row-cols-sm-3 g-0">
                        {
                            array?.map((x, i) => {
                                return <div className="col p-2" key={i}>
                                    <div className="border row g-0 h-100">
                                        <div className="col">
                                            <img src={x?.img} alt="" className="img-fluid" />
                                            <div className="col">
                                                <div className="border jewelsiximagediv">
                                                    <p className="mb-1">NEW COLLECTION</p>
                                                    <h3 className={x?.class}>{x?.h3}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 luxuryjewelmaindiv mt-5">

                <h2 className="luxuryjewelh2">Luxury Jewelry</h2>
                <hr className="mb-0" />

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="flex-column">
                        <div className="d-flex flex-wrap justify-content-center">

                            {
                                headingarray?.map((x, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="dealparentt">
                                                <Nav.Link eventKey={x?.key}>
                                                    <h6 className={`${x?.extrasec2h6} ${activeChild === x?.no ? "active" : ""}`}
                                                        onClick={() => handleChildClick(x?.no)} >
                                                        {activeChild === x?.no ? x?.name : x?.name}
                                                    </h6>
                                                </Nav.Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Nav>
                    <hr className="mt-0" />
                    <div className="container g-0">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="row row-cols-1 row-cols-sm-2 g-0 px-0 px-sm-3 px-lg-5">
                                    {
                                        luxurynewarray?.map((x, i) => {
                                            return <div className="col p-2" key={i}>
                                                <div className="border h-100 luxuryjewelimg">
                                                    <img src={x?.img1} alt="" className="img-fluid" />
                                                    <img src={x?.img2} alt="" className="img-fluid luxuryjewelimghover" />
                                                    <div className="luxuryjewelpdiv d-flex">
                                                        <p className={x?.newclass}>{x?.NEW}</p>
                                                        <p className={x?.featuredclass}>{x?.FEATURED}</p>
                                                    </div>
                                                    <button className="luxuryjewelbutton">VIEW MORE</button>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className="row row-cols-1 row-cols-sm-2 g-0 px-0 px-sm-3 px-lg-5">
                                    {
                                        luxuryfeaturedarray?.map((x, i) => {
                                            return <div className="col p-2" key={i}>
                                                <div className="border h-100 luxuryjewelimg">
                                                    <img src={x?.img1} alt="" className="img-fluid" />
                                                    <img src={x?.img2} alt="" className="img-fluid luxuryjewelimghover" />
                                                    <div className="luxuryjewelpdiv d-flex">
                                                        <p className={x?.newclass}>{x?.NEW}</p>
                                                        <p className={x?.percentageclass}>{x?.percentage}</p>
                                                        <p className={x?.featuredclass}>{x?.FEATURED}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div className="row row-cols-1 row-cols-sm-2 g-0 px-0 px-sm-3 px-lg-5">
                                    {
                                        luxurysalearray?.map((x, i) => {
                                            return <div className="col p-2" key={i}>
                                                <div className="border h-100 luxuryjewelimg">
                                                    <img src={x?.img1} alt="" className="img-fluid" />
                                                    <img src={x?.img2} alt="" className="img-fluid luxuryjewelimghover" />
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
            <div className="container-fluid g-0 mt-5 text-center shapemaindiv py-5">
                <div className="container g-0">
                    <h2 className="luxuryjewelh2">Shape Of Gemstone</h2>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-0 px-5 mt-5">
                        {
                            shaparray?.map((x, i) => {
                                return <div className="col px-3 py-3 py-lg-0" key={i}>
                                    <div className=" shapeimgdiv">
                                        <img src={x?.img} alt="" className="img-fluid shapeimghover" />
                                        <p className="shapeimgp mt-4 mb-0">{x?.pname}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0">
                <div className="container g-0 p-0">
                    <div className="row row-cols-2 g-0">
                        {
                            imgarray?.map((x, i) => {
                                return <div className="col onlyimgsec" key={i}>
                                    <img src={x?.img} alt="" className="img-fluid" />
                                    <div className="onlyimgtext">
                                        <h3 className="onlyimgtextH2">{x?.h3}</h3>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 p-0 blackbgimg p-5">
                <div className=" g-0 blackbgimgcolor" >
                    <h2 className="blackbgimgh2">About Brand</h2>
                    <p className="blackbgline mb-0 text-white"><FaRegCircle className="blackbgicon" /></p>
                    <p className="blackbgimgpara">Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe.</p>
                    <button className="blackbgimgbutton">READ MORE</button>
                </div>
            </div>
            <div className="container-fluid g-0 womenslidermainsec mt-4">
                <h2 className="womensliderheading fs-1">Customers Reviews</h2>
                <p className="blackbgline mb-0 "><FaRegCircle className="blackbgicon" /></p>
                <div className="container-fluid g-0">
                    <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-them" {...options}>
                        {
                            testiMonials.map((x, i) => {
                                return <div className="item" key={i}>
                                    <div className="shadow-effect">
                                        <img className="img-circle" src={x?.img} />
                                        <p>{x?.description}</p>
                                        <h5>{x?.name}</h5>
                                        <small>{x?.address}</small>
                                    </div>
                                </div>
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Jewellery