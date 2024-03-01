import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-2xl py-4">Page Not Found</h2>
            <NavLink to={'/'}> <button className="px-4 rounded-md bg-slate-500">Home</button> </NavLink>
        </div>
    );
};

export default ErrorPage;