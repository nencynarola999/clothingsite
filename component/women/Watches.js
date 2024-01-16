import React from "react"
import { Carousel } from "react-bootstrap"


const Watches = () => {
    let array = [
        {
            img: "/Women/womenslug/Watches/bgi1.jpg",
            classimg: "img-fluid w-100",
            class: "d-none"
        },
        {
            img: "/Women/womenslug/Watches/bgi2.jpg",
            classimg: "img-fluid w-100",
            class: " d-none"
        },
        {
            img1: "/Women/womenslug/Watches/bgi3.jpg",
            img2: "/Women/womenslug/Watches/bgi4.jpg",
            classimg: "d-none",
            class: "row g-0"
        },
    ]
    let fourimg = [
        {
            img: "/Women/womenslug/Watches/four1.jpg"
        },
        {
            img2: "/Women/womenslug/Watches/four2.jpg",
            img3: "/Women/womenslug/Watches/four3.jpg"
        },
        {
            img: "/Women/womenslug/Watches/four4.jpg"
        },
    ]
    let productimg = [
        {
            class: "col py-3 pe-3 ps-3 ps-sm-0",
            img: "/Women/womenslug/Watches/i1.avif",
            img2: "/Women/womenslug/Watches/i11.avif"
        },
        {
            class: "col py-3 ps-3 pe-3 pe-sm-0 pe-md-3",
            img: "/Women/womenslug/Watches/i2.avif",
            img2: "/Women/womenslug/Watches/i22.webp"
        },
        {
            class: "col py-3 px-3 ps-sm-0 ps-md-0 ps-md-3 pe-md-0",
            img: "/Women/womenslug/Watches/i3.avif",
            img2: "/Women/womenslug/Watches/i33.avif"
        },
        {
            class: "col py-3 px-3 pe-sm-0 pe-md-3 ps-md-0",
            img: "/Women/womenslug/Watches/i4.avif",
            img2: "/Women/womenslug/Watches/i44.avif"
        },
        {
            class: "col py-3 px-3 ps-sm-0 ps-md-3",
            img: "/Women/womenslug/Watches/i5.webp",
            img2: "/Women/womenslug/Watches/i55.avif"
        },
        {
            class: "col py-3 px-3 pe-sm-0",
            img: "/Women/womenslug/Watches/i6.avif",
            img2: "/Women/womenslug/Watches/i66.avif"
        },
    ]
    let brandlogoarray = [
        {
            img: "/Women/womenslug/Watches/brand1.png",
            img2: "/Women/womenslug/Watches/nine1.jpg"
        },
        {
            img: "/Women/womenslug/Watches/brand2.png",
            img2: "/Women/womenslug/Watches/nine2.jpg"
        },
        {
            img: "/Women/womenslug/Watches/brand1.png",
            img2: "/Women/womenslug/Watches/nine3.jpg"
        },
        {
            img: "/Women/womenslug/Watches/brand2.png",
            img2: "/Women/womenslug/Watches/nine4.jpg"
        },
        {
            img: "/Women/womenslug/Watches/brand1.png",
            img2: "/Women/womenslug/Watches/nine5.jpg"
        },
        {
            img: "/Women/womenslug/Watches/brand2.png",
            img2: "/Women/womenslug/Watches/nine6.jpg"
        },
        {
            img: "/Women/womenslug/Watches/brand1.png",
            img2: "/Women/womenslug/Watches/nine7.jpg"
        },
        {
            img: "/Women/womenslug/Watches/brand2.png",
            img2: "/Women/womenslug/Watches/nine8.jpg"
        },
        {
            img: "/Women/womenslug/Watches/brand1.png",
            img2: "/Women/womenslug/Watches/nine9.jpg"
        },
    ]
    return (
        <div>
            <div className="cotainer-fluid g-0 mt-5">
                <div className="container g-0">
                    <Carousel>
                        {
                            array?.map((x, i) => {
                                return <Carousel.Item className="watchesdiv" key={i}>
                                    <img src={x?.img} alt="" className={x?.classimg} />
                                    <div className={x?.class}>
                                        <div className="col">
                                            <img src={x?.img1} alt="" className="img-fluid w-100" />
                                        </div>
                                        <div className="col">
                                            <img src={x?.img2} alt="" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="watchestextdiv">
                                        <h6 className="mb-0">BULIT FOR KIDS</h6>
                                        <h2 className="mb-0">An Extraordinary Classic</h2>
                                        <p className="mb-0">this is the best in class effective watches from the luxury brand watch.co and gizmo has put into. lot of efforts put in these high quality watches.</p>
                                    </div>
                                </Carousel.Item>
                            })
                        }
                    </Carousel>
                </div>
            </div>
            <div className="container-fluid g-0">
                <div className="container g-0">
                    <div className="row g-0">
                        {
                            fourimg?.map((x, i) => {
                                return <div className="col p-0" key={i}>
                                    <img src={x?.img} alt="" className="img-fluid" />
                                    <img src={x?.img2} alt="" className="img-fluid" />
                                    <img src={x?.img3} alt="" className="img-fluid" />
                                </div>

                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0 womenfeaturedproducts">
                    <p>360° COLLECTION</p>
                    <h2><span>FEATURED</span> PRODUCTS</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0">
                        {
                            productimg?.map((x, i) => {
                                return <div className={x?.class} key={i}>
                                    <div className="border womenwatchesimghover h-100">
                                        <img src={x?.img} alt="" className="h-100 img-fluid womenwatchesimghover1" />
                                        <div className="womenwatchesimghover2">
                                            <img src={x?.img2} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 bg-black g-0">
                <div className="container g-0">
                    <div className="row g-0">
                        <div className="col-12 col-sm-5 col-md-4 p-2">
                            <div className=" p-3 womenblacktext h-100">
                                <h2 className="womenblackh2">Lorem Ipsum</h2>
                                <p className=" womenblackp">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consectetur blanditiis beatae sequi ex, facilis aut deserunt omnis veniam magnam quia itaque dolor! Accusantium corrupti porro, voluptas ad eligendi laudantium?</p>
                                <button className="mb-0 womenshowbtn">SHOW MORE...</button>
                            </div>
                        </div>
                        <div className="col p-2">
                            <div className="border h-100">
                                <div className="row row-cols-3 g-0">
                                    {
                                        brandlogoarray?.map((x, i) => {
                                            return <div className="col border watchbrandimg " key={i}>
                                                <div className="watchbrandimg1">
                                                    <img src={x?.img} alt="" className="img-fluid" />
                                                </div>
                                                <img src={x?.img2} alt="" className="img-fluid watchbrandimghover" />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watches