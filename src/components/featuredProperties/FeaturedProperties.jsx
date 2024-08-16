import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="fp">
      <div className="fpContainer" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {loading ? (
          "Loading"
        ) : (
          data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt={item.name}
                className="fpImg"
              />
              <div className="fpDetails">
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="fpControls">
        <button className="fpControl" onClick={handlePrev}>❮</button>
        <button className="fpControl" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default FeaturedProperties;
