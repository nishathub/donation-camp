import { useLoaderData } from "react-router-dom";
import HomeBanner from "../HomeBanner/HomeBanner";
import FeaturedDonation from "../FeaturedDonation/FeaturedDonation";
import { useState } from "react";


const Home = () => {

    const donationPackage = useLoaderData();
    const {products} = donationPackage;
    const [displayProducts, setDisplayProducts] = useState(products);
    const [showError, setShowError] = useState(false);

    
    const handleSearchButton = () => {
        const searchField = document.getElementById('search-input');
        const searchKey = searchField.value;
        const searchKeyLowerCase = searchKey.toLowerCase();

        const searchedProducts = products.filter(product => product.category === searchKeyLowerCase);

        if(searchedProducts.length > 0){
            setDisplayProducts(searchedProducts);
            setShowError(false);
        } else {
            setDisplayProducts(products)
            setShowError(true);
        }



        searchField.value = '';
    }
    return (
        <div className="mt-12">
            <HomeBanner handleSearchButton = {handleSearchButton} error = {showError}></HomeBanner>
            <FeaturedDonation packages = {displayProducts} error = {showError}></FeaturedDonation>
        </div>
    );
};

export default Home;