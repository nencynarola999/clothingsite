import Link from "next/link"
import React, { useState } from "react"
import { Nav, Tab } from "react-bootstrap"

const Westernwear = ({ dynamicHeading }) => {
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
        setHeading(isTopTeesChecked ? "" : "Kurtas & Kurti");
    };

    const handleDressesJumpsuitsCheckboxChange = () => {
        setIsDressesJumpsuitsChecked(!isDressesJumpsuitsChecked);
        setIsTopTeesChecked(false);
        setIsJeansJeggingsChecked(false);
        setIsShortsSkirtsChecked(false);
        setIsTrousersChecked(false);
        setIsJacketsShrugsChecked(false);
        setHeading(isDressesJumpsuitsChecked ? "" : "Kurta Sets");
    };
    const handleJeansJeggingsCheckboxChange = () => {
        setIsJeansJeggingsChecked(!isJeansJeggingsChecked);
        setIsTopTeesChecked(false);
        setIsDressesJumpsuitsChecked(false);
        setIsShortsSkirtsChecked(false);
        setIsTrousersChecked(false);
        setIsJacketsShrugsChecked(false);
        setHeading(isJeansJeggingsChecked ? "" : "Ethnic Wear");
    };
    const handleShortsSkirtsCheckboxChange = () => {
        setIsShortsSkirtsChecked(!isShortsSkirtsChecked);
        setIsTopTeesChecked(false);
        setIsDressesJumpsuitsChecked(false);
        setIsJeansJeggingsChecked(false);
        setIsTrousersChecked(false);
        setIsJacketsShrugsChecked(false);
        setHeading(isShortsSkirtsChecked ? "" : "Tops & Tunic");
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
        setHeading(isJacketsShrugsChecked ? "" : "Pants & Palazzos");
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
    let topsandtees = [
        {
            image: "/Women/womenpage/W1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
        {
            image: "/Women/womenpage/W6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topsandtees"
        },
     
    ]
    let dressesandjumpsuits = [
        {
            image: "/Women/womenpage/W7.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W10.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W11.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W12.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W7.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W10.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W11.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
        {
            image: "/Women/womenpage/W12.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dressesandjumpsuits"
        },
    ]
    let jeansandjeggings = [
        {
            image: "/Women/womenpage/W13.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W14.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W15.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W18.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W13.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W14.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W15.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
        {
            image: "/Women/womenpage/W18.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jeansandjeggings"
        },
     
    ]
    let shortsandskirts = [
        {
            image: "/Women/womenpage/W19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W21.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W23.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W21.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W23.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
        {
            image: "/Women/womenpage/W24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "shortsandskirts"
        },
    ]
    let trousers = [
        {
            image: "/Women/womenpage/W25.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W26.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W27.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W28.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W29.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W30.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W25.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W26.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W27.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W28.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W29.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
        {
            image: "/Women/womenpage/W30.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "trousers"
        },
    ]
    let jacketsandshrugs = [
        {
            image: "/Women/womenpage/W31.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W32.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W33.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W34.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W35.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W36.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W31.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W32.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W33.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W34.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W35.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
        {
            image: "/Women/womenpage/W36.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "jacketsandshrugs"
        },
    ]

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