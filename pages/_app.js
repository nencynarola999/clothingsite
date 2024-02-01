import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/Main.css";
import "@/styles/Background.css";
import "@/styles/Sale.css";
import "@/styles/Women.css";
import "@/styles/Men.css";
import "@/styles/Kids.css";
import "@/styles/Service.css";
import "@/styles/Extrasec.css";
import "@/styles/Contact.css";
import "@/styles/Blog.css";
import Topbar from "./topbar"
import Alliconnavbar from "@/navbarcomponent/Alliconnavbar"
import Signin from "@/navbarcomponent/partials/Signin";
import Signup from "@/navbarcomponent/partials/Signup";
import NextLink from "@/reusablecomponent/NextLink";
import TextblackcommonFooter from "@/footer/TextblackcommonFooter";
import TextwhitecommonFooter from "@/footer/TextwhitecommonFooter";
import BluebackgroundFooter from "@/footer/BluebackgroundFooter";
import Footer2 from "@/footer/LightbgFooter";
import Footer3 from "@/footer/BlackimgbgFooter";
import BlackimgbgFooter from "@/footer/BlackimgbgFooter";
import Footer4 from "@/footer/BlackbgFooter";
import BlackbgFooter from "@/footer/BlackbgFooter";
import Footer5 from "@/footer/WhitebgFooter";
import WhitebgFooter from "@/footer/WhitebgFooter";
import Footer6 from "@/footer/WhitebgphoneaddressFooter";
import WhitebgphoneaddressFooter from "@/footer/WhitebgphoneaddressFooter";
import Footer7 from "@/footer/WhitebgjoincommunityFooter";
import WhitebgjoincommunityFooter from "@/footer/WhitebgjoincommunityFooter";
import Footer8 from "@/footer/BlackbgjoincommunityFooter";
import BlackbgjoincommunityFooter from "@/footer/BlackbgjoincommunityFooter";
import LightbgFooter from "@/footer/LightbgFooter";
import BlackandWhitenavbar from "@/navbarcomponent/BlackandWhitenavbar";
import IconwhitebgNavbar from "@/navbarcomponent/IconwhitebgNavbar";
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import 'swiper/css';



export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      // Global settings for AOS data-aos-duration="1000" data-aos-delay="200"
      duration: 1200, // Animation duration
      offset: 100, // Offset (in pixels) from the top of the page
    });
  }, []);
  return <>
   <Provider store={store}>
    <Topbar />
    <Alliconnavbar
      // language
      // search
      // socialicon
      // info
      button={
        <div className="d-flex align-items-center gap-3">
          <Signin />
          <Signup />
        </div>
      }
    // button={<NextLink href="" title="Contact" className="btn btn1 rounded-pill" />}
    // button={<NextLink href="" title="Free Trial" className="btn  btn1 rounded" />}
    />

    {/* <BlackandWhitenavbar/> */}

    {/* {{{{{{{{{{{{{    IconwhitebgNavbar ma uper aa image mukvi    }}}}}}}}}}}}} */}
    {/* <Link href="/"><div className="d-flex justify-content-center align-items-center d-none d-lg-block" style={{height:"100px"}}>
      <img src="/navbar/logo/logo-dark.png" alt="" width="146px"  />
      </div></Link>
    <IconwhitebgNavbar/> */}
    <Component {...pageProps} />
    {/* <TextblackcommonFooter/> */}
    {/* <TextwhitecommonFooter/> */}
    {/* <BluebackgroundFooter/> */}
    {/* <LightbgFooter/> */}
    {/* <BlackimgbgFooter/> */}
    {/* <BlackbgFooter/> */}
    {/* <WhitebgFooter/> */}
    {/* <WhitebgphoneaddressFooter/>  */}
    {/* <WhitebgjoincommunityFooter/> */}
    {/* <BlackbgjoincommunityFooter/> */}
    <LightbgFooter />
    </Provider>
  </>

}
// {{{{{{{{{ static data}}}}}}}}}
// import { getethincfusionApi } from "@/store/Action/PostAction";
// import React, { useState, useEffect } from "react";
// import { Nav, Tab } from "react-bootstrap";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";

// const CustomPagination = ({ pageCount, onPageChange, currentPage }) => {
//     const visiblePages = 3;

//     const renderPageNumbers = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= pageCount; i++) {
//             pageNumbers.push(i);
//         }
//         return pageNumbers.map((number) => {
//             const isCurrent = number === currentPage + 1;
//             const isEllipsis =
//                 number > 1 &&
//                 number < pageCount &&
//                 Math.abs(currentPage + 1 - number) > Math.floor(visiblePages / 2);

//             return (
//                 <React.Fragment key={number}>
//                     {isEllipsis && <span className="spandot">...</span>}
//                     {!isEllipsis && (
//                         <li className={`page-item page_itemm ${isCurrent ? 'active' : ''}`}>
//                             <a className="page-link page_linkk" onClick={() => onPageChange(number - 1)}>
//                                 {number}
//                             </a>
//                         </li>
//                     )}
//                 </React.Fragment>
//             );
//         });
//     };

