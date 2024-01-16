import Link from "next/link";
import React from "react"

const Beauty = () => {

    let array = [
        {
            class: "col p-4 ps-4 ps-sm-0",
            img: "/Women/womenslug/Beauty/i1.jpg",
            img2: "/Women/womenslug/Beauty/i11.jpg",
            name: "Face"
        },
        {
            class: "col p-4 pe-sm-0 pe-lg-4",
            img: "/Women/womenslug/Beauty/i2.jpg",
            img2: "/Women/womenslug/Beauty/i22.jpg",
            name: "Lips"
        },
        {
            class: "col p-4 pe-4 pe-lg-0 ps-sm-0 ps-lg-4",
            img: "/Women/womenslug/Beauty/i3.jpg",
            img2: "/Women/womenslug/Beauty/i33.jpg",
            name: "Face"
        },
    ]
    let imgarray = [
        {
            class: "col py-2 py-sm-3 pe-2 pe-sm-3 ps-0 ",
            img: "/Women/womenslug/Beauty/img1.jpg",
            img2: "/Women/womenslug/Beauty/img11.jpg"
        },
        {
            class: "col py-2 py-sm-3 ps-2 ps-sm-3 pe-0 pe-lg-3",
            img: "/Women/womenslug/Beauty/img2.jpg",
            img2: "/Women/womenslug/Beauty/img22.jpg"
        },
        {
            class: "col py-2 py-sm-3 pe-2 pe-sm-3 ps-0 ps-lg-3 ",
            img: "/Women/womenslug/Beauty/img3.jpg",
            img2: "/Women/womenslug/Beauty/img33.jpg"
        },
        {
            class: "col py-2 py-sm-3 ps-2 ps-sm-3 pe-0 ",
            img: "/Women/womenslug/Beauty/img4.jpg",
            img2: "/Women/womenslug/Beauty/img44.jpg"
        },
    ]
    let fourimgarray = [
        {
            img: "/Women/womenslug/Beauty/round1.png"
        },
        {
            img: "/Women/womenslug/Beauty/round2.png"
        },
        {
            img: "/Women/womenslug/Beauty/round3.png"
        },
        {
            img: "/Women/womenslug/Beauty/round4.png"
        },
    ]
    let productarray = [
        {
            class: "col p-4 ps-sm-0 ",
            img: "/Women/womenslug/Beauty/i4.jpg",
            img2: "/Women/womenslug/Beauty/i44.jpg",
            name: "Eyes"
        },
        {
            class: "col p-4 pe-sm-0 pe-lg-4",
            img: "/Women/womenslug/Beauty/i5.jpg",
            img2: "/Women/womenslug/Beauty/i55.jpg",
            name: "Eyes"
        },
        {
            class: "col p-4 ps-sm-0 ps-lg-4 pe-lg-0",
            img: "/Women/womenslug/Beauty/i6.jpg",
            img2: "/Women/womenslug/Beauty/i66.jpg",
            name: "Eyes"
        },
        {
            class: "col p-4 pe-sm-0 pe-lg-4 ps-lg-0",
            img: "/Women/womenslug/Beauty/i1.jpg",
            img2: "/Women/womenslug/Beauty/i11.jpg",
            name: "Face"
        },
        {
            class: "col p-4 ps-sm-0 ps-lg-4",
            img: "/Women/womenslug/Beauty/i2.jpg",
            img2: "/Women/womenslug/Beauty/i22.jpg",
            name: "Lips"
        },
        {
            class: "col p-4 pe-sm-0 ",
            img: "/Women/womenslug/Beauty/i3.jpg",
            img2: "/Women/womenslug/Beauty/i33.jpg",
            name: "Face"
        },
    ]

    return (
        <div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0">
                    <div className="womenbeautyimg d-flex justify-content-between" >
                        <div className="">
                            <div className="womenbeautybg">
                                <h2 className="womenbeautybgh2  mb-2 mb-md-3">Beauty is a way of life</h2>
                                <p className="womenbeautybgp  mb-2 mb-md-3">Yet uncommonly his ten who diminution astonished. Demesne"s new manners savings staying had. Under folly balls, death own point now men. Match way these she avoids seeing death. She drifts their fat off.</p>
                                <p className="womenbeautynatural mb-2 mb-md-3">100% Natural</p>
                                <Link href="/women/beauty" className="womenbeautybutton">Read more</Link>
                            </div>
                        </div>
                        <img src="/Women/womenslug/Beauty/bgi.png" alt="" className="img-fluid womenbeautyimg2" />
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0 womenbeautyFproduct">
                    <h2 className="womenbeautyFproducth2">Feature Product</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-0">
                        {
                            array?.map((x, i) => {
                                return <div className={x?.class} key={i}>
                                    <div className="womenbeautyimghov  h-100">
                                        <img src={x?.img} alt="" className="img-fluid  h-100 womenbeautyimghovfirst" />
                                        <img src={x?.img2} alt="" className="img-fluid  h-100 womenbeautyimghovsecond" />
                                        <p className="womenbeautyimghovp">{x?.name}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-12 col-sm-5 col-lg-3 p-2">
                            <img src="/Women/womenslug/Beauty/bgi2.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-sm-7 col-lg-9 p-2 ">
                            <h2 className="womenbeautyimagesidetext">The best products for your routine</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 g-0">
                        <div className="col pe-0 pe-sm-3 pe-lg-5">
                            <div className=" womenbeautyfourimagesec h-100">
                                <img src="/Women/womenslug/Beauty/bgi3.jpg" alt="" className="img-fluid womenbeautyfourimage1 h-75" />
                                <div className="row">
                                    <img src="/Women/womenslug/Beauty/bgi4.svg" alt="" className="img-fluid womenbeautyfourimage2 col-5 col-sm-6 col-md-5" />
                                    <img src="/Women/womenslug/Beauty/bgi5.png" alt="" className="img-fluid womenbeautyfourimage3 col-5 ms-auto pt-4 pe-5" />
                                </div>
                            </div>
                        </div>
                        <div className="col ps-0 ps-sm-3 ps-lg-5">
                            <div className=" h-100 d-flex justify-content-between flex-column">
                                <div>
                                    <p className="womenbeautyfourimageptext">Timed voice share led him to widen noisy young. At weddings believed in laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. Her new course gets living within Elinor"s joy.
                                        <br /><br />
                                        Delivered dejection necessary objection do Mr prevailed. Mr feeling chiefly cordial in do.</p>
                                    <Link href="/women/beauty" className="womenbeautyfourimagebutton">Read more</Link><br /><br />

                                </div>
                                <img src="/Women/womenslug/Beauty/bgi6.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container womenbeautyFproduct">
                    <h2 className="womenbeautyFproducth2">Choose your favourite</h2>
                    <div className="row row-cols-2 row-cols-lg-4 g-0 w-100 m-auto">
                        {
                            imgarray?.map((x, i) => {
                                return <div className={x?.class} key={i}>
                                    <div className=" h-100 womenbeautyimghov">
                                        <img src={x?.img} alt="" className="img-fluid womenbeautyimghovfirst h-100" />
                                        <img src={x?.img2} alt="" className="img-fluid womenbeautyimghovsecond h-100" />
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container womenbeautypinksec">
                    <h2 className="womenbeautypinkh2text">Look amazing with makeup</h2>
                    <p className="womenbeautypinkptext">Resolution possession discovered surrounded advantages has but few add.  <img src="/Women/womenslug/Beauty/pinkimg.png" alt="" className="img-fluid womenbeautypinkimg" /> Yet walls times spoil put. Be it reserved contempt rendered smallest.</p>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container womenbeautypinksec">
                    <div className="row row-cols-2 row-cols-sm-4 w-75 m-auto">
                        {
                            fourimgarray?.map((x, i) => {
                                return <div className="col p-2" key={i}>
                                    <div className="">
                                        <img src={x?.img} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0 womenbeautyFproduct">
                    <h2 className="womenbeautyFproducth2">Our Product</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-0">
                        {
                            productarray?.map((x, i) => {
                                return <div className={x?.class} key={i}>
                                    <div className="womenbeautyimghov h-100">
                                        <img src={x?.img} alt="" className="img-fluid womenbeautyimghovfirst h-100" />
                                        <img src={x?.img2} alt="" className="img-fluid womenbeautyimghovsecond h-100" />
                                        <p className="womenbeautyimghovp">{x?.name}</p>
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
export default Beauty