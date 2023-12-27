import Link from "next/link";
import React, { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";

const blog = () => {
    const [activeChild, setActiveChild] = useState(0);
    const [startIndex, setStartIndex] = useState({
        first: 0,
        second: 0,
        third: 0,
        forth: 0,
        fifth: 0,
        sixth: 0
    });
    const imagesPerPage = 6;

    const handleChildClick = (index) => {
        setActiveChild(index);
    };
    let headingarray = [
        {
            eventKey: "first",
            name: "Home",
            no: 0
        },
        {
            eventKey: "second",
            name: "Spotlight",
            no: 1
        },
        {
            eventKey: "third",
            name: "Culture",
            no: 2
        },
        {
            eventKey: "forth",
            name: "Style Tips",
            no: 3
        },
        {
            eventKey: "fifth",
            name: "Brand Partners",
            no: 4
        },
        {
            eventKey: "sixth",
            name: "Media Room",
            no: 5
        },
    ]
    let array = [
        {
            key: "first",
            img: "/Blogpage/i3.jpg",
            blogextraimgset: "blogextraimgset",
            date: "10,September 2021",
            h1text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            ptext: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dicta totam pariatur incidunt, velit odio! Ratione vel cumque illum pariatur obcaecati nihil laborum saepe ex!",
            button: "Learn More...",
            blogextratextset: "blogextratextset"
        },
        {
            key: "second",
        },
        {
            key: "third",
        },
        {
            key: "forth",
        },
        {
            key: "fifth",
        },
        {
            key: "sixth",
        },
    ];

    let array2 = [
        {
            image: "/Blogpage/i1.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "1",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i2.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "2",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i3.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "3",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i4.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "4",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i5.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "5",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i6.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "6",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i7.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "7",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i8.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "8",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i9.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "9",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i10.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "10",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i11.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "11",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i1.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "12",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i2.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "13",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i3.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "14",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i4.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "15",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i5.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "16",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i6.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "17",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i7.avif",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "18",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i8.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "19",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i9.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "20",
            button: "Learn More"
        },
        {
            image: "/Blogpage/i10.jpg",
            date: "10 September 2023",
            h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, distinctio!",
            text: "21",
            button: "Learn More"
        },
    ]
    const toggleImages = (tabKey) => {
        setStartIndex((prevStartIndex) => ({
            ...prevStartIndex,
            [tabKey]: prevStartIndex[tabKey] + imagesPerPage,
        }));
    };

    let imagetext = [
        {
            image: "/Blogpage/img1.png",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img2.png",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img11.jpg",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img3.avif",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img4.avif",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img5.avif",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img8.avif",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img6.avif",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img9.avif",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img7.avif",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
        {
            image: "/Blogpage/img10.avif",
            h1text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, reiciendis?",
            ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in obcaecati suscipit! Sit beatae quibusdam autem exercitationem, corporis cumque vitae impedit quasi fugit praesentium optio?"
        },
    ]
    return (
        <>
            <div className="container-fluid g-0 p-0 blogpagecolor">
                <div className="container  mt-5">
                    <div className="text-center blogsecondtextsectextset" >
                        <h4>Trend Blog</h4>
                        <h1>WELCOME TO SANDBOX FASHION BLOG PAGE!</h1>
                    </div>
                    {
                        imagetext?.map((x, i) => {
                            return (
                                <div className="row g-0 mb-3 mt-4">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className=" h-100">
                                            <img src={x?.image} alt="" className="w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className=" p-0 py-2 p-md-3 p-lg-5 h-100 blogsecondtextcolorset">
                                            <h2>{x?.h1text}</h2>
                                            <p>{x?.ptext}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="container mt-5 py-5 px-0">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className="g-0">
                            <Col className="mb-4">
                                <Nav variant="pills" className="flex-column">
                                    <div className="d-flex flex-wrap">
                                        {
                                            headingarray?.map((x, i) => {
                                                return (
                                                    <div key={i}>
                                                        <div className="blogpage" >
                                                            <Nav.Link eventKey={x?.eventKey}>
                                                                <h6 className={`blogpagelink ${activeChild === x?.no ? "active" : ""}`}
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
                                    <hr />
                                </Nav>
                            </Col>
                            <Col sm={12}>
                                <Tab.Content>
                                    {array.map((x, i) => (
                                        <Tab.Pane eventKey={x.key} key={i}>
                                            <div className="p-3 row g-0">
                                                <div className="col-12 col-md-7">
                                                    <img src={x?.img} alt="" className={x?.blogextraimgset} />
                                                </div>
                                                <div className="col">
                                                    <div className={x?.blogextratextset}>
                                                        <h6>{x?.date}</h6>
                                                        <h1>{x?.h1text}</h1>
                                                        <p>{x?.ptext}</p>
                                                        <div> <Link href="">{x?.button}</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-lg-2 g-0">
                                                {
                                                    array2?.slice(0, startIndex[x.key] + imagesPerPage)?.map((m, n) => {
                                                        return (
                                                            <div className="col p-3" key={n}>
                                                                <div className=" blogpageallobjectdiv">
                                                                    <img src={m?.image} alt="" className="w-100 h-75" />
                                                                    <div className="blogpageallobjecttextdiv">
                                                                        <h5>{m?.date}</h5>
                                                                        <h4 className="mb-3">{m?.h4}</h4>
                                                                        <Link href="">{m?.button}</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="d-flex justify-content-center w-100 mt-5">
                                                <button onClick={() => toggleImages(x.key)}
                                                    className="blogbutton" >
                                                    View More +
                                                </button>
                                            </div>
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </>
    );
};

export default blog;