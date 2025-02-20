import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import LocationList from "./components/LocationList";

function MainApp() {
  const [query, setQuery] = useState(""); // คำค้นหา
  const [locations, setLocations] = useState([]); // รายการสถานที่จาก API
  const [isLoading, setIsLoading] = useState(false); // สถานะโหลดข้อมูล

  useEffect(() => {
    if (query.trim() === "") return;

    setIsLoading(true);
    fetch(`http://localhost:4001/trips?keywords=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trips:", error);
        setIsLoading(false);
      });
  }, [query]);

  const handleTagClick = (tag) => {
    setQuery(tag);
  };

  return (
    <div className="flex items-center flex-col">
      <div className="flex items-start flex-col py-10">
        <h1 className="text-[#2c9cda] text-[80px] font-[500]">เที่ยวไหนดี</h1>
      </div>
      
      <SearchBar query={query} setQuery={setQuery} />
      {query.trim() !== "" && <LocationList locations={locations} onTagClick={handleTagClick} />}
    </div>
  );
}

export default MainApp;