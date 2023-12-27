export async function getStaticPaths() {
    return {
        paths: [
            { params: { kidsslug: "boys" } },
            { params: { kidsslug: "girls" } },
            { params: { kidsslug: "accessories" } },
            { params: { kidsslug: "agestore" } },
            { params: { kidsslug: "shopboysfootwear" } },
            { params: { kidsslug: "shopgirlsfootwear" } },
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const categoryMappings = {
        boys: "Boys",
        girls: "Girls",
        accessories: "Accessories",
        agestore: "Agestore",
        shopboysfootwear: "Shopboysfootwear",
        shopgirlsfootwear: "Shopgirlsfootwear"
    };

    const dynamicHeading = categoryMappings[params.kidsslug] || "Default Heading";
    return {
        props: {
            dynamicHeading,
        },
    };
}
const index = ({ dynamicHeading }) => {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="container border p-5">
                    <h1>{dynamicHeading}</h1>
                </div>
            </div>
        </>
    );
};


export default index;