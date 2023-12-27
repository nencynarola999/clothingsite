import Link from "next/link";
import React, { useState } from "react"
import { Dropdown, Offcanvas } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const MenMobile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    return (
        <>
            <Dropdown autoClose="outside " >
                <div variant="auto" className="nav1link mt-xl-0  w-100 d-flex justify-content-evenly align-items-center" onClick={handleShow} >
                    Men <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span>
                </div>
            </Dropdown>
            <Offcanvas show={show} onHide={handleClose} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <Link href="/men"> Men</Link> </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <h6 onClick={handleShow1} className="d-flex justify-content-between">Top Wear<span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <h6 onClick={handleShow2} className="d-flex justify-content-between">Bottom Wear  <span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <h6 onClick={handleShow3} className="d-flex justify-content-between">Watches  <span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <h6 onClick={handleShow4} className="d-flex justify-content-between">Sunglasses  <span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <h6 onClick={handleShow5} className="d-flex justify-content-between">Shoes  <span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show1} onHide={handleClose1} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <Link href="/men/topwear"> TOP WEAR </Link> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link href="/men/topwear/casualshirts" legacyBehavior><a><p>Casual Shirts</p></a></Link>
                    <hr />
                    <Link href="/men/topwear/formalshirts" legacyBehavior><a><p>Formal Shirts</p></a></Link>
                    <hr />
                    <Link href="/men/topwear/polos" legacyBehavior><a><p> Polos</p></a></Link>
                    <hr />
                    <Link href="/men/topwear/tshirts" legacyBehavior><a><p> T-Shirts</p></a></Link>
                    <hr />
                    <Link href="/men/topwear/jackets" legacyBehavior><a><p>Jackets</p></a></Link>
                    <hr />
                    <Link href="/men/topwear/hoodiesandsweatshirts" legacyBehavior><a><p>Hoodies & Sweatshirts</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show2} onHide={handleClose2} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <Link href="/men/bottomwear"> BOTTOM WEAR </Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Link href="/men/bottomwear/casualtrousers" legacyBehavior><a><p> Casual Trousers</p></a></Link>
                    <hr />
                    <Link href="/men/bottomwear/formaltrousers" legacyBehavior><a><p>Formal Trousers</p></a></Link>
                    <hr />
                    <Link href="/men/bottomwear/jeans" legacyBehavior><a><p>Jeans</p></a></Link>
                    <hr />
                    <Link href="/men/bottomwear/trackpants" legacyBehavior><a><p>Track Pants</p></a></Link>
                    <hr />
                    <Link href="/men/bottomwear/trousers" legacyBehavior><a><p>Trousers</p></a></Link>
                    <hr />
                    <Link href="/men/bottomwear/shorts" legacyBehavior><a><p>Shorts & 3/4ths</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show3} onHide={handleClose3} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link href="/men/watches">WATCHES</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Link href="/men/watches/roundwatches" legacyBehavior><a><p>Round watches</p></a></Link>
                    <hr />
                    <Link href="/men/watches/analogwatches" legacyBehavior><a><p>Analog watches</p></a></Link>
                    <hr />
                    <Link href="/men/watches/automaticwatches" legacyBehavior><a><p>Automatic watches</p></a></Link>
                    <hr />
                    <Link href="/men/watches/chronographwatches" legacyBehavior><a><p>Chronograph watches</p></a></Link>
                    <hr />
                    <Link href="/men/watches/multifunctionwatches" legacyBehavior><a><p>Multi Function watches</p></a></Link>
                    <hr />
                    <Link href="/men/watches/smartwatches" legacyBehavior><a><p>Smart watches</p></a></Link>
                    <hr />
                    <Link href="/men/watches/fitnesstrackers" legacyBehavior><a><p>Fitness trackers</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show4} onHide={handleClose4} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link href="/men/sunglasses">SUNGLASSES</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Link href="/men/sunglasses/aviator" legacyBehavior><a><p>Aviator</p></a></Link>
                    <hr />
                    <Link href="/men/sunglasses/wayfarer" legacyBehavior><a><p>Wayfarer</p></a></Link>
                    <hr />
                    <Link href="/men/sunglasses/square" legacyBehavior><a><p>Square</p></a></Link>
                    <hr />
                    <Link href="/men/sunglasses/sporty" legacyBehavior><a><p>Sporty</p></a></Link>
                    <hr />
                    <Link href="/men/sunglasses/rectangle" legacyBehavior><a><p>Rectangle</p></a></Link>
                    <hr />
                    <Link href="/men/sunglasses/round" legacyBehavior><a><p>Round</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show5} onHide={handleClose5} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link href="/men/shoes">SHOES</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Link href="/men/shoes/loafersandmoccasin" legacyBehavior><a><p>Loafers & Moccasin</p></a></Link>
                    <hr />
                    <Link href="/men/shoes/slipons" legacyBehavior><a><p>Slip-Ons</p></a></Link>
                    <hr />
                    <Link href="/men/shoes/sportsshoesandsneakers" legacyBehavior><a><p>Sports Shoes & Sneakers</p></a></Link>
                    <hr />
                    <Link href="/men/shoes/laceup" legacyBehavior><a><p>Lace up</p></a></Link>
                    <hr />
                    <Link href="/men/shoes/slippersandsliders" legacyBehavior><a><p>Slippers and Sliders</p></a></Link>
                    <hr />
                    <Link href="/men/shoes/floatersandsandals" legacyBehavior><a><p>Floaters & Sandals</p></a></Link>
                    <hr />
                    <Link href="/men/shoes/boots" legacyBehavior><a><p>Boots</p></a></Link>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default MenMobile