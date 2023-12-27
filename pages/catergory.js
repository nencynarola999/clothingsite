import Link from "next/link"
import React, { useState } from "react"
import { Col, Nav, Row, Tab } from "react-bootstrap"

const Catergory = () => {
    const [activeChild, setActiveChild] = useState(0);

    const handleChildClick = (index) => {
        setActiveChild(index);
    };
    let women = [
        {
            image: "/Extrasec/extrasec1/i1.avif",
            slug: "/women/ethnicfusion/topsandtunics",
            h5: " Tops & Tunics"
        },
        {
            image: "/Extrasec/extrasec1/i2.avif",
            slug: "/women/ethnicfusion/skirts",
            h5: " Skirts"
        },
        {
            image: "/Extrasec/extrasec1/i3.avif",
            slug: "/women/ethnicfusion/kurtaandkurtis",
            h5: " Kurta & Kurtis"
        },
        {
            image: "/Extrasec/extrasec1/i4.webp",
            slug: "/women/ethnicfusion/pantsandpalazzos",
            h5: "  Pants & Palazzos"
        },
        {
            image: "/Extrasec/extrasec1/i5.webp",
            slug: "/women/ethnicfusion/saree",
            h5: "  Saree"
        },
        {
            image: "/Extrasec/extrasec1/i6.avif",
            slug: "/women/ethnicfusion/ethnicdresses",
            h5: "  EthnicDresses"
        }
    ]
    let men = [
        {
            image: "/Extrasec/extrasec1/i7.avif",
            slug: "men/topwear/tshirts",
            h5: " T-Shirts"
        },
        {
            image: "/Extrasec/extrasec1/i8.avif",
            slug: "/men/bottomwear/jeans",
            h5: " Jeans"
        },
        {
            image: "/Extrasec/extrasec1/i9.avif",
            slug: "men/topwear/hoodiesandsweatshirts",
            h5: " Hoodies"
        },
        {
            image: "/Extrasec/extrasec1/i10.avif",
            slug: "men/topwear/formalshirts",
            h5: " Shirts"
        },
        {
            image: "/Extrasec/extrasec1/i11.avif",
            slug: "/men/bottomwear/trousers",
            h5: " Trousers"
        }

    ]
    let kids = [
        {
            image: "/Extrasec/extrasec1/i12.avif",
            slug: "/kids/boys/tshirtsandpolos",
            h5: " Boy's T-shirt"
        },
        {
            image: "/Extrasec/extrasec1/i13.avif",
            slug: "/kids/girls/topsandtees",
            h5: " Girl's Top"
        },
        {
            image: "/Extrasec/extrasec1/i14.avif",
            slug: "/kids/boys/shirts",
            h5: " Boy's Shirts"
        },
        {
            image: "/Extrasec/extrasec1/i15.webp",
            slug: "/kids/girls/dressesandjumpsuits",
            h5: " Girl's Dresses"
        },
        {
            image: "/Extrasec/extrasec1/i16.jpg",
            slug: "kids",
            h5: " Ethnic Wear"
        },
        {
            image: "/Extrasec/extrasec1/i17.jpg",
            slug: "kids",
            h5: " Winter Wear"
        },

    ]
    let shoesbags = [
        {
            image: "/Extrasec/extrasec1/i18.avif",
            slug: "/women/footwearandbags",
            h5: " Heels"
        },
        {
            image: "/Extrasec/extrasec1/i19.avif",
            slug: "/men/shoes/sportsshoesandsneakers",
            h5: " Sports Shoes"
        },
        {
            image: "/Extrasec/extrasec1/i20.avif",
            slug: "/women/footwearandbags",
            h5: " Flat"
        },
        {
            image: "/Extrasec/extrasec1/i21.avif",
            slug: "/men/shoes/slippersandsliders",
            h5: " Flip Flops"
        },
        {
            image: "/Extrasec/extrasec1/i22.avif",
            slug: "/men/shoes",
            h5: "Formal Shoes"
        },
        {
            image: "/Extrasec/extrasec1/i23.webp",
            slug: "/women/footwearandbags",
            h5: " Handbag"
        },
        {
            image: "/Extrasec/extrasec1/i24.avif",
            slug: "/women/footwearandbags",
            h5: " Shoes"
        },
    ]
    let beauty = [
        {
            image: "/Extrasec/extrasec1/i25.avif",
            slug: "/women/beauty",
            h5: " Face"
        },
        {
            image: "/Extrasec/extrasec1/i26.jpg",
            slug: "/women/beauty",
            h5: " Lips"
        },
        {
            image: "/Extrasec/extrasec1/i27.webp",
            slug: "/women/beauty",
            h5: " Eye"
        },
        {
            image: "/Extrasec/extrasec1/i28.webp",
            slug: "/women/beauty",
            h5: " Nail"
        },
        {
            image: "/Extrasec/extrasec1/i29.webp",
            slug: "/women/beauty",
            h5: " Fragrances"
        }
    ]
    return (
        <>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0">
                    <h3 className="Homewomen1h3">Top Categories</h3>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="row extrasec1maindiv mt-5 h-100 g-0">
                            <div className="col-4 col-md-3 col-lg-2 extrasec1subdiv1">
                                <div className="h-100 parent">
                                    <Nav.Link eventKey="first" className={`child ${activeChild === 0 ? "active" : ""}`}
                                        onClick={() => handleChildClick(0)}>
                                        <h4>
                                            {activeChild === 0 ? "Women" : "Women"}
                                        </h4>
                                    </Nav.Link>
                                    <Nav.Link eventKey="second" className={`child ${activeChild === 1 ? "active" : ""}`}
                                        onClick={() => handleChildClick(1)}>
                                        <h4>
                                            {activeChild === 1 ? "Men" : "Men"}
                                        </h4>
                                    </Nav.Link>
                                    <Nav.Link eventKey="third" className={`child ${activeChild === 2 ? "active" : ""}`}
                                        onClick={() => handleChildClick(2)}>
                                        <h4>
                                            {activeChild === 2 ? "Kids" : "Kids"}
                                        </h4>
                                    </Nav.Link>
                                    <Nav.Link eventKey="forth" className={`child ${activeChild === 3 ? "active" : ""}`}
                                        onClick={() => handleChildClick(3)}>
                                        <h4>
                                            {activeChild === 3 ? "Shoes & Bags" : "Shoes & Bags"}
                                        </h4>
                                    </Nav.Link>
                                    <Nav.Link eventKey="fifth" className={`child ${activeChild === 4 ? "active" : ""}`}
                                        onClick={() => handleChildClick(4)}>
                                        <h4>
                                            {activeChild === 4 ? "Beauty" : "Beauty"}
                                        </h4>
                                    </Nav.Link>
                                </div>
                            </div>
                            <div className="col-8 col-md-9 col-lg-10 extrasec1subdiv2">
                                <div className=" h-100">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <h4 className="mb-3">
                                                Women
                                            </h4>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">
                                                {
                                                    women?.map((x, i) => {
                                                        return (
                                                            <Link href={`${x?.slug}`} legacyBehavior key={i}>
                                                                <a>
                                                                    <div className="col p-2">
                                                                        <div className=" extrasec1imgset">
                                                                            <img src={x?.image} alt="" className="  rounded-5 w-100 h-100" />
                                                                        </div>
                                                                        <div className="text-center py-2">
                                                                            <h5 className="m-0">{x?.h5}</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h4 className="mb-3">
                                                Men
                                            </h4>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">
                                                {
                                                    men?.map((x, i) => {
                                                        return (
                                                            <Link href={`${x?.slug}`} legacyBehavior key={i}>
                                                                <a>
                                                                    <div className="col p-2">
                                                                        <div className=" extrasec1imgset">
                                                                            <img src={x?.image} alt="" className="  rounded-5 w-100 h-100" />
                                                                        </div>
                                                                        <div className="text-center py-2">
                                                                            <h5 className="m-0">{x?.h5}</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <h4 className="mb-3">
                                                Kids
                                            </h4>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">
                                                {
                                                    kids?.map((x, i) => {
                                                        return (
                                                            <Link href={`${x?.slug}`} legacyBehavior key={i}>
                                                                <a>
                                                                    <div className="col p-2">
                                                                        <div className=" extrasec1imgset">
                                                                            <img src={x?.image} alt="" className="  rounded-5 w-100 h-100" />
                                                                        </div>
                                                                        <div className="text-center py-2">
                                                                            <h5 className="m-0">{x?.h5}</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="forth">
                                            <h4 className="mb-3">
                                                Shoes & Bags
                                            </h4>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">
                                                {
                                                    shoesbags?.map((x, i) => {
                                                        return (
                                                            <Link href={`${x?.slug}`} legacyBehavior key={i}>
                                                                <a>
                                                                    <div className="col p-2">
                                                                        <div className=" extrasec1imgset">
                                                                            <img src={x?.image} alt="" className="  rounded-5 w-100 h-100" />
                                                                        </div>
                                                                        <div className="text-center py-2">
                                                                            <h5 className="m-0">{x?.h5}</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <h4 className="mb-3">
                                                Beauty
                                            </h4>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">
                                                {
                                                    beauty?.map((x, i) => {
                                                        return (
                                                            <Link href={`${x?.slug}`} legacyBehavior key={i}>
                                                                <a>
                                                                    <div className="col p-2">
                                                                        <div className=" extrasec1imgset">
                                                                            <img src={x?.image} alt="" className="  rounded-5 w-100 h-100" />
                                                                        </div>
                                                                        <div className="text-center py-2">
                                                                            <h5 className="m-0">{x?.h5}</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </Link>
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
        </>
    )
}


export default Catergory