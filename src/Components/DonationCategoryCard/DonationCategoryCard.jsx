

const DonationCategoryCard = ({item}) => {
    console.log(item);
    const {product_id, picture, category, title, category_bg, card_bg, text_button_bg} = item;
    const cardBgColor = {'backgroundColor' : card_bg};
    const categoryBgColor = {'backgroundColor' : category_bg, color: text_button_bg};
    const titleColor = {'color' : text_button_bg};

    return (
        <div className="text-left">
            <div>
                <img src={picture} alt="" />
            </div>
            <div style={cardBgColor} className='donation-card-bottom'>
                <h4 style={categoryBgColor} className="w-fit px-2 font-bold capitalize rounded-md mb-2">{category}</h4>
                <h2 style={titleColor} className="text-lg font-semibold">{title}</h2>
            </div>
        </div>
    );
};

export default DonationCategoryCard;