//     return (
//         <nav aria-label="Page navigation example">
//             <ul className="pagination  d-flex justify-content-center">
//                 {renderPageNumbers()}
//             </ul>
//         </nav>
//     );
// };

// const Kurta_Kurti = () => {

//     const [showTabs, setShowTabs] = useState(false);
//     const [isfirstChecked, setIsfirstChecked] = useState(false);
//     const [issecondChecked, setIssecondChecked] = useState(false);
//     // const [currentPage, setCurrentPage] = useState(0);

//     const handleSizeClick = () => {
//         setShowTabs(!showTabs);
//         setCurrentPage(0);
//     };

//     const handlefirstCheckboxChange = () => {
//         setIsfirstChecked(!isfirstChecked);
//         setIssecondChecked(false);
//         setCurrentPage(0);
//     };

//     const handlesecondCheckboxChange = () => {
//         setIssecondChecked(!issecondChecked);
//         setIsfirstChecked(false);
//         setCurrentPage(0);
//     };

//     const products = [
//         {
//             no: "extra",
//             category: "extrasec",
//             pro: [
//                 { id: "1", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "2", image: "/Women/womenslug/Beauty/i5.jpg" },
//                 { id: "3", image: "/Women/womenslug/Beauty/i3.jpg" },
//                 { id: "4", image: "/Women/womenslug/Beauty/i4.jpg" },

//             ],
//         },
//         {
//             no: "1",
//             category: "firstt",
//             pro: [
//                 { id: "1", image: "/Women/womenslug/Beauty/i1.jpg" },
//                 { id: "2", image: "/Women/womenslug/Beauty/i2.jpg" },
//                 { id: "3", image: "/Women/womenslug/Beauty/i3.jpg" },
//                 { id: "4", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "5", image: "/Women/womenslug/Beauty/i5.jpg" },
//                 { id: "6", image: "/Women/womenslug/Beauty/i6.jpg" },
//                 { id: "7", image: "/Women/womenslug/Beauty/i1.jpg" },
//                 { id: "8", image: "/Women/womenslug/Beauty/i2.jpg" },
//                 { id: "9", image: "/Women/womenslug/Beauty/i3.jpg" },
//                 { id: "10", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "11", image: "/Women/womenslug/Beauty/i5.jpg" },
//                 { id: "12", image: "/Women/womenslug/Beauty/i6.jpg" },
//                 { id: "13", image: "/Women/womenslug/Beauty/i1.jpg" },
//                 { id: "14", image: "/Women/womenslug/Beauty/i2.jpg" },
//                 { id: "15", image: "/Women/womenslug/Beauty/i3.jpg" },
//                 { id: "16", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "17", image: "/Women/womenslug/Beauty/i5.jpg" },
//                 { id: "18", image: "/Women/womenslug/Beauty/i6.jpg" },
//                 { id: "19", image: "/Women/womenslug/Beauty/i1.jpg" },
//                 { id: "20", image: "/Women/womenslug/Beauty/i2.jpg" },
//                 { id: "21", image: "/Women/womenslug/Beauty/i3.jpg" },
//                 { id: "22", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "23", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "24", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "25", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "26", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "27", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "28", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "29", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "30", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "31", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "32", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "33", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "34", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "35", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "36", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "37", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "38", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "39", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "40", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "41", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "42", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "43", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "44", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "45", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "46", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "47", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "48", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "49", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "50", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "51", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "52", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "53", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "54", image: "/Women/womenslug/Beauty/i4.jpg" },
             

//             ],
//         },
//         {
//             no: "2",
//             category: "secondd",
//             pro: [
//                 { id: "1", image: "/Women/womenslug/Beauty/i1.jpg" },
//                 { id: "2", image: "/Women/womenslug/Beauty/i2.jpg" },
//                 { id: "3", image: "/Women/womenslug/Beauty/i3.jpg" },
//                 { id: "4", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "5", image: "/Women/womenslug/Beauty/i5.jpg" },
//                 { id: "6", image: "/Women/womenslug/Beauty/i6.jpg" },
//                 { id: "7", image: "/Women/womenslug/Beauty/i1.jpg" },
//                 { id: "8", image: "/Women/womenslug/Beauty/i2.jpg" },
//                 { id: "9", image: "/Women/womenslug/Beauty/i3.jpg" },
//                 { id: "10", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "11", image: "/Women/womenslug/Beauty/i5.jpg" },
//                 { id: "12", image: "/Women/womenslug/Beauty/i6.jpg" },
//                 { id: "13", image: "/Women/womenslug/Beauty/i1.jpg" },
//                 { id: "14", image: "/Women/womenslug/Beauty/i2.jpg" },
//                 { id: "15", image: "/Women/womenslug/Beauty/i3.jpg" },
//                 { id: "16", image: "/Women/womenslug/Beauty/i4.jpg" },
//                 { id: "17", image: "/Women/womenslug/Beauty/i5.jpg" },
//                 { id: "18", image: "/Women/womenslug/Beauty/i6.jpg" },

