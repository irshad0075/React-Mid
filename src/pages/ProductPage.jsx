import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ImageSection from "../components/ImageSection";
import "../styles/product-page.css";
import { CartContext } from "../context/cartContext/CartContext";

function ProductPage() {
  const { state, dispatch } = useContext(CartContext);
  const [product, setProduct] = useState({});

  const { productID } = useParams();

  const [review, setReview] = useState("");
  const [ratingStar, setRatingStar] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const addtoCart = (item) => {
    // console.log(item)
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingStar,
    };

    console.log(payload);

    Swal.fire({
      title: "Successfully Submitted!",
      text: "Thanks for reviewing our product",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });

    setReview("");
    setRatingStar(0);
  };

  const addToCart = () => {
    const payload = {
      ...product,
      productQuantity,
      totalPrice: product.price * productQuantity,
    };

    console.log(payload);

    Swal.fire({
      title: "Added to Cart!",
      text: "Check your Cart for Check Out",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productID}`)
      .then((json) => setProduct(json.data));
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          {product?.images?.length > 0 && (
            <div className="image-section-container">
              <ImageSection images={product.images} />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <div>
            <h1 style={{ color: "#e1997e" }}>
              {product.title}
              <br />
              Price: {product.price}$
            </h1>
            <p>{product.description}</p>
            <div className="d-flex mb-3">
              <ReactStars
                count={5}
                size={24}
                edit={false}
                value={product.rating}
                color2={"#ffd700"}
              />
            </div>

            <div className="d-flex mb-3">
              <button
                className="btn btn-dark mx-3"
                style={{ backgroundColor: "#e1997e" }}
                disabled={productQuantity > 1 ? false : true}
                onClick={() => setProductQuantity(productQuantity - 1)}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className="font-weight-bold">{productQuantity}</span>
              <button
                className="btn btn-dark mx-3"
                style={{ backgroundColor: "#e1997e" }}
                onClick={() => setProductQuantity(productQuantity + 1)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                className="btn btn-dark"
                style={{ backgroundColor: "#e1997e" }}
                onClick={() => addtoCart(product)}
              >
                <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                Add to Cart
              </button>
            </div>
          </div>

          <div className="mt-4" style={{ color: "#e1997e" }}>
            <h3 className="mb-4">Customer Reviews</h3>

            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100 }}
                defaultValue={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>

            <div className="mb-3">
              Rate Us:
              <div className="d-flex">
                <ReactStars
                  count={5}
                  size={24}
                  value={ratingStar}
                  onChange={ratingChanged}
                  color2={"#ffd700"}
                />
              </div>
            </div>

            <div className="d-flex">
              <button
                className="btn btn-dark"
                onClick={submitReview}
                style={{ backgroundColor: "#e1997e" }}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
