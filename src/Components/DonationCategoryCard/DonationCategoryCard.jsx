import PropTypes from 'prop-types';

import { useNavigate } from "react-router-dom";

const DonationCategoryCard = ({item}) => {
    
    const {product_id, picture, category, title, category_bg, card_bg, text_button_bg} = item;
    const cardBgColor = {'backgroundColor' : card_bg};
    const categoryBgColor = {'backgroundColor' : category_bg, color: text_button_bg};
    const titleColor = {'color' : text_button_bg};
    const navigate = useNavigate();

    const handleCardClick = id => {
        navigate(`/donate-Id/${id}`)

    }
    return (
        <a className="cursor-pointer" onClick={() => handleCardClick(product_id)}>
        <div className="text-left">
            <div>
                <img className="w-full" src={picture} alt="" />
            </div>
            <div style={cardBgColor} className='donation-card-bottom'>
                <h4 style={categoryBgColor} className="w-fit px-2 font-bold capitalize rounded-md mb-2">{category}</h4>
                <h2 style={titleColor} className="text-lg font-semibold">{title}</h2>
            </div>
        </div>
        </a>
    );
};

DonationCategoryCard.propTypes = {
    item: PropTypes.object,
    
  };
export default DonationCategoryCard;