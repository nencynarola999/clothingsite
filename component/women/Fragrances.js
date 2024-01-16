import Link from "next/link";
import React, { useState } from "react"
import { Carousel } from "react-bootstrap";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaQuoteRight } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";


const Fragrances = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  let imgarray = [
    {
      class: "h-100 d-flex align-items-end",
      classname: "fragranceone",
      img: "/Women/womenslug/Fragrances/bg1.jpg"
    },
    {
      class: "h-100",
      classname: "fragrancetwo",
      img: "/Women/womenslug/Fragrances/bg2.jpg"
    },
    {
      class: "h-100",
      classname: "fragrancethree",
      img: "/Women/womenslug/Fragrances/bg3.jpg"
    },
  ]


  let productarray = [
    {
      img: "/Women/womenslug/Fragrances/product1.png",
      h4: "Cool Winters",
    },
    {
      img: "/Women/womenslug/Fragrances/product2.png",
      h4: "Eu De Rose",
    },
    {
      img: "/Women/womenslug/Fragrances/product3.png",
      h4: "Warm Sakura",
    },
  ]
  let carouselarray = [
    {
      img: "/Women/womenslug/Fragrances/img1.jpg",
      h5: "John ali",
      p: "Client"
    },
    {
      img: "/Women/womenslug/Fragrances/img2.jpg",
      h5: "Meylitha",
      p: "Client"
    },
    {
      img: "/Women/womenslug/Fragrances/img3.jpg",
      h5: "Jackson",
      p: "Client"
    },
  ]
  let blogarray = [
    {
      img: "/Women/womenslug/Fragrances/blog1.jpg",
      date: " December 16, 2022",
      h3: "The essence of Happy"
    },
    {
      img: "/Women/womenslug/Fragrances/blog2.jpg",
      date: " December 16, 2022",
      h3: "Men’s favorite perfume"
    },
    {
      img: "/Women/womenslug/Fragrances/blog3.jpg",
      date: " December 15, 2022",
      h3: "Benefits of using perfume"
    },
  ]
  return (
    <div>
      <div className="container-fluid g-0 womenfragrancesmaindiv px-3 px-sm-4 px-lg-5 py-4 py-lg-5 flex-column">
        <div className="container g-0">
          <div className="row row-cols-3 g-0">
            {
              imgarray?.map((x, i) => {
                return <div className="col p-2 p-sm-2 p-lg-4" key={i}>
                  <div className={x?.class}>
                    <div className={x?.classname}>
                      <img src={x?.img} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
        <div className="container mt-5 g-0">
          <div className="row g-0">
            <div className="col-12 col-lg-5 p-3">
              <div className="p-3">
                <h2 className="womenfragranceh2 mb-0">Featured</h2>
                <h3 className="womenfragranceh3">The Perfection</h3>
                <p className="womenfragrancep">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
            <div className="col p-3">
              <div className="p-3 womenfragrancesubdiv">
                <img src="/Women/womenslug/Fragrances/icon1.png" alt="" className="img-fluid" />
                <h4 className="fs-2">Top Brand</h4>
                <p className="text-center px-0 px-lg-4">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <Link href="" className="womenfragrancelink">Learn More<FaArrowRight className="ms-2" /></Link>
              </div>
            </div>
            <div className="col p-3">
              <div className="p-3 womenfragrancesubdiv2">
                <img src="/Women/womenslug/Fragrances/icon2.png" alt="" className="img-fluid" />
                <h4 className="fs-2">24/7 Support</h4>
                <p className="text-center px-0 px-lg-4">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <Link href="" className="womenfragrancelink">Learn More<FaArrowRight className="ms-2" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid g-0 wfragrancebgabout">
        <div className="container-fluid g-0 wfragrancebgaboutblack">
          <div className="container g-0 wfragrancebgdiv p-2 p-md-3 p-lg-5">
            <div className="wfragrancebgdiv2">
              <h2 className="womenfragranceh2">About</h2>
              <h3 className="womenfragranceh3">The New Fresh Sensation</h3>
              <p className="womenfragrancep">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid g-0 womenfragrancesmaindiv px-3 px-sm-4 px-lg-5 py-4 py-lg-5 flex-column">
        <div className="container g-0">
          <h2 className="womenfragranceh2 text-center mb-0">Perfume</h2>
          <h3 className="womenfragranceh3 text-center">Create Your Signature</h3>
          <div className="row row-cols-1 row-cols-sm-3 g-0 womenperfume mt-5">
            <div className="col">
              <div className="h-100">
                <img src="/Women/womenslug/Fragrances/perfume.jpg" alt="" className="img-fluid h-100 w-100 perfumeimg1" />
              </div>
            </div>
            <div className="col">
              <div className="h-100 text-white px-1 px-sm-2 px-lg-5 py-4 py-sm-3 py-lg-5">
                <h4 className="fs-1 mb-2 mb-lg-4">Our <br /> Product</h4>
                <p className="mb-4 mb-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                <Link href="" className="wfragranceproductlink">Learn More</Link>
              </div>
            </div>
            <div className="col">
              <div className="h-100 womenperfumeimg">
                <img src="/Women/womenslug/Fragrances/perfume1.jpg" alt="" className="img-fluid h-100 w-100 perfumeimg2" />
                <div className="womenperfumetextdiv text-white px-1 px-sm-2 px-lg-5 d-flex justify-content-start flex-column py-4 py-sm-3 py-lg-5">
                  <h6>Sunset Lime</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <br />
                  <div className="d-flex mb-2 mb-lg-3">
                    <TiTick className="perfumeicon me-3" /><h6 className="perfumeh6 mb-0 d-flex align-items-center">sed quia non numquam</h6>
                  </div>
                  <div className="d-flex mb-2 mb-lg-3">
                    <TiTick className="perfumeicon me-3" /><h6 className="perfumeh6 mb-0 d-flex align-items-center">sed quia non numquam</h6>
                  </div>
                  <div className="d-flex mb-2 mb-lg-3">
                    <TiTick className="perfumeicon me-3" /><h6 className="perfumeh6 mb-0 d-flex align-items-center">modi tempora incidunt</h6>
                  </div>
                  <div className="d-flex mb-2 mb-lg-3">
                    <TiTick className="perfumeicon me-3" /><h6 className="perfumeh6 mb-0 d-flex align-items-center">nostrum exercitationem</h6>
                  </div>
                  <div className="d-flex mb-2 mb-lg-3">
                    <TiTick className="perfumeicon me-3" /><h6 className="perfumeh6 mb-0 d-flex align-items-center">vel illum qui dolorem</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid g-0 womenfragrancesmaindiv px-3 px-sm-4 px-lg-5 py-4 py-lg-5 flex-column">
        <div className="container g-0 ">
          <h2 className="womenfragranceh2 mb-0 text-center">Product</h2>
          <h3 className="womenfragranceh3 text-center">Find your Perfume</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-0">
            {
              productarray?.map((x, i) => {
                return <div className="col p-2 text-center" key={i}>
                  <div className="p-5 px-0 px-sm-3 px-lg-4 px-xl-5 h-100 wfragranceproduct text-white">
                    <img src={x?.img} alt="" className="img-fluid" />
                    <h4 className="fs-2">{x?.h4}</h4>
                    <p className="text-center px-0 px-lg-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <Link href="" className="wfragranceproductlink">Discover More</Link>
                  </div>
                </div>
              })
            }
          </div>
        </div>

      </div>
      <div className="container-fluid g-0 womentestimonialsmaindiv">
        <div className="womentestimonialsmaindivbg">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 g-0 ">
              <div className="col p-3">
                <div className=" d-flex flex-column justify-content-center h-100">
                  <h2 className="womenfragranceh2 mb-0">Feedback</h2>
                  <h3 className="womenfragranceh3">Our Testimonials</h3>
                </div>
              </div>
              <div className="col p-0 p-sm-3">
                <div className=" h-100 testimonial_sliderdiv">
                  <Carousel activeIndex={index} className=" carousel-indicators4" onSelect={handleSelect}>
                    {
                      carouselarray?.map((x, i) => {
                        return <Carousel.Item interval={1000} className="text-white testi_item" key={i}>
                          <div className="d-flex mb-4 ">
                            <FaStar className="testi_icon me-1" />
                            <FaStar className="testi_icon me-1" />
                            <FaStar className="testi_icon me-1" />
                            <FaStar className="testi_icon me-1" />
                            <FaStar className="testi_icon me-1" />
                          </div>
                          <p className="testi_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <img src={x?.img} alt="" className="img-fluid testiroundimg" />
                              <div className="ms-3">
                                <h5 className="mb-1">{x?.h5}</h5>
                                <p className="testi_p">{x?.p}</p>
                              </div>
                            </div>
                            <div>
                              <span className="testi_quote"><FaQuoteRight /></span>
                            </div>
                          </div>

                        </Carousel.Item>
                      })
                    }

                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid g-0 womenfragrancesmaindiv px-3 px-sm-4 px-lg-5 py-4 py-lg-5 flex-column">
        <div className="container g-0">
          <h2 className="womenfragranceh2 text-center mb-0">Blog</h2>
          <h3 className="womenfragranceh3 text-center">Blog & Article</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-0">
            {
              blogarray?.map((x, i) => {
                return <div className="col p-2" key={i}>
                  <div className=" text-white">
                    <img src={x?.img} alt="" className="img-fluid" />
                    <div className="px-3 py-4">
                      <h6 className="blog_h6"><CiCalendar className="me-1 fs-4 mb-1" />{x?.date}</h6>
                      <h3>{x?.h3}</h3>
                      <p className="testi_p mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <Link href="" className="wfragranceproductlink">Learn More<FaArrowRight className="ms-2" /></Link>
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
export default Fragrances


// https://preview.themeforest.net/item/grance-perfume-fragrance-elementor-template-kit/full_screen_preview/42466913?_ga=2.71815827.1872668086.1705063151-1496550957.1705063151


// extra
// http://preview.themeforest.net/item/stelina-perfume-store-html-template/full_screen_preview/28813671?_ga=2.160903613.1872668086.1705063151-1496550957.1705063151

// jewellery
// https://parkofideas.com/goldish/demo/home-3/