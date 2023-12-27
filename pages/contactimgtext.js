import NextLink from "@/reusablecomponent/NextLink"
import React from "react"

const Contactimgtext = () => {
  return (
    <div className="row gx-0 contact1maindiv " style={{ marginTop: "300px" }}>
      <div className="col-lg-6  d-none d-md-block contact1subdiv1">
        <img src="/Contact/contactimgtext/i2.jpg" alt="" className="w-100 h-100 " />
        <h2 className="display-5 mb-3 d-none d-lg-block " >Our Fabrics will be <br /> Your Feathers</h2>
      </div>
      <div className="col-lg-6 d-flex flex-column justify-content-end contact1subdiv2">
        <div className="p-3 p-md-5">
          <h2 className="display-4 mb-3 d-block d-lg-none">Our Fabrics will be <br /> Your Feathers</h2>
          <p className="lead">
            Lets make something great together. We are trusted by over 5000+ cloths. Join them by using our services
            and grow your business.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis
            interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus.
          </p>
          <NextLink title="Shop Now" href="" className="btn btn_login rounded-pill mt-2" />
        </div>
      </div>
    </div>
  )
}

export default Contactimgtext