import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar({ handleSetQuery }) {
  const [tempQuery, setTempQuery] = useState("");
  return (
    <div className="mb-4">
      <label
        htmlFor="search-bar"
        className="w-100 d-flex position-relative justify-content-center align-items-center shadow-sm">
        <input
          name="search-bar"
          aria-label="search-bar"
          placeholder="Search City"
          className="rounded-pill p-2 ps-3 w-100 bg-box"
          onChange={(e) => {
            setTempQuery(e.target.value);
          }}
        />
        <div
          className="position-absolute cursor-pointer d-flex justify-content-center align-items-center bg-primary bg-gradient text-white p-2 rounded-circle"
          style={{ right: 5 }}>
          <FaMagnifyingGlass
            style={{ color: "white", width: "20px", height: "20px" }}
            className="w-100 "
            onClick={() => handleSetQuery(tempQuery)}
          />
        </div>
      </label>
    </div>
  );
}

export default SearchBar;
