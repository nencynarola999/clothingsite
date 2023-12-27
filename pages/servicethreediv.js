import Link from "next/link"
import React from "react"
import { AiFillLock } from "react-icons/ai"
import { MdOutlineLocalShipping } from "react-icons/md"
import { BsArrowReturnLeft } from "react-icons/bs"

const Servicethreediv = () => {
    let array = [
        {
            icon:<MdOutlineLocalShipping />,
            h3: "NEXT DAY SHIPPING",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  assumenda aliquid error dolorem aperiam?"
        },
        {
            icon:<BsArrowReturnLeft />,
            h3: "FREE 20 DAY RETURN",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  assumenda aliquid error dolorem aperiam?"
        },
        {
            icon:<AiFillLock />,
            h3: "SECURE CHECKOUT",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  assumenda aliquid error dolorem aperiam?"
        },
    ]
    return (
        <>
            <div className="container-fluid g-0 mt-5">
                <div className="container g-0">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 service1maindiv">
                        {
                            array?.map((x, i) => {
                                return (
                                    <div className="col p-3" key={i}>
                                        <div className="p-3 d-flex service1subdiv h-100">
                                            <Link href="" legacyBehavior><a>{x?.icon}</a></Link>
                                            <div className="ps-4">
                                                <h3 className="fs-4">{x?.h3}</h3>
                                                <p>{x?.p}</p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Servicethreediv