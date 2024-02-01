// ColorSelection.js
import React from "react";
import { Nav } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const ColorSelection = ({
    showTabscolor,
    handleSizeClickcolor,
    colorCheckboxState,
    handleColorCheckboxChange,
    beige,
    black,
    blue,
    brown,
    burgundy,
    coral,
    cream,
    green,
    grey,
    magenta,
    maroon,
    multi,
    mustard,
    navyblue,
    offwhite,
    olive,
    orange,
    peach,
    pink,
    purple,
    red,
    rust,
    seagreen,
    teal,
    turquoiseblue,
    white,
    yellow


}) => {
    return (
        <>

            {
                handleSizeClickcolor ?
                    <div>
                        <div className="d-flex justify-content-between align-items-center me-3" style={{ cursor: "pointer" }} onClick={handleSizeClickcolor}>
                            <h6 className="mb-0">COLOR</h6>
                            <div>{showTabscolor ? <FaChevronUp /> : <FaChevronDown />}</div>
                        </div>
                        {showTabscolor && (
                            <>
                                <div style={{ height: "300px", overflowY: "scroll" }} className="scrollbardiv">
                                    <Nav.Link as="div" eventKey="colorbeige">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check"
                                                value="colorbeige"
                                                id="flexcolorCheckfirst"
                                                checked={colorCheckboxState.Beige}
                                                onChange={() => handleColorCheckboxChange("Beige")}
                                                style={{ cursor: "pointer" }}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckfirst" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(230, 228, 207)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Beige({beige?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorblack">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check1"
                                                value="colorblack"
                                                id="flexcolorChecksecond"
                                                checked={colorCheckboxState.Black}
                                                onChange={() => handleColorCheckboxChange("Black")}
                                                style={{ cursor: "pointer" }}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecksecond" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(0, 0, 0)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Black({black?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorblue">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check2"
                                                value="colorblue"
                                                id="flexcolorCheckthird"
                                                checked={colorCheckboxState.Blue}
                                                onChange={() => handleColorCheckboxChange("Blue")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckthird" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(3, 116, 212)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Blue({blue?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorbrown">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check3"
                                                value="colorbrown"
                                                id="flexcolorCheckforth"
                                                checked={colorCheckboxState.Brown}
                                                onChange={() => handleColorCheckboxChange("Brown")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckforth" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(141, 83, 61)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Brown({brown?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorburgundy">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check4"
                                                value="colorburgundy"
                                                id="flexcolorCheckfifth"
                                                checked={colorCheckboxState.Burgundy}
                                                onChange={() => handleColorCheckboxChange("Burgundy")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckfifth" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(164, 52, 74)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Burgundy({burgundy?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorcoral">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check5"
                                                value="colorcoral"
                                                id="flexcolorChecksixth"
                                                checked={colorCheckboxState.Coral}
                                                onChange={() => handleColorCheckboxChange("Coral")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecksixth" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(249, 130, 87)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Coral({coral?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorcream">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check6"
                                                value="colorcream"
                                                id="flexcolorCheckseventh"
                                                checked={colorCheckboxState.Cream}
                                                onChange={() => handleColorCheckboxChange("Cream")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckseventh" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(238, 229, 186)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Cream({cream?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorgreen">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check7"
                                                value="colorgreen"
                                                id="flexcolorCheckeighth"
                                                checked={colorCheckboxState.Green}
                                                onChange={() => handleColorCheckboxChange("Green")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckeighth" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(94, 176, 102)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Green({green?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorgrey">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check8"
                                                value="colorgrey"
                                                id="flexcolorCheckninth"
                                                checked={colorCheckboxState.Grey}
                                                onChange={() => handleColorCheckboxChange("Grey")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckninth" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(159, 169, 171)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Grey({grey?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colormagenta">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check9"
                                                value="colormagenta"
                                                id="flexcolorChecktenth"
                                                checked={colorCheckboxState.Magenta}
                                                onChange={() => handleColorCheckboxChange("Magenta")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktenth" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(195, 77, 161)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Magenta({magenta?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colormaroon">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check10"
                                                value="colormaroon"
                                                id="flexcolorCheckeleventh"
                                                checked={colorCheckboxState.Maroon}
                                                onChange={() => handleColorCheckboxChange("Maroon")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckeleventh" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(178, 47, 97)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Maroon({maroon?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colormulti">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check11"
                                                value="colormulti"
                                                id="flexcolorChecktwelveth"
                                                checked={colorCheckboxState.Multi}
                                                onChange={() => handleColorCheckboxChange("Multi")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktwelveth" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "linear-gradient(45deg, green, blue, orange)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Multi({multi?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colormustard">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check12"
                                                value="colormustard"
                                                id="flexcolorCheckthirteen"
                                                checked={colorCheckboxState.Mustard}
                                                onChange={() => handleColorCheckboxChange("Mustard")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckthirteen" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(205, 155, 42)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Mustard({mustard?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colornavyblue">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check13"
                                                value="colornavyblue"
                                                id="flexcolorCheckfourteen"
                                                checked={colorCheckboxState.NavyBlue}
                                                onChange={() => handleColorCheckboxChange("NavyBlue")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckfourteen" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(61, 72, 117)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> NavyBlue({navyblue?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="coloroffwhite">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check14"
                                                value="coloroffwhite"
                                                id="flexcolorCheckfifteen"
                                                checked={colorCheckboxState.OffWhite}
                                                onChange={() => handleColorCheckboxChange("OffWhite")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckfifteen" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(242, 242, 242)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> OffWhite({offwhite?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorolive">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check15"
                                                value="colorolive"
                                                id="flexcolorChecksixteen"
                                                checked={colorCheckboxState.Olive}
                                                onChange={() => handleColorCheckboxChange("Olive")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecksixteen" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(66, 151, 110)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Olive({olive?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colororange">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check16"
                                                value="colororange"
                                                id="flexcolorCheckseventeen"
                                                checked={colorCheckboxState.Orange}
                                                onChange={() => handleColorCheckboxChange("Orange")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckseventeen" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(246, 139, 35)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Orange({orange?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorpeach">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check17"
                                                value="colorpeach"
                                                id="flexcolorCheckeighteen"
                                                checked={colorCheckboxState.Peach}
                                                onChange={() => handleColorCheckboxChange("Peach")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorCheckeighteen" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(255, 232, 182)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Peach({peach?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorpink">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check18"
                                                value="colorpink"
                                                id="flexcolorChecknineteen"
                                                checked={colorCheckboxState.Pink}
                                                onChange={() => handleColorCheckboxChange("Pink")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecknineteen" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(241, 168, 197)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Pink({pink?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorpurple">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check19"
                                                value="colorpurple"
                                                id="flexcolorChecktwenty"
                                                checked={colorCheckboxState.Purple}
                                                onChange={() => handleColorCheckboxChange("Purple")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktwenty" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(129, 1, 124)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Purple({purple?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorred">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check20"
                                                value="colorred"
                                                id="flexcolorChecktwentyone"
                                                checked={colorCheckboxState.Red}
                                                onChange={() => handleColorCheckboxChange("Red")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktwentyone" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(217, 72, 87)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Red({red?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorrust">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check21"
                                                value="colorrust"
                                                id="flexcolorChecktwentytwo"
                                                checked={colorCheckboxState.Rust}
                                                onChange={() => handleColorCheckboxChange("Rust")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktwentytwo" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(181, 62, 22)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Rust({rust?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorseagreen">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check22"
                                                value="colorseagreen"
                                                id="flexcolorChecktwentythree"
                                                checked={colorCheckboxState.SeaGreen}
                                                onChange={() => handleColorCheckboxChange("SeaGreen")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktwentythree" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(46, 139, 87)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> SeaGreen({seagreen?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorteal">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check23"
                                                value="colorteal"
                                                id="flexcolorChecktwentyfour"
                                                checked={colorCheckboxState.Teal}
                                                onChange={() => handleColorCheckboxChange("Teal")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktwentyfour" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(5, 122, 113)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Teal({teal?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorturquoiseblue">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check24"
                                                value="colorturquoiseblue"
                                                id="flexcolorChecktwentyfive"
                                                checked={colorCheckboxState.TurquoiseBlue}
                                                onChange={() => handleColorCheckboxChange("TurquoiseBlue")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktwentyfive" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(66, 222, 208)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> TurquoiseBlue({turquoiseblue?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="colorwhite">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check25"
                                                value="colorwhite"
                                                id="flexcolorChecktwentysix"
                                                checked={colorCheckboxState.White}
                                                onChange={() => handleColorCheckboxChange("White")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktwentysix" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(255, 255, 255)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> White({white?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="div" eventKey="coloryellow">
                                        <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input forminput"
                                                type="checkbox"
                                                name="check26"
                                                value="coloryellow"
                                                id="flexcolorChecktwentyseven"
                                                checked={colorCheckboxState.Yellow}
                                                onChange={() => handleColorCheckboxChange("Yellow")}
                                            />
                                            <label className="form-check-label" htmlFor="flexcolorChecktwentyseven" style={{ cursor: "pointer" }}>
                                                <GoDotFill style={{ background: "rgb(237, 219, 51)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Yellow({yellow?.length})
                                            </label>
                                        </div>
                                    </Nav.Link>
                                </div>
                            </>
                        )}

                    </div> :
                  <div className="mb-3" style={{ display: 'flex',flexDirection:"row" ,flexWrap:"wrap"}}>
                        <span onClick={() => handleColorCheckboxChange("Beige")}>
                            {colorCheckboxState?.Beige ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center">Beige <RxCross2 className="fs-6 ms-1" /> </h6>
                                </div>
                                : null}
                        </span>

                        <span onClick={() => handleColorCheckboxChange("Black")}>
                            {colorCheckboxState?.Black ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Black<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Blue")}>
                            {colorCheckboxState?.Blue ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Blue<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Brown")}>
                            {colorCheckboxState?.Brown ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Brown<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Burgundy")}>
                            {colorCheckboxState?.Burgundy ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Burgundy<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Coral")}>
                            {colorCheckboxState?.Coral ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Coral<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Cream")}>
                            {colorCheckboxState?.Cream ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Cream<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Green")}>
                            {colorCheckboxState?.Green ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Green<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Grey")}>
                            {colorCheckboxState?.Grey ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Grey<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Magenta")}>
                            {colorCheckboxState?.Magenta ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Magenta<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Maroon")}>
                            {colorCheckboxState?.Maroon ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Maroon<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Multi")}>
                            {colorCheckboxState?.Multi ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Multi<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Mustard")}>
                            {colorCheckboxState?.Mustard ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Mustard<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("NavyBlue")}>
                            {colorCheckboxState?.NavyBlue ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> NavyBlue<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("OffWhite")}>
                            {colorCheckboxState?.OffWhite ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> OffWhite<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Olive")}>
                            {colorCheckboxState?.Olive ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Olive<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Orange")}>
                            {colorCheckboxState?.Orange ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Orange<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Peach")}>
                            {colorCheckboxState?.Peach ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Peach<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Pink")}>
                            {colorCheckboxState?.Pink ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Pink<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Purple")}>
                            {colorCheckboxState?.Purple ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Purple<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Red")}>
                            {colorCheckboxState?.Red ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Red<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Rust")}>
                            {colorCheckboxState?.Rust ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Rust<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("SeaGreen")}>
                            {colorCheckboxState?.SeaGreen ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> SeaGreen<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Teal")}>
                            {colorCheckboxState?.Teal ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Teal<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("TurquoiseBlue")}>
                            {colorCheckboxState?.TurquoiseBlue ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> TurquoiseBlue<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("White")}>
                            {colorCheckboxState?.White ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> White<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleColorCheckboxChange("Yellow")}>
                            {colorCheckboxState?.Yellow ?
                                <div className="alldataheading me-2 mb-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> Yellow<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                    </div>

            }
        </>
    );
};

export default ColorSelection;
