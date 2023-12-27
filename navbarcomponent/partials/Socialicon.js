import Link from "next/link"
import React from "react"
import { FaBasketballBall, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const Socialicon = () => {
  return (
    <div className="pt-3 pt-lg-0">
    <Link href="" legacyBehavior ><a className="nav1icon"><FaTwitter className="me-3 fs-5" /></a></Link>
    <Link href="" legacyBehavior ><a className="nav1icon"><FaFacebookF className="me-3 fs-5" /></a></Link>
    <Link href="" legacyBehavior ><a className="nav1icon"><FaBasketballBall className="me-3 fs-5" /></a></Link>
    <Link href="" legacyBehavior ><a className="nav1icon"><FaInstagram className="me-3 fs-5" /></a></Link>
  </div>
  )
}

export default Socialicon