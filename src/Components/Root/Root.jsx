import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    const donationPackage = useLoaderData();
    return (
        <div>
            <Header donationPackage = {donationPackage}></Header>
            <div className="content">
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
            

        </div>
    );
};

export default Root;