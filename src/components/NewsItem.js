import React from "react";

export default function NewsItem(props) {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-primary"
          style={{ left: "93%", zIndex: "1" }}
        >
          {source}{" "}
        </span>
        <img
          src={imgUrl}
          className="card-img-top"
          alt="News"
          style={{ maxHeight: "230px" }}
        />
        <div className="card-body">
          <h5 className="card-title font-bold">{title}...</h5>
          <p className="card-text mb-2">
            {/* Default description if description is not available */}
            {!description
              ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit enim recusandae repellendus deserunt"
              : description}
            ....
          </p>
          <p className="card-text mb-3">
            {" "}
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-outline-dark items-center"
          >
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
