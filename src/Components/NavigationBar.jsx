import React, { useContext, useRef, useState, useEffect } from "react";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsFillCartFill, BsSearch } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItems from "./CartItems";
import { CartContext } from "../context/addtoCart/context";
import axios from "axios";
import "../styles/Header.css";

const Header = () => {
  const menuRef = useRef(null);
  const [showCart, setShowCart] = useState(false);
  const { state, dispatch } = useContext(CartContext);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <i className="ri-phone-fill"></i>
                <span className="header__top__help">+1-202-555-0149</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>Online Shopping Site</span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Pakistan</h4>
                  <h6>Karachi City, Pakistan</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>
            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="header__btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>

            <div className="navigation" ref={menuRef}>
              <div className="menu">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/products" className="nav-link">
                  Products
                </Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  {categories.map((category, index) => (
                    <NavDropdown.Item
                      key={index}
                      as={Link}
                      to={`/products/category/${category}`}
                    >
                      {category.toUpperCase().replace("-", " ")}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>

                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <BsSearch className="search__icon" />
                </span>
              </div>
              <div className="user__cart" onClick={() => setShowCart(true)}>
                <BsFillCartFill className="cart__icon" />
                {state.cart && state.cart.length > 0 && (
                  <span className="cart__badge">{state.cart.length}</span>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Offcanvas
        show={showCart}
        onHide={() => setShowCart(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart && state.cart.length > 0 ? (
            state.cart.map((item, index) => (
              <CartItems key={index} data={item} />
            ))
          ) : (
            <p>No items in cart.</p>
          )}
          <div className="cart__footer">
            <button
              className="clear__cart__button"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              Clear Cart
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
