import { NavLink, useLocation } from "react-router-dom";
import HomeBanner from "../HomeBanner/HomeBanner";
import FeaturedDonation from "../FeaturedDonation/FeaturedDonation";
import { useContext, useState } from "react";
import { DonationPackagesContext } from "../../JavaScriptFunction/contextApi";


const Header = () => {
    const donationPackage = useContext(DonationPackagesContext);

    const {products} = donationPackage;
    const [displayProducts, setDisplayProducts] = useState(products);
    const [showError, setShowError] = useState(false);


    const handleSearchButton = () => {
        const searchField = document.getElementById('search-input');
        const searchKey = searchField.value;
        const searchKeyLowerCase = searchKey.toLowerCase();

        const searchedProducts = products.filter(product => product.category === searchKeyLowerCase);

        if (searchedProducts.length > 0) {
            setDisplayProducts(searchedProducts);
            setShowError(false);
        } else {
            setDisplayProducts(products)
            setShowError(true);
        }



        searchField.value = '';
    }

    const location = useLocation();
    const isHome = location.pathname === '/';

    const headerStyle = isHome ? {
        // backgroundColor: isHome && 'grey',
        backgroundImage: 'linear-gradient(rgba(79, 110, 133, 0.85), rgba(40, 47, 72, 0.95)), url(https://i.postimg.cc/t4QdQQkP/group-photo-donation.png)',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
        : {};

    return (

        <div className="">
            <div style={headerStyle} className="">
                <div className="content">
                    <div className="flex flex-col items-center gap-4 md:flex-row  md:justify-between ">
                        <div>
                            <img src="https://i.postimg.cc/hvCf54nL/Logo.png" alt="brand-logo" />
                        </div>
                        <div id="header" className="flex gap-8">
                            <NavLink to={'/'}><p>Home</p></NavLink>
                            <NavLink to={'/Donation'}>Donation</NavLink>
                            <NavLink to={'/Statistics'}>Statistics</NavLink>
                        </div>
                    </div>
                    <div>
                        {isHome && <HomeBanner handleSearchButton={handleSearchButton} error={showError}></HomeBanner>}
                    </div>
                </div>
            </div>
            <div>
                {isHome && <FeaturedDonation packages={displayProducts}></FeaturedDonation>}
            </div>
        </div>
    );
};

export default Header;