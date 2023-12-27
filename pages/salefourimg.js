import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
const Salefourimg = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let array = [
        {
            image: "/Sale/sale2/s1.png"
        },
        {
            image: "/Sale/sale2/s2.png"
        },
        {
            image: "/Sale/sale2/s3.png"
        },
        {
            image: "/Sale/sale2/s4.png"
        },
        {
            image: "/Sale/sale2/s5.png"
        },
        {
            image: "/Sale/sale2/s6.png"
        },
        {
            image: "/Sale/sale2/s7.png"
        },
        {
            image: "/Sale/sale2/s8.png"
        },
    ]
    let array2 = [
        {
            image: "/Sale/sale2/M1.avif"
        },
        {
            image: "/Sale/sale2/M2.avif"
        },
        {
            image: "/Sale/sale2/M3.avif"
        },
        {
            image: "/Sale/sale2/M4.avif"
        },
        {
            image: "/Sale/sale2/M5.avif"
        },
        {
            image: "/Sale/sale2/M6.avif"
        },
        {
            image: "/Sale/sale2/M7.avif"
        },
        {
            image: "/Sale/sale2/M8.avif"
        },
    ]
    return (
        <>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0">
                    <h3 className="sale2h3">New Looks We Love</h3>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0">
                        <div className="col p-2 mb-3">
                            <div className="sale2imageset " >
                                <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-indicators2">
                                    {
                                        array?.map((x, i) => {
                                            return (

                                                <Carousel.Item interval={1000} className="carousel-item" style={{ height: "400px" }} key={i}>
                                                    <img src={x?.image} alt="" className="w-100 h-100" />
                                                </Carousel.Item>
                                            )
                                        })
                                    }

                                </Carousel>
                                <div className="sale2subimagetextset">
                                    <h2>LOOKS  WE LOVE</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col p-2 mb-3" >
                            <div className=" " style={{ height: "400px", borderRadius: "20px" }}>
                                <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-indicators2">
                                {
                                    array2?.map((x, i) => {
                                        return (

                                            <Carousel.Item interval={1000} className="carousel-item" style={{ height: "400px" }} key={i}>
                                                <img src={x?.image} alt="" className="w-100 h-100" style={{ borderRadius: "20px" }} />
                                            </Carousel.Item>
                                        )
                                    })
                                }

                                   
                                </Carousel>
                            </div>
                        </div>
                        <div className="col p-2 mb-3">
                            <div className="  " style={{ height: "400px" }}>
                                <img src="/Sale/sale2/K1.avif" alt="" className="w-100 h-100" style={{ borderRadius: "20px" }} />
                            </div>
                        </div>
                        <div className="col p-2">
                            <div className="" style={{ height: "400px" }}>
                                <div className=" salepurse h-100" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Salefourimg