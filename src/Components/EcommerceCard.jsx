import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/cardStyle.css";
import Carousel from 'react-bootstrap/Carousel';
import imageslide1 from "../assets/images/c1.jpg";
import imageslide2 from "../assets/images/c2.jpg";
import imageslide3 from "../assets/images/c3.jpg";
import imageslide4 from "../assets/images/c4.jpg";
import imageslide5 from "../assets/images/c5.jpg";
import imageslide6 from "../assets/images/c6.jpg";
import imageslide7 from "../assets/images/c7.jpg";

const CategorySection = ({ categories }) => {
  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {categories.map((val, key) => (
          <div className="category-item" key={key}>
            <Link
              className="text-decoration-none"
              to={`/products/category/${val}`}
            >
              <Card className="h-100 text-danger">
                <Card.Body>
                  <Card.Title>{val.toUpperCase().replace("-", " ")}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
        <Carousel.Item interval={1000}>
          <img className="carousel-image" src={imageslide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="carousel-image" src={imageslide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={imageslide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={imageslide4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={imageslide5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={imageslide6} alt="Sixth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={imageslide7} alt="Seventh slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {/* <div className="my-5 text-center text-dark">
        <h1>Categories</h1>
      </div> */}

      <div className="d-flex justify-content-between">
        <CategorySection categories={categories} />
        <CarouselSection />
      </div>
    </div>
  );
}
