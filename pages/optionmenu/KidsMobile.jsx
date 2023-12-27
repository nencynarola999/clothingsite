import Link from "next/link";
import React, { useState } from "react"
import { Dropdown, Offcanvas } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const KidsMobile = () => {
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
                <Link href="" variant="auto" className=" nav1link w-100 d-flex justify-content-evenly align-items-center" onClick={handleShow} >
                    Kids <span className="ms-auto fs-2 ms-5"><MdOutlineKeyboardArrowRight /></span>
                </Link>
            </Dropdown>
            <Offcanvas show={show} onHide={handleClose} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <Link href="/kids"> Kids </Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <h6 onClick={handleShow1} className="d-flex justify-content-between">Boys<span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <h6 onClick={handleShow2} className="d-flex justify-content-between">Girls<span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <h6 onClick={handleShow3} className="d-flex justify-content-between">Accessories  <span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <h6 onClick={handleShow4} className="d-flex justify-content-between">Age Store<span><MdOutlineKeyboardArrowRight style={{ marginLeft: "10px" }} /></span> </h6><hr />
                    <Link href="/kids/shopboysfootwear" legacyBehavior><a><h6>Shop Boys Footwear</h6></a></Link>
                    <hr />
                    <Link href="/kids/shopgirlsfootwear" legacyBehavior><a><h6>Shop Girls Footwear</h6></a></Link>

                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show1} onHide={handleClose1} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <Link href="/kids/boys"> BOYS</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link href="/kids/boys/tshirtsandpolos" legacyBehavior><a><p>T-Shirts/Polos</p></a></Link>
                    <hr />
                    <Link href="/kids/boys/shirts" legacyBehavior><a><p>Shirts</p></a></Link>
                    <hr />
                    <Link href="/kids/boys/jeans" legacyBehavior><a><p>Jeans</p></a></Link>
                    <hr />
                    <Link href="/kids/boys/shorts" legacyBehavior><a><p>Shorts</p></a></Link>
                    <hr />
                    <Link href="/kids/boys/trackpantsandjoggers" legacyBehavior><a><p>Trackpants & Joggers</p></a></Link>
                    <hr />
                    <Link href="/kids/boys/sweatshirtsandhoodies" legacyBehavior><a><p>Sweatshirts & hoodies</p></a></Link>
                    <hr />
                    <Link href="/kids/boys/pants" legacyBehavior><a><p>Pants</p></a></Link>
                    <hr />
                    <Link href="/kids/boys/clothing" legacyBehavior><a><p>Clothing </p></a></Link>
                    <hr />
                    <Link href="/kids/boys/jacketsandwaistcoat" legacyBehavior><a><p>Jackets & Waistcoat</p></a></Link>
                    <hr />
                    <Link href="/kids/boys/innerwear" legacyBehavior><a><p>Innerwear</p></a></Link>
                    <hr />
                    <Link href="/kids/boys/ethnicWear" legacyBehavior><a><p>Ethnic Wear</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas >
            <Offcanvas show={show2} onHide={handleClose2} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link href="/kids/girls">GIRLS</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Link href="/kids/girls/topsandtees" legacyBehavior><a><p>Tops & Tees</p></a></Link>
                    <hr />
                    <Link href="/kids/girls/dressesandjumpsuits" legacyBehavior><a><p>Dresses/Jumpsuits</p></a></Link>
                    <hr />
                    <Link href="/kids/girls/clothingsets" legacyBehavior><a><p>Clothing Sets</p></a></Link>
                    <hr />
                    <Link href="/kids/girls/jeans" legacyBehavior><a><p>Jeans</p></a></Link>
                    <hr />
                    <Link href="/kids/girls/knitbottoms" legacyBehavior><a><p>Knit Bottoms</p></a></Link>
                    <hr />
                    <Link href="/kids/girls/innerwear" legacyBehavior><a><p>Innerwear</p></a></Link>
                    <hr />
                    <Link href="/kids/girls/shortsandskirts" legacyBehavior><a><p>Shorts & Skirts</p></a></Link>
                    <hr />
                    <Link href="/kids/girls/trackpantsandjoggers" legacyBehavior><a><p>TrackPants/Joggers</p></a></Link>
                    <hr />
                    <Link href="/kids/girls/ethnicwear" legacyBehavior><a><p>Ethnic Wear</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show3} onHide={handleClose3} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link href="/kids/accessories">ACCESSORIES</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Link href="/kids/accessories/kidssunglasses" legacyBehavior><a><p>Kids Sunglasses</p></a></Link>
                    <hr />
                    <Link href="/kids/accessories/kidswatches" legacyBehavior><a><p>Kids Watches</p></a></Link>
                    <hr />
                    <Link href="/kids/accessories/capsandhats" legacyBehavior><a><p>Caps & Hats</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={show4} onHide={handleClose4} className="offcanvas offcanvas-end2 ">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link href="/kids/agestore">AGE STORE</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>

                    <Link href="/kids/agestore/0-2year" legacyBehavior><a><p>0-2 yrs</p></a></Link>
                    <hr />
                    <Link href="/kids/agestore/2-4year" legacyBehavior><a><p>2-4 yrs</p></a></Link>
                    <hr />
                    <Link href="/kids/agestore/4-6year" legacyBehavior><a><p>4-6 yrs</p></a></Link>
                    <hr />
                    <Link href="/kids/agestore/6-10year" legacyBehavior><a><p>6-10 yrs</p></a></Link>
                    <hr />
                    <Link href="/kids/agestore/10-13year" legacyBehavior><a><p>10-13 yrs</p></a></Link>
                    <hr />
                    <Link href="/kids/agestore/13-16year" legacyBehavior><a><p>13-16 yrs</p></a></Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default KidsMobile