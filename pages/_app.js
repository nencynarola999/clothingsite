import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/Main.css";
import "@/styles/Background.css";
import "@/styles/Sale.css";
import "@/styles/Women.css";
import "@/styles/Men.css";
import "@/styles/Kids.css";
import "@/styles/Service.css";
import "@/styles/Extrasec.css";
import "@/styles/Contact.css";
import "@/styles/Blog.css";
import Topbar from "./topbar"
import Alliconnavbar from "@/navbarcomponent/Alliconnavbar"
import Signin from "@/navbarcomponent/partials/Signin";
import Signup from "@/navbarcomponent/partials/Signup";
import NextLink from "@/reusablecomponent/NextLink";
import TextblackcommonFooter from "@/footer/TextblackcommonFooter";
import TextwhitecommonFooter from "@/footer/TextwhitecommonFooter";
import BluebackgroundFooter from "@/footer/BluebackgroundFooter";
import Footer2 from "@/footer/LightbgFooter";
import Footer3 from "@/footer/BlackimgbgFooter";
import BlackimgbgFooter from "@/footer/BlackimgbgFooter";
import Footer4 from "@/footer/BlackbgFooter";
import BlackbgFooter from "@/footer/BlackbgFooter";
import Footer5 from "@/footer/WhitebgFooter";
import WhitebgFooter from "@/footer/WhitebgFooter";
import Footer6 from "@/footer/WhitebgphoneaddressFooter";
import WhitebgphoneaddressFooter from "@/footer/WhitebgphoneaddressFooter";
import Footer7 from "@/footer/WhitebgjoincommunityFooter";
import WhitebgjoincommunityFooter from "@/footer/WhitebgjoincommunityFooter";
import Footer8 from "@/footer/BlackbgjoincommunityFooter";
import BlackbgjoincommunityFooter from "@/footer/BlackbgjoincommunityFooter";
import LightbgFooter from "@/footer/LightbgFooter";
import BlackandWhitenavbar from "@/navbarcomponent/BlackandWhitenavbar";
import IconwhitebgNavbar from "@/navbarcomponent/IconwhitebgNavbar";
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      // Global settings for AOS data-aos-duration="1000" data-aos-delay="200"
      duration: 1200, // Animation duration
      offset: 100, // Offset (in pixels) from the top of the page
    });
  }, []);
  return <>
    <Topbar />
    <Alliconnavbar
      // language
      // search
      // socialicon
      // info
      button={
        <div className="d-flex align-items-center gap-3">
          <Signin />
          <Signup />
        </div>
      }
    // button={<NextLink href="" title="Contact" className="btn btn1 rounded-pill" />}
    // button={<NextLink href="" title="Free Trial" className="btn  btn1 rounded" />}
    />

    {/* <BlackandWhitenavbar/> */}

    {/* {{{{{{{{{{{{{    IconwhitebgNavbar ma uper aa image mukvi    }}}}}}}}}}}}} */}
    {/* <Link href="/"><div className="d-flex justify-content-center align-items-center d-none d-lg-block" style={{height:"100px"}}>
      <img src="/navbar/logo/logo-dark.png" alt="" width="146px"  />
      </div></Link>
    <IconwhitebgNavbar/> */}
    <Component {...pageProps} />
    {/* <TextblackcommonFooter/> */}
    {/* <TextwhitecommonFooter/> */}
    {/* <BluebackgroundFooter/> */}
    {/* <LightbgFooter/> */}
    {/* <BlackimgbgFooter/> */}
    {/* <BlackbgFooter/> */}
    {/* <WhitebgFooter/> */}
    {/* <WhitebgphoneaddressFooter/>  */}
    {/* <WhitebgjoincommunityFooter/> */}
    {/* <BlackbgjoincommunityFooter/> */}
    <LightbgFooter />

  </>

}
