import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUserCircle, FaUserCheck } from "react-icons/fa";
// import { BsFillCartFill, BsSearch } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItems from "./CartItems";
import { LoginRouteContext } from "../context/loginContext/LoginContext";
import axios from "axios";
import "../styles/Header.css";
import Cart from "../Components/Cart";

const Header = () => {
  const { state } = useContext(LoginRouteContext);
  const { user } = state;
  const [showCart, setShowCart] = useState(false);

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
          <div className="header__top__left">
            <span>Need Help?</span>
            <i className="ri-phone-fill"></i>
            <span className="header__top__help">+1-202-555-0149</span>
          </div>
        </Container>
      </div>

      <div className="header__middle">
        <Container className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>
              <Link to="/home" className="d-flex align-items-center gap-2">
                <i className="ri-car-line"></i>
                <span>Online Shopping Site</span>
              </Link>
            </h1>
          </div>
          <div className="header__location d-flex align-items-center gap-2">
            <span>
              <i className="ri-earth-line"></i>
            </span>
            <div className="header__location-content">
              <h4>Pakistan</h4>
              <h6>Karachi City, Pakistan</h6>
            </div>
          </div>
          <div className="header__location d-flex align-items-center gap-2">
            <span>
              <i className="ri-time-line"></i>
            </span>
            <div className="header__location-content">
              <h4>Sunday to Friday</h4>
              <h6>10am - 7pm</h6>
            </div>
          </div>
         
        </Container>
      </div>

      <div className="main__navbar">
        <Navbar expand="lg" bg="light" variant="light" collapseOnSelect>
          <Container>
            <Navbar.Brand>
              <Link to="/home" className="d-flex align-items-center gap-2">
                <i className="ri-car-line"></i>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  Products
                </Nav.Link>
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
              </Nav>
              <Nav>
                {user ? (
                  <>
                    <Nav.Link as={Link} to="/logout">
                      Logout
                    </Nav.Link>
                    <span className="mx-3">
                      <FaUserCheck /> Dont be shy say HI , {user.username}
                    </span>
                    <Cart />
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/signup">
                      Sign Up
                    </Nav.Link>
                  </>
                )}
             
                {user && user.cart && user.cart.length > 0 && (
                  <div className="user__cart" onClick={() => setShowCart(true)}>
                    <BsFillCartFill className="cart__icon" />
                    <span className="cart__badge">{user.cart.length}</span>
                  </div>
                )}
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
          {user && user.cart && user.cart.length > 0 ? (
            user.cart.map((item, index) => (
              <CartItems key={index} data={item} />
            ))
          ) : (
            <p>No items in cart.</p>
          )}
          <div className="cart__footer">
            {/* Include the appropriate dispatch function */}
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
