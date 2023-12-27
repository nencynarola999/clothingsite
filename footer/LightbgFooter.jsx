import Contactimgtext from "@/pages/contactimgtext"
import SocialLinks from "@/reusablecomponent/SocialLinks"
import React from "react"

const LightbgFooter = () => {
  return (
    <footer className="footer2maindiv mt-5">
      <div className="container">
        <div className="shadow-lg footer2subdiv">
          <Contactimgtext />
        </div>
      </div>
      <div className="container pb-5 text-center footer2sub2div">
        <div className="row mt-5 mt-lg-0">
          <div className="col-xl-10 mx-auto">
            <div className="row mb-3">
              <div className="col-md-4">
                <div>
                  <h4 >Address</h4>
                  <p>
                    Moonshine St. 14/05 <br className="d-none d-md-block" /> Light City, London, UK
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h4>Phone</h4>
                  <p>
                    00 (123) 456 78 90 <br />
                    00 (987) 654 32 10
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h4>E-mail</h4>
                  <a href="mailto:sandbox@email.com" >
                    sandbox@email.com
                  </a>
                  <br className="d-none d-md-block" />
                  <a href="mailto:help@sandbox.com" >
                    help@sandbox.com
                  </a>
                </div>
              </div>
            </div>
            <p>© 2022 Sandbox. All rights reserved.</p>
            <SocialLinks
              className="nav2icon fs-4 me-2"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default LightbgFooter