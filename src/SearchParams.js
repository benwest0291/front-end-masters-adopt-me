import { useState } from "react"; // have to import state to store state/info

const SearchParams = () => {
  const [location, updateLocation] = useState("Maidstone, Kent"); // setting as original state as Maidstone, Kent => Location as name as var and updateLocation as the function to to fire
  //^^Var^^    ^^^Function^^^            ^^^ storing in state^^^^
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location} // refencing location var
            onChange={(e) => updateLocation(e.target.value)} // Shorthand inline function to listen to new input to replace the state of Maidstone, Kent
            placeholder={location}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
