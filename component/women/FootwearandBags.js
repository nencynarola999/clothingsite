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
    let array = [
        {
            h31: "Stylish",
            ptext1: "Michael, a renowned athlete, commends these shoes for their unparalleled performance. He emphasizes how they have enhanced his agility, stability, and overall athletic performance.",
            h51: "Michael",
            h61: "Professional",
            h32: "Versatile",
            ptext2: "Emma, a popular fashion blogger, raves about these shoes for their stylish design and versatility. She appreciates how they effortlessly complement her wardrobe, allowing her to create countless fashionable looks.",
            h52: "Roberts",
            h62: "Blogger"
        },
        {
            h31: "Durability",
            ptext1: "Mark, an avid adventurer, shares his testimonial on these shoes, highlighting their exceptional durability and reliability. He recounts various challenging expeditions where these shoes stood the test of time.",
            h51: "Mark Davis",
            h61: "Enthusiast",
            h32: "Walking",
            ptext2: "Lisa, a dedicated nurse, sings praises for these shoes and their remarkable comfort. She describes how spending long hours on her feet used to cause pain and discomfort, but these shoes have revolutionized her work experience.",
            h52: "Lisa",
            h62: "Nurse"
        },
        {
            h31: "Comfort",
            ptext1: "Sarah shares her experience with these remarkable shoes, highlighting their exceptional comfort and support  that have transformed her daily routine.",
            h51: "Johnson",
            h61: "CEO",
            h32: "Modern",
            ptext2: "Lisa, a dedicated nurse, sings praises for these shoes and their remarkable comfort. She describes how spending long hours on her feet used to cause pain and discomfort, but these shoes have revolutionized her work experience.",
            h52: "Jony",
            h62: "Manger"
        },
    ]
    let productarray = [
        {
            class: "col p-4 ps-sm-0",
            img1: "/Women/womenslug/Footwearandbags/s1.avif",
            img2: "/Women/womenslug/Footwearandbags/ss1.avif",
            p: "Women"
        },
        {
            class: "col p-4 pe-sm-0 pe-lg-4",
            img1: "/Women/womenslug/Footwearandbags/s2.avif",
            img2: "/Women/womenslug/Footwearandbags/ss2.avif",
            p: "Women"
        },
        {
            class: "col p-4 ps-sm-0 ps-lg-4 pe-lg-0 ",
            img1: "/Women/womenslug/Footwearandbags/s3.avif",
            img2: "/Women/womenslug/Footwearandbags/ss3.avif",
            p: "Women"
        },
        {
            class: "col p-4 pe-sm-0 pe-lg-4 ps-lg-0",
            img1: "/Women/womenslug/Footwearandbags/s4.avif",
            img2: "/Women/womenslug/Footwearandbags/ss4.avif",
            p: "Men"
        },
        {
            class: "col p-4 ps-sm-0 ps-lg-4",
            img1: "/Women/womenslug/Footwearandbags/s5.avif",
            img2: "/Women/womenslug/Footwearandbags/ss5.avif",
            p: "Men"
        },
        {
            class: "col p-4 pe-sm-0",
            img1: "/Women/womenslug/Footwearandbags/s6.avif",
            img2: "/Women/womenslug/Footwearandbags/ss6.avif",
            p: "Men"
        },
        {
            class: "col p-4 ps-sm-0 ",
            img1: "/Women/womenslug/Footwearandbags/s7.avif",
            img2: "/Women/womenslug/Footwearandbags/ss7.avif",
            p: "Kid Girl"
        },
        {
            class: "col p-4 pe-sm-0 pe-lg-4",
            img1: "/Women/womenslug/Footwearandbags/s8.avif",
            img2: "/Women/womenslug/Footwearandbags/ss8.avif",
            p: "Kid Girl"
        },
        {
            class: "col p-4 ps-sm-0 ps-lg-4 pe-lg-0 ",
            img1: "/Women/womenslug/Footwearandbags/s9.avif",
            img2: "/Women/womenslug/Footwearandbags/ss9.avif",
            p: "Kid Girl"
        },
        {
            class: "col p-4 pe-sm-0 pe-lg-4 ps-lg-0",
            img1: "/Women/womenslug/Footwearandbags/s10.avif",
            img2: "/Women/womenslug/Footwearandbags/ss10.avif",
            p: "Kid Boy"
        },
        {
            class: "col p-4 ps-sm-0 ps-lg-4",
            img1: "/Women/womenslug/Footwearandbags/s11.avif",
            img2: "/Women/womenslug/Footwearandbags/ss11.avif",
            p: "Kid Boy"
        },
        {
            class: "col p-4 pe-sm-0",
            img1: "/Women/womenslug/Footwearandbags/s12.avif",
            img2: "/Women/womenslug/Footwearandbags/ss12.avif",
            p: "Kid Boy"
        },
    ]
    let arraynews = [
        {
            class: "border h-100 footwearcontentdiv",
            img: "/Women/womenslug/Footwearandbags/three1.webp",
            pheading: "New shoes in the collection",
            pno: "11",
            Jul: "Jul"
        },
        {
            class: "border h-100",
            img: "/Women/womenslug/Footwearandbags/three2.webp",
            pheading: "How to choose the right pair of shoes?",
        },
        {
            class: "border h-100",
            img: "/Women/womenslug/Footwearandbags/three3.webp",
            pheading: "The most popular types of shoes today",
        },
    ]
    return (
        <div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0">
                    <div >
                        <img src="/Women/womenslug/Footwearandbags/bgfoot.avif" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0 bg-black py-5">
                <div className="container g-0">
                    <Carousel>
                        {
                            array?.map((x, i) => {
                                return <Carousel.Item className="Psec" interval={1000} key={i}>
                                    <div className="row row-cols-1 row-cols-md-2 g-0 mb-5">
                                        <div className="col p-3">
                                            <div className="border bgwhitefootwear p-3 ">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="/Women/womenslug/Footwearandbags/whiteshoes.webp"
                                                        alt="First slide"
                                                        width="80px"
                                                        height="80px"
                                                        className="rounded-circle me-3"
                                                    />
                                                    <div>
                                                        <h3>{x?.h31}</h3>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>{x?.ptext1}</p>
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
                                                            <h5>{x?.h51}</h5>
                                                            <h6>{x?.h61}</h6>
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
                                            <div className=" text-white border p-3 h-100">
                                                <div className="d-flex  align-items-center">
                                                    <img
                                                        src="/Women/womenslug/Footwearandbags/whiteshoes.webp"
                                                        alt="First slide"
                                                        width="80px"
                                                        height="80px"
                                                        className="rounded-circle me-3"
                                                    />
                                                    <div>
                                                        <h3>{x?.h32}</h3>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>{x?.ptext2}</p>
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
                                                            <h5>{x?.h52}</h5>
                                                            <h6>{x?.h62}</h6>
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
                            })
                        }
                    </Carousel>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0 womenbeautyFproduct">
                    <h2 className="womenbeautyFproducth2">Our Product</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-0">
                        {
                            productarray?.map((x, i) => {
                                return <div className={x?.class} key={i}>
                                    <div className="womenbeautyimghov border h-100">
                                        <img src={x?.img1} alt="" className="img-fluid h-100 womenbeautyimghovfirst" />
                                        <img src={x?.img2} alt="" className="img-fluid h-100 womenbeautyimghovsecond" />
                                        <p className="womenbeautyimghovp">{x?.p}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 p-0 mt-5 footwearslidermain">
                <div className="container  g-0">
                    <h2 className="footwearslidermainh2 mb-3">OUR BLOGS</h2>
                    <div className="row g-0 row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {
                            arraynews?.map((x, i) => {
                                return <div className="col p-3" key={i}>
                                    <div className={x?.class}>
                                        <img src={x?.img} alt="" className="img-fluid" />
                                        <div className="footwearposiset">
                                            <p className="mb-0 footwearposiset11">{x?.pno}</p>
                                            <p className="mb-0 footwearposisetjul">{x?.Jul}</p>
                                        </div>
                                        <div className="text-center p-2">
                                            <p className="mb-2 footwearslidermainnews">NEWS</p>
                                            <p className="mb-3 footwearslidermainheadtext">{x?.pheading}</p>
                                            <p className="mb-2 footwearslidermainptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FootwearandBags