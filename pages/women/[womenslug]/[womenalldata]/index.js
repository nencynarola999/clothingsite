
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
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Ei1.jpg",
        },
        kurtasets: {
            heading: "Kurta Sets",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Ei2.jpg",
        },
        ethnicdresses: {
            heading: "Ethnic Dresses",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Ei3.jpg",
        },
        topsandtunics: {
            heading: "Tops & Tunics",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Ei4.jpg",
        },
        leggingsandchuridars: {
            heading: "Leggings & Churidars",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Ei5.jpg",
        },
        pantsandpalazzos: {
            heading: "Pants & Palazzos",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Ei6.jpg",
        },
        skirts: {
            heading: "Skirts",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Ei7.jpg",
        },
        dupattasandstoles: {
            heading: "Dupattas & Stoles",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Ei8.jpg",
        },
        saree: {
            heading: "Saree",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Ei9.jpg",
        },
        topsandtees: {
            heading: "Tops & Tees",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Wi1.jpg",
        },
        dressesandjumpsuits: {
            heading: "Dresses & Jumpsuits",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Wi2.jpg",
        },
        jeansandjeggings: {
            heading: "Jeans & Jeggings",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Wi3.jpg",
        },
        shortsandskirts: {
            heading: "Shorts & Skirts",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Wi4.jpg",
        },
        trousers: {
            heading: "Trousers",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Wi5.jpg",
        },
        jacketsandshrugs: {
            heading: "Jackets & Shrugs",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Wi6.jpg",
        },
        topstees: {
            heading: "Tops & Tees",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Si1.jpg",
        },
        leggings: {
            heading: "Leggings",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Si2.jpg",
        },
        joggersandtracks: {
            heading: "Joggers & Tracks",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Si3.jpg",
        },
        sweatshirtsandjackets: {
            heading: "Sweatshirts & Jackets",
            paragraph: "Fashion has always been so temporary and uncertain. You can\"t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion tendencies.",
            image: "/Women/womenslug/Si4.jpg",
        },
    };

    const { heading, paragraph, image } = categoryMappings[params.womenalldata] || {
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

const index = ({ dynamicHeading, dynamicImage, dynamicParagraph }) => {
    return (
        <div className="container-fluid mt-5">
            <div className="container border px-0 py-3 womenslug">
                <div className="row d-flex align-items-center womenslugfirstsec g-0">
                    <img src={dynamicImage} style={{ height: "120px" }} className="col-7 col-sm-4 col-lg-3 col-xl-2" />
                    <div className=" ps-0 ps-sm-3 col-12 col-sm-6 col-lg-8 " >
                        <h1 className="mb-3 mb-xl-4 mt-2 mt-sm-0">{dynamicHeading}</h1>
                        <p className="">{dynamicParagraph}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default index;