import Layout from "../containers/layout";
import { useHistory } from "react-router-dom";
import SearchBar from "../components/searchBar";

const Page = () => {
  let history = useHistory();

  const searchData = (searchVal) => {
    history.push("/universities", { query: searchVal });
  };

  return (
    <Layout title="Welcome to Universities Catalog">
      <div className="home-page-container">
        <h2>University Domains and Names Data</h2>
        <p>
          Type the university name and country in the textbox below and click
          search button to get its list
        </p>
        <SearchBar handleSearch={searchData} />
      </div>
    </Layout>
  );
};

export default Page;
