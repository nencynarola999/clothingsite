
export async function getStaticPaths() {
    return {
        paths: [
            { params: { kidsslug: "boys", kidsalldata: "tshirtsandpolos" } },
            { params: { kidsslug: "boys", kidsalldata: "shirts" } },
            { params: { kidsslug: "boys", kidsalldata: "jeans" } },
            { params: { kidsslug: "boys", kidsalldata: "shorts" } },
            { params: { kidsslug: "boys", kidsalldata: "trackpantsandjoggers" } },
            { params: { kidsslug: "boys", kidsalldata: "sweatshirtsandhoodies" } },
            { params: { kidsslug: "boys", kidsalldata: "pants" } },
            { params: { kidsslug: "boys", kidsalldata: "clothing" } },
            { params: { kidsslug: "boys", kidsalldata: "jacketsandwaistcoat" } },
            { params: { kidsslug: "boys", kidsalldata: "innerwear" } },
            { params: { kidsslug: "boys", kidsalldata: "ethnicwear" } },
            { params: { kidsslug: "girls", kidsalldata: "topsandtees" } },
            { params: { kidsslug: "girls", kidsalldata: "dressesandjumpsuits" } },
            { params: { kidsslug: "girls", kidsalldata: "clothingsets" } },
            { params: { kidsslug: "girls", kidsalldata: "jeans" } },
            { params: { kidsslug: "girls", kidsalldata: "knitbottoms" } },
            { params: { kidsslug: "girls", kidsalldata: "innerwear" } },
            { params: { kidsslug: "girls", kidsalldata: "shortsandskirts" } },
            { params: { kidsslug: "girls", kidsalldata: "trackpantsandjoggers" } },
            { params: { kidsslug: "girls", kidsalldata: "ethnicwear" } },
            { params: { kidsslug: "accessories", kidsalldata: "kidssunglasses" } },
            { params: { kidsslug: "accessories", kidsalldata: "kidswatches" } },
            { params: { kidsslug: "accessories", kidsalldata: "capsandhats" } },
            { params: { kidsslug: "agestore", kidsalldata: "0-2year" } },
            { params: { kidsslug: "agestore", kidsalldata: "2-4year" } },
            { params: { kidsslug: "agestore", kidsalldata: "4-6year" } },
            { params: { kidsslug: "agestore", kidsalldata: "6-10year" } },
            { params: { kidsslug: "agestore", kidsalldata: "10-13year" } },
            { params: { kidsslug: "agestore", kidsalldata: "13-16year" } },
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const categoryMappings = {
        tshirtsandpolos: "Tshirts & Polos",
        shirts: "Shirts",
        jeans: "Jeans",
        shorts: "Shorts",
        trackpantsandjoggers: "Trackpants & Joggers",
        sweatshirtsandhoodies: "Sweatshirts & Hoodies",
        pants: "Pants",
        clothing: "Clothing",
        jacketsandwaistcoat: "Jackets & Waistcoat",
        innerwear: "Innerwear",
        ethnicwear: "Ethnicwear",
        topsandtees: "Tops & Tees",
        dressesandjumpsuits: "Dresses & Jumpsuits",
        clothingsets: "Clothingsets",
        jeans: "Jeans",
        knitbottoms: "Knitbottoms",
        innerwear: "Innerwear",
        shortsandskirts: "Shorts & Skirts",
        trackpantsandjoggers: "Trackpants & Joggers",
        ethnicwear: "Ethnicwear",
        kidssunglasses: "Kids Sunglasses",
        kidswatches: "Kids Watches",
        capsandhats: "Caps & Hats",
        "0-2year": "0-2year",
        "2-4year": "2-4 Years",
        "4-6year": "4-6 Years",
        "6-10year": "6-10 Years",
        "10-13year": "10-13 Years",
        "13-16year": "13-16 Years",
    };

    const dynamicHeading = categoryMappings[params.kidsalldata] || "Default Heading";

    return {
        props: {
            dynamicHeading,
        },
    };
}

const index = ({ dynamicHeading }) => {
    return (
        <div className="container-fluid mt-3">
            <div className="container border p-5">
                <h3>{dynamicHeading}</h3>
            </div>
        </div>
    );
};
export default index;