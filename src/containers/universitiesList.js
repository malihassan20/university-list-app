import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import UniversityCard from "../components/universityCard";
import CustomPagination from "../components/pagination";
import SearchBar from "../components/searchBar";

import { API_URL } from "../constants";

const PAGINATION_BREAK_POINT = 20;

const UniversitiesList = (props) => {
  const location = useLocation();
  const [universities, setUniversities] = useState([]);
  const [paginatedList, setPaginatedList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getUniversitiesData = (_query = "") => {
    setIsLoading(true);

    let url = API_URL;

    if (_query !== "") {
      url = url + "?" + _query;
    }
    // get the universities list data
    axios
      .get(url)
      .then(function (response) {
        setIsLoading(false);
        setSkip(0);
        setUniversities(response.data);
        setPaginatedList(response.data.slice(0, PAGINATION_BREAK_POINT));
      })
      .catch(function (error) {
        setIsLoading(false);
        alert("Some error occurred. Please try again!");
      });
  };

  useEffect(() => {
    getUniversitiesData(location?.state ? location.state.query : "");
  }, []);

  const paginationUpdated = (skip) => {
    setPaginatedList(universities.slice(skip, skip + PAGINATION_BREAK_POINT));
    setSkip(skip);
  };

  const searchData = (searchVal) => {
    getUniversitiesData(searchVal);
  };

  return (
    <div className="universities-list-outter-container">
      <SearchBar handleSearch={searchData} />
      {!isLoading && paginatedList.length === 0 && <h3>No data found</h3>}
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && (
        <Fragment>
          <div className="universities-list-container">
            {paginatedList.map((item, index) => (
              <UniversityCard
                key={index}
                name={item.name}
                country={item.country}
                website={item.web_pages[0]}
              />
            ))}
          </div>
          <br />
          {universities.length > PAGINATION_BREAK_POINT && (
            <CustomPagination
              totalData={universities.length}
              skip={skip}
              paginationUpdated={paginationUpdated}
              paginationBreakPoint={PAGINATION_BREAK_POINT}
            />
          )}
        </Fragment>
      )}
      <br />
      <br />
    </div>
  );
};

export default UniversitiesList;
