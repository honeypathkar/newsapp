import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import "../App.css";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  //Capatalize the word
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  //Fetching new from api
  const fetchNews = async (url) => {
    props.setProgress(10);
    setLoading(true);
    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setLoading(false);
      setTotalResults(parsedData.totalResults);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
      // Handle error state or display a message to the user
    }
  };

  const updateNews = async (page) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    await fetchNews(url);
  };

  //Calling updatenews function and changing title on category click
  useEffect(() => {
    document.title = `NewsForg - ${capitalize(props.category)}`;
    updateNews(page);
    // eslint-disable-next-line
  }, [page]);

  //Updating page by 1
  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setPage(selectedPage);
  };

  return (
    <div>
      <div className="container mt-32 mb-16">
        <h2
          className="my-3 text-center text-3xl"
          style={{ fontFamily: "'Glass Antiqua', cursive", fontWeight: "bold" }}
        >
          NewsFrog - Top Headlines
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
                    // Default image url if image not available
                    imgUrl={
                      element.urlToImage === null
                        ? "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"
                        : element.urlToImage
                    }
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
      <div className="container flex justify-center mb-10">
        {/* React paginate for pagination */}
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(totalResults / props.pagesize)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
        />
      </div>
    </div>
  );
}

//Default props
News.defaultProps = {
  country: "in",
  pagesize: 5,
  category: "general",
};

//Property types
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};
