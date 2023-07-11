import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/ProductSlider.css";

// CustomPrevArrow component
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow left-arrow" />
    </div>
  );
};

// CustomNextArrow component
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow right-arrow" />
    </div>
  );
};

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((json) => setProducts(json.data.products));
  }, [categoryName]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container">
      <div className="my-6 text-center" style={{ color: "#e1997e" }}>
        <h1>{categoryName.toUpperCase()}</h1>
      </div>

      <Slider {...sliderSettings} className="product-slider">
        {products.map((val, key) => (
          <div className="product-card-container" key={key}>
            <Link className="text-decoration-none text-danger" to={`/products/${val.id}`}>
              <Card className="product-card text-dark custom-card">
                <div className="card-ribbon">₹ {val.price}</div>
                <Card.Img variant="top" src={val.thumbnail} />
                <Card.Body className="d-flex flex-column h-100">
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>{val.description}</Card.Text>
                  <div className="mt-auto">
                    <button className="btn btn-dark" style={{ backgroundColor: "#e1997e" }}>
                      <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                      Add to Cart
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