//             ],
//         },
//     ];
//     const filteredProducts = isfirstChecked
//         ? products?.filter((product) => product.category === "firstt")
//         : issecondChecked
//             ? products?.filter((product) => product.category === "secondd")
//             : products?.filter((product) => product.category === "extrasec");

//     const [currentPage, setCurrentPage] = useState(0);
//     const itemsPerPage = 10;  // limit set kari devani 1 page ma ketlu show karavu che
//     const dynamicPageCount = Math.ceil(filteredProducts.reduce((acc, product) => acc + product.pro.length, 0) / itemsPerPage);
//     const shouldShowPagination = dynamicPageCount > 1;

//     const handlePageClick = (selected) => {
//         setCurrentPage(selected);
//     };

//     const renderParagraphs = () => {
//         const startIndex = currentPage * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;

//         const contentToRender = [];

//         filteredProducts.forEach((product) => {
//             product.pro.slice(startIndex, endIndex).forEach((item) => {
//                 contentToRender.push(
//                     <React.Fragment key={item.id}>
//                         <div>
//                             <p>{item.id}</p>
//                             <img src={item.image} alt={`Image ${item.id}`} className=" img-fluid mx-5" />
//                         </div>
//                     </React.Fragment>
//                 );
//             });
//         });

//         return contentToRender;
//     };
//     const serverRenderedContent = renderParagraphs();
//     return (
//         <div>
//             <div className="container-fluid g-0 mt-3">
//                 <div className="container g-0">
//                     <Tab.Container id="left-tabs-example" defaultActiveKey="sizeextra">
//                         <div className="row p-0 g-0 mt-5 h-100 ">
//                             <div className="col-4 col-md-3 col-lg-2  womenpagesubdiv1 px-0">
//                                 <div className="h-100 ">
//                                     <div className="womenpagesideheadingset">
//                                         <br />
//                                         <div className="d-flex justify-content-between me-3" onClick={handleSizeClick}>
//                                             <h6 style={{ cursor: "pointer" }}>SIZE</h6>
//                                             <div>{showTabs ? <FaChevronUp /> : <FaChevronDown />}</div>
//                                         </div>
//                                         {showTabs && (
//                                             <>
//                                                 <Nav.Link as="div" eventKey="sizefirst">
//                                                     <div className="form-check ms-3 ms-sm-0">
//                                                         <input
//                                                             className="form-check-input forminput"
//                                                             type="checkbox"
//                                                             name="check"
//                                                             value="sizefirst"
//                                                             id="flexCheckfirst"
//                                                             checked={isfirstChecked}
//                                                             onChange={handlefirstCheckboxChange}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="flexCheckfirst">
//                                                             XS (395)
//                                                         </label>
//                                                     </div>
//                                                 </Nav.Link>
//                                                 <Nav.Link as="div" eventKey="sizesecond">
//                                                     <div className="form-check ms-3 ms-sm-0">
//                                                         <input
//                                                             className="form-check-input forminput"
//                                                             type="checkbox"
//                                                             name="check1"
//                                                             value="sizesecond"
//                                                             id="flexChecksecond"
//                                                             checked={issecondChecked}
//                                                             onChange={handlesecondCheckboxChange}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="flexChecksecond">
//                                                             S (449)
//                                                         </label>
//                                                     </div>
//                                                 </Nav.Link>
//                                             </>
//                                         )}
//                                         <br />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-8 col-md-9 col-lg-10  womenpagesubdiv2 px-0">
//                                 <div className=" h-100">
//                                     <Tab.Content>
//                                         <Tab.Pane eventKey="sizeextra">
//                                             {filteredProducts.map((x, i) => (
//                                                 <div key={i}>
//                                                     <h1>{x.no}</h1>
//                                                     <p>Showing {x.pro?.length} Products</p>
//                                                     <div className="row row-cols-3">{serverRenderedContent}</div>
//                                                 </div>
//                                             ))}
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="sizefirst">
//                                             {filteredProducts.map((x, i) => (
//                                                 <div key={i}>
//                                                     <h1>{x.no}</h1>
//                                                     <p>Showing {x.pro?.length} Products</p>
//                                                     <div className="row row-cols-3">{serverRenderedContent}</div>
//                                                 </div>
//                                             ))}
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="sizesecond">
//                                             {filteredProducts.map((x, i) => (
//                                                 <div key={i}>
//                                                     <h1>{x.no}</h1>
//                                                     <p>Showing {x.pro?.length} Products</p>
//                                                     <div className="row row-cols-3">{serverRenderedContent}</div>
//                                                 </div>
//                                             ))}
//                                         </Tab.Pane>
//                                     </Tab.Content>
//                                 </div>
//                             </div>

//                             {shouldShowPagination && (
//                                 <CustomPagination
//                                     pageCount={dynamicPageCount}
//                                     onPageChange={handlePageClick}
//                                     currentPage={currentPage}
//                                 />
//                             )}
//                         </div>
//                     </Tab.Container>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Kurta_Kurti;

