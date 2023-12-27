import Link from "next/link";
import React, { useState } from "react"
import { Alert, Button, Offcanvas } from "react-bootstrap"
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>

            <div onClick={handleShow} className="d-flex align-items-center me-2 pt-3 pt-lg-0">
               <Link href="" className="fs-4 "> <AiOutlineSearch /></Link>
            </div>
            <Offcanvas show={show} onHide={handleClose} className="offcanvas offcanvas-top">
                <div className="container p-0">
                    <Offcanvas.Header closeButton className="p-0 d-flex justify-content-center align-items-center">
                        <AiOutlineSearch className="fs-4 me-3 " />
                        <Offcanvas.Body className="p-0">
                            <form className="w-100">
                                <input
                                    type="text"
                                    id="search-form"
                                    className="form-control p-2 fs-5"
                                    placeholder="Type keyword and hit enter"
                                />
                            </form>
                        </Offcanvas.Body>
                    </Offcanvas.Header>
                </div>
            </Offcanvas>
        </>

    )
}
export default Search