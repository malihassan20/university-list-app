import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [countryVal, setCountryVal] = useState("");
  const [nameVal, setNameVal] = useState("");

  const handleCountryChange = (e) => {
    setCountryVal(e.target.value);

    if (e.target.value.length === 0) {
      searchData();
    }
  };

  const handleNameChange = (e) => {
    setNameVal(e.target.value);
    if (e.target.value.length === 0) {
      searchData();
    }
  };

  const searchData = () => {
    let para = "";

    if (nameVal.length > 0) {
      para = para + "name=" + nameVal;
    }

    if (countryVal.length > 0) {
      if (nameVal.length > 0) {
        para = para + "&";
      }
      para = para + "country=" + countryVal;
    }

    if (para.length > 0) {
      handleSearch(para);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        className="custom-input mr-20"
        type="text"
        name="name"
        placeholder="University Name"
        value={nameVal}
        onChange={handleNameChange}
      />
      <input
        className="custom-input"
        type="text"
        name="country"
        placeholder="Country"
        value={countryVal}
        onChange={handleCountryChange}
      />
      <button onClick={searchData} type="button" className="btn-primary">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
