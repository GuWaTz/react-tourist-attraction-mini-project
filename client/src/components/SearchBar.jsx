import React from "react";

function SearchBar({ query, setQuery }) {
    return (
        <div className="w-full md:w-[900px] mx-auto p-4">
            <p className="text-[18px]">ค้นหาที่เที่ยว</p>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ค้นหาสถานที่..."
                className="search-input text-center justify-center w-full h-12 px-4 text-lg"
            />
            <div class="border-t border-gray-200"></div>
        </div>
    );
}

export default SearchBar;