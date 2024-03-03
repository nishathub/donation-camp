// There is no use of this component anymore except the root location.
// The code can be improved and will be continued improving, yet the initial files are uploaded 
// Because it fulfilled the aspired functionality within a limited time frame.
// Thank you for reading.



// import { useLoaderData } from "react-router-dom";
// import HomeBanner from "../HomeBanner/HomeBanner";
// import FeaturedDonation from "../FeaturedDonation/FeaturedDonation";
// import { useState } from "react";


const Home = () => {

    // const donationPackage = useLoaderData();
    // const {products} = donationPackage;
    // const [displayProducts, setDisplayProducts] = useState(products);
    // const [showError, setShowError] = useState(false);

    
    // const handleSearchButton = () => {
    //     const searchField = document.getElementById('search-input');
    //     const searchKey = searchField.value;
    //     const searchKeyLowerCase = searchKey.toLowerCase();

    //     const searchedProducts = products.filter(product => product.category === searchKeyLowerCase);

    //     if(searchedProducts.length > 0){
    //         setDisplayProducts(searchedProducts);
    //         setShowError(false);
    //     } else {
    //         setDisplayProducts(products)
    //         setShowError(true);
    //     }



    //     searchField.value = '';
    // }
    return (
        <div className="mt-12">
            {/* <HomeBanner handleSearchButton = {handleSearchButton} error = {showError}></HomeBanner>
            <FeaturedDonation packages = {displayProducts}></FeaturedDonation> */}
        </div>
    );
};

export default Home;