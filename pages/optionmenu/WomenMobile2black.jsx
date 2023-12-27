import useSticky from "@/reusablecomponent/useSticky";
import Link from "next/link";
import React, { useState } from "react"
import { Container, Dropdown, DropdownButton, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const WomenMobile2black = () => {
    const sticky = useSticky(300);

    const nav2link1 = "nav2link1 ";
    const nav2link2 = "nav2link2"
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
    return (
        <>
            <Dropdown autoClose="outside " >
                <div className={sticky ? nav2link2 : nav2link1}>
                    <Link href="" variant="auto" className=" mt-xl-0  w-100 d-flex justify-content-evenly align-items-center" onClick={handleShow} >
                        Women <span className="ms-auto fs-2"><MdOutlineKeyboardArrowRight /></span>
                    </Link>
                </div>
            </Dropdown>
            <Offcanvas show={show} onHide={handleClose} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <Link href="/women">Women</Link> </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <h6 onClick={handleShow1} className="d-flex justify-content-between">Ethnic & Fusion Wear<span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <h6 onClick={handleShow2} className="d-flex justify-content-between">Western Wear  <span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <h6 onClick={handleShow3} className="d-flex justify-content-between">SportsWear  <span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <Link href="/women/beauty" legacyBehavior><a><h6>Beauty</h6></a></Link>
                    <hr />
                    <Link href="/women/footwearandbags" legacyBehavior><a><h6>Footwear/Bags</h6></a></Link>
                    <hr />
                    <Link href="/women/watches" legacyBehavior><a><h6>Watches</h6></a></Link>
                    <hr />
                    <Link href="/women/jewellery" legacyBehavior><a><h6>Jewellery</h6></a></Link>
                    <hr />
                    <Link href="/women/fragrances" legacyBehavior><a><h6>Fragrances</h6></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show1} onHide={handleClose1} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link href="/women/ethnicfusion">ETHNIC & FUSION WEAR</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link href="/women/ethnicfusion/kurtaandkurtis" legacyBehavior><a><p>Kurtas & Kurtis</p></a></Link>
                    <hr />
                    <Link href="/women/ethnicfusion/kurtasets" legacyBehavior><a><p>Kurta Sets</p></a></Link>
                    <hr />
                    <Link href="/women/ethnicfusion/ethnicdresses" legacyBehavior><a><p>Ethnic Dresses</p></a></Link>
                    <hr />
                    <Link href="/women/ethnicfusion/topsandtunics" legacyBehavior><a><p>Tops & Tunics</p></a></Link>
                    <hr />
                    <Link href="/women/ethnicfusion/leggingsandchuridars" legacyBehavior><a><p>Leggings & Churidars</p></a></Link>
                    <hr />
                    <Link href="/women/ethnicfusion/pantsandpalazzos" legacyBehavior><a><p>Pants & Palazzos</p></a></Link>
                    <hr />
                    <Link href="/women/ethnicfusion/skirts" legacyBehavior><a><p>Skirts</p></a></Link>
                    <hr />
                    <Link href="/women/ethnicfusion/dupattasandstoles" legacyBehavior><a><p>Dupattas & Stoles</p></a></Link>
                    <hr />
                    <Link href="/women/ethnicfusion/saree" legacyBehavior><a><p>Saree</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show2} onHide={handleClose2} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <Link href="/women/westernwear">WESTERN WEAR</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Link href="/women/westernwear/topsandtees" legacyBehavior><a><p>Tops & Tees</p></a></Link>
                    <hr />
                    <Link href="/women/westernwear/dressesandjumpsuits" legacyBehavior><a><p>Dresses & Jumpsuits</p></a></Link>
                    <hr />
                    <Link href="/women/westernwear/jeansandjeggings" legacyBehavior><a><p>Jeans & Jeggings</p></a></Link>
                    <hr />
                    <Link href="/women/westernwear/shortsandskirts" legacyBehavior><a><p>Shorts & Skirts</p></a></Link>
                    <hr />
                    <Link href="/women/westernwear/trousers" legacyBehavior><a><p>Trousers</p></a></Link>
                    <hr />
                    <Link href="/women/westernwear/jacketsandshrugs" legacyBehavior><a><p>Jackets & Shrugs</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show3} onHide={handleClose3} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link href="/women/sportswear">SPORTSWEAR</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Link href="/women/sportswear/topstees" legacyBehavior><a><p>Tops & Tees</p></a></Link>
                    <hr />
                    <Link href="/women/sportswear/leggings" legacyBehavior><a><p>Leggings</p></a></Link>
                    <hr />
                    <Link href="/women/sportswear/joggersandtracks" legacyBehavior><a><p>Joggers & Tracks</p></a></Link>
                    <hr />
                    <Link href="/women/sportswear/sweatshirtsandjackets" legacyBehavior><a><p>Sweatshirts & Jackets</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


export default WomenMobile2black