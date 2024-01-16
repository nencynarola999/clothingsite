import { getwesternwearApi } from "@/store/Action/PostAction"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Nav, Tab } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

const Westernwear = ({ dynamicHeading }) => {
    let state = useSelector(state => state?.product?.westernwear)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getwesternwearApi());
    }, [])
    console.log(state)

    let extrasec = state?.filter(x => x?.category == "extrasec")
    let topsandtees = state?.filter(x => x?.category == "topsandtees")
    let dressesandjumpsuits = state?.filter(x => x?.category == "dressesandjumpsuits")
    let jeansandjeggings = state?.filter(x => x?.category == "jeansandjeggings")
    let shortsandskirts = state?.filter(x => x?.category == "shortsandskirts")
    let trousers = state?.filter(x => x?.category == "trousers")
    let jacketsandshrugs = state?.filter(x => x?.category == "jacketsandshrugs")

    const [Heading, setHeading] = useState("");

    const [isTopTeesChecked, setIsTopTeesChecked] = useState(false);
    const [isDressesJumpsuitsChecked, setIsDressesJumpsuitsChecked] = useState(false);
    const [isJeansJeggingsChecked, setIsJeansJeggingsChecked] = useState(false);
    const [isShortsSkirtsChecked, setIsShortsSkirtsChecked] = useState(false);
    const [isTrousersChecked, setIsTrousersChecked] = useState(false);
    const [isJacketsShrugsChecked, setIsJacketsShrugsChecked] = useState(false);

    const handleTopTeesCheckboxChange = () => {
        setIsTopTeesChecked(!isTopTeesChecked);
        setIsDressesJumpsuitsChecked(false);
        setIsJeansJeggingsChecked(false);
        setIsShortsSkirtsChecked(false);
        setIsTrousersChecked(false);
        setIsJacketsShrugsChecked(false);
        setHeading(isTopTeesChecked ? "" : "Tops & Tees");
    };

    const handleDressesJumpsuitsCheckboxChange = () => {
        setIsDressesJumpsuitsChecked(!isDressesJumpsuitsChecked);
        setIsTopTeesChecked(false);
        setIsJeansJeggingsChecked(false);
        setIsShortsSkirtsChecked(false);
        setIsTrousersChecked(false);
        setIsJacketsShrugsChecked(false);
        setHeading(isDressesJumpsuitsChecked ? "" : "Dresses & Jumpsuits");
    };
    const handleJeansJeggingsCheckboxChange = () => {
        setIsJeansJeggingsChecked(!isJeansJeggingsChecked);
        setIsTopTeesChecked(false);
        setIsDressesJumpsuitsChecked(false);
        setIsShortsSkirtsChecked(false);
        setIsTrousersChecked(false);
        setIsJacketsShrugsChecked(false);
        setHeading(isJeansJeggingsChecked ? "" : "Jeans & Jeggings");
    };
    const handleShortsSkirtsCheckboxChange = () => {
        setIsShortsSkirtsChecked(!isShortsSkirtsChecked);
        setIsTopTeesChecked(false);
        setIsDressesJumpsuitsChecked(false);
        setIsJeansJeggingsChecked(false);
        setIsTrousersChecked(false);
        setIsJacketsShrugsChecked(false);
        setHeading(isShortsSkirtsChecked ? "" : "Shorts & Skirts");
    };
    const handleTrousersCheckboxChange = () => {
        setIsTrousersChecked(!isTrousersChecked);
        setIsTopTeesChecked(false);
        setIsDressesJumpsuitsChecked(false);
        setIsJeansJeggingsChecked(false);
        setIsShortsSkirtsChecked(false);
        setIsJacketsShrugsChecked(false);
        setHeading(isTrousersChecked ? "" : "Trousers");
    };
    const handleJacketsShrugsCheckboxChange = () => {
        setIsJacketsShrugsChecked(!isJacketsShrugsChecked);
        setIsTopTeesChecked(false);
        setIsDressesJumpsuitsChecked(false);
        setIsJeansJeggingsChecked(false);
        setIsShortsSkirtsChecked(false);
        setIsTrousersChecked(false);
        setHeading(isJacketsShrugsChecked ? "" : "Jackets & Shrugs");
    };

    const filteredProducts = isTopTeesChecked
        ? topsandtees.filter((product) => product.category === "topsandtees")
        : isDressesJumpsuitsChecked
            ? dressesandjumpsuits.filter((product) => product.category === "dressesandjumpsuits")
            : isJeansJeggingsChecked
                ? jeansandjeggings.filter((product) => product.category === "jeansandjeggings")
                : isShortsSkirtsChecked
                    ? shortsandskirts.filter((product) => product.category === "shortsandskirts")
                    : isTrousersChecked
                        ? trousers.filter((product) => product.category === "trousers")
                        : isJacketsShrugsChecked
                            ? jacketsandshrugs.filter((product) => product.category === "jacketsandshrugs")
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
                                                    id="flexCheckDressesJumpsuits"
                                                    checked={isDressesJumpsuitsChecked}
                                                    onChange={handleDressesJumpsuitsCheckboxChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckDressesJumpsuits">
                                                    Dresses & Jumpsuits
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
                                                    id="flexCheckJeansJeggings"
                                                    checked={isJeansJeggingsChecked}
                                                    onChange={handleJeansJeggingsCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckJeansJeggings"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Jeans & Jeggings
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
                                                    id="flexCheckShortsSkirts"
                                                    checked={isShortsSkirtsChecked}
                                                    onChange={handleShortsSkirtsCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckShortsSkirts"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Shorts & Skirts
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="westernfifth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="westernfifth"
                                                    id="flexCheckTrousers"
                                                    checked={isTrousersChecked}
                                                    onChange={handleTrousersCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckTrousers"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Trousers
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="westernsixth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="westernsixth"
                                                    id="flexCheckJacketsShrugs"
                                                    checked={isJacketsShrugsChecked}
                                                    onChange={handleJacketsShrugsCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckJacketsShrugs"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Jackets & Shrugs
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
                                                            <Link href="/women/westernwear/topsandtees">
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
                                                            <Link href="/women/westernwear/dressesandjumpsuits">
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
                                                                    <Link href={"/women/westernwear/jeansandjeggings"}>  <button>{x?.button}</button></Link>
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
                                                                    <Link href={"/women/westernwear/shortsandskirts"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="westernfifth">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className="p-2 imagedivborder h-100">
                                                                    <div className="  w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2 px-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/westernwear/trousers"}>
                                                                        <button>{x?.button}</button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="westernsixth">
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
                                                                    <Link href={"/women/westernwear/jacketsandshrugs"}>  <button>{x?.button}</button></Link>
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

export default Westernwear