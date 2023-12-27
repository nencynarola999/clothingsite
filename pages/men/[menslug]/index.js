import Link from "next/link";
import { useState } from "react";
import { Col, Form, Nav, Row, Tab } from "react-bootstrap";
export async function getStaticPaths() {
    return {
        paths: [
            { params: { menslug: "topwear" } },
            { params: { menslug: "bottomwear" } },
            { params: { menslug: "watches" } },
            { params: { menslug: "sunglasses" } },
            { params: { menslug: "shoes" } },
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const categoryData = {
        topwear: {
            heading: "Ethnic & Fusion Wear",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/men/menslug/bg1.jpg",
        },
        bottomwear: {
            heading: "Westernwear",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/men/menslug/bg2.jpg",
        },
        watches: {
            heading: "Watches",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/men/menslug/bg6.jpg",
        },
        sunglasses: {
            heading: "Jewellery",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/men/menslug/bg7.jpg",
        },
        shoes: {
            heading: "Fragrances",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/men/menslug/bg8.jpg",
        },
    };

    const { heading, paragraph, image } = categoryData[params.menslug] || {
        heading: "Default Heading",
        paragraph: "Default Paragraph for all categories.",
        image: "/images/default.jpg", // Provide a default image path
    };

    return {
        props: {
            dynamicHeading: heading,
            dynamicParagraph: paragraph,
            dynamicImage: image,
        },
    };
}

const Index = ({ dynamicHeading, dynamicParagraph, dynamicImage }) => {
    const [isKurtakurtiChecked, setIsKurtakurtiChecked] = useState(false);
    const [isKurtasetsChecked, setIsKurtasetsChecked] = useState(false);
    const [isEthnicWearChecked, setIsEthnicWearChecked] = useState(false);
    const [isTopsTunicChecked, setIsTopsTunicChecked] = useState(false);
    const [isLeggingsChecked, setIsLeggingsChecked] = useState(false);
    const [isPantsPalazzosChecked, setIsPantsPalazzosChecked] = useState(false);
    const [isSkirtsChecked, setIsSkirtsChecked] = useState(false);
    const [isDupattasStolesChecked, setIsDupattasStolesChecked] = useState(false);
    const [isSareeChecked, setIsSareeChecked] = useState(false);

    const [Heading, setHeading] = useState("");
    const handleKurtakurtiCheckboxChange = () => {
        setIsKurtakurtiChecked(!isKurtakurtiChecked);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isKurtakurtiChecked ? "" : "Kurtas & Kurti");
    };

    const handleKurtasetsCheckboxChange = () => {
        setIsKurtasetsChecked(!isKurtasetsChecked);
        setIsKurtakurtiChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isKurtasetsChecked ? "" : "Kurta Sets");
    };
    const handleEthnicWearCheckboxChange = () => {
        setIsEthnicWearChecked(!isEthnicWearChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isEthnicWearChecked ? "" : "Ethnic Wear");
    };
    const handleTopsTunicCheckboxChange = () => {
        setIsTopsTunicChecked(!isTopsTunicChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isTopsTunicChecked ? "" : "Tops & Tunic");
    };
    const handleLeggingsCheckboxChange = () => {
        setIsLeggingsChecked(!isLeggingsChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isLeggingsChecked ? "" : "Leggings");
    };
    const handlePantsPalazzosCheckboxChange = () => {
        setIsPantsPalazzosChecked(!isPantsPalazzosChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isPantsPalazzosChecked ? "" : "Pants & Palazzos");
    };
    const handleSkirtsCheckboxChange = () => {
        setIsSkirtsChecked(!isSkirtsChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsDupattasStolesChecked(false);
        setIsSareeChecked(false);
        setHeading(isSkirtsChecked ? "" : "Skirts");
    };
    const handleDupattasStolesCheckboxChange = () => {
        setIsDupattasStolesChecked(!isDupattasStolesChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsSareeChecked(false);
        setHeading(isDupattasStolesChecked ? "" : "Dupattas & Stoles");
    };
    const handleSareeCheckboxChange = () => {
        setIsSareeChecked(!isSareeChecked);
        setIsKurtakurtiChecked(false);
        setIsKurtasetsChecked(false);
        setIsEthnicWearChecked(false);
        setIsTopsTunicChecked(false);
        setIsLeggingsChecked(false);
        setIsPantsPalazzosChecked(false);
        setIsSkirtsChecked(false);
        setIsDupattasStolesChecked(false);
        setHeading(isSareeChecked ? "" : "Saree");
    };
    let extrasec = [
        {
            image: "/men/menslug/i1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec",
        },
        {
            image: "/men/menslug/i2.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i3.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i5.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i6.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i1.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i3.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i2.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i5.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i6.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },
        {
            image: "/men/menslug/i4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "extrasec"
        },

    ]
    let kurtakurti = [
        {
            image: "/men/menpage/A1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"

        },
        {
            image: "/men/menpage/A2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/men/menpage/A3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "kurtakurti"
        },
        {
            image: "/men/menpage/A4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/men/menpage/A5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/men/menpage/A6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/men/menpage/A1.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"

        },
        {
            image: "/men/menpage/A2.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/men/menpage/A3.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "kurtakurti"
        },
        {
            image: "/men/menpage/A4.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/men/menpage/A5.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
        {
            image: "/men/menpage/A6.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtakurti"
        },
    ]
    let kurtasets = [
        {
            image: "/men/menpage/A7.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A10.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A11.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A12.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A7.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A8.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A9.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A10.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A11.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
        {
            image: "/men/menpage/A12.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "kurtasets"
        },
    ]
    let ethnicwear = [
        {
            image: "/men/menpage/A13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A13.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A14.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A15.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A16.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A17.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
        {
            image: "/men/menpage/A18.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "ethnicwear"
        },
    ]
    let topstunic = [
        {
            image: "/men/menpage/A19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A21.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A23.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A19.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A20.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A21.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A22.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A23.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        },
        {
            image: "/men/menpage/A24.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "topstunic"
        }
    ]
    let leggings = [
        {
            image: "/men/menpage/A25.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/men/menpage/A26.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/men/menpage/A27.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "leggings"
        },
        {
            image: "/men/menpage/A28.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/men/menpage/A29.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
        {
            image: "/men/menpage/A30.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "leggings"
        },
    ]
    let pantspalazzos = [
        {
            image: "/men/menpage/A31.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
        {
            image: "/men/menpage/A32.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
        {
            image: "/men/menpage/A33.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "pantspalazzos"
        },
        {
            image: "/men/menpage/A34.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
        {
            image: "/men/menpage/A35.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
        {
            image: "/men/menpage/A36.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "pantspalazzos"
        },
    ]
    let skirts = [
        {
            image: "/men/menpage/A37.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
        {
            image: "/men/menpage/A38.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
        {
            image: "/men/menpage/A39.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "skirts"
        },
        {
            image: "/men/menpage/A40.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
        {
            image: "/men/menpage/A41.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
        {
            image: "/men/menpage/A42.webp",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "skirts"
        },
    ]
    let dupattasstoles = [
        {
            image: "/men/menpage/A43.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
        {
            image: "/men/menpage/A44.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
        {
            image: "/men/menpage/A45.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "dupattasstoles"
        },
        {
            image: "/men/menpage/A46.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
        {
            image: "/men/menpage/A47.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
        {
            image: "/men/menpage/A48.jpg",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "dupattasstoles"
        },
    ]
    let saree = [
        {
            image: "/men/menpage/A49.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
        {
            image: "/men/menpage/A50.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
        {
            image: "/men/menpage/A51.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            cutprice: "$540",
            category: "saree"
        },
        {
            image: "/men/menpage/A52.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
        {
            image: "/men/menpage/A53.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
        {
            image: "/men/menpage/A54.avif",
            button: "DETAIL",
            name: "PRODUCT NAME",
            price: "$340",
            category: "saree"
        },
    ]
    const filteredProducts = isKurtakurtiChecked
        ? kurtakurti.filter((product) => product.category === "kurtakurti")
        : isKurtasetsChecked
            ? kurtasets.filter((product) => product.category === "kurtasets")
            : isEthnicWearChecked
                ? ethnicwear.filter((product) => product.category === "ethnicwear")
                : isTopsTunicChecked
                    ? topstunic.filter((product) => product.category === "topstunic")
                    : isLeggingsChecked
                        ? leggings.filter((product) => product.category === "leggings")
                        : isPantsPalazzosChecked
                            ? pantspalazzos.filter((product) => product.category === "pantspalazzos")
                            : isSkirtsChecked
                                ? skirts.filter((product) => product.category === "skirts")
                                : isDupattasStolesChecked
                                    ? dupattasstoles.filter((product) => product.category === "dupattasstoles")
                                    : isSareeChecked
                                        ? saree.filter((product) => product.category === "saree")
                                        : extrasec.filter((product) => product.category === "extrasec")
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="container border px-0 py-3 menslug">
                    <div className="row d-flex align-items-center menslugfirstsec g-0">
                        <img src={dynamicImage} style={{ height: "120px" }} className="col-7 col-sm-4 col-lg-3 col-xl-2" />
                        <div className=" ps-0 ps-sm-3 col-12 col-sm-6 col-lg-8 " >
                            <h1 className="mb-3 mb-xl-4 mt-2 mt-sm-0">{dynamicHeading}</h1>
                            <p className="">{dynamicParagraph}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 mt-5 p-0">
                <div className="container g-0">
                    <h3 className="Homewomen1h3 px-3">Top Categories</h3>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="athleticsextra">
                        <div className="row p-0 g-0  mt-5 h-100 ">
                            <div className="col-4 col-md-3 col-lg-2  menpagesubdiv1 px-0">
                                <div className="h-100 ">
                                    <div className="menpagesideheadingset">
                                        <h4 className="ms-3 ms-sm-0">Ethnic & Fusion Wear</h4>
                                        <br />
                                        <Nav.Link as="div" eventKey="athleticsfirst">
                                            <div className="form-check ms-3 ms-sm-0">
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check"
                                                    value="athleticsfirst"
                                                    id="flexCheckKurtakurti"
                                                    checked={isKurtakurtiChecked}
                                                    onChange={handleKurtakurtiCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckKurtakurti"
                                                >
                                                    Kurtas & Kurtis
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticssecond">
                                            <div className="form-check ms-3 ms-sm-0">
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check1"
                                                    value="athleticssecond"
                                                    id="flexCheckKurtasets"
                                                    checked={isKurtasetsChecked}
                                                    onChange={handleKurtasetsCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckKurtasets"
                                                >
                                                    Kurtas Sets
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticsthird" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check2"
                                                    value="athleticsthird"
                                                    id="flexCheckEthnicWear"
                                                    checked={isEthnicWearChecked}
                                                    onChange={handleEthnicWearCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckEthnicWear"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Ethnic Wear
                                                </label>
                                            </div>
                                        </Nav.Link>  <br />
                                        <Nav.Link as="div" eventKey="athleticsforth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticsforth"
                                                    id="flexCheckTopsTunic"
                                                    checked={isTopsTunicChecked}
                                                    onChange={handleTopsTunicCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckTopsTunic"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Tops Tunic
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticsfifth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticsfifth"
                                                    id="flexCheckLeggings"
                                                    checked={isLeggingsChecked}
                                                    onChange={handleLeggingsCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckLeggings"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Leggings
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticssixth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticssixth"
                                                    id="flexCheckPantsPalazzos"
                                                    checked={isPantsPalazzosChecked}
                                                    onChange={handlePantsPalazzosCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckPantsPalazzos"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Pants Palazzos
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticsseventh" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticsseventh"
                                                    id="flexCheckSkirts"
                                                    checked={isSkirtsChecked}
                                                    onChange={handleSkirtsCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckSkirts"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Skirts
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticseighth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticseighth"
                                                    id="flexCheckDupattasStoles"
                                                    checked={isDupattasStolesChecked}
                                                    onChange={handleDupattasStolesCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDupattasStoles"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Dupattas & Stoles
                                                </label>
                                            </div>
                                        </Nav.Link> <br />
                                        <Nav.Link as="div" eventKey="athleticsninth" >
                                            <div className="form-check ms-3 ms-sm-0" style={{ cursor: "pointer" }}>
                                                <input
                                                    className="form-check-input forminput"
                                                    type="checkbox"
                                                    name="check4"
                                                    value="athleticsninth"
                                                    id="flexCheckSaree"
                                                    checked={isSareeChecked}
                                                    onChange={handleSareeCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckSaree"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Saree
                                                </label>
                                            </div>
                                        </Nav.Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-md-9 col-lg-10  menpagesubdiv2 px-0">
                                <div className=" h-100">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="athleticsextra">
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4 ">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className="p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center ">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href="">  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticsfirst">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/topwear/kurtaandkurtis"}><button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticssecond">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/topwear/kurtasets"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticsthird">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/topwear/ethnicdresses"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticsforth">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/topwear/topsandtunics"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticsfifth">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className="imagedivborder h-100">
                                                                    <div className=" w-75 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid w-100 h-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2 px-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/topwear/leggingsandchuridars"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticssixth">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid  h-100 w-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/topwear/pantsandpalazzos"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticsseventh">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/topwear/skirts"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticseighth">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-75 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/topwear/dupattasandstoles"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="athleticsninth">
                                            <h1 onClick={() => Heading} style={{ cursor: "pointer" }}>{Heading}</h1>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-0 p-0 mb-4">
                                                {
                                                    filteredProducts?.map((x, i) => {
                                                        return (
                                                            <div className="col p-3 m-0" key={i}>
                                                                <div className=" p-2 imagedivborder h-100">
                                                                    <div className=" w-100 m-auto d-flex justify-content-center imagediv">
                                                                        <img src={x?.image} alt="" className="img-fluid h-100 w-100" />
                                                                    </div>
                                                                    <div className=" imagetext">
                                                                        <h4 className="mt-2">{x?.name}</h4>
                                                                        <div className="m-auto d-flex justify-content-center">
                                                                            <div className="me-3 h5">{x?.cutprice}</div>
                                                                            <h5 >{x?.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <Link href={"/women/topwear/saree"}>  <button>{x?.button}</button></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content >
                                </div >
                            </div >
                        </div >
                    </Tab.Container >
                </div >
            </div >
        </>
    );
};

export default Index;