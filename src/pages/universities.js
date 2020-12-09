import React from "react";
import Layout from "../containers/layout";
import UniversitiesList from "../containers/universitiesList";

const Page = () => {
  return (
    <Layout title="Universities Catalog">
      <h3>Universities List</h3>
      <UniversitiesList />
    </Layout>
  );
};

export default Page;
