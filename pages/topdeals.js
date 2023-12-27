import React, { useState } from "react"
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap"

const Topdeals = () => {
  const [activeChild, setActiveChild] = useState(0);

  const handleChildClick = (index) => {
    setActiveChild(index);
  };
  let headingarray = [
    {
      key: "first",
      no: 0,
      extrasec2h6: "extrasec2h6",
      name: "Men"
    },
    {
      key: "second",
      no: 1,
      extrasec2h6: "extrasec2h6",
      name: "Women"
    },
    {
      key: "third",
      no: 2,
      extrasec2h6: "extrasec2h6",
      name: "Kids"
    },
    {
      key: "forth",
      no: 3,
      extrasec2h6: "extrasec2h7",
      name: "Shoes & Bags"
    },
    {
      key: "fifth",
      no: 4,
      extrasec2h6: "extrasec2h6",
      name: "Beauty"
    },
  ]
  let firstarray = [
    {
      image: "/Extrasec/extrasec2/mi1.jpeg",
      img: "/Extrasec/extrasec2/ml1.png",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/mi2.webp",
      img: "/Extrasec/extrasec2/ml2.png",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/mi3.jpeg",
      img: "/Extrasec/extrasec2/ml3.png",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/mi4.jpeg",
      img: "/Extrasec/extrasec2/ml4.png",
      h1: "UP TO 50% OFF"
    },
  ]
  let secondarray = [
    {
      image: "/Extrasec/extrasec2/wi1.webp",
      img: "/Extrasec/extrasec2/wl1.png",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/wi2.jpeg",
      img: "/Extrasec/extrasec2/wl2.png",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/wi3.jpeg",
      img: "/Extrasec/extrasec2/wl3.png",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/wi4.webp",
      img: "/Extrasec/extrasec2/wl4.png",
      h1: "UP TO 50% OFF"
    },
  ]
  let thirdarray = [
    {
      image: "/Extrasec/extrasec2/ki1.webp",
      h1: "UP TO 50% OFF",
      h2: "Boys"
    },
    {
      image: "/Extrasec/extrasec2/ki2.webp",
      h1: "UP TO 50% OFF",
      h2: "Girls"
    },
    {
      image: "/Extrasec/extrasec2/ki3.webp",
      h1: "UP TO 50% OFF",
      h2: "Bags"
    },
    {
      image: "/Extrasec/extrasec2/ki4.jpg",
      h1: "UP TO 50% OFF",
      h2: "Watches"
    },
  ]
  let fortharray = [
    {
      image: "/Extrasec/extrasec2/si1.webp",
      img: "/Extrasec/extrasec2/sl1.png",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/si2.webp",
      img: "/Extrasec/extrasec2/sl2.png",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/si3.webp",
      img: "/Extrasec/extrasec2/sl3.png",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/si4.webp",
      img: "/Extrasec/extrasec2/sl4.png",
      h1: "UP TO 50% OFF"
    },
  ]
  let fiftharray = [
    {
      image: "/Extrasec/extrasec2/bi1.avif",
      name: "Lipsticks",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/bi2.webp",
      name: "Face Makeup",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/bi3.webp",
      name: "Eye Makeup",
      h1: "UP TO 50% OFF"
    },
    {
      image: "/Extrasec/extrasec2/bi4.webp",
      name: "Nail Paints",
      h1: "UP TO 50% OFF"
    },
  ]
  return (
    <>
      <div className="container-fluid g-0 mt-5 " >
        <div className="container g-0">
          <h3 className="Homewomen1h3">Top Deals</h3>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="g-0">
              <Col sm={12} className="mb-4">
                <Nav variant="pills" className="flex-column">
                  <div className="d-flex flex-wrap">

                    {
                      headingarray?.map((x, i) => {
                        return (
                          <div key={i}>
                            <div className="dealparent">
                              <Nav.Link eventKey={x?.key}>
                                <h6 className={`${x?.extrasec2h6} ${activeChild === x?.no ? "active" : ""}`}
                                  onClick={() => handleChildClick(x?.no)} >
                                  {activeChild === x?.no ? x?.name : x?.name}
                                </h6>
                              </Nav.Link>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first" >
                    <div className="row row-cols-1 row-cols-md-2  p-0 extrasec2subdiv g-0">
                      {
                        firstarray?.map((x, i) => {
                          return (
                            <div className="col p-3" key={i}>
                              <div className=" h-100">
                                <div className="extrasec2imgset">
                                  <img src={x?.image} alt="" className="rounded-5 w-100 h-100 " />
                                  <div className="extrasec2textdiv rounded-bottom-5">
                                    <img src={x?.img} alt="" />
                                    <p className="extrasec2textdivh1 mb-0">{x?.h1}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                          )
                        })
                      }
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" >
                    <div className="row row-cols-1 row-cols-md-2  p-0 extrasec2subdiv">
                      {
                        secondarray?.map((x, i) => {
                          return (
                            <div className="col p-3" key={i}>
                              <div className=" h-100">
                                <div className="extrasec2imgset">
                                  <img src={x?.image} alt="" className="rounded-5 w-100 h-100 " />
                                  <div className="extrasec2textdiv rounded-bottom-5">
                                    <img src={x?.img} alt="" />
                                    <p className="extrasec2textdivh1 mb-0">{x?.h1}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                          )
                        })
                      }
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" >
                    <div className="row row-cols-1 row-cols-md-2  p-0 extrasec2subdiv">
                      {
                        thirdarray?.map((x, i) => {
                          return (
                            <div className="col p-3" key={i}>
                              <div className=" h-100">
                                <div className="extrasec2imgset">
                                  <img src={x?.image} alt="" className="rounded-5 w-100 h-100 " />
                                  <div className="extrasec2textdiv2 rounded-bottom-5">
                                    <p className="extrasec2textdiv2h1 mb-0">{x?.h2}</p>
                                    <p className="extrasec2textdiv2h1 mb-0">{x?.h1}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                          )
                        })
                      }
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="forth" >
                    <div className="row row-cols-1 row-cols-md-2  p-0 extrasec2subdiv">
                      {
                        fortharray?.map((x, i) => {
                          return (
                            <div className="col p-3" key={i}>
                              <div className=" h-100">
                                <div className="extrasec2imgset">
                                  <img src={x?.image} alt="" className="rounded-5 w-100 h-100 " />
                                  <div className="extrasec2textdiv rounded-bottom-5">
                                    <img src={x?.img} alt="" />
                                    <p className="extrasec2textdivh1 mb-0">{x?.h1}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                          )
                        })
                      }
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" >
                    <div className="row row-cols-1 row-cols-md-2  p-0 extrasec2subdiv">
                      {
                        fiftharray?.map((x, i) => {
                          return (
                            <div className="col p-3" key={i}>
                              <div className=" h-100">
                                <div className="extrasec2imgset">
                                  <img src={x?.image} alt="" className="rounded-5 w-100 h-100 " />
                                  <div className="extrasec2textdiv rounded-bottom-5">
                                    <p className="extrasec2textdivh1">{x?.name}</p>
                                    <p className="extrasec2textdivh1 mb-0">{x?.h1}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  )
}

export default Topdeals