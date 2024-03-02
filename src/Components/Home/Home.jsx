import { useLoaderData } from "react-router-dom";
import HomeBanner from "../HomeBanner/HomeBanner";
import FeaturedDonation from "../FeaturedDonation/FeaturedDonation";


const Home = () => {
    const donationPackage = useLoaderData();
    const {products} = donationPackage;
    return (
        <div className="mt-12">
            <HomeBanner></HomeBanner>
            <FeaturedDonation packages = {products}></FeaturedDonation>
        </div>
    );
};

export default Home;