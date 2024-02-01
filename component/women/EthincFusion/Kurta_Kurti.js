import { getethincfusionApi } from "@/store/Action/PostAction";
import React, { useState, useEffect } from "react";
import { Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CustomPagination from "./KurtaKurti/CustomPagination";
import SizeKurta_Kurti from "./KurtaKurti/Sizekurtakurti";
import ColorSelection from "./KurtaKurti/Colorkurtakurti";

const Kurta_Kurti = () => {
    // get data from json
    let state = useSelector(state => state?.product?.ethincfusion);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getethincfusionApi())
    }, [dispatch])

    let kurtaandkurti = state?.find(x => x?.category == "kurtaandkurti")
    let extrasec = kurtaandkurti?.data?.filter(x => x?.category == "extrasec")
    let firstt = kurtaandkurti?.data?.filter(x => x?.category == "firstt")
    let secondd = kurtaandkurti?.data?.filter(x => x?.category == "secondd")
    let thirdd = kurtaandkurti?.data?.filter(x => x?.category == "thirdd")
    let forthh = kurtaandkurti?.data?.filter(x => x?.category == "forthh")
    let fifthh = kurtaandkurti?.data?.filter(x => x?.category == "fifthh")
    let sixthh = kurtaandkurti?.data?.filter(x => x?.category == "sixthh")
    let seventhh = kurtaandkurti?.data?.filter(x => x?.category == "seventhh")


    let color = state?.find(x => x?.category == "color")
    let beige = color?.colordata?.filter(x => x?.category == "Beige")
    let black = color?.colordata?.filter(x => x?.category == "Black")
    let blue = color?.colordata?.filter(x => x?.category == "Blue")
    let brown = color?.colordata?.filter(x => x?.category == "Brown")
    let burgundy = color?.colordata?.filter(x => x?.category == "Burgundy")
    let coral = color?.colordata?.filter(x => x?.category == "Coral")
    let cream = color?.colordata?.filter(x => x?.category == "Cream")
    let green = color?.colordata?.filter(x => x?.category == "Green")
    let grey = color?.colordata?.filter(x => x?.category == "Grey")
    let magenta = color?.colordata?.filter(x => x?.category == "Magenta")
    let maroon = color?.colordata?.filter(x => x?.category == "Maroon")
    let multi = color?.colordata?.filter(x => x?.category == "Multi")
    let mustard = color?.colordata?.filter(x => x?.category == "Mustard")
    let navyblue = color?.colordata?.filter(x => x?.category == "NavyBlue")
    let offwhite = color?.colordata?.filter(x => x?.category == "OffWhite")
    let olive = color?.colordata?.filter(x => x?.category == "Olive")
    let orange = color?.colordata?.filter(x => x?.category == "Orange")
    let peach = color?.colordata?.filter(x => x?.category == "Peach")
    let pink = color?.colordata?.filter(x => x?.category == "Pink")
    let purple = color?.colordata?.filter(x => x?.category == "Purple")
    let red = color?.colordata?.filter(x => x?.category == "Red")
    let rust = color?.colordata?.filter(x => x?.category == "Rust")
    let seagreen = color?.colordata?.filter(x => x?.category == "SeaGreen")
    let teal = color?.colordata?.filter(x => x?.category == "Teal")
    let turquoiseblue = color?.colordata?.filter(x => x?.category == "TurquoiseBlue")
    let white = color?.colordata?.filter(x => x?.category == "White")
    let yellow = color?.colordata?.filter(x => x?.category == "Yellow")

    // tabshow up down icon vali
    const [showTabssize, setShowTabssize] = useState(false);
    const [showTabscolor, setShowTabscolor] = useState(false);
    // 2 pagination option show thay one simple tab and second color
    const [showPaginationSize, setShowPaginationSize] = useState(true);
    const [showPaginationColor, setShowPaginationColor] = useState(false);
    // currentpage
    const [currentPageSize, setCurrentPageSize] = useState(0);
    const [currentPageColor, setCurrentPageColor] = useState(0);


    // sizecheckbox
    const [sizeCheckboxState, setSizeCheckboxState] = useState({
        firstt: false,
        secondd: false,
        thirdd: false,
        forthh: false,
        fifthh: false,
        sixthh: false,
        seventhh: false,

    });

    const handleSizeCheckboxChange = (size) => {
        setSizeCheckboxState((prevState) => ({
            ...prevState,
            [size]: !prevState[size],
        }));
        setCurrentPageSize(0);
    };
    // colorcheckbox
    const [colorCheckboxState, setColorCheckboxState] = useState({
        Beige: false,
        Black: false,
        Blue: false,
        Brown: false,
        Burgundy: false,
        Coral: false,
        Cream: false,
        Green: false,
        Grey: false,
        Magenta: false,
        Maroon: false,
        Multi: false,
        Mustard: false,
        NavyBlue: false,
        OffWhite: false,
        Olive: false,
        Orange: false,
        Peach: false,
        Pink: false,
        Purple: false,
        Red: false,
        Rust: false,
        SeaGreen: false,
        Teal: false,
        TurquoiseBlue: false,
        White: false,
        Yellow: false,



    });

    const handleColorCheckboxChange = (color) => {
        setColorCheckboxState((prevState) => ({
            ...prevState,
            [color]: !prevState[color],
        }));
        setCurrentPageColor(0);
    };

    // {{{{main heading tab click}}}}
    const handleSizeClick = () => {
        setShowTabssize(!showTabssize);
        setShowPaginationSize(true);
        setShowPaginationColor(false);
        setCurrentPageSize(0);
        setShowTabscolor(false);

    };
    const handleSizeClickcolor = () => {
        setShowTabscolor(!showTabscolor);
        setShowPaginationColor(true);
        setShowPaginationSize(false);
        setCurrentPageColor(0);
        setShowTabssize(false)
    };
    // pagination print click
    const handlePageClickSize = (selected) => {
        setCurrentPageSize(selected);
    };

    const handlePageClickColor = (selected) => {
        setCurrentPageColor(selected);
    };


    const itemsPerPage = 10;

    // size code
    const selectedSize = Object.keys(sizeCheckboxState).filter(
        (size) => sizeCheckboxState[size]
    );

    const currentFilteredProductssize = selectedSize.length
        ? selectedSize.reduce(
            (acc, size) =>
                acc.concat(
                    size === "firstt"
                        ? firstt
                        : size === "secondd"
                            ? secondd
                            : size === "thirdd"
                                ? thirdd
                                : size === "forthh"
                                    ? forthh
                                    : size === "fifthh"
                                        ? fifthh
                                        : size === "sixthh"
                                            ? sixthh
                                            : size === "seventhh"
                                                ? seventhh
                                                : []
                ),
            []
        )
        : extrasec

    const dynamicPageCountSize = Math.ceil(currentFilteredProductssize?.length / itemsPerPage);
    const shouldShowPaginationSize = dynamicPageCountSize > 1;

    const renderSizeParagraphs = () => {
        const startIndex = currentPageSize * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        console.log(endIndex, "dynaindchdvb")

        const selectedSizeItems = selectedSize.reduce((acc, size) => {
            switch (size) {
                case "firstt":
                    return acc.concat(firstt || []);
                case "secondd":
                    return acc.concat(secondd || []);
                case "thirdd":
                    return acc.concat(thirdd || []);
                case "forthh":
                    return acc.concat(forthh || []);
                case "fifthh":
                    return acc.concat(fifthh || []);
                case "sixthh":
                    return acc.concat(sixthh || []);
                case "seventhh":
                    return acc.concat(seventhh || []);
                default:
                    return acc;
            }
        }, []);

        const pageItems = selectedSize.length
            ? selectedSizeItems?.slice(startIndex, endIndex)
            : extrasec?.slice(startIndex, endIndex);

        return pageItems?.map((item, i) => (
            <React.Fragment key={i}>
                <div className="p-0">
                    <p>{item.id}</p>
                    <p>{item.category}</p>
                    <div className="allimages">
                        <img src={item.image} alt={`Image ${item.id}`} className="img-fluid p-3" />
                        <img src={item.imagehover} className="img-fluid imagehover p-3" />
                    </div>
                </div>
            </React.Fragment>
        ));
    };


    // color code
    const selectedColors = Object.keys(colorCheckboxState).filter(
        (color) => colorCheckboxState[color]
    );

    const currentFilteredProductscolor = selectedColors.length
        ? selectedColors.reduce(
            (acc, color) =>
                acc.concat(
                    color === "Beige"
                        ? beige
                        : color === "Black"
                            ? black
                            : color === "Blue"
                                ? blue
                                : color === "Brown"
                                    ? brown
                                    : color === "Burgundy"
                                        ? burgundy
                                        : color === "Coral"
                                            ? coral
                                            : color === "Cream"
                                                ? cream
                                                : color === "Green"
                                                    ? green
                                                    : color === "Grey"
                                                        ? grey
                                                        : color === "Magenta"
                                                            ? magenta
                                                            : color === "Maroon"
                                                                ? maroon
                                                                : color === "Multi"
                                                                    ? multi
                                                                    : color === "Mustard"
                                                                        ? mustard
                                                                        : color === "NavyBlue"
                                                                            ? navyblue
                                                                            : color === "OffWhite"
                                                                                ? offwhite
                                                                                : color === "Olive"
                                                                                    ? olive
                                                                                    : color === "Orange"
                                                                                        ? orange
                                                                                        : color === "Peach"
                                                                                            ? peach
                                                                                            : color === "Pink"
                                                                                                ? pink
                                                                                                : color === "Purple"
                                                                                                    ? purple
                                                                                                    : color === "Red"
                                                                                                        ? red
                                                                                                        : color === "Rust"
                                                                                                            ? rust
                                                                                                            : color === "SeaGreen"
                                                                                                                ? seagreen
                                                                                                                : color === "Teal"
                                                                                                                    ? teal
                                                                                                                    : color === "TurquoiseBlue"
                                                                                                                        ? turquoiseblue
                                                                                                                        : color === "White"
                                                                                                                            ? white
                                                                                                                            : color === "Yellow"
                                                                                                                                ? yellow
                                                                                                                                : []
                ),
            []
        )
        : extrasec

    const dynamicPageCountColor = Math.ceil(currentFilteredProductscolor?.length / itemsPerPage);
    const shouldShowPaginationColor = dynamicPageCountColor > 1;

    const renderColorParagraphs = () => {
        const startIndex = currentPageColor * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const selectedColorItems = selectedColors.reduce((acc, color) => {
            switch (color) {
                case "Beige":
                    return acc.concat(beige || []);
                case "Black":
                    return acc.concat(black || []);
                case "Blue":
                    return acc.concat(blue || []);
                case "Brown":
                    return acc.concat(brown || []);
                case "Burgundy":
                    return acc.concat(burgundy || []);
                case "Coral":
                    return acc.concat(coral || []);
                case "Cream":
                    return acc.concat(cream || []);
                case "Green":
                    return acc.concat(green || []);
                case "Grey":
                    return acc.concat(grey || []);
                case "Magenta":
                    return acc.concat(magenta || []);
                case "Maroon":
                    return acc.concat(maroon || []);
                case "Multi":
                    return acc.concat(multi || []);
                case "Mustard":
                    return acc.concat(mustard || []);
                case "NavyBlue":
                    return acc.concat(navyblue || []);
                case "OffWhite":
                    return acc.concat(offwhite || []);
                case "Olive":
                    return acc.concat(olive || []);
                case "Orange":
                    return acc.concat(orange || []);
                case "Peach":
                    return acc.concat(peach || []);
                case "Pink":
                    return acc.concat(pink || []);
                case "Purple":
                    return acc.concat(purple || []);
                case "Red":
                    return acc.concat(red || []);
                case "Rust":
                    return acc.concat(rust || []);
                case "SeaGreen":
                    return acc.concat(seagreen || []);
                case "Teal":
                    return acc.concat(teal || []);
                case "TurquoiseBlue":
                    return acc.concat(turquoiseblue || []);
                case "White":
                    return acc.concat(white || []);
                case "Yellow":
                    return acc.concat(yellow || []);
                default:
                    return acc;
            }
        }, []);
        const pageItems = selectedColorItems?.length ? selectedColorItems?.slice(startIndex, endIndex) : extrasec?.slice(startIndex, endIndex);
        return pageItems?.map((item, i) => (
            <React.Fragment key={i}>
                <div className="p-0">
                    <p>{item.id}</p>
                    <p>{item.category}</p>
                    <div className="allimages">
                        <img src={item.image} alt={`Image ${item.id}`} className="img-fluid p-3" />
                        <img src={item.imagehover} className="img-fluid imagehover p-3" />
                    </div>
                </div>
            </React.Fragment>
        ));
    };


    const serverRenderedSizeContent = renderSizeParagraphs();
    const serverRenderedColorContent = renderColorParagraphs();
    return (
        <div>
            <div className="container-fluid g-0 mt-3">
                <div className="container g-0">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="sizeextra">
                        <div className="row p-0 g-0 mt-5 h-100 ">
                            <div className="col-4 col-md-3 col-lg-2 p-2 border  womenpagesubdiv1 px-0">
                                <div className="h-100 ">
                                    <div className="womenpagesideheadingset">
                                        <SizeKurta_Kurti
                                            showTabssize={showTabssize}
                                            handleSizeClick={handleSizeClick}
                                            sizeCheckboxState={sizeCheckboxState}
                                            handleSizeCheckboxChange={handleSizeCheckboxChange}
                                            firstt={firstt}
                                            secondd={secondd}
                                            thirdd={thirdd}
                                            forthh={forthh}
                                            fifthh={fifthh}
                                            sixthh={sixthh}
                                            seventhh={seventhh}
                                        />
                                        <ColorSelection
                                            showTabscolor={showTabscolor}
                                            handleSizeClickcolor={handleSizeClickcolor}
                                            colorCheckboxState={colorCheckboxState}
                                            handleColorCheckboxChange={handleColorCheckboxChange}
                                            beige={beige}
                                            black={black}
                                            blue={blue}
                                            brown={brown}
                                            burgundy={burgundy}
                                            coral={coral}
                                            cream={cream}
                                            green={green}
                                            grey={grey}
                                            magenta={magenta}
                                            maroon={maroon}
                                            multi={multi}
                                            mustard={mustard}
                                            navyblue={navyblue}
                                            offwhite={offwhite}
                                            olive={olive}
                                            orange={orange}
                                            peach={peach}
                                            pink={pink}
                                            purple={purple}
                                            red={red}
                                            rust={rust}
                                            seagreen={seagreen}
                                            teal={teal}
                                            turquoiseblue={turquoiseblue}
                                            white={white}
                                            yellow={yellow}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-md-9 col-lg-10 p-2 border  womenpagesubdiv2 px-0">
                                <div className=" h-100 ">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="sizeextra">
                                            <div>
                                                <h1>{extrasec?.no}</h1>
                                                <p>Showing {currentFilteredProductssize?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedSizeContent}</div>
                                            </div>
                                        </Tab.Pane>

                                        {/* right side heading */}
                                        <div className="d-flex flex-column">
                                            <SizeKurta_Kurti
                                                sizeCheckboxState={sizeCheckboxState}
                                                handleSizeCheckboxChange={handleSizeCheckboxChange}
                                            />

                                            <ColorSelection
                                                colorCheckboxState={colorCheckboxState}
                                                handleColorCheckboxChange={handleColorCheckboxChange}
                                            />
                                        </div>
                                        {/* size */}
                                        <Tab.Pane eventKey="sizefirst">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductssize?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedSizeContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sizesecond">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductssize?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedSizeContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sizethird">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductssize?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedSizeContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sizeforth">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductssize?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedSizeContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sizefifth">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductssize?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedSizeContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sizesixth">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductssize?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedSizeContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sizeseventh">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductssize?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedSizeContent}</div>
                                            </div>
                                        </Tab.Pane>



                                        {/* color */}
                                        <Tab.Pane eventKey="colorbeige">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorblack">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorblue">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorbrown">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorburgundy">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorcoral">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorcream">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorgreen">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorgrey">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colormagenta">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colormaroon">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colormulti">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colormustard">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colornavyblue">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="coloroffwhite">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorolive">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colororange">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorpeach">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorpink">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorpurple">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorred">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorrust">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorseagreen">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorteal">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorturquoiseblue">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="colorwhite">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="coloryellow">
                                            <div>
                                                <p style={{ color: "#636363" }} className="fs-5 mb-0">Showing {currentFilteredProductscolor?.length} Products</p>
                                                <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
                                            </div>
                                        </Tab.Pane>

                                    </Tab.Content>
                                </div>
                            </div>
                            {/* pagination print */}
                            {showPaginationSize && shouldShowPaginationSize && (
                                <CustomPagination
                                    pageCount={dynamicPageCountSize}
                                    onPageChange={handlePageClickSize}
                                    currentPage={currentPageSize}
                                />
                            )}

                            {showPaginationColor && shouldShowPaginationColor && (
                                <CustomPagination
                                    pageCount={dynamicPageCountColor}
                                    onPageChange={handlePageClickColor}
                                    currentPage={currentPageColor}
                                />
                            )}
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </div>
    );
};

export default Kurta_Kurti;

