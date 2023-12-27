import React, { useState } from "react"
import { Carousel } from "react-bootstrap"

const Backgroundhome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  let array = [
    {
      img: "/Background/backgroundhome/kidsbg1.avif",
      h1: "KID'S CLOTH",
      h2: "ONLINE STORE",
      class: "bg1Kidstextsetdiv"
    },
    {
      img: "/Background/backgroundhome/menbg1.avif",
      h1: "MEN'S CLOTH",
      h2: "ONLINE STORE",
      class: "bg1mentextsetdiv",
      imgclass: "menimg",
      imgclassset: "menset"
    },
    {
      img: "/Background/backgroundhome/womenbg1.avif",
      h1: "WOMEN'S CLOTH",
      h2: "ONLINE STORE",
      class: "bg1Womentextsetdiv",
      imgclass: "womenimg",
      imgclassset: "womenset"
    },
  ]

  return (
    <>
      <div className="container-fluid g-0">
        <div className="container g-0">
          <div className="border backgrounddiv">
            <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-indicators1 ">
              {
                array?.map((x, i) => {
                  return (

                    <Carousel.Item interval={1000} key={i}>
                      <img src={x?.img} alt="" width="100%" className={`${x?.imgclass} position-relative`} />
                      <div className={`${x?.imgclassset}`}></div>
                      <div className="bg-black position-absolute top-0 w-100 h-100 " style={{ opacity: "0.4" }}></div>
                      <div className={`${x?.class} text-center`}>
                        <h1 >{x?.h1}</h1>
                        <h2 className="display-5 m-0">{x?.h2}</h2>
                      </div>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Backgroundhome