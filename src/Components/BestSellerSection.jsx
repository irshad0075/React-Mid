import React, { useState, useEffect } from "react";
import "../styles/best-seller.css";
import imageslide1 from "../assets/images/1.jpg";
import imageslide2 from "../assets/images/2.jpg";
import imageslide3 from "../assets/images/3.jpg";
import imageslide4 from "../assets/images/4.jpg";
import imageslide5 from "../assets/images/5.jpg";
import image1 from "../assets/images/m1.jpg";
import image2 from "../assets/images/m2.jpg";
import image3 from "../assets/images/m3.jpg";
import image4 from "../assets/images/m4.jpg";
import image5 from "../assets/images/m5.jpg";
import image6 from "../assets/images/m6.jpg";
import image7 from "../assets/images/m7.jpg";
import image8 from "../assets/images/m8.jpg";
import image9 from "../assets/images/m9.jpg";
import image10 from "../assets/images/m10.jpg";

const BestSellerSection = () => {
  const [categories, setCategories] = useState([]);
  const [mainImage, setMainImage] = useState(image1);
  const [card1Image, setCard1Image] = useState(image4);
  const [card2Image, setCard2Image] = useState(image7);
  const [card3Image, setCard3Image] = useState(image10);

  const images = [
    imageslide1,
    imageslide2,
    imageslide3,
    imageslide4,
    imageslide5,
  ];

  const handleThumbnailClick = (image, cardNumber) => {
    if (cardNumber === 1) {
      setMainImage(image);
    } else if (cardNumber === 2) {
      setCard1Image(image);
    } else if (cardNumber === 3) {
      setCard2Image(image);
    } else if (cardNumber === 4) {
      setCard3Image(image);
    }
  };

 
  return (
    <div className="containers my-4">
      <div className="title">
        <p>Best Sale</p>
        <h2>
          Top <span>Categories</span>
        </h2>
      </div>
 
<div className="d-flex">
        <div className="col-md-3 my-2">
          <div className="card" style={{ border: "2px solid #e1997e" }}>
            <div className="card-main">
              <div className="discount">-10%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image2, 1)}
                >
                  <img src={image2} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image3, 1)}
                >
                  <img src={image3} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image1, 1)}
                >
                  <img src={image1} alt="Product" />
                </div>
              </div>
              <div className="image">
                <img src={mainImage} alt="Product" />
              </div>
              <div className="cart-line"></div>
            </div>
            <div className="content">
              <a>Top Brand</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old ">$89.00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 my-2">
          <div className="card" style={{ border: "2px solid #e1997e" }}>
            <div className="card-main">
              <div className="discount">-20%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image6, 2)}
                >
                  <img src={image6} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image4, 2)}
                >
                  <img src={image4} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image5, 2)}
                >
                  <img src={image5} alt="Product" />
                </div>
              </div>
              <div className="image">
                <img src={card1Image} alt="Product" />
              </div>
              <div className="cart-line"></div>
            </div>
            <div className="content">
              <a>Top Brand</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old">$89.00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 my-2">
          <div className="card" style={{ border: "2px solid #e1997e" }}>
            <div className="card-main">
              <div className="discount">-30%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image8, 3)}
                >
                  <img src={image8} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image9, 3)}
                >
                  <img src={image9} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image10, 3)}
                >
                  <img src={image10} alt="Product" />
                </div>
              </div>
              <div className="image">
                <img src={card2Image} alt="Product" />
              </div>
              <div className="cart-line"></div>
            </div>
            <div className="content">
              <a>Top Brand</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old">$89.00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 my-2">
          <div className="card" style={{ border: "2px solid #e1997e" }}>
            <div className="card-main">
              <div className="discount">-40%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image7, 4)}
                >
                  <img src={image7} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image5, 4)}
                >
                  <img src={image5} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image6, 4)}
                >
                  <img src={image6} alt="Product" />
                </div>
              </div>
              <div className="image">
                <img src={card3Image} alt="Product" />
              </div>
              <div className="cart-line"></div>
            </div>
            <div className="content">
              <a>Top Brand</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old">$89.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default BestSellerSection;
