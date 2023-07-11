import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <div className="my-6 text-center text-dark">
        <h1>{categoryName.toUpperCase()}</h1>
        <p className="text-danger">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
          officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero
          in unde, molestias illo veniam, dolore veritatis eaque ipsum.
          Molestiae, nam architecto!
        </p>
      </div>

      <Slider {...sliderSettings} className="product-slider">
        {products.map((val, key) => (
          <div className="product-card-container" key={key}>
            <Link
              className="text-decoration-none text-danger"
              to={`/products/${val.id}`}
            >
              <Card
                className="product-card text-dark"
                style={{
                  backgroundColor: "white",
                  border: "2px solid #e1997e",
                  height: "100%",
                }}
              >
                <Card.Img variant="top" src={val.thumbnail} />
                <Card.Body className="d-flex flex-column h-100">
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>{val.description}</Card.Text>
                  <div className="mt-auto">
                    <div className="text-dark fw-bold">₹ {val.price}</div>
                    <button className="btn" style={{ background: "#e1997e" }}>
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
