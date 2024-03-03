import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    const donationPackage = useLoaderData();
    return (
        <div>
            <Header donationPackage = {donationPackage}></Header>
            <div className="content">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;