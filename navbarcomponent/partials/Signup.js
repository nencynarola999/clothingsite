import Register from "@/pages/register";
import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="pt-3 pt-lg-0">
    <Button onClick={handleShow} className="btn1">
        Sign up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
         
          <Register />
        </Modal.Header>
     
      </Modal>
    </div>
    </>
  )
}

export default Signup