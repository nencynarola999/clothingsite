// SizeSection.js
import React from "react";
import { Nav } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const SizeKurta_Kurti = ({
    showTabssize,
    handleSizeClick,
    sizeCheckboxState,
    handleSizeCheckboxChange,
    firstt,
    secondd,
    thirdd,
    forthh,
    fifthh,
    sixthh,
    seventhh,

}) => {

    return (
        <>

            {
                handleSizeClick ?
                    <div className="h-100 ">
                        <br />
                        <div
                            className="d-flex justify-content-between align-items-center me-3"
                            style={{ cursor: "pointer" }}
                            onClick={handleSizeClick}
                        >
                            <h6 className="mb-0">SIZE</h6>
                            <div>{showTabssize ? <FaChevronUp /> : <FaChevronDown />}</div>
                        </div>
                        {showTabssize && (
                            <>
                                <Nav.Link as="div" eventKey="sizefirst">
                                    <div className="form-check ms-3 ms-sm-0">
                                        <input
                                            className="form-check-input forminput"
                                            type="checkbox"
                                            name="check"
                                            value="sizefirst"
                                            id="flexCheckfirst"
                                            checked={sizeCheckboxState.firstt}
                                            onChange={() => handleSizeCheckboxChange("firstt")}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckfirst"
                                            style={{ cursor: "pointer" }}
                                        >
                                            XS ({firstt?.length})
                                        </label>
                                    </div>
                                </Nav.Link>
                                <Nav.Link as="div" eventKey="sizesecond">
                                    <div className="form-check ms-3 ms-sm-0">
                                        <input
                                            className="form-check-input forminput"
                                            type="checkbox"
                                            name="check1"
                                            value="sizesecond"
                                            id="flexChecksecond"
                                            checked={sizeCheckboxState.secondd}
                                            onChange={() => handleSizeCheckboxChange("secondd")}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexChecksecond"
                                            style={{ cursor: "pointer" }}
                                        >
                                            S ({secondd?.length})
                                        </label>
                                    </div>
                                </Nav.Link>
                                <Nav.Link as="div" eventKey="sizethird">
                                    <div className="form-check ms-3 ms-sm-0">
                                        <input
                                            className="form-check-input forminput"
                                            type="checkbox"
                                            name="check2"
                                            value="sizethird"
                                            id="flexCheckthird"
                                            checked={sizeCheckboxState.thirdd}
                                            onChange={() => handleSizeCheckboxChange("thirdd")}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckthird"
                                            style={{ cursor: "pointer" }}
                                        >
                                            M ({thirdd?.length})
                                        </label>
                                    </div>
                                </Nav.Link>
                                <Nav.Link as="div" eventKey="sizeforth">
                                    <div className="form-check ms-3 ms-sm-0">
                                        <input
                                            className="form-check-input forminput"
                                            type="checkbox"
                                            name="check3"
                                            value="sizeforth"
                                            id="flexCheckforth"
                                            checked={sizeCheckboxState.forthh}
                                            onChange={() => handleSizeCheckboxChange("forthh")}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckforth"
                                            style={{ cursor: "pointer" }}
                                        >
                                            L ({forthh?.length})
                                        </label>
                                    </div>
                                </Nav.Link>
                                <Nav.Link as="div" eventKey="sizefifth">
                                    <div className="form-check ms-3 ms-sm-0">
                                        <input
                                            className="form-check-input forminput"
                                            type="checkbox"
                                            name="check4"
                                            value="sizefifth"
                                            id="flexCheckfifth"
                                            checked={sizeCheckboxState.fifthh}
                                            onChange={() => handleSizeCheckboxChange("fifthh")}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckfifth"
                                            style={{ cursor: "pointer" }}
                                        >
                                            XL ({fifthh?.length})
                                        </label>
                                    </div>
                                </Nav.Link>
                                <Nav.Link as="div" eventKey="sizesixth">
                                    <div className="form-check ms-3 ms-sm-0">
                                        <input
                                            className="form-check-input forminput"
                                            type="checkbox"
                                            name="check5"
                                            value="sizesixth"
                                            id="flexChecksixth"
                                            checked={sizeCheckboxState.sixthh}
                                            onChange={() => handleSizeCheckboxChange("sixthh")}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexChecksixth"
                                            style={{ cursor: "pointer" }}
                                        >
                                            XXL ({sixthh?.length})
                                        </label>
                                    </div>
                                </Nav.Link>
                                <Nav.Link as="div" eventKey="sizeseventh">
                                    <div className="form-check ms-3 ms-sm-0">
                                        <input
                                            className="form-check-input forminput"
                                            type="checkbox"
                                            name="check6"
                                            value="sizeseventh"
                                            id="flexCheckseventh"
                                            checked={sizeCheckboxState.seventhh}
                                            onChange={() => handleSizeCheckboxChange("seventhh")}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckseventh"
                                            style={{ cursor: "pointer" }}
                                        >
                                            3XL ({seventhh?.length})
                                        </label>
                                    </div>
                                </Nav.Link>
                            </>
                        )}
                    </div>
                    : <div className="mb-2" style={{ display: 'flex' }}>
                        <span onClick={() => handleSizeCheckboxChange("firstt")} className="">
                            {sizeCheckboxState?.firstt ?
                                <div className="alldataheading me-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center">XS <RxCross2 className="fs-6 ms-1" /> </h6>
                                </div>
                                : null}
                        </span>

                        <span onClick={() => handleSizeCheckboxChange("secondd")}>
                            {sizeCheckboxState?.secondd ?
                                <div className="alldataheading me-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> S<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>

                        <span onClick={() => handleSizeCheckboxChange("thirdd")}>
                            {sizeCheckboxState?.thirdd ?
                                <div className="alldataheading me-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> M<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>

                        <span onClick={() => handleSizeCheckboxChange("forthh")}>
                            {sizeCheckboxState?.forthh ?
                                <div className="alldataheading me-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> L<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>

                        <span onClick={() => handleSizeCheckboxChange("fifthh")}>
                            {sizeCheckboxState?.fifthh ?
                                <div className="alldataheading me-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> XL<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleSizeCheckboxChange("sixthh")}>
                            {sizeCheckboxState?.sixthh ?
                                <div className="alldataheading me-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> XXl<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                        <span onClick={() => handleSizeCheckboxChange("seventhh")}>
                            {sizeCheckboxState?.seventhh ?
                                <div className="alldataheading me-2">
                                    <h6 className="mb-0 d-flex justify-content-center align-items-center"> 3XL<RxCross2 className="fs-6 ms-1 d-flex justify-content-center align-items-center" /> </h6>
                                </div>
                                : null}
                        </span>
                    </div>
            }
        </>
    );
};

export default SizeKurta_Kurti;
