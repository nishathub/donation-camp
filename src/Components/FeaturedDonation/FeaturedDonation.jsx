import DonationCategoryCard from "../DonationCategoryCard/DonationCategoryCard";


const FeaturedDonation = ({ packages }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center my-12"> 
            {packages.map(item => <DonationCategoryCard item={item}></DonationCategoryCard>)}
        </div>
    );
};

export default FeaturedDonation;