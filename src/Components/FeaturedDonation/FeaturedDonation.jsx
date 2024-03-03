import DonationCategoryCard from "../DonationCategoryCard/DonationCategoryCard";


const FeaturedDonation = ({ packages }) => {
    return (
        <div className="xl:grid xl:grid-cols-4 flex flex-wrap gap-4 justify-center">
            {packages.map(item => <DonationCategoryCard item={item}></DonationCategoryCard>)}
        </div>
    );
};

export default FeaturedDonation;