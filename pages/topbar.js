import React from "react"
import { AiOutlineMessage } from "react-icons/ai";
import { PiMapPinLine, PiPhoneCallBold } from "react-icons/pi";

const Topbar = () => {
  
  return (
    <div className="topbar fw-bold">
    <div className="container py-2 d-md-flex flex-md-row">
      <div className="d-flex flex-row align-items-center">
        <div className=" text-white mb-2 me-2 fs-4">
          <a><PiMapPinLine/></a>
        </div>

        <address className="mb-0">Moonshine St. 14/05 Light City</address>
      </div>

      <div className="d-flex flex-row align-items-center me-5 ms-auto">
        <div className=" text-white mb-2 me-2 fs-4">
          <a><PiPhoneCallBold/></a>
        </div>

        <p className="mb-0">00 (123) 456 78 90</p>
      </div>

      <div className="d-flex flex-row align-items-center">
        <div className=" text-white mb-2 me-2 fs-4">
          <a ><AiOutlineMessage/></a>
        </div>

        <p className="mb-0">
          <a href="mailto:sandbox@email.com">
            sandbox@email.com
          </a>
        </p>
      </div>
    </div>
</div>
  )
}

export default Topbar