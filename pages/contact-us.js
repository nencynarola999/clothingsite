import Link from "next/link";
import React, { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const contactus = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <div className="container-fluid g-0 mt-5 p-0 contactpage">
                {/* <div className="container p-0">
<h2 className="px-3 px-md-0 contactstarth2">Contact Us</h2>
</div> */}
                <div className="container p-3 p-md-0 mt-5 m-auto">
                    <h1 className="text-center contacth1">We are wating to assist you..</h1>
                    <p className="text-center contactp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quos.</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.23294613675!2d72.88239955000003!3d21.245560049999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1700715058156!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <div className="row mt-3">
                        <div className="col-12 col-md-7">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3 mt-4">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Your name"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Email"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="number"
                                            placeholder="Number"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Brand Name"

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group className="mb-3" as={Col} md="9">
                                        <Form.Control as="textarea"
                                            placeholder="Message"
                                            rows={8}
                                        />
                                    </Form.Group>
                                </Row>
                                <button className="contactbtn">SUBMIT</button>
                            </Form>
                        </div>
                        <div className="col-12 col-md-5 px-3 px-lg-5 py-4">
                            <h4 className="contacth4">Daily Shopping Availabel</h4>
                            <p className="contactp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum modi dolor facilis! Nihil error, eius.</p>
                            <div className="d-flex mb-2">
                                <FaHome className=" contacticon me-3" />
                                <h6 className="contacth6">Huntsville, AL 35813, USA</h6>
                            </div>
                            <Link href="tel:+ 021.343.7575" className="d-flex mb-2" >
                                <FaPhoneAlt className=" contacticon me-3" />
                                <h6 className="contacth6">+ 021.343.7575</h6>
                            </Link>
                            <Link href="mailto: @gmail.com" className="d-flex mb-2" >
                                <IoMdMail className=" contacticon me-3" />
                                <h6 className="contacth6">Email: support@dailyshop.com</h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contactus