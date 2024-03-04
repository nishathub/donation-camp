import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDataToLocalStorage } from "../../JavaScriptFunction/localStorage";

const DonationDetails = () => {
    const { id } = useParams();
    const loadedData = useLoaderData();

    const allDonatePackages = loadedData.products;
    const matchedPackage = allDonatePackages.find(item => item.product_id == id);

    const { product_id, picture, price, description, title, text_button_bg } = matchedPackage;

    const handleDonateButton = () => {
        console.log(price, product_id);
        toast(`Donated $${price} for '${title}'`);
        saveDataToLocalStorage(product_id);
    }

    return (
        <div className="flex justify-center text-left">
            <div className="sm:w-4/6 my-12 pb-8">
                <div className="relative">
                    <div className="donate-details-image-div">
                        <img className="w-full" src={picture} alt="" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full md:h-20 h-12 text-left bg-slate-800 opacity-60 donate-details-button-div">
                    </div>
                    <div className="absolute md:bottom-4 bottom-2 md:left-4 left-2">
                        <button onClick={handleDonateButton} style={{ 'backgroundColor': text_button_bg }} className="md:p-2 p-1 rounded-md hover:opacity-80 duration-300">Donate ${price}</button>
                        <ToastContainer />
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="font-bold text-2xl mb-4">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;