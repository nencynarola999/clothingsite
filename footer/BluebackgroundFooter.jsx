import NextLink from "@/reusablecomponent/NextLink"
import React from "react"
import TextwhitecommonFooter from "./TextwhitecommonFooter"
const BluebackgroundFooter = () => {
  return (
    <div className="footer1maindiv mt-5" >
      <div className="container ">
        <div className="d-lg-flex flex-row align-items-lg-center">
          <h3>
            Join our community by using our services and grow your business.
          </h3>
          <NextLink href="" title="Try It For Free" className="btn btn1 rounded-pill mb-0 text-nowrap" />
        </div>
        <hr />
        <TextwhitecommonFooter />
      </div>
    </div>
  )
}
export default BluebackgroundFooter