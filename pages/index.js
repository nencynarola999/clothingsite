import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Backgroundhome from "./backgroundhome"
import Salethreeimg from "./salethreeimg"
import Catergory from "./catergory"
import Salefourimg from "./salefourimg"
import Salesuper from "./salesuper"
import Womenbackground from "./womenbackground"
import Womenfourimgdiscount from "./womenfourimgdiscount"
import Womenfourimgblacklogo from "./womenfourimgblacklogo"
import Serviceimagesec from "./serviceimagesec"
import Menbackground from "./menbackground"
import Menfourhoverimage from "./menfourhoverimage"
import Servicethreediv from "./servicethreediv"
import Menfourimgslider from "./menfourimgslider"
import Kidsbackground from "./kidsbackground"
import Kidsboysec from "./kidsboysec"
import Kidsgirlsec from "./kidsgirlsec"
import Kidstraingle from "./kidstraingle"
import Brandlogo from "./brandlogo"
import Topdeals from "./topdeals"
import LightbgFooter from "@/footer/LightbgFooter"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Backgroundhome />
      <Salethreeimg />
      <Catergory />
      <Salefourimg />
      <Salesuper />
      <Womenbackground />
      <Womenfourimgdiscount />
      <Womenfourimgblacklogo />
      <Servicethreediv />
      <Menbackground />
      <Menfourhoverimage />
      <Serviceimagesec />
      <Menfourimgslider />
      <Kidsbackground />
      <Kidsboysec />
      <Brandlogo />
      <Kidstraingle />
      <Kidsgirlsec />
      <Topdeals />
      {/* <LightbgFooter/> */}
    </>
  )
}
