import React from "react";
import { Link } from "react-router-dom";
import NewsView from "../components/NewsView";
import "../css/News.css";

const News = () => {
  return (
    <main>
      <div className="news-Container">
        <NewsView />
        <NewsView />
        <NewsView />
        <NewsView />
      </div>
    </main>
  );
};

export default News;
