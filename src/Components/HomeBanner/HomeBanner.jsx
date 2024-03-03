

const HomeBanner = ({ handleSearchButton, error }) => {

    return (
        <div className="homeBanner my-8">
            <h2 className="md:text-5xl sm:text-3xl text-2xl font-semibold capitalize py-8">I grow by helping people in need</h2>
            <div className="">
                <input id="search-input" placeholder="food / health etc." className="md:w-96 sm:w-64 w-44 h-10 search-input px-4 text-lg" type="text" />
                
                <button onClick={handleSearchButton} className="bg-red-900 hover:bg-red-700 duration-300 px-4 h-10 search-button">Search</button>
            </div>
            <div className="my-4">
                {
                    error === true && <h2 className="text-red-500">No items matched. Please try again</h2>
                }
            </div>

        </div>
    );
};

export default HomeBanner;