import { getethincfusionApi } from "@/store/Action/PostAction";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


const EthnicFusion = ({ dynamicHeading }) => {
    let state = useSelector(state => state?.product?.ethincfusion);
    console.log(state, "statettftft")
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getethincfusionApi())
    }, [])
    let extrasec = state?.filter(x => x?.category == "extrasec")
    let kurtakurti = state?.filter(x => x?.category == "kurtakurti")
    let kurtasets = state?.filter(x => x?.category == "kurtasets")
    let ethnicwear = state?.filter(x => x?.category == "ethnicwear")
    let topstunic = state?.filter(x => x?.category == "topstunic")
    let leggings = state?.filter(x => x?.category == "leggings")
    let pantspalazzos = state?.filter(x => x?.category == "pantspalazzos")
    let skirts = state?.filter(x => x?.category == "skirts")
    let dupattasstoles = state?.filter(x => x?.category == "dupattasstoles")
    let saree = state?.filter(x => x?.category == "saree")

    const [Heading, setHeading] = useState("");

    const [isKurtakurtiChecked, setIsKurtakurtiChecked] = useState(false);
    const [isKurtasetsChecked, setIsKurtasetsChecked] = useState(false);
    const [isEthnicWearChecked, setIsEthnicWearChecked] = useState(false);
    const [isTopsTunicChecked, setIsTopsTunicChecked] = useState(false);
    const [isLeggingsChecked, setIsLeggingsChecked] = useState(false);
    const [isPantsPalazzosChecked, setIsPantsPalazzosChecked] = useState(false);
    const [isSkirtsChecked, setIsSkirtsChecked] = useState(false);
    const [isDupattasStolesChecked, setIsDupattasStolesChecked] = useState(false);
    const [isSareeChecked, setIsSareeChecked] = useState(false);

    const handleKurtakurtiCheckboxChange = () => {
        setIsKurtakurtiChecked(!isKurtakurtiChecked);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isKurtakurtiChecked ? "" : "Kurtas & Kurti");
    };

    const handleKurtasetsCheckboxChange = () => {
        setIsKurtasetsChecked(!isKurtasetsChecked);
        setIsKurtakurtiChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isKurtasetsChecked ? "" : "Kurta Sets");
    };
    const handleEthnicWearCheckboxChange = () => {
        setIsEthnicWearChecked(!isEthnicWearChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isEthnicWearChecked ? "" : "Ethnic Wear");
    };
    const handleTopsTunicCheckboxChange = () => {
        setIsTopsTunicChecked(!isTopsTunicChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isTopsTunicChecked ? "" : "Tops & Tunic");
    };
    const handleLeggingsCheckboxChange = () => {
        setIsLeggingsChecked(!isLeggingsChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isLeggingsChecked ? "" : "Leggings");
    };
    const handlePantsPalazzosCheckboxChange = () => {
        setIsPantsPalazzosChecked(!isPantsPalazzosChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isPantsPalazzosChecked ? "" : "Pants & Palazzos");
    };
    const handleSkirtsCheckboxChange = () => {
        setIsSkirtsChecked(!isSkirtsChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isSkirtsChecked ? "" : "Skirts");
    };
    const handleDupattasStolesCheckboxChange = () => {
        setIsDupattasStolesChecked(!isDupattasStolesChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsSareeChecked(false);
        setHeading(isDupattasStolesChecked ? "" : "Dupattas & Stoles");
    };
    const handleSareeCheckboxChange = () => {
        setIsSareeChecked(!isSareeChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setHeading(isSareeChecked ? "" : "Saree");
    };

    const filteredProducts = isKurtakurtiChecked
        ? kurtakurti.filter((product) => product.category === "kurtakurti")
        : isKurtasetsChecked
            ? kurtasets.filter((product) => product.category === "kurtasets")
            : isEthnicWearChecked
                ? ethnicwear.filter((product) => product.category === "ethnicwear")
                : isTopsTunicChecked
                    ? topstunic.filter((product) => product.category === "topstunic")
                    : isLeggingsChecked
                        ? leggings.filter((product) => product.category === "leggings")
                        : isPantsPalazzosChecked
                            ? pantspalazzos.filter((product) => product.category === "pantspalazzos")
                            : isSkirtsChecked
                                ? skirts.filter((product) => product.category === "skirts")
                                : isDupattasStolesChecked
                                    ? dupattasstoles.filter((product) => product.category === "dupattasstoles")
                                    : isSareeChecked
                                        ? saree.filter((product) => product.category === "saree")
                                        : extrasec.filter((product) => product.category === "extrasec")

    return (
        <div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0">
                    <h3 className="Homewomen1h3 px-3">Top Categories</h3>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="athleticsextra">
                        <div className="row p-0 g-0 mt-5 h-100 ">
                            <div className="col-4 col-md-3 col-lg-2  womenpagesubdiv1 px-0">
                                <div className="h-100 ">
                                    <div className="womenpagesideheadingset">
                                        <h4 className="ms-3 ms-sm-0">{dynamicHeading}</h4>
                                        <br />
                                        <Nav.Link as="div" eventKey="athleticsfirst">
                                            <div className="form-check ms-3 ms-sm-0">
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check"
                                                    value="athleticsfirst"
                                                    id="flexCheckKurtakurti"
                                                    checked={isKurtakurtiChecked}
                                                    onChange={handleKurtakurtiCheckboxChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckKurtakurti">
                                                    Kurtas & Kurtis
                                                </label>
                                            </div>
                                        </Nav.Link>
                                        <br />
                                        <Nav.Link as="div" eventKey="athleticssecond">
                                            <div className="form-check ms-3 ms-sm-0">
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check1"
                                                    value="athleticssecond"
                                                    id="flexCheckKurtasets"
                                                    checked={isKurtasetsChecked}
                                                    onChange={handleKurtasetsCheckboxChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckKurtasets">
                                                    Kurtas Sets
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticsthird" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check2"
                                                    value="athleticsthird"
                                                    id="flexCheckEthnicWear"
                                                    checked={isEthnicWearChecked}
                                                    onChange={handleEthnicWearCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckEthnicWear"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Ethnic Wear
                                                </label>
                                            </div>
                                        </Nav.Link>  <br />
                                        <Nav.Link as="div" eventKey="athleticsforth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticsforth"
                                                    id="flexCheckTopsTunic"
                                                    checked={isTopsTunicChecked}
                                                    onChange={handleTopsTunicCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckTopsTunic"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Tops Tunic
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticsfifth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticsfifth"
                                                    id="flexCheckLeggings"
                                                    checked={isLeggingsChecked}
                                                    onChange={handleLeggingsCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckLeggings"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Leggings
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticssixth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticssixth"
                                                    id="flexCheckPantsPalazzos"
                                                    checked={isPantsPalazzosChecked}
                                                    onChange={handlePantsPalazzosCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckPantsPalazzos"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Pants Palazzos
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticsseventh" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticsseventh"
                                                    id="flexCheckSkirts"
                                                    checked={isSkirtsChecked}
                                                    onChange={handleSkirtsCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckSkirts"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Skirts
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticseighth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticseighth"
                                                    id="flexCheckDupattasStoles"
                                                    checked={isDupattasStolesChecked}
                                                    onChange={handleDupattasStolesCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDupattasStoles"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Dupattas & Stoles
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticsninth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticsninth"
                                                    id="flexCheckSaree"
                                                    checked={isSareeChecked}
                                                    onChange={handleSareeCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckSaree"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Saree
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
                                        <Tab.Pane eventKey="athleticsextra">
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4 ">
                                                {filteredProducts?.map((x, i) => (
                                                    <div className="col p-3 m-0" key={i}>
                                                        <div className="p-2 imagedivborder h-100">
                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                <img src={x?.img} alt="" className="img-fluid h-100 w-100" />
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
                                        <Tab.Pane eventKey="athleticsfirst">
                                            <h1 onClick={() => setHeading(Heading)} style={{ cursor: "pointer" }}>
                                                {Heading}
                                            </h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {filteredProducts?.map((x, i) => (
                                                    <div className="col p-3 m-0" key={i}>
                                                        <div className=" p-2 imagedivborder h-100">
                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                <img src={x?.img} alt="" className="img-fluid w-100 h-100" />
                                                            </div>
                                                            <div className=" imagetext">
                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                <div className="m-auto d-flex justify-content-center">
                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                    <h5>{x?.price}</h5>
                                                                </div>
                                                            </div>
                                                            <Link href="/women/ethnicfusion/kurtaandkurtis">
                                                                <button>{x?.button}</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticssecond">
                                            <h1 onClick={() => setHeading(Heading)} style={{ cursor: "pointer" }}>
                                                {Heading}
                                            </h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {filteredProducts?.map((x, i) => (
                                                    <div className="col p-3 m-0" key={i}>
                                                        <div className=" p-2 imagedivborder h-100">
                                                            <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                <img src={x?.img} alt="" className="img-fluid  h-100 w-100" />
                                                            </div>
                                                            <div className=" imagetext">
                                                                <h4 className="mt-2">{x?.name}</h4>
                                                                <div className="m-auto d-flex justify-content-center">
                                                                    <div className="me-3 h5">{x?.cutprice}</div>
                                                                    <h5>{x?.price}</h5>
                                                                </div>
                                                            </div>
                                                            <Link href="/women/ethnicfusion/kurtasets">
                                                                <button>{x?.button}</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticsthird">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.img} alt="" className="img-fluid  h-100 w-100" />
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
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.img} alt="" className="img-fluid  h-100 w-100" />
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
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className="imagedivborder h-100">
                                                                    <div className=" w-75 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.img} alt="" className="img-fluid w-100 h-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2 px-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/ethnicfusion/leggingsandchuridars"}>
                                                                        <button>{x?.button}</button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticssixth">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.img} alt="" className="img-fluid  h-100 w-100" />
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
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.img} alt="" className="img-fluid h-100 w-100" />
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
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-75 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.img} alt="" className="img-fluid h-100 w-100" />
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
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.img} alt="" className="img-fluid h-100 w-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/ethnicfusion/saree"}><button>{x?.button}</button></Link>
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
    );
};

export default EthnicFusion;