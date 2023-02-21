import React from "react";
import { Link } from "react-router-dom";

const ThumbDetail = ({
  title,
  image_url,
  population,
  region,
  capital,
  theme,
}) => {
  return (
    <Link className={`card ${theme}`} to={`/${title}`}>
      <div className="image-holder">
        <img src={image_url} className="image" />
      </div>
      <h3>{title}</h3>
      <h4>
        Population: <span>{population}</span>
      </h4>
      <h4>
        Region: <span>{region}</span>
      </h4>
      <h4>
        Capital: <span>{capital}</span>
      </h4>
    </Link>
  );
};

export default ThumbDetail;
