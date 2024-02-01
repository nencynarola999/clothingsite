import Kurta_Kurti from "@/component/women/EthincFusion/Kurta_Kurti";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export async function getStaticPaths() {
    return {
        paths: [
            { params: { womenslug: "ethnicfusion", womenalldata: "kurtaandkurtis" } },
            { params: { womenslug: "ethnicfusion", womenalldata: "kurtasets" } },
            { params: { womenslug: "ethnicfusion", womenalldata: "ethnicdresses" } },
            { params: { womenslug: "ethnicfusion", womenalldata: "topsandtunics" } },
            { params: { womenslug: "ethnicfusion", womenalldata: "leggingsandchuridars" } },
            { params: { womenslug: "ethnicfusion", womenalldata: "pantsandpalazzos" } },
            { params: { womenslug: "ethnicfusion", womenalldata: "skirts" } },
            { params: { womenslug: "ethnicfusion", womenalldata: "dupattasandstoles" } },
            { params: { womenslug: "ethnicfusion", womenalldata: "saree" } },
            { params: { womenslug: "westernwear", womenalldata: "topsandtees" } },
            { params: { womenslug: "westernwear", womenalldata: "dressesandjumpsuits" } },
            { params: { womenslug: "westernwear", womenalldata: "jeansandjeggings" } },
            { params: { womenslug: "westernwear", womenalldata: "shortsandskirts" } },
            { params: { womenslug: "westernwear", womenalldata: "trousers" } },
            { params: { womenslug: "westernwear", womenalldata: "jacketsandshrugs" } },
            { params: { womenslug: "sportswear", womenalldata: "topstees" } },
            { params: { womenslug: "sportswear", womenalldata: "leggings" } },
            { params: { womenslug: "sportswear", womenalldata: "joggersandtracks" } },
            { params: { womenslug: "sportswear", womenalldata: "sweatshirtsandjackets" } },
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const categoryMappings = {
        kurtaandkurtis: {
            heading: "Kurta and Kurtis",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        kurtasets: {
            heading: "Kurta Sets",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        ethnicdresses: {
            heading: "Ethnic Dresses",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        topsandtunics: {
            heading: "Tops & Tunics",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        leggingsandchuridars: {
            heading: "Leggings & Churidars",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        pantsandpalazzos: {
            heading: "Pants & Palazzos",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        skirts: {
            heading: "Skirts",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        dupattasandstoles: {
            heading: "Dupattas & Stoles",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        saree: {
            heading: "Saree",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        topsandtees: {
            heading: "Tops & Tees",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        dressesandjumpsuits: {
            heading: "Dresses & Jumpsuits",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        jeansandjeggings: {
            heading: "Jeans & Jeggings",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        shortsandskirts: {
            heading: "Shorts & Skirts",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        trousers: {
            heading: "Trousers",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        jacketsandshrugs: {
            heading: "Jackets & Shrugs",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        topstees: {
            heading: "Tops & Tees",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        leggings: {
            heading: "Leggings",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        joggersandtracks: {
            heading: "Joggers & Tracks",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
        sweatshirtsandjackets: {
            heading: "Sweatshirts & Jackets",
            paragraph: "Kurtis are the go-to outfit option for Indian women! A good kurta for women works at parties and festivals, in offices and colleges, and on a simple outing with friends. Libas’ wide selection of women’s kurtas includes anarkali kurtas, asymmetric kurtas, straight kurtas, A-line kurtas, angrakha kurtas, short kurtas, and kurtis with shrugs. Additionally, premium quality fabric is selected by the experts to create these beautiful kurtis for women. Libas’ collection of kurtas online is pretty, stylish and comfortable. Solids, florals, geometric, abstract, schiffli, paisley, and so many more patterns adorn Libas’ kurtas for women. Find the best kurtas for women listed on the Libas’ website and mobile app for minimal prices. Shopping for kurtis online lets you own your favourite kurti for women without leaving the comfort of your home. The kurtas are available in the smallest XS size, and the sizes go up to 6XL on Libas. Hurry up! Don't miss your chance to claim your favourite kurta!",
        },
    };

    const { heading, paragraph } = categoryMappings[params.womenalldata] || {
        heading: "Default Heading",
        paragraph: "Default Paragraph for all categories.",
    };

    return {
        props: {
            dynamicHeading: heading,
            dynamicParagraph: paragraph,
        },
    };
}

const index = ({ dynamicHeading, dynamicParagraph }) => {
    let router = useRouter();
    let { womenalldata } = router?.query
    if (!womenalldata ||
        !(womenalldata === "kurtaandkurtis"
            || womenalldata === "kurtasets"
            || womenalldata === "ethnicdresses"
            || womenalldata === "ethnicdresses"
            || womenalldata === "topsandtunics"
            || womenalldata === "leggingsandchuridars"
            || womenalldata === "pantsandpalazzos"
            || womenalldata === "skirts")) {
        return null;
    }

    const [showFullParagraph, setShowFullParagraph] = useState(false);

    const toggleParagraph = () => {
        setShowFullParagraph(!showFullParagraph);
    };

    const truncatedParagraph = dynamicParagraph.split(' ').slice(0, 35).join(' ');
    const displayParagraph = showFullParagraph ? dynamicParagraph : truncatedParagraph;
    const buttonText = showFullParagraph ? 'Read Less' : 'Read More';
    return (
        <div className="container-fluid mt-5">
            <div className="container px-0 py-3 womenslug">
                <div className="row g-0">
                    <div className="col-3">
                        <p>Home | {dynamicHeading}</p>
                    </div>
                    <div className="col">
                        <div className=" womenslugfirstsec g-0">
                            <div className="" >
                                <h4 className="">{dynamicHeading} For Women</h4>
                                <p >{displayParagraph}</p>
                                <div onClick={toggleParagraph} style={{ cursor: "pointer" }} className="womenslugbutton">{buttonText}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {womenalldata === "kurtaandkurtis" && (
                    <Kurta_Kurti
                        dynamicHeading={dynamicHeading} />
                )}
            </div>
            {/* </div> */}
        </div>
    );
};
export default index;


// import { getethincfusionApi } from "@/store/Action/PostAction";
// import React, { useState, useEffect } from "react";
// import { Nav, Tab } from "react-bootstrap";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { GoDotFill } from "react-icons/go";
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
//                 <React.Fragment key={number} >
//                     {isEllipsis && <span className="spandot  mt-4">...</span>}
//                     {!isEllipsis && (
//                         <li className={`page-item page_itemm mt-4 ${isCurrent ? 'active' : ''}`} style={{ cursor: "pointer" }}>
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
//     let state = useSelector(state => state?.product?.ethincfusion);
//     let dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getethincfusionApi())
//     }, [dispatch])

//     let kurtaandkurti = state?.find(x => x?.category == "kurtaandkurti")

//     let extrasec = kurtaandkurti?.data?.filter(x => x?.category == "extrasec")
//     let firstt = kurtaandkurti?.data?.filter(x => x?.category == "firstt")
//     let secondd = kurtaandkurti?.data?.filter(x => x?.category == "secondd")
//     let thirdd = kurtaandkurti?.data?.filter(x => x?.category == "thirdd")
//     let forthh = kurtaandkurti?.data?.filter(x => x?.category == "forthh")
//     let fifthh = kurtaandkurti?.data?.filter(x => x?.category == "fifthh")
//     let sixthh = kurtaandkurti?.data?.filter(x => x?.category == "sixthh")
//     let seventhh = kurtaandkurti?.data?.filter(x => x?.category == "seventhh")

//     const [showTabs, setShowTabs] = useState(false);
//     const [isfirstChecked, setIsfirstChecked] = useState(false);
//     const [issecondChecked, setIssecondChecked] = useState(false);
//     const [isthirdChecked, setIsthirdChecked] = useState(false);
//     const [isforthChecked, setIsforthChecked] = useState(false);
//     const [isfifthChecked, setIsfifthChecked] = useState(false);
//     const [issixthChecked, setIssixthChecked] = useState(false);
//     const [isseventhChecked, setIsseventhChecked] = useState(false);
//     const [currentPage, setCurrentPage] = useState(0);

//     const handleSizeClick = () => {
//         setShowTabs(!showTabs);
//         setCurrentPage(0);
//     };


//     let color = state?.find(x => x.category == "color")
//     console.log(color, "color")

//     let beige = color?.colordata?.filter(x => x?.category == "Beige")
//     let black = color?.colordata?.filter(x => x?.category == "Black")
//     let blue = color?.colordata?.filter(x => x?.category == "Blue")
//     let brown = color?.colordata?.filter(x => x?.category == "Brown")
//     let burgundy = color?.colordata?.filter(x => x?.category == "Burgundy")
//     let coral = color?.colordata?.filter(x => x?.category == "Coral")
//     let cream = color?.colordata?.filter(x => x?.category == "Cream")
//     let green = color?.colordata?.filter(x => x?.category == "Green")
//     let grey = color?.colordata?.filter(x => x?.category == "Grey")
//     let magenta = color?.colordata?.filter(x => x?.category == "Magenta")
//     let maroon = color?.colordata?.filter(x => x?.category == "Maroon")
//     let multi = color?.colordata?.filter(x => x?.category == "Multi")
//     let mustard = color?.colordata?.filter(x => x?.category == "Mustard")
//     let navyblue = color?.colordata?.filter(x => x?.category == "NavyBlue")
//     let offwhite = color?.colordata?.filter(x => x?.category == "OffWhite")
//     let olive = color?.colordata?.filter(x => x?.category == "Olive")
//     let orange = color?.colordata?.filter(x => x?.category == "Orange")
//     let peach = color?.colordata?.filter(x => x?.category == "Peach")
//     let pink = color?.colordata?.filter(x => x?.category == "Pink")
//     let purple = color?.colordata?.filter(x => x?.category == "Purple")
//     let red = color?.colordata?.filter(x => x?.category == "Red")
//     let rust = color?.colordata?.filter(x => x?.category == "Rust")
//     let seagreen = color?.colordata?.filter(x => x?.category == "SeaGreen")
//     let teal = color?.colordata?.filter(x => x?.category == "Teal")
//     let turquoiseblue = color?.colordata?.filter(x => x?.category == "TurquoiseBlue")
//     let white = color?.colordata?.filter(x => x?.category == "White")
//     let yellow = color?.colordata?.filter(x => x?.category == "Yellow")


//     const [iscolorBeigeChecked, setiscolorBeigeChecked] = useState(false);
//     const [iscolorBlackChecked, setiscolorBlackChecked] = useState(false);
//     const [iscolorBlueChecked, setiscolorBlueChecked] = useState(false);
//     const [iscolorBrownChecked, setiscolorBrownChecked] = useState(false);
//     const [iscolorBurgundyChecked, setiscolorBurgundyChecked] = useState(false);
//     const [iscolorCoralChecked, setiscolorCoralChecked] = useState(false);
//     const [iscolorCreamChecked, setiscolorCreamChecked] = useState(false);
//     const [iscolorGreenChecked, setiscolorGreenChecked] = useState(false);
//     const [iscolorGreyChecked, setiscolorGreyChecked] = useState(false);
//     const [iscolorMagentaChecked, setiscolorMagentaChecked] = useState(false);
//     const [iscolorMaroonChecked, setiscolorMaroonChecked] = useState(false);
//     const [iscolorMultiChecked, setiscolorMultiChecked] = useState(false);
//     const [iscolorMustardChecked, setiscolorMustardChecked] = useState(false);
//     const [iscolorNavyBlueChecked, setiscolorNavyBlueChecked] = useState(false);
//     const [iscolorOffWhiteChecked, setiscolorOffWhiteChecked] = useState(false);
//     const [iscolorOliveChecked, setiscolorOliveChecked] = useState(false);
//     const [iscolorOrangeChecked, setiscolorOrangeChecked] = useState(false);
//     const [iscolorPeachChecked, setiscolorPeachChecked] = useState(false);
//     const [iscolorPinkChecked, setiscolorPinkChecked] = useState(false);
//     const [iscolorPurpleChecked, setiscolorPurpleChecked] = useState(false);
//     const [iscolorRedChecked, setiscolorRedChecked] = useState(false);
//     const [iscolorRustChecked, setiscolorRustChecked] = useState(false);
//     const [iscolorSeaGreenChecked, setiscolorSeaGreenChecked] = useState(false);
//     const [iscolorTealChecked, setiscolorTealChecked] = useState(false);
//     const [iscolorTurquoiseBlueChecked, setiscolorTurquoiseBlueChecked] = useState(false);
//     const [iscolorWhiteChecked, setiscolorWhiteChecked] = useState(false);
//     const [iscolorYellowChecked, setiscolorYellowChecked] = useState(false);
//     const [showTabscolor, setShowTabscolor] = useState(false);

//     const handleSizeClickcolor = () => {
//         setShowTabscolor(!showTabscolor);
//         setCurrentPage(0);
//     };

//     const handleBeigeCheckboxChange = () => {
//         setiscolorBeigeChecked(!iscolorBeigeChecked);
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleBlackCheckboxChange = () => {
//         setiscolorBlackChecked(!iscolorBlackChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleBlueCheckboxChange = () => {
//         setiscolorBlueChecked(!iscolorBlueChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleBrownCheckboxChange = () => {
//         setiscolorBrownChecked(!iscolorBrownChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleBurgundyCheckboxChange = () => {
//         setiscolorBurgundyChecked(!iscolorBurgundyChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleCoralCheckboxChange = () => {
//         setiscolorCoralChecked(!iscolorCoralChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleCreamCheckboxChange = () => {
//         setiscolorCreamChecked(!iscolorCreamChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleGreenCheckboxChange = () => {
//         setiscolorGreenChecked(!iscolorGreenChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleGreyCheckboxChange = () => {
//         setiscolorGreyChecked(!iscolorGreyChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleMagentaCheckboxChange = () => {
//         setiscolorMagentaChecked(!iscolorMagentaChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleMaroonCheckboxChange = () => {
//         setiscolorMaroonChecked(!iscolorMaroonChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleMultiCheckboxChange = () => {
//         setiscolorMultiChecked(!iscolorMultiChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         // setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleMustardCheckboxChange = () => {
//         setiscolorMustardChecked(!iscolorMustardChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleNavyBlueCheckboxChange = () => {
//         setiscolorNavyBlueChecked(!iscolorNavyBlueChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleOffWhiteCheckboxChange = () => {
//         setiscolorOffWhiteChecked(!iscolorOffWhiteChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleOliveCheckboxChange = () => {
//         setiscolorOliveChecked(!iscolorOliveChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleOrangeCheckboxChange = () => {
//         setiscolorOrangeChecked(!iscolorOrangeChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handlePeachCheckboxChange = () => {
//         setiscolorPeachChecked(!iscolorPeachChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handlePinkCheckboxChange = () => {
//         setiscolorPinkChecked(!iscolorPinkChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handlePurpleCheckboxChange = () => {
//         setiscolorPurpleChecked(!iscolorPurpleChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleRedCheckboxChange = () => {
//         setiscolorRedChecked(!iscolorRedChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleRustCheckboxChange = () => {
//         setiscolorRustChecked(!iscolorRustChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleSeaGreenCheckboxChange = () => {
//         setiscolorSeaGreenChecked(!iscolorSeaGreenChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleTealCheckboxChange = () => {
//         setiscolorTealChecked(!iscolorTealChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleTurquoiseBlueCheckboxChange = () => {
//         setiscolorTurquoiseBlueChecked(!iscolorTurquoiseBlueChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorWhiteChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleWhiteCheckboxChange = () => {
//         setiscolorWhiteChecked(!iscolorWhiteChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorYellowChecked(false)
//         setCurrentPage(0);
//     };
//     const handleYellowCheckboxChange = () => {
//         setiscolorYellowChecked(!iscolorYellowChecked);
//         setiscolorBeigeChecked(false)
//         setiscolorBlackChecked(false)
//         setiscolorBlueChecked(false)
//         setiscolorBrownChecked(false)
//         setiscolorBurgundyChecked(false)
//         setiscolorCoralChecked(false)
//         setiscolorCreamChecked(false)
//         setiscolorGreenChecked(false)
//         setiscolorGreyChecked(false)
//         setiscolorMagentaChecked(false)
//         setiscolorMaroonChecked(false)
//         setiscolorMultiChecked(false)
//         setiscolorMustardChecked(false)
//         setiscolorNavyBlueChecked(false)
//         setiscolorOffWhiteChecked(false)
//         setiscolorOliveChecked(false)
//         setiscolorOrangeChecked(false)
//         setiscolorPeachChecked(false)
//         setiscolorPinkChecked(false)
//         setiscolorPurpleChecked(false)
//         setiscolorRedChecked(false)
//         setiscolorRustChecked(false)
//         setiscolorSeaGreenChecked(false)
//         setiscolorTealChecked(false)
//         setiscolorTurquoiseBlueChecked(false)
//         setiscolorWhiteChecked(false)
//         setCurrentPage(0);
//     }


//     const handlefirstCheckboxChange = () => {
//         setIsfirstChecked(!isfirstChecked);
//         setIssecondChecked(false);
//         setIsthirdChecked(false);
//         setIsforthChecked(false);
//         setIsfifthChecked(false);
//         setIssixthChecked(false);
//         setIsseventhChecked(false);
//         setCurrentPage(0);
//     };

//     const handlesecondCheckboxChange = () => {
//         setIssecondChecked(!issecondChecked);
//         setIsfirstChecked(false);
//         setIsthirdChecked(false);
//         setIsforthChecked(false);
//         setIsfifthChecked(false);
//         setIssixthChecked(false);
//         setIsseventhChecked(false);
//         setCurrentPage(0);
//     };
//     const handlethirdCheckboxChange = () => {
//         setIsthirdChecked(!isthirdChecked);
//         setIsfirstChecked(false);
//         setIssecondChecked(false);
//         setIsforthChecked(false);
//         setIsfifthChecked(false);
//         setIssixthChecked(false);
//         setIsseventhChecked(false);
//         setCurrentPage(0);
//     };
//     const handleforthCheckboxChange = () => {
//         setIsforthChecked(!isforthChecked);
//         setIsfirstChecked(false);
//         setIssecondChecked(false);
//         setIsthirdChecked(false);
//         setIsfifthChecked(false);
//         setIssixthChecked(false);
//         setIsseventhChecked(false);
//         setCurrentPage(0);
//     };
//     const handlefifthCheckboxChange = () => {
//         setIsfifthChecked(!isfifthChecked);
//         setIsfirstChecked(false);
//         setIssecondChecked(false);
//         setIsthirdChecked(false);
//         setIsforthChecked(false);
//         setIssixthChecked(false);
//         setIsseventhChecked(false);
//         setCurrentPage(0);
//     };
//     const handlesixthCheckboxChange = () => {
//         setIssixthChecked(!issixthChecked);
//         setIsfirstChecked(false);
//         setIssecondChecked(false);
//         setIsthirdChecked(false);
//         setIsforthChecked(false);
//         setIsfifthChecked(false);
//         setIsseventhChecked(false);
//         setCurrentPage(0);
//     };
//     const handleseventhCheckboxChange = () => {
//         setIsseventhChecked(!isseventhChecked);
//         setIsfirstChecked(false);
//         setIssecondChecked(false);
//         setIsthirdChecked(false);
//         setIsforthChecked(false);
//         setIsfifthChecked(false);
//         setIssixthChecked(false);
//         setCurrentPage(0);
//     };

//     // const [currentFilteredProducts, setCurrentFilteredProducts] = useState([]);
//     // useEffect(() => {
//     // const updatedProducts = isfirstChecked
//     // ? firstt
//     // : issecondChecked
//     // ? secondd
//     // : isthirdChecked
//     // ? thirdd
//     // : isforthChecked
//     // ? forthh
//     // : isfifthChecked
//     // ? fifthh
//     // : issixthChecked
//     // ? sixthh
//     // : isseventhChecked
//     // ? seventhh
//     // : extrasec;

//     // setCurrentFilteredProducts(updatedProducts);
//     // }, [isfirstChecked, issecondChecked, isthirdChecked, isforthChecked, isfifthChecked, issixthChecked, isseventhChecked]);

//     const currentFilteredProducts = isfirstChecked
//         ? kurtaandkurti?.data?.filter(x => x?.category == "firstt")
//         : issecondChecked
//             ? kurtaandkurti?.data?.filter(x => x?.category == "secondd")
//             : isthirdChecked
//                 ? kurtaandkurti?.data?.filter(x => x?.category == "thirdd")
//                 : isforthChecked
//                     ? kurtaandkurti?.data?.filter(x => x?.category == "forthh")
//                     : isfifthChecked
//                         ? kurtaandkurti?.data?.filter(x => x?.category == "fifthh")
//                         : issixthChecked
//                             ? kurtaandkurti?.data?.filter(x => x?.category == "sixthh")
//                             : isseventhChecked
//                                 ? kurtaandkurti?.data?.filter(x => x?.category == "seventhh")
//                                 : kurtaandkurti?.data?.filter(x => x?.category == "extrasec")

//     const currentFilteredProductscolor = iscolorBeigeChecked
//         ? color?.colordata?.filter(x => x?.category == "Beige")
//         : iscolorBlackChecked ?
//             color?.colordata?.filter(x => x?.category == "Black")
//             : iscolorBlueChecked ?
//                 color?.colordata?.filter(x => x?.category == "Blue")
//                 : iscolorBrownChecked ?
//                     color?.colordata?.filter(x => x?.category == "Brown")
//                     : iscolorBurgundyChecked ?
//                         color?.colordata?.filter(x => x?.category == "Burgundy")
//                         : iscolorCoralChecked ?
//                             color?.colordata?.filter(x => x?.category == "Coral")
//                             : iscolorCreamChecked ?
//                                 color?.colordata?.filter(x => x?.category == "Cream")
//                                 : iscolorGreenChecked ?
//                                     color?.colordata?.filter(x => x?.category == "Green")
//                                     : iscolorGreyChecked ?
//                                         color?.colordata?.filter(x => x?.category == "Grey")
//                                         : iscolorMagentaChecked ?
//                                             color?.colordata?.filter(x => x?.category == "Magenta")
//                                             : iscolorMaroonChecked ?
//                                                 color?.colordata?.filter(x => x?.category == "Maroon")
//                                                 : iscolorMultiChecked ?
//                                                     color?.colordata?.filter(x => x?.category == "Multi")
//                                                     : iscolorMustardChecked ?
//                                                         color?.colordata?.filter(x => x?.category == "Mustard")
//                                                         : iscolorNavyBlueChecked ?
//                                                             color?.colordata?.filter(x => x?.category == "NavyBlue")
//                                                             : iscolorOffWhiteChecked ?
//                                                                 color?.colordata?.filter(x => x?.category == "OffWhite")
//                                                                 : iscolorOliveChecked ?
//                                                                     color?.colordata?.filter(x => x?.category == "Olive")
//                                                                     : iscolorOrangeChecked ?
//                                                                         color?.colordata?.filter(x => x?.category == "Orange")
//                                                                         : iscolorPeachChecked ?
//                                                                             color?.colordata?.filter(x => x?.category == "Peach")
//                                                                             : iscolorPinkChecked ?
//                                                                                 color?.colordata?.filter(x => x?.category == "Pink")
//                                                                                 : iscolorPurpleChecked ?
//                                                                                     color?.colordata?.filter(x => x?.category == "Purple")
//                                                                                     : iscolorRedChecked ?
//                                                                                         color?.colordata?.filter(x => x?.category == "Red")
//                                                                                         : iscolorRustChecked ?
//                                                                                             color?.colordata?.filter(x => x?.category == "Rust")
//                                                                                             : iscolorSeaGreenChecked ?
//                                                                                                 color?.colordata?.filter(x => x?.category == "SeaGreen")
//                                                                                                 : iscolorTealChecked ?
//                                                                                                     color?.colordata?.filter(x => x?.category == "Teal")
//                                                                                                     : iscolorTurquoiseBlueChecked ?
//                                                                                                         color?.colordata?.filter(x => x?.category == "TurquoiseBlue")
//                                                                                                         : iscolorWhiteChecked ?
//                                                                                                             color?.colordata?.filter(x => x?.category == "White")
//                                                                                                             : iscolorYellowChecked ?
//                                                                                                                 color?.colordata?.filter(x => x?.category == "Yellow")
//                                                                                                                 : extrasec;


//     const itemsPerPage = 10;
//     const dynamicPageCount = Math.ceil(currentFilteredProducts?.length / itemsPerPage);

//     const shouldShowPagination = dynamicPageCount > 1;

//     const handlePageClick = (selected) => {
//         setCurrentPage(selected);
//     };

//     const renderParagraphs = () => {
//         const startIndex = currentPage * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;

//         return currentFilteredProducts
//             ?.slice(startIndex, endIndex)
//             .map((item) => (
//                 <React.Fragment key={item.id}>
//                     <div className="p-0">
//                         <p>{item.id}</p>
//                         <div className="allimages ">
//                             <img src={item.image} alt={`Image ${item.id}`} className=" img-fluid p-3" />
//                             <img src={item.imagehover} className=" img-fluid imagehover p-3" />
//                         </div>

//                     </div>
//                 </React.Fragment>
//             ));
//     };
//     const renderColorParagraphs = () => {
//         const startIndex = currentPage * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;

//         return currentFilteredProductscolor
//             ?.slice(startIndex, endIndex)
//             .map((item) => (
//                 <React.Fragment key={item.id}>
//                     <div className="p-0">
//                         <p>{item.id}</p>
//                         <p>{item.category}</p>
//                         <div className="allimages ">
//                             <img
//                                 src={item.image}
//                                 alt={`Image ${item.id}`}
//                                 className=" img-fluid p-3"
//                             />
//                             <img
//                                 src={item.imagehover}
//                                 className=" img-fluid imagehover p-3"
//                             />
//                         </div>
//                     </div>
//                 </React.Fragment>
//             ));
//     };

//     const serverRenderedContent = renderParagraphs();
//     const serverRenderedColorContent = renderColorParagraphs();

//     return (
//         <div>
//             <div className="container-fluid g-0 mt-3">
//                 <div className="container g-0">
//                     <Tab.Container id="left-tabs-example" defaultActiveKey="sizeextra">
//                         <div className="row p-0 g-0 mt-5 h-100 ">
//                             <div className="col-4 col-md-3 col-lg-2 p-2 border  womenpagesubdiv1 px-0">
//                                 <div className="h-100 ">
//                                     <div className="womenpagesideheadingset">
//                                         <br />
//                                         <div className="d-flex justify-content-between align-items-center me-3" style={{ cursor: "pointer" }} onClick={handleSizeClick}>
//                                             <h6 className="mb-0">SIZE</h6>
//                                             <div>{showTabs ? <FaChevronUp /> : <FaChevronDown />}</div>
//                                         </div>
//                                         {showTabs && (
//                                             <>
//                                                 <Nav.Link as="div" eventKey="sizefirst" >
//                                                     <div className="form-check ms-3 ms-sm-0" >
//                                                         <input
//                                                             className="form-check-input forminput"
//                                                             type="checkbox"
//                                                             name="check"
//                                                             value="sizefirst"
//                                                             id="flexCheckfirst"
//                                                             checked={isfirstChecked}
//                                                             onChange={handlefirstCheckboxChange}
//                                                             style={{ cursor: "pointer" }}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="flexCheckfirst" style={{ cursor: "pointer" }}>
//                                                             XS ({firstt?.length})
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
//                                                             style={{ cursor: "pointer" }}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="flexChecksecond" style={{ cursor: "pointer" }}>
//                                                             S ({secondd?.length})
//                                                         </label>
//                                                     </div>
//                                                 </Nav.Link>
//                                                 <Nav.Link as="div" eventKey="sizethird">
//                                                     <div className="form-check ms-3 ms-sm-0">
//                                                         <input
//                                                             className="form-check-input forminput"
//                                                             type="checkbox"
//                                                             name="check1"
//                                                             value="sizethird"
//                                                             id="flexCheckthird"
//                                                             checked={isthirdChecked}
//                                                             onChange={handlethirdCheckboxChange}
//                                                             style={{ cursor: "pointer" }}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="flexCheckthird" style={{ cursor: "pointer" }}>
//                                                             M ({thirdd?.length})
//                                                         </label>
//                                                     </div>
//                                                 </Nav.Link>
//                                                 <Nav.Link as="div" eventKey="sizeforth">
//                                                     <div className="form-check ms-3 ms-sm-0">
//                                                         <input
//                                                             className="form-check-input forminput"
//                                                             type="checkbox"
//                                                             name="check1"
//                                                             value="sizeforth"
//                                                             id="flexCheckforth"
//                                                             checked={isforthChecked}
//                                                             onChange={handleforthCheckboxChange}
//                                                             style={{ cursor: "pointer" }}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="flexCheckforth" style={{ cursor: "pointer" }}>
//                                                             L ({forthh?.length})
//                                                         </label>
//                                                     </div>
//                                                 </Nav.Link>
//                                                 <Nav.Link as="div" eventKey="sizefifth">
//                                                     <div className="form-check ms-3 ms-sm-0">
//                                                         <input
//                                                             className="form-check-input forminput"
//                                                             type="checkbox"
//                                                             name="check1"
//                                                             value="sizefifth"
//                                                             id="flexCheckfifth"
//                                                             checked={isfifthChecked}
//                                                             onChange={handlefifthCheckboxChange}
//                                                             style={{ cursor: "pointer" }}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="flexCheckfifth" style={{ cursor: "pointer" }}>
//                                                             XL({fifthh?.length})
//                                                         </label>
//                                                     </div>
//                                                 </Nav.Link>
//                                                 <Nav.Link as="div" eventKey="sizesixth">
//                                                     <div className="form-check ms-3 ms-sm-0">
//                                                         <input
//                                                             className="form-check-input forminput"
//                                                             type="checkbox"
//                                                             name="check1"
//                                                             value="sizesixth"
//                                                             id="flexChecksixth"
//                                                             checked={issixthChecked}
//                                                             onChange={handlesixthCheckboxChange}
//                                                             style={{ cursor: "pointer" }}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="flexChecksixth" style={{ cursor: "pointer" }}>
//                                                             XXL ({sixthh?.length})
//                                                         </label>
//                                                     </div>
//                                                 </Nav.Link>
//                                                 <Nav.Link as="div" eventKey="sizeseventh">
//                                                     <div className="form-check ms-3 ms-sm-0">
//                                                         <input
//                                                             className="form-check-input forminput"
//                                                             type="checkbox"
//                                                             name="check1"
//                                                             value="sizeseventh"
//                                                             id="flexCheckseventh"
//                                                             checked={isseventhChecked}
//                                                             onChange={handleseventhCheckboxChange}
//                                                             style={{ cursor: "pointer" }}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="flexCheckseventh" style={{ cursor: "pointer" }}>
//                                                             3XL ({seventhh?.length})
//                                                         </label>
//                                                     </div>
//                                                 </Nav.Link>
//                                             </>
//                                         )}
//                                         <div className="d-flex justify-content-between align-items-center me-3" style={{ cursor: "pointer" }} onClick={handleSizeClickcolor}>
//                                             <h6 className="mb-0">COLOR</h6>
//                                             <div>{showTabscolor ? <FaChevronUp /> : <FaChevronDown />}</div>
//                                         </div>
//                                         {showTabscolor && (
//                                             <>
//                                                 <div style={{ height: "300px", overflowY: "scroll" }} className="scrollbardiv">
//                                                     <Nav.Link as="div" eventKey="colorbeige" >
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2" >
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check"
//                                                                 value="colorbeige"
//                                                                 id="flexCheckfirst"
//                                                                 checked={iscolorBeigeChecked}
//                                                                 onChange={handleBeigeCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckfirst" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(230, 228, 207)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />  Beige({beige?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorblack">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorblack"
//                                                                 id="flexChecksecond"
//                                                                 checked={iscolorBlackChecked}
//                                                                 onChange={handleBlackCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecksecond" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(0, 0, 0)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" /> Black({black?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorblue">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check2"
//                                                                 value="colorblue"
//                                                                 id="flexCheckthird"
//                                                                 checked={iscolorBlueChecked}
//                                                                 onChange={handleBlueCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckthird" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(3, 116, 212)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />  Blue({blue?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorbrown">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorbrown"
//                                                                 id="flexCheckforth"
//                                                                 checked={iscolorBrownChecked}
//                                                                 onChange={handleBrownCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckforth" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(141, 83, 61)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />  Brown({brown?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorburgundy">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorburgundy"
//                                                                 id="flexCheckfifth"
//                                                                 checked={iscolorBurgundyChecked}
//                                                                 onChange={handleBurgundyCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckfifth" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(164, 52, 74)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Burgundy({burgundy?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorcoral">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorcoral"
//                                                                 id="flexChecksixth"
//                                                                 checked={iscolorCoralChecked}
//                                                                 onChange={handleCoralCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecksixth" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(249, 130, 87)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Coral({coral?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorcream">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorcream"
//                                                                 id="flexCheckseventh"
//                                                                 checked={iscolorCreamChecked}
//                                                                 onChange={handleCreamCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckseventh" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(238, 229, 186)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Cream({cream?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorgreen">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorgreen"
//                                                                 id="flexCheckeighth"
//                                                                 checked={iscolorGreenChecked}
//                                                                 onChange={handleGreenCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckeighth" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(94, 176, 102)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Green({green?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorgrey">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorgrey"
//                                                                 id="flexCheckninth"
//                                                                 checked={iscolorGreyChecked}
//                                                                 onChange={handleGreyCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckninth" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(159, 169, 171)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Grey({grey?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colormagenta">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colormagenta"
//                                                                 id="flexChecktenth"
//                                                                 checked={iscolorMagentaChecked}
//                                                                 onChange={handleMagentaCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktenth" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(195, 77, 161)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Magenta({magenta?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colormaroon">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colormaroon"
//                                                                 id="flexCheckeleventh"
//                                                                 checked={iscolorMaroonChecked}
//                                                                 onChange={handleMaroonCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckeleventh" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(178, 47, 97)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Maroon({maroon?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colormulti">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colormulti"
//                                                                 id="flexChecktwelveth"
//                                                                 checked={iscolorMultiChecked}
//                                                                 onChange={handleMultiCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktwelveth" style={{ cursor: "pointer" }}>

//                                                                 {/* <GoDotFill style={{
//                                                                     color: "transparent", fontSize:"35px", background: "linear-gradient(45deg, green, blue, orange)",
//                                                                     borderRadius: "50%"
//                                                                 }} /> */}
//                                                                 <GoDotFill style={{
//                                                                     fontSize: "17px", background: "linear-gradient(45deg, green, blue, orange)",
//                                                                     borderRadius: "50%", color: "transparent"
//                                                                 }} className="ms-3" />  Multi({multi?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colormustard">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colormustard"
//                                                                 id="flexCheckthirteen"
//                                                                 checked={iscolorMustardChecked}
//                                                                 onChange={handleMustardCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckthirteen" style={{ cursor: "pointer" }}>

//                                                                 <GoDotFill style={{ background: "rgb(205, 155, 42)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Mustard({mustard?.length})

//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colornavyblue">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colornavyblue"
//                                                                 id="flexCheckfourteen"
//                                                                 checked={iscolorNavyBlueChecked}
//                                                                 onChange={handleNavyBlueCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckfourteen" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(61, 72, 117)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />Navy Blue({navyblue?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="coloroffwhite">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="coloroffwhite"
//                                                                 id="flexCheckfifteen"
//                                                                 checked={iscolorOffWhiteChecked}
//                                                                 onChange={handleOffWhiteCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckfifteen" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(242, 242, 242)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Off White({offwhite?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorolive">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorolive"
//                                                                 id="flexChecksixteen"
//                                                                 checked={iscolorOliveChecked}
//                                                                 onChange={handleOliveCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecksixteen" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(66, 151, 110)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Olive({olive?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colororange">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colororange"
//                                                                 id="flexCheckseventeen"
//                                                                 checked={iscolorOrangeChecked}
//                                                                 onChange={handleOrangeCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckseventeen" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(246, 139, 35)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Orange({orange?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorpeach">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorpeach"
//                                                                 id="flexCheckeighteen"
//                                                                 checked={iscolorPeachChecked}
//                                                                 onChange={handlePeachCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexCheckeighteen" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(255, 232, 182)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Peach({peach?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorpink">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorpink"
//                                                                 id="flexChecknineteen"
//                                                                 checked={iscolorPinkChecked}
//                                                                 onChange={handlePinkCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecknineteen" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(241, 168, 197)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Pink({pink?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorpurple">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorpurple"
//                                                                 id="flexChecktwenty"
//                                                                 checked={iscolorPurpleChecked}
//                                                                 onChange={handlePurpleCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktwenty" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(129, 1, 124)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Purple({purple?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorred">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorred"
//                                                                 id="flexChecktwentyone"
//                                                                 checked={iscolorRedChecked}
//                                                                 onChange={handleRedCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktwentyone" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(217, 72, 87)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Red({red?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorrust">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorrust"
//                                                                 id="flexChecktwentytwo"
//                                                                 checked={iscolorRustChecked}
//                                                                 onChange={handleRustCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktwentytwo" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(181, 62, 22)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Rust({rust?.length} )
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorseagreen">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorseagreen"
//                                                                 id="flexChecktwentythree"
//                                                                 checked={iscolorSeaGreenChecked}
//                                                                 onChange={handleSeaGreenCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktwentythree" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(46, 139, 87)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Sea Green({seagreen?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorteal">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorteal"
//                                                                 id="flexChecktwentyfour"
//                                                                 checked={iscolorTealChecked}
//                                                                 onChange={handleTealCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktwentyfour" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(5, 122, 113)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Teal({teal?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorturquoiseblue">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorturquoiseblue"
//                                                                 id="flexChecktwentyfive"
//                                                                 checked={iscolorTurquoiseBlueChecked}
//                                                                 onChange={handleTurquoiseBlueCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktwentyfive" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(66, 222, 208)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Turquoise Blue({turquoiseblue?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="colorwhite">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="colorwhite"
//                                                                 id="flexChecktwentysix"
//                                                                 checked={iscolorWhiteChecked}
//                                                                 onChange={handleWhiteCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktwentysix" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(255, 255, 255)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    White({white?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                     <Nav.Link as="div" eventKey="coloryellow">
//                                                         <div className="form-check ms-3 ms-sm-0 d-flex align-items-center mb-2">
//                                                             <input
//                                                                 className="form-check-input forminput"
//                                                                 type="checkbox"
//                                                                 name="check1"
//                                                                 value="coloryellow"
//                                                                 id="flexChecktwentyseven"
//                                                                 checked={iscolorYellowChecked}
//                                                                 onChange={handleYellowCheckboxChange}
//                                                                 style={{ cursor: "pointer" }}
//                                                             />
//                                                             <label className="form-check-label" htmlFor="flexChecktwentyseven" style={{ cursor: "pointer" }}>
//                                                                 <GoDotFill style={{ background: "rgb(237, 219, 51)", fontSize: "17px", borderRadius: "50%", color: "transparent" }} className="ms-3" />    Yellow({yellow?.length})
//                                                             </label>
//                                                         </div>
//                                                     </Nav.Link>
//                                                 </div>
//                                             </>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-8 col-md-9 col-lg-10 p-2 border  womenpagesubdiv2 px-0">
//                                 <div className=" h-100 ">
//                                     <Tab.Content>
//                                         <Tab.Pane eventKey="sizeextra">
//                                             <div>
//                                                 <h1>{extrasec?.no}</h1>
//                                                 <p>Showing {currentFilteredProducts?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="sizefirst">
//                                             <div>
//                                                 <h1>{firstt?.no}</h1>
//                                                 <p>Showing {currentFilteredProducts?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="sizesecond">
//                                             <div>
//                                                 <h1>{secondd?.no}</h1>
//                                                 <p>Showing {currentFilteredProducts?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="sizethird">
//                                             <div>
//                                                 <h1>{thirdd?.no}</h1>
//                                                 <p>Showing {currentFilteredProducts?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="sizeforth">
//                                             <div>
//                                                 <h1>{forthh?.no}</h1>
//                                                 <p>Showing {currentFilteredProducts?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="sizefifth">
//                                             <div>
//                                                 <h1>{fifthh?.no}</h1>
//                                                 <p>Showing {currentFilteredProducts?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="sizesixth">
//                                             <div>
//                                                 <h1>{sixthh?.no}</h1>
//                                                 <p>Showing {currentFilteredProducts?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="sizeseventh">
//                                             <div>
//                                                 <h1>{seventhh?.no}</h1>
//                                                 <p>Showing {currentFilteredProducts?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorbeige">
//                                             <div>
//                                                 <h1>{beige?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorblack">
//                                             <div>
//                                                 <h1>{black?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorblue">
//                                             <div>
//                                                 <h1>{blue?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorbrown">
//                                             <div>
//                                                 <h1>{brown?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorburgundy">
//                                             <div>
//                                                 <h1>{burgundy?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorcoral">
//                                             <div>
//                                                 <h1>{coral?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorcream">
//                                             <div>
//                                                 <h1>{cream?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorgreen">
//                                             <div>
//                                                 <h1>{green?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorgrey">
//                                             <div>
//                                                 <h1>{grey?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colormagenta">
//                                             <div>
//                                                 <h1>{magenta?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colormaroon">
//                                             <div>
//                                                 <h1>{maroon?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colormulti">
//                                             <div>
//                                                 <h1>{multi?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colormustard">
//                                             <div>
//                                                 <h1>{mustard?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colornavyblue">
//                                             <div>
//                                                 <h1>{navyblue?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="coloroffwhite">
//                                             <div>
//                                                 <h1>{offwhite?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorolive">
//                                             <div>
//                                                 <h1>{olive?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colororange">
//                                             <div>
//                                                 <h1>{orange?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorpeach">
//                                             <div>
//                                                 <h1>{peach?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorpink">
//                                             <div>
//                                                 <h1>{pink?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorpurple">
//                                             <div>
//                                                 <h1>{purple?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorred">
//                                             <div>
//                                                 <h1>{red?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorrust">
//                                             <div>
//                                                 <h1>{rust?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorseagreen">
//                                             <div>
//                                                 <h1>{seagreen?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorteal">
//                                             <div>
//                                                 <h1>{teal?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorturquoiseblue">
//                                             <div>
//                                                 <h1>{turquoiseblue?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="colorwhite">
//                                             <div>
//                                                 <h1>{white?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="coloryellow">
//                                             <div>
//                                                 <h1>{yellow?.no}</h1>
//                                                 <p>Showing {currentFilteredProductscolor?.length} Products</p>
//                                                 <div className="row row-cols-3 g-0">{serverRenderedColorContent}</div>
//                                             </div>
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



// https://www.libas.in/collections/kurtas?p=2&sort=Customer%20Rating



// kurta kurti example website



