
import Beauty from "@/component/women/Beauty";
import EthnicFusion from "@/component/women/EthnicFusion";
import FootwearandBags from "@/component/women/FootwearandBags";
import Fragrances from "@/component/women/Fragrances";
import Jewellery from "@/component/women/Jewellery";
import Sportswear from "@/component/women/Sportswear";
import Watches from "@/component/women/Watches";
import Westernwear from "@/component/women/Westernwear";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";

export async function getStaticPaths() {
    return {
        paths: [
            { params: { womenslug: "ethnicfusion" } },
            { params: { womenslug: "westernwear" } },
            { params: { womenslug: "sportswear" } },
            { params: { womenslug: "beauty" } },
            { params: { womenslug: "footwearandbags" } },
            { params: { womenslug: "watches" } },
            { params: { womenslug: "jewellery" } },
            { params: { womenslug: "fragrances" } },

            //  Add other paths as needed
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const categoryData = {
        ethnicfusion: {
            heading: "Ethnic & Fusion Wear",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/bg1.jpg",
        },
        westernwear: {
            heading: "Westernwear",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/bg2.jpg",
        },
        sportswear: {
            heading: "Sportswear",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/bg3.jpg",
        },
        beauty: {
            heading: "Beauty",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/bg4.webp",
        },
        footwearandbags: {
            heading: "Footwear and Bags",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/bg5.jpg",
        },
        watches: {
            heading: "Watches",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/bg6.jpg",
        },
        jewellery: {
            heading: "Jewellery",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/bg7.jpg",
        },
        fragrances: {
            heading: "Fragrances",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/bg8.jpg",
        },
        
    };

    const { heading, paragraph, image } = categoryData[params.womenslug] || {
        heading: "Default Heading",
        paragraph: "Default Paragraph for all categories.",
        image: "/images/default.jpg",  //Provide a default image path
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
    const router = useRouter();
    const { womenslug } = router.query;

    if (!womenslug || 
        !(womenslug === "ethnicfusion" 
        || womenslug === "westernwear" 
        || womenslug === "sportswear" 
        || womenslug === "beauty" 
        || womenslug === "footwearandbags" 
        || womenslug === "watches"
        || womenslug === "jewellery"
        || womenslug === "fragrances")) {
        return null;
    }
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="container border px-0 py-3 womenslug">
                    <div className="row d-flex align-items-center womenslugfirstsec g-0">
                        <img src={dynamicImage} style={{ height: "120px" }} className="col-7 col-sm-4 col-lg-3 col-xl-2" />
                        <div className="ps-0 ps-sm-3 col-12 col-sm-6 col-lg-8">
                            <h1 className="mb-3 mb-xl-4 mt-2 mt-sm-0">{dynamicHeading}</h1>
                            <p>{dynamicParagraph}</p>
                        </div>
                    </div>
                </div>
            </div>
            {womenslug === "ethnicfusion" && (
                <EthnicFusion
                    dynamicHeading={dynamicHeading}
                />
            )}
            {womenslug === "westernwear" && (
                <Westernwear
                dynamicHeading={dynamicHeading}/>
             
            )}
            {womenslug === "sportswear" && (
                <Sportswear 
                dynamicHeading={dynamicHeading}/>
             
            )}
            {womenslug === "beauty" && (
                <Beauty
                dynamicHeading={dynamicHeading}/>
             
            )}
            {womenslug === "footwearandbags" && (
                <FootwearandBags/>
             
            )}
            {womenslug === "watches" && (
                <Watches/>
             
            )}
            {womenslug === "jewellery" && (
                <Jewellery/>
             
            )}
            {womenslug === "fragrances" && (
                <Fragrances/>
             
            )}
        </>
    );
};

export default Index;