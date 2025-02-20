import React from "react";
import LocationItem from "./LocationItem";

function LocationList({ locations, onTagClick }) {
  return (
    <div className="flex flex-col gap-5">
      {locations.map((location) => (
        <LocationItem key={location.id} location={location} onTagClick={onTagClick} />
      ))}
    </div>
  );
}

export default LocationList;