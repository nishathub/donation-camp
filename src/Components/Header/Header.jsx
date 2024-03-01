import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex flex-col items-center gap-4 md:flex-row  md:justify-between ">
            <div>
                <img src="https://i.postimg.cc/hvCf54nL/Logo.png" alt="brand-logo" />
            </div>
            <div id="header" className="flex gap-8">
                <NavLink to={'/'}><p>Home</p></NavLink>
                <NavLink to={'/Donation'}>Donation</NavLink>
                <NavLink to={'/Statistics'}>Statistics</NavLink>
            </div>
        </div>
    );
};

export default Header;