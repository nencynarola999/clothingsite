import React from "react"
import Slider from "react-slick";

const Brandlogo = () => {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 750,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 750,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 750,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 750,
                    pauseOnHover: true
                }
            }
        ]
    }
    let logo = [
        {
            image: "/Extrasec/extrasec3/l1.png"
        },
        {
            image: "/Extrasec/extrasec3/l2.png"
        },
        {
            image: "/Extrasec/extrasec3/l3.png"
        },
        {
            image: "/Extrasec/extrasec3/l4.png"
        },
        {
            image: "/Extrasec/extrasec3/l5.png"
        },
        {
            image: "/Extrasec/extrasec3/l6.png"
        },
        {
            image: "/Extrasec/extrasec3/l7.png"
        },
        {
            image: "/Extrasec/extrasec3/l8.png"
        },
        {
            image: "/Extrasec/extrasec3/l9.png"
        },
        {
            image: "/Extrasec/extrasec3/l10.png"
        },
    ]
    return (
        <>
            <div className="container-fluid mt-5 g-0">
                <div className="container g-0  p-0" >
                    <Slider {...settings} className="row slidermaindiv g-0" style={{ overflow: "hidden" }}>

                        {
                            logo?.map((x, i) => {
                                return (

                                    <div className="slidersubdiv" key={i}>
                                        <div className=" slidersubdiv1">
                                            <div className="">
                                                <img src={x?.image} alt="" className="w-50 h-100 object-fit-contain" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}



export default Brandlogo