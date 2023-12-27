import React from "react"
import { RxStitchesLogo } from "react-icons/rx";
import { MdGirl } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { SiStitcher } from "react-icons/si";
import { GiSolderingIron } from "react-icons/gi";
import Link from "next/link";

const service = () => {
    let array = [
        {
            icon: <RxStitchesLogo />,
            name: "Tailoring",
            text: "Lorem, ipsum dolor sit amet consectetur elit adipisicing elit. Quos debitis numquam"
        },
        {
            icon: <MdGirl />,
            name: "Fashion",
            text: "Lorem, ipsum dolor sit amet consectetur elit adipisicing elit. Quos debitis numquam"
        },
        {
            icon: <RiGalleryLine />,
            img: "/Service/servicepage/icon3.png",
            name: "Embroidery",
            text: "Lorem, ipsum dolor sit amet consectetur elit adipisicing elit. Quos debitis numquam"
        },
        {
            icon: <GiSolderingIron />,
            name: "Ironing",
            text: "Lorem, ipsum dolor sit ametconsectetur elit adipisicing elit. Quos debitis numquam"
        },
        {
            icon: <SiStitcher />,
            img: "/Service/servicepage/icon5.png",
            name: "Stitch",
            text: "Lorem, ipsum dolor sit amet consectetur elit adipisicing elit. Quos debitis numquam"
        },
        {
            icon: <IoDiamondOutline />,
            name: "Sewing",
            text: "Lorem, ipsum dolor sit amet consectetur elit adipisicing elit. Quos debitis numquam"
        },
    ]
    return (
        <>
            <div className="container-fluid g-0 mt-5 servicepage">
                <div className="container p-0">
                    <h2 className="px-3 px-md-0 servicestarth2">CURRENT SERVICE</h2>
                </div>
                <div className="container mt-5 p-3 p-md-3 p-lg-5 servicepagesecondsec">
                    <div className="row row-cols-1 row-cols-md-2 pb-4">
                        <div className="col">
                            <img src="/Service/servicepage/i2.webp" alt="" className="img-fluid w-100 h-100" />
                        </div>
                        <div className="col servicetextset">
                            <h1>Dry Cleaning</h1>
                            <p>Backed by modern equipment and a high-capacity cleaning plant, we will make sure your clothes are well taken care of.</p>
                            <div>
                                <Link href="/service" className=" servicebtn">Know More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 pb-4">
                        <div className="col servicetextset order-2 order-md-1">
                            <h1>Laundry Services</h1>
                            <p>We pick up your dirty clothes on the selected date, sort it, wash, dry, fold, and deliver back to you in one neat package.</p>
                            <div>
                                <Link href="/service" className=" servicebtn">Know More...</Link>
                            </div>
                        </div>
                        <div className="col order-1 order-md-2">
                            <img src="/Service/servicepage/i1.webp" alt="" className="img-fluid w-100 h-100" />
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 ">
                        <div className="col">
                            <img src="/Service/servicepage/i3.webp" alt="" className="img-fluid w-100 h-100" />
                        </div>
                        <div className="col servicetextset">
                            <h1>Wash & Fold</h1>
                            <p>Forget about household routines! We will wash your clothes according to whites and colors, sort them, and then fold them with precision.</p>
                            <div>
                                <Link href="/service" className=" servicebtn">Know More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="servicepagesecondsec2"></div>
                </div>
                <div className="container p-0 g-0 text-center mt-3">
                    <Link href="/service" className=" servicebtn">Service</Link>
                    <h1 className="mt-3">Our Service Feature</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque facere quis ipsa exercitationem placeat! Adipisci laudantium officiis</p>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 h-100 mt-3">
                        {
                            array?.map((x, i) => {
                                return (
                                    <div className="col servicepagefirstsec p-2" key={i}>
                                        <div className="shadow p-5 h-100  d-flex justify-content-center align-items-center flex-column">
                                            <div className="iconss display-2">{x?.icon}</div>
                                            {/* <img src={x?.img} alt="" className="img-fluid" /> */}
                                            <h3>{x?.name}</h3>
                                            <p className="fs-6 text-center">{x?.text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container p-5 g-0 border mt-5 servicepagethirdsec">
                    <div className="row row-cols-1 row-cols-md-2 g-0 ">
                        <div className="col order-2 order-md-1 px-0 px-lg-3 px-xl-5 mt-5 mt-md-0">
                            <Link href="/service" className=" servicebtn">About Us</Link>
                            <h1 className="mt-3">Best Clothing Service Since 1999</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, similique. Explicabo consequuntur est corrupti culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis dignissimos adipisci nemo sed dolor id, reprehenderit magnam esse corporis quas! Nemo blanditiis libero debitis.</p>
                        </div>
                        <div className="col order-1 order-md-2">
                            <img src="/Service/servicepage/bgimg.avif" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default service