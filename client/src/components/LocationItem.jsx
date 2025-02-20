import React, { useState } from "react";

function LocationItem({ location, onTagClick }) {
  const [isFullDescription, setIsFullDescription] = useState(false);

  const toggleDescription = () => {
    setIsFullDescription(!isFullDescription);
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10  mx-auto p-4">
        <div className="w-full md:w-1/5">
          <img src={location.photos[0]} alt={location.title} className="w-full h-auto rounded-lg" />
        </div>

        <div className="w-full md:w-[700px]">
          <h3 className="text-2xl font-bold mb-4">
            <a href={location.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
              {location.title}
            </a>
          </h3>
          <p className="text-gray-700 mb-4 text-center md:text-left">
            {isFullDescription ? location.description : `${location.description.substring(0, 100)} ...`}
            <br />
            <button onClick={toggleDescription} className="text-blue-600 hover:underline mt-2">
              {isFullDescription ? "ย่อข้อความ" : "อ่านต่อ"}
            </button>
          </p>
          <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
            <p>หมวด :</p>
            {location.tags.map((tag, index) => (
              <React.Fragment key={tag}>
                {index > 0 && index === location.tags.length - 1 && <span>และ </span>}
                <span
                  className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded cursor-pointer"
                  onClick={() => onTagClick(tag)}
                >
                  {tag}
                </span>
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {location.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`${location.title} ${index + 1}`} className="w-40 h-auto rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationItem;