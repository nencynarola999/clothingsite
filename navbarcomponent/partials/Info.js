import NextLink from "@/reusablecomponent/NextLink";
import SocialLinks from "@/reusablecomponent/SocialLinks";
import React, { Fragment, useState } from "react"
import { Offcanvas } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai"

const Info = (props) => {
  // console.log(props, "njnjn")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { title="string", description="string", address="string", phone="string" } = props;

  const otherPages = [
    { title: "Our Story", url: "#" },
    { title: "Terms of Use", url: "#" },
    { title: "Privacy Policy", url: "#" },
    { title: "Contact Us", url: "#" }
  ];
  return (
    <>
      <div onClick={handleShow} className="d-flex align-items-center mb-1 mb-md-0 me-2 pt-3 pt-lg-0">
        <a className="fs-4" style={{cursor:"pointer"}}><AiOutlineInfoCircle /></a>
      </div>
      <Offcanvas show={show} onHide={handleClose} className="offcanvas offcanvas-end bg-black opacity-75">
        <div className="container p-0">
          <div>
            <Offcanvas.Header closeButton>
              <h3 className="fs-2 mb-0 text-white">{title}</h3>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <div className="infotext">
                <p>{description}</p>
              </div>

              <div className="infotext">
                <h4 className="text-white my-4">Contact Info</h4>
                <address>{address}</address>
                <NextLink
                  title="info@email.com"
                  href="mailto:first.last@email.com"
                />
                <br />
                <NextLink href="tel:0123456789" title={phone} />
              </div>

              <div className="infotext">
                <h4 className=" text-white my-4">Learn More</h4>
                <ul className="list-unstyled">
                  {otherPages.map((item) => (
                    <li key={item.title}>
                      <NextLink href="#" title={item.title} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="infotext">
                <h4 className="text-white my-4">Follow Us</h4>
                <SocialLinks className="text-white nav1icon fs-4 me-2" />
              </div>
            </Offcanvas.Body>
          </div>
        </div>
      </Offcanvas>
    </>
  )
}
Info.defaultProps = {
  title: "Sandbox",
  phone: "00 (123) 456 78 90",
  description: `Sandbox is a multipurpose HTML5 template with various layouts which will be a great solution for your business.`,
  address: (
    <Fragment>
      Moonshine St. 14/05 <br /> Light City, London
    </Fragment>
  )
};
export default Info