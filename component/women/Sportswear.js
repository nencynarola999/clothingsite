import Link from "next/link"
import React, { useState } from "react"
import { Nav, Tab } from "react-bootstrap"

const Sportswear = ({ dynamicHeading }) => {
    const [Heading, setHeading] = useState("");

    const [isTopTeesChecked, setIsTopTeesChecked] = useState(false);
    const [isLeggingsChecked, setIsLeggingsChecked] = useState(false);
    const [isJoggersTracksChecked, setIsJoggersTracksChecked] = useState(false);
    const [isSweatshirtsJacketsChecked, setIsSweatshirtsJacketsChecked] = useState(false);

    const handleTopTeesCheckboxChange = () => {
        setIsTopTeesChecked(!isTopTeesChecked);
        setIsLeggingsChecked(false);
        setIsJoggersTracksChecked(false);
        setIsSweatshirtsJacketsChecked(false);
        setHeading(isTopTeesChecked ? "" : "Kurtas & Kurti");
    };

    const handleLeggingsCheckboxChange = () => {
        setIsLeggingsChecked(!isLeggingsChecked);
        setIsTopTeesChecked(false);
        setIsJoggersTracksChecked(false);
        setIsSweatshirtsJacketsChecked(false);
        setHeading(isLeggingsChecked ? "" : "Kurta Sets");
    };
    const handleJoggersTracksCheckboxChange = () => {
        setIsJoggersTracksChecked(!isJoggersTracksChecked);
        setIsTopTeesChecked(false);
        setIsLeggingsChecked(false);
        setIsSweatshirtsJacketsChecked(false);
        setHeading(isJoggersTracksChecked ? "" : "Ethnic Wear");
    };
    const handleSweatshirtsJacketsCheckboxChange = () => {
        setIsSweatshirtsJacketsChecked(!isSweatshirtsJacketsChecked);
        setIsTopTeesChecked(false);
        setIsLeggingsChecked(false);
        setIsJoggersTracksChecked(false);
        setHeading(isSweatshirtsJacketsChecked ? "" : "Tops & Tunic");
    };
    let extrasec = [
        {
            image: "/Women/womenslug/i1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec",
        },
        {
            image: "/Women/womenslug/i2.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i3.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i5.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i6.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i3.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i2.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i5.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i6.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/Women/womenslug/i4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },

    ]
    let topstees = [
        {
            image: "/Women/womenpage/S1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S2.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S3.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S4.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S5.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S6.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S2.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S3.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S4.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S5.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
        {
            image: "/Women/womenpage/S6.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstees"
        },
    ]
    let leggings = [
        {
            image: "/Women/womenpage/S7.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S8.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S9.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S10.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S11.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S12.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S7.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S8.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S9.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S10.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S11.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/S12.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
    ]
    let joggersandtracks = [
        {
            image: "/Women/womenpage/S13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S16.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S17.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S16.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S17.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
        {
            image: "/Women/womenpage/S18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "joggersandtracks"
        },
    ]
    let sweatshirtsandjackets = [
        {
            image: "/Women/womenpage/S19.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S20.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S21.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S22.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S23.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S24.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S19.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S20.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S21.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S22.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S23.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
        {
            image: "/Women/womenpage/S24.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "sweatshirtsandjackets"
        },
    ]

    const filteredProducts = isTopTeesChecked
        ? topstees.filter((product) => product.category === "topstees")
        : isLeggingsChecked
            ? leggings.filter((product) => product.category === "leggings")
            : isJoggersTracksChecked
                ? joggersandtracks.filter((product) => product.category === "joggersandtracks")
                : isSweatshirtsJacketsChecked
                    ? sweatshirtsandjackets.filter((product) => product.category === "sweatshirtsandjackets")
                    : extrasec.filter((product) => product.category === "extrasec")
    return (
        <div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0">
                    <h3 className="Homewomen1h3 px-3">Top Categories</h3>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="westernextra">
                        <div className="row p-0 g-0 mt-5 h-100 ">
                            {/* ... (rest of the code) */}
                            <div className="col-4 col-md-3 col-lg-2  womenpagesubdiv1 px-0">
                                <div className="h-100 ">
                                    <div className="womenpagesideheadingset">
                                        <h4 className="ms-3 ms-sm-0">{dynamicHeading}</h4>
                                        <br />
                                        <Nav.Link as="div" eventKey="westernfirst">
                                            <div className="form-check ms-3 ms-sm-0">
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check"
                                                    value="westernfirst"
                                                    id="flexCheckTopTees"
                                                    checked={isTopTeesChecked}
                                                    onChange={handleTopTeesCheckboxChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckTopTees">
                                                    Tops & Tees
                                                </label>
                                            </div>
                                        </Nav.Link>
                                        <br />
                                        <Nav.Link as="div" eventKey="westernsecond">
                                            <div className="form-check ms-3 ms-sm-0">
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check1"
                                                    value="westernsecond"
                                                    id="flexCheckLeggings"
                                                    checked={isLeggingsChecked}
                                                    onChange={handleLeggingsCheckboxChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckLeggings">
                                                    Leggings
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="westernthird" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check2"
                                                    value="westernthird"
                                                    id="flexCheckJoggersTracks"
                                                    checked={isJoggersTracksChecked}
                                                    onChange={handleJoggersTracksCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckJoggersTracks"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Joggers & Tracks
                                                </label>
                                            </div>
                                        </Nav.Link>  <br />
                                        <Nav.Link as="div" eventKey="westernforth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="westernforth"
                                                    id="flexCheckSweatshirtsJackets"
                                                    checked={isSweatshirtsJacketsChecked}
                                                    onChange={handleSweatshirtsJacketsCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckSweatshirtsJackets"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Sweatshirts & Jackets
                                                </label>
                                            </div>
                                        </Nav.Link>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-md-9 col-lg-10  womenpagesubdiv2 px-0">
                                <div className=" h-100">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="westernextra">
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4 ">
                                                {filteredProducts?.map((x, i) => (
                                                    <div className="col p-3 m-0" key={i}>
                                                        <div className="p-2 imagedivborder h-100">
                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                            </div>
                                                            <div className=" imagetext">
                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                <div className="m-auto d-flex justify-content-center ">
                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                    <h5>{x?.price}</h5>
                                                                </div>
                                                            </div>
                                                            <Link href="/women">
                                                                <button>{x?.button}</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="westernfirst">
                                            <h1 onClick={() => setHeading(Heading)} style={{ cursor: "pointer" }}>
                                                {Heading}
                                            </h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {filteredProducts?.map((x, i) => (
                                                    <div className="col p-3 m-0" key={i}>
                                                        <div className=" p-2 imagedivborder h-100">
                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                            </div>
                                                            <div className=" imagetext">
                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                <div className="m-auto d-flex justify-content-center">
                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                    <h5>{x?.price}</h5>
                                                                </div>
                                                            </div>
                                                            <Link href="/women/sportswear/topstees">
                                                                <button>{x?.button}</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="westernsecond">
                                            <h1 onClick={() => setHeading(Heading)} style={{ cursor: "pointer" }}>
                                                {Heading}
                                            </h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {filteredProducts?.map((x, i) => (
                                                    <div className="col p-3 m-0" key={i}>
                                                        <div className=" p-2 imagedivborder h-100">
                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
                                                            </div>
                                                            <div className=" imagetext">
                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                <div className="m-auto d-flex justify-content-center">
                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                    <h5>{x?.price}</h5>
                                                                </div>
                                                            </div>
                                                            <Link href="/women/sportswear/leggings">
                                                                <button>{x?.button}</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="westernthird">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
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
                                                                    <Link href={"/women/sportswear/joggersandtracks"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="westernforth">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
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
                                                                    <Link href={"/women/sportswear/sweatshirtsandjackets"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default Sportswear