import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `NewsForg- ${capitalize(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const handlePrevPage = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextPage = async () => {
    setPage(page + 1);
    updateNews();
  };

  return (
    <div>
      <div className="container my-3">
        <h2
          className="my-5 text-center"
          style={{ fontFamily: "'Glass Antiqua', cursive", fontWeight: "bold" }}
        >
          NewsFrog - Top HeadLines
        </h2>
        {loading && <Spinner />}
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark"
          disabled={page <= 1}
          onClick={handlePrevPage}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          disabled={page + 1 > Math.ceil(totalResults / props.pagesize)}
          onClick={handleNextPage}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
News.defaultProps = {
  country: "in",
  pagesize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};
