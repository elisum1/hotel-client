import { Link, useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";  // Importa el ícono de cámara
import "./searchItem.css";

const SearchItem = ({ item }) => {
  const navigate = useNavigate();  // Hook useNavigate para la navegación

  return (
    <div className="searchItem">
      <div className="siImgContainer">
        {item.photos[0] ? (
          <img src={item.photos[0]} alt={item.name} className="siImg" />
        ) : (
          <FaCamera className="siNoImage" />
        )}
      </div>
      <div className="siContent">
        <div className="siHeader">
          <h1 className="siTitle">{item.name}</h1>
          {item.rating && (
            <div className="siRating">
              <span>Excellent</span>
              <button>{item.rating}</button>
            </div>
          )}
        </div>
        <div className="siDetails">
          <span className="siDistance">{item.distance}m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Studio Apartment with Air conditioning</span>
          <p className="siFeatures">{item.desc}</p>
          <div className="siPriceContainer">
            <span className="siPrice">${item.cheapestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
          </div>
        </div>
        <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
        </Link>
      </div>
      <button className="backButton" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default SearchItem;
