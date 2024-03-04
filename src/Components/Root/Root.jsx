import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { DonationPackagesContext } from "../../JavaScriptFunction/contextApi";

const Root = () => {
    const donationPackage = useLoaderData(); // the only time we are fetching data in this project

    return (
        <DonationPackagesContext.Provider value={donationPackage}>
            <div>
                <Header></Header>
                <div className="content">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </DonationPackagesContext.Provider>
    );
};

export default Root;