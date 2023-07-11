import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ProductCarousel.css"; // Import the CSS file for custom styles

import sale from "../assets/images/g6.jpg";

import image1 from "../assets/images/g7.jpg";
import image2 from "../assets/images/g8.jpg";
import image3 from "../assets/images/g9.jpg";
import image4 from "../assets/images/g2.jpg";
import image5 from "../assets/images/g4.jpg";
import image6 from "../assets/images/g12.jpg";
import image7 from "../assets/images/g13.jpg";
import image8 from "../assets/images/g14.jpg";
import image9 from "../assets/images/g3.jpg";

const ProductCarousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const rows = [];
  for (let i = 0; i < images.length; i += 3) {
    const rowImages = images.slice(i, i + 3);
    const row = (
      <Row key={i}>
        {rowImages.map((image, index) => (
          <Col key={index} md={4}>
            <div
              className="product-image-container"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="product-image"
              />
            </div>
          </Col>
        ))}
      </Row>
    );
    rows.push(row);
  }

  return (
    <section className="product-carousel" style={{backgroundColor:'white'}}>
      <div className="sale-container">
        <img src={sale} alt="sale" className="sale-image" />
      </div>

      <Container>{rows}</Container>

      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="modal-image"
            />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCarousel;
