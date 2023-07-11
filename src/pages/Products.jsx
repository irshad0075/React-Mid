import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/AllProducts.css";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        categorizeProducts(response.data.products);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const categorizeProducts = (products) => {
    const categorized = {};

    products.forEach((product) => {
      if (categorized.hasOwnProperty(product.category)) {
        categorized[product.category].push(product);
      } else {
        categorized[product.category] = [product];
      }
    });

    setCategorizedProducts(categorized);
  };

  return (
    <div className="products-container" style={{ color: "#e1997e" }}>
      <div className="container">
        <h1 className="text-center mb-5">All Products</h1>
        {Object.keys(categorizedProducts).map((category) => (
          <div className="category-row" key={category}>
            <h2 className="category-title">{category}</h2>
            <div className="row justify-content-center">
              {isLoading ? (
                // Show shimmer effect when loading
                <>
                  <div className="col-md-4 mb-4 shimmer-card" />
                  <div className="col-md-4 mb-4 shimmer-card" />
                  <div className="col-md-4 mb-4 shimmer-card" />
                </>
              ) : (
                categorizedProducts[category].map((product) => (
                  <div className="col-md-2 mb-4" key={product.id}>
                    <Link
                      to={`/products/${product.id}`}
                      className="text-decoration-none text-danger"
                    >
                      <Card
                        className="product-card"
                        style={{
                          height: "100%",
                          border: "2px solid #e1997e", // Color border added
                        }}
                      >
                        <div className="image-container">
                          <Card.Img
                            className="product-image"
                            variant="top"
                            src={product.thumbnail}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title className="product-title">
                            {product.title}
                          </Card.Title>
                          <Card.Text className="product-description">
                            {product.description}
                          </Card.Text>
                          <div className="mt-auto">
                            <div className="text-dark fw-bold">
                              ₹ {product.price}
                            </div>
                            <button
                              className="btn"
                              style={{ background: "#e1997e" }}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
