import PropTypes from 'prop-types';

import DonationCategoryCard from "../DonationCategoryCard/DonationCategoryCard";



const FeaturedDonation = ({ packages }) => {
    
    return (
        <div className="flex flex-wrap gap-4 justify-center my-12"> 
            {packages.map(item => <DonationCategoryCard key={item.product_id} item={item}></DonationCategoryCard>)}
        </div>
    );
};

FeaturedDonation.propTypes = {
    packages: PropTypes.array,
    
  };

export default FeaturedDonation;