

const HomeBanner = () => {
    return (
        <div className="homeBanner">
            <h2 className="md:text-5xl sm:text-3xl text-2xl font-semibold capitalize py-8">I grow by helping people in need</h2>
            <div className="">
                <input placeholder="Search" className="md:w-96 sm:w-64 w-44 h-10 search-input px-4 text-lg" type="text" />
                <button className="bg-red-900 hover:bg-red-700 duration-300 px-4 h-10 search-button">Search</button>
            </div>

        </div>
    );
};

export default HomeBanner;