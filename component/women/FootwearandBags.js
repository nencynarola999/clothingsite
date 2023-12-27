import React from "react"
import { Carousel } from "react-bootstrap"
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaRegStar, FaStar } from "react-icons/fa"
import { TbHexagonLetterA, TbHexagonLetterC, TbHexagonLetterE, TbHexagonLetterH, TbHexagonLetterI, TbHexagonLetterK, TbHexagonLetterL, TbHexagonLetterN, TbHexagonLetterR, TbHexagonLetterS, TbHexagonLetterT, TbHexagonLetterU, TbHexagonLetterY } from "react-icons/tb";
import Slider from "react-slick";
const FootwearandBags = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0">
                    <div >
                        {/* <div >
                            <div className="womenbeautybg">
                                <h2 className="womenbeautybgh2  mb-2 mb-md-3">Beauty is a way of life</h2>
                                <p className=" womenbeautybgp  mb-2 mb-md-3">Yet uncommonly his ten who diminution astonished. Demesne"s new manners savings staying had. Under folly balls, death own point now men. Match way these she avoids seeing death. She drifts their fat off.</p>
                                <p className="womenbeautynatural mb-2 mb-md-3">100% Natural</p>
                                <Link href="/women/beauty" className="womenbeautybutton">Read more</Link>
                            </div>
                        </div> */}
                        <img src="/Women/womenslug/Footwearandbags/bgfoot.avif" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0 bg-black py-5">
                <div className="container g-0">
                    <Carousel>
                        <Carousel.Item className="Psec" interval={1000}>
                            <div className="row row-cols-1 row-cols-md-2 g-0 mb-5">
                                <div className="col p-3">
                                    <div className="border bgwhitefootwear p-3 h-100">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="/Women/womenslug/Footwearandbags/whiteshoes.webp"
                                                alt="First slide"
                                                width="80px"
                                                height="80px"
                                                className="rounded-circle me-3"
                                            />
                                            <div>
                                                <h3>Stylish</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Michael, a renowned athlete, commends these shoes for their unparalleled performance. He emphasizes how they have enhanced his agility, stability, and overall athletic performance.
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex">
                                                <img
                                                    src="/Women/womenslug/Footwearandbags/photo.webp"
                                                    alt="First slide"
                                                    width="40px"
                                                    height="40px"
                                                    className="rounded-circle me-3"
                                                />
                                                <div>
                                                    <h5>Michael</h5>
                                                    <h6>Professional</h6>
                                                </div>
                                            </div>
                                            <div className="iconfootwear">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-3 h-100">
                                    <div className=" text-white p-3 h-100">
                                        <div className="d-flex  align-items-center">
                                            <img
                                                src="/Women/womenslug/Footwearandbags/whiteshoes.webp"
                                                alt="First slide"
                                                width="80px"
                                                height="80px"
                                                className="rounded-circle me-3"
                                            />
                                            <div>
                                                <h3>Versatile</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Emma, a popular fashion blogger, raves about these shoes for their stylish design and versatility. She appreciates how they effortlessly complement her wardrobe, allowing her to create countless fashionable looks.
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex">
                                                <img
                                                    src="/Women/womenslug/Footwearandbags/photo.webp"
                                                    alt="First slide"
                                                    width="40px"
                                                    height="40px"
                                                    className="rounded-circle me-3"
                                                />
                                                <div>
                                                    <h5>Roberts</h5>
                                                    <h6>Blogger</h6>
                                                </div>
                                            </div>
                                            <div className="iconfootwear">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="Psec" interval={1000}>
                            <div className="row row-cols-1 row-cols-md-2 g-0 mb-5">
                                <div className="col p-3">
                                    <div className="border bgwhitefootwear p-3 h-100">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="/Women/womenslug/Footwearandbags/whiteshoes.webp"
                                                alt="First slide"
                                                width="80px"
                                                height="80px"
                                                className="rounded-circle me-3"
                                            />
                                            <div>
                                                <h3>Durability</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Mark, an avid adventurer, shares his testimonial on these shoes, highlighting their exceptional durability and reliability. He recounts various challenging expeditions where these shoes stood the test of time.
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex">
                                                <img
                                                    src="/Women/womenslug/Footwearandbags/photo.webp"
                                                    alt="First slide"
                                                    width="40px"
                                                    height="40px"
                                                    className="rounded-circle me-3"
                                                />
                                                <div>
                                                    <h5>Mark Davis</h5>
                                                    <h6>Enthusiast</h6>
                                                </div>
                                            </div>
                                            <div className="iconfootwear">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-3">
                                    <div className=" text-white p-3 h-100">
                                        <div className="d-flex  align-items-center">
                                            <img
                                                src="/Women/womenslug/Footwearandbags/whiteshoes.webp"
                                                alt="First slide"
                                                width="80px"
                                                height="80px"
                                                className="rounded-circle me-3"
                                            />
                                            <div>
                                                <h3>Walking</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Lisa, a dedicated nurse, sings praises for these shoes and their remarkable comfort. She describes how spending long hours on her feet used to cause pain and discomfort, but these shoes have revolutionized her work experience.
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex">
                                                <img
                                                    src="/Women/womenslug/Footwearandbags/photo.webp"
                                                    alt="First slide"
                                                    width="40px"
                                                    height="40px"
                                                    className="rounded-circle me-3"
                                                />
                                                <div>
                                                    <h5>Lisa</h5>
                                                    <h6>Nurse</h6>
                                                </div>
                                            </div>
                                            <div className="iconfootwear">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="Psec " interval={1000}>
                            <div className="row row-cols-1 row-cols-md-2 g-0 mb-5">
                                <div className="col p-3">
                                    <div className="border bgwhitefootwear p-3 h-100">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="/Women/womenslug/Footwearandbags/whiteshoes.webp"
                                                alt="First slide"
                                                width="80px"
                                                height="80px"
                                                className="rounded-circle me-3"
                                            />
                                            <div>
                                                <h3>Comfort</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <p>Sarah shares her experience with these remarkable shoes, highlighting their exceptional comfort and support that have transformed her daily routine.
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex">
                                                <img
                                                    src="/Women/womenslug/Footwearandbags/photo.webp"
                                                    alt="First slide"
                                                    width="40px"
                                                    height="40px"
                                                    className="rounded-circle me-3"
                                                />
                                                <div>
                                                    <h5>Johnson</h5>
                                                    <h6>CEO</h6>
                                                </div>
                                            </div>
                                            <div className="iconfootwear">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-3">
                                    <div className=" text-white p-3 h-100">
                                        <div className="d-flex  align-items-center">
                                            <img
                                                src="/Women/womenslug/Footwearandbags/whiteshoes.webp"
                                                alt="First slide"
                                                width="80px"
                                                height="80px"
                                                className="rounded-circle me-3"
                                            />
                                            <div>
                                                <h3>Modern</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Lisa, a dedicated nurse, sings praises for these shoes and their remarkable comfort. She describes how spending long hours on her feet used to cause pain and discomfort, but these shoes have revolutionized her work experience.
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex">
                                                <img
                                                    src="/Women/womenslug/Footwearandbags/photo.webp"
                                                    alt="First slide"
                                                    width="40px"
                                                    height="40px"
                                                    className="rounded-circle me-3"
                                                />
                                                <div>
                                                    <h5>Jony</h5>
                                                    <h6>Manger</h6>
                                                </div>
                                            </div>
                                            <div className="iconfootwear">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaRegStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0 womenbeautyFproduct">
                    <h2 className="womenbeautyFproducth2">Our Product</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-0">
                        <div className="col p-4 ps-4 ps-sm-0">
                            <div className="womenbeautyimghov">
                                <img src="/Women/womenslug/Footwearandbags/s1.avif" alt="" className="img-fluid womenbeautyimghovfirst" />
                                <img src="/Women/womenslug/Footwearandbags/ss1.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Women</p>
                            </div>
                        </div>
                        <div className="col p-4 pe-sm-0 pe-lg-4">
                            <div className="womenbeautyimghov h-100">
                                <img src="/Women/womenslug/Footwearandbags/s2.avif" alt="" className="img-fluid womenbeautyimghovfirst h-100" />
                                <img src="/Women/womenslug/Footwearandbags/ss2.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Women</p>
                            </div>
                        </div>
                        <div className="col p-4 pe-4 pe-lg-0 ps-sm-0 ps-lg-4">
                            <div className="womenbeautyimghov">
                                <img src="/Women/womenslug/Footwearandbags/s3.avif" alt="" className="img-fluid womenbeautyimghovfirst" />
                                <img src="/Women/womenslug/Footwearandbags/ss3.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Women</p>
                            </div>
                        </div>
                        <div className="col p-4 ps-4 ps-sm-0">
                            <div className="womenbeautyimghov">
                                <img src="/Women/womenslug/Footwearandbags/s4.avif" alt="" className="img-fluid womenbeautyimghovfirst" />
                                <img src="/Women/womenslug/Footwearandbags/ss4.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Men</p>
                            </div>
                        </div>
                        <div className="col p-4 pe-sm-0 pe-lg-4">
                            <div className="womenbeautyimghov h-100">
                                <img src="/Women/womenslug/Footwearandbags/s5.avif" alt="" className="img-fluid womenbeautyimghovfirst h-100" />
                                <img src="/Women/womenslug/Footwearandbags/ss5.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Men</p>
                            </div>
                        </div>
                        <div className="col p-4 pe-4 pe-lg-0 ps-sm-0 ps-lg-4">
                            <div className="womenbeautyimghov">
                                <img src="/Women/womenslug/Footwearandbags/s6.avif" alt="" className="img-fluid womenbeautyimghovfirst" />
                                <img src="/Women/womenslug/Footwearandbags/ss6.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Men</p>
                            </div>
                        </div>
                        <div className="col p-4 ps-4 ps-sm-0">
                            <div className="womenbeautyimghov">
                                <img src="/Women/womenslug/Footwearandbags/s7.avif" alt="" className="img-fluid womenbeautyimghovfirst" />
                                <img src="/Women/womenslug/Footwearandbags/ss7.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Kid Girl</p>
                            </div>
                        </div>
                        <div className="col p-4 pe-sm-0 pe-lg-4">
                            <div className="womenbeautyimghov h-100">
                                <img src="/Women/womenslug/Footwearandbags/s8.avif" alt="" className="img-fluid womenbeautyimghovfirst h-100" />
                                <img src="/Women/womenslug/Footwearandbags/ss8.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Kid Girl</p>
                            </div>
                        </div>
                        <div className="col p-4 pe-4 pe-lg-0 ps-sm-0 ps-lg-4">
                            <div className="womenbeautyimghov">
                                <img src="/Women/womenslug/Footwearandbags/s9.avif" alt="" className="img-fluid womenbeautyimghovfirst" />
                                <img src="/Women/womenslug/Footwearandbags/ss9.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Kid Girl</p>
                            </div>
                        </div>
                        <div className="col p-4 ps-4 ps-sm-0">
                            <div className="womenbeautyimghov">
                                <img src="/Women/womenslug/Footwearandbags/s10.avif" alt="" className="img-fluid womenbeautyimghovfirst" />
                                <img src="/Women/womenslug/Footwearandbags/ss10.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Kid Boy</p>
                            </div>
                        </div>
                        <div className="col p-4 pe-sm-0 pe-lg-4">
                            <div className="womenbeautyimghov h-100 border">
                                <img src="/Women/womenslug/Footwearandbags/s11.avif" alt="" className="img-fluid womenbeautyimghovfirst h-100" />
                                <img src="/Women/womenslug/Footwearandbags/ss11.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Kid Boy</p>
                            </div>
                        </div>
                        <div className="col p-4 pe-4 pe-lg-0 ps-sm-0 ps-lg-4">
                            <div className="womenbeautyimghov border">
                                <img src="/Women/womenslug/Footwearandbags/s12.avif" alt="" className="img-fluid womenbeautyimghovfirst" />
                                <img src="/Women/womenslug/Footwearandbags/ss12.avif" alt="" className="img-fluid womenbeautyimghovsecond" />
                                <p className="womenbeautyimghovp">Kid Boy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 p-0 mt-5 footwearslidermain">
                <div className="container border">
                    <h2 className="footwearslidermainh2">OUR BLOGS</h2>
                    <div className="row g-0 row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col p-3">
                            <div className="border h-100 footwearcontentdiv">
                                <img src="/Women/womenslug/Footwearandbags/three1.webp" alt="" className="img-fluid" />
                                <div className="footwearposiset">
                                    <p className="mb-0 footwearposiset11">11</p>

                                    <p className="mb-0 footwearposisetjul">Jul</p>
                                </div>
                                <div className="text-center p-2">
                                    <p className="mb-2 footwearslidermainnews">NEWS</p>
                                    <p className="mb-3 footwearslidermainheadtext">New shoes in the collection</p>
                                    <p className="mb-2 footwearslidermainptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col p-3">
                            <div className="border h-100">
                                <img src="/Women/womenslug/Footwearandbags/three2.webp" alt="" className="img-fluid" />
                                <div className="text-center p-2">
                                    <p className="mb-2 footwearslidermainnews">NEWS</p>
                                    <p className="mb-3 footwearslidermainheadtext">How to choose the right pair of shoes?</p>
                                    <p className="mb-2 footwearslidermainptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col p-3">
                            <div className="border h-100">
                                <img src="/Women/womenslug/Footwearandbags/three3.webp" alt="" className="img-fluid" />
                                <div className="text-center p-2">
                                    <p className="mb-2 footwearslidermainnews">NEWS</p>
                                    <p className="mb-3 footwearslidermainheadtext">The most popular types of shoes today</p>
                                    <p className="mb-2 footwearslidermainptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div>
                        <h2> Single Item</h2>
                        <Slider {...settings} style={{ overflow: "hidden" }} className="footwearslider">
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div> */}

                </div>
            </div>

        </div>
    )
}
export default FootwearandBags