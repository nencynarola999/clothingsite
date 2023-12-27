import Link from "next/link";
import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";

const EthnicFusion = ({ dynamicHeading }) => {
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
    let kurtakurti = [
        {
            image: "/Women/womenpage/A1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"

        },
        {
            image: "/Women/womenpage/A2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/Women/womenpage/A3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "kurtakurti"
        },
        {
            image: "/Women/womenpage/A4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/Women/womenpage/A5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/Women/womenpage/A6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/Women/womenpage/A1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"

        },
        {
            image: "/Women/womenpage/A2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/Women/womenpage/A3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "kurtakurti"
        },
        {
            image: "/Women/womenpage/A4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/Women/womenpage/A5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/Women/womenpage/A6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
    ]
    let kurtasets = [
        {
            image: "/Women/womenpage/A7.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A10.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A11.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A12.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A7.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A10.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A11.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/Women/womenpage/A12.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
    ]
    let ethnicwear = [
        {
            image: "/Women/womenpage/A13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/Women/womenpage/A18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
    ]
    let topstunic = [
        {
            image: "/Women/womenpage/A19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A21.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A23.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A21.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A23.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/Women/womenpage/A24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        }
    ]
    let leggings = [
        {
            image: "/Women/womenpage/A25.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/A26.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/A27.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/A28.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/A29.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/Women/womenpage/A30.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
    ]
    let pantspalazzos = [
        {
            image: "/Women/womenpage/A31.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
        {
            image: "/Women/womenpage/A32.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
        {
            image: "/Women/womenpage/A33.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "pantspalazzos"
        },
        {
            image: "/Women/womenpage/A34.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
        {
            image: "/Women/womenpage/A35.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
        {
            image: "/Women/womenpage/A36.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
    ]
    let skirts = [
        {
            image: "/Women/womenpage/A37.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
        {
            image: "/Women/womenpage/A38.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
        {
            image: "/Women/womenpage/A39.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "skirts"
        },
        {
            image: "/Women/womenpage/A40.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
        {
            image: "/Women/womenpage/A41.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
        {
            image: "/Women/womenpage/A42.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
    ]
    let dupattasstoles = [
        {
            image: "/Women/womenpage/A43.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
        {
            image: "/Women/womenpage/A44.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
        {
            image: "/Women/womenpage/A45.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "dupattasstoles"
        },
        {
            image: "/Women/womenpage/A46.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
        {
            image: "/Women/womenpage/A47.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
        {
            image: "/Women/womenpage/A48.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
    ]
    let saree = [
        {
            image: "/Women/womenpage/A49.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
        {
            image: "/Women/womenpage/A50.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
        {
            image: "/Women/womenpage/A51.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "saree"
        },
        {
            image: "/Women/womenpage/A52.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
        {
            image: "/Women/womenpage/A53.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
        {
            image: "/Women/womenpage/A54.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
    ]

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
                            {/* ... (rest of the code) */}
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
                                        <Tab.Pane eventKey="athleticsfirst">
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
                                                                <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
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
                                                                        <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
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
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
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
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-75 m-auto d-flex justify-content-center imagediv">
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
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
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