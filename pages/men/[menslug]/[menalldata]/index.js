
export async function getStaticPaths() {
    return {
        paths: [
            { params: { menslug: "topwear", menalldata: "casualshirts" } },
            { params: { menslug: "topwear", menalldata: "formalshirts" } },
            { params: { menslug: "topwear", menalldata: "polos" } },
            { params: { menslug: "topwear", menalldata: "tshirts" } },
            { params: { menslug: "topwear", menalldata: "jackets" } },
            { params: { menslug: "topwear", menalldata: "hoodiesandsweatshirts" } },
            { params: { menslug: "bottomwear", menalldata: "casualtrousers" } },
            { params: { menslug: "bottomwear", menalldata: "formaltrousers" } },
            { params: { menslug: "bottomwear", menalldata: "jeans" } },
            { params: { menslug: "bottomwear", menalldata: "trackpants" } },
            { params: { menslug: "bottomwear", menalldata: "trousers" } },
            { params: { menslug: "bottomwear", menalldata: "shorts" } },
            { params: { menslug: "watches", menalldata: "roundwatches" } },
            { params: { menslug: "watches", menalldata: "analogwatches" } },
            { params: { menslug: "watches", menalldata: "automaticwatches" } },
            { params: { menslug: "watches", menalldata: "chronographwatches" } },
            { params: { menslug: "watches", menalldata: "multifunctionwatches" } },
            { params: { menslug: "watches", menalldata: "smartwatches" } },
            { params: { menslug: "watches", menalldata: "fitnesstrackers" } },
            { params: { menslug: "sunglasses", menalldata: "aviator" } },
            { params: { menslug: "sunglasses", menalldata: "wayfarer" } },
            { params: { menslug: "sunglasses", menalldata: "square" } },
            { params: { menslug: "sunglasses", menalldata: "sporty" } },
            { params: { menslug: "sunglasses", menalldata: "rectangle" } },
            { params: { menslug: "sunglasses", menalldata: "round" } },
            { params: { menslug: "shoes", menalldata: "loafersandmoccasin" } },
            { params: { menslug: "shoes", menalldata: "slipons" } },
            { params: { menslug: "shoes", menalldata: "sportsshoesandsneakers" } },
            { params: { menslug: "shoes", menalldata: "laceup" } },
            { params: { menslug: "shoes", menalldata: "slippersandsliders" } },
            { params: { menslug: "shoes", menalldata: "floatersandsandals" } },
            { params: { menslug: "shoes", menalldata: "boots" } },
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const categoryMappings = {
        casualshirts: "Casual Shirts",
        formalshirts: "Formal Shirts",
        polos: "Polos",
        tshirts: "T-Shirts",
        jackets: "Jackets",
        hoodiesandsweatshirts: "Hoodies & Sweatshirts",
        casualtrousers: "Casual Trousers",
        formaltrousers: "Formal Trousers",
        jeans: "Jeans",
        trackpants: "Trackpants",
        trousers: "Trousers",
        jacketsandshrugs: "Shorts",
        roundwatches: "Round Watches",
        analogwatches: "Analog Watches",
        automaticwatches: "Automatic Watches",
        chronographwatches: "Chronograph Watches",
        multifunctionwatches: "Multifunction Watches",
        smartwatches: "Smart Watches",
        fitnesstrackers: "Fitnesstrackers",
        aviator: "Aviator",
        wayfarer: "Wayfarer",
        square: "Square",
        sporty: "Sporty",
        rectangle: "Rectangle",
        round: "Round",
        loafersandmoccasin: "Loafers & Moccasin",
        slipons: "Slip-Ons",
        sportsshoesandsneakers: "Sportsshoes & Sneakers",
        laceup: "Lace up",
        slippersandsliders: "Slippers & Sliders",
        floatersandsandals: "Floaters & Sandals",
        boots: "Boots",
    };

    const dynamicHeading = categoryMappings[params.menalldata] || "Default Heading";

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