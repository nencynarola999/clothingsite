import React from "react"
import CountUp from "react-countup"

const Salethreeimg = () => {
    return (
        <div className="container-fluid g-0 mt-5">
            <div className="container g-0">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
                    <div className="col p-2 mb-3" >
                        <div className="sale1allset" style={{ height: "300px" }}>
                            <img src="/Sale/sale1/I1.jpg" alt="" height="100%" width="100%" className="sale1borderimage " />
                            <div className="sale1allsubimage">
                                <p className="m-0 fs-5">Save</p>
                                <h3 className="fs-1"><CountUp
                                    start={0}
                                    end={50}
                                    duration={2}
                                    enableScrollSpy
                                />%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col p-2 mb-3" data-aos="zoom-in">
                        <div className="sale1allset" style={{ height: "300px" }}>
                            <img src="/Sale/sale1/I2.jpg" alt="" height="100%" width="100%" className="sale1borderimage" />
                            <div className="sale1allsub2image">
                                <p className="m-0 mb-1 fs-5">Collection</p>
                                <h3>WINTER 2023</h3>

                            </div>
                        </div>
                    </div>
                    <div className="col p-2" >
                        <div className="sale1allset" style={{ height: "300px" }}>
                            <img src="/Sale/sale1/H1.webp" alt="" height="100%" width="100%" className="sale1borderimage" />
                            <div className="sale1allsub3image">
                                <p className="m-0 mb-1 fs-4">Shoes Collection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Salethreeimg