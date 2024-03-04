
import { getDataFromLocalStorage } from "../../JavaScriptFunction/localStorage";
import DonatedCard from "../DonatedCard/DonatedCard";
import { useContext, useEffect, useState } from "react";
import { DonationPackagesContext } from "../../JavaScriptFunction/contextApi";


const Donation = () => {
    // const AllDonationArray = useLoaderData(); // Rather Fetch data one time and teleport it through CONTEXT below:
    const AllDonationArray = useContext(DonationPackagesContext);
    const AllPackages = AllDonationArray.products;
    const donatedPackages = getDataFromLocalStorage();
    const [displayCards, setDisplayCards] = useState([]);

    const matchedPackages = AllPackages.filter(item => donatedPackages.includes(item.product_id));
    useEffect(()=> {
        const limitDisplay = matchedPackages.slice(0, 4);
        setDisplayCards(limitDisplay);
    }, [])
    return (

        <div className="my-12">
            <div>
                {
                    displayCards.length === 0 && <h2 className="text-xl">Your donations will be displayed here</h2>
                }
            </div>
            <div className="grid lg:grid-cols-2 mt-12 gap-8 justify-center items-center">
                {
                    displayCards.map(item => <DonatedCard key={item.product_id} item={item}></DonatedCard>)
                }
            </div>
            <div className="mt-4">
                <button onClick={()=> setDisplayCards(matchedPackages)} style={{display: displayCards.length == matchedPackages.length && 'none'}} className="px-8 py-2 bg-green-700 rounded-md hover:bg-green-600 duration-300">See All</button>
            </div>
        </div>
    );
};

export default Donation;