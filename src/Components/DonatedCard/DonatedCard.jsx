import { useNavigate } from "react-router-dom";

const DonatedCard = ({ item }) => {
    console.log(item);
    const {product_id, picture, category, title, category_bg, card_bg, text_button_bg, price} = item;
    const cardBgColor = {'backgroundColor' : card_bg};
    const categoryBgColor = {'backgroundColor' : category_bg, color: text_button_bg};
    const titleColor = {'color' : text_button_bg};
    const navigate = useNavigate();

    const handleCardClick = id => {
        console.log(id);
        navigate(`/donate-Id/${product_id}`)

    }

    return (

            <div className="donated-card text-left grid lg:grid-cols-7 sm:grid-cols-7 lg:h-36 mb-8">
                <div className="lg:col-span-3 sm:col-span-3">
                    <img className="h-44" src={picture} alt="" />
                </div>
                <div style={cardBgColor} className='flex flex-col gap-2 p-4 rounded-r-md lg:col-span-4 sm:col-span-4'>
                    <h4 style={categoryBgColor} className="w-fit px-2 font-bold capitalize rounded-md">{category}</h4>
                    <h2 style={titleColor} className="text-lg font-semibold">{title}</h2>
                    <p style={titleColor}>${price}</p>
                    <button style={{ 'backgroundColor': text_button_bg }} className="w-fit px-2 py-1 rounded-md hover:opacity-80 duration-300" onClick={() => handleCardClick(product_id)}>View Details</button>
                </div>
        </div>
    );
};

export default DonatedCard;