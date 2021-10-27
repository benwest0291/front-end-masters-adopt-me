import { useState } from "react";

const SearchParams = () => {
  const [location, updateLocation] = useState("Maidstone, Kent");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => updateLocation(e.target.value)} // Shorthand inline function
            placeholder={location}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
