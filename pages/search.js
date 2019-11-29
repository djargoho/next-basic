import React from "react";
import Layout from "../components/Layout";

const Search = ({ url }) => {
  return (
    <Layout>
      당신이 검색한 키워드는 "{url.query.keyword}" 입니다.
      <button onClick={() => url.back()}>back</button>
    </Layout>
  );
};

export default Search;
