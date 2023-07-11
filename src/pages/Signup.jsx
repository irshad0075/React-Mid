import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import signupImage from "../assets/images/sign.png";

import "../styles/SignupDetail.css";

function SignupDetail() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const { email, password, address1, address2, city, state, zip } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    Swal.fire({
      icon: "success",
      title: "Form Submitted",
      text: "Data has been logged in the console.",
    });
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-image">
          <img src={signupImage} alt="Login" width="500" height="500" />
        </div>
        <div className="signup-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={address1}
                onChange={(e) =>
                  setFormData({ ...formData, address1: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                value={address2}
                onChange={(e) =>
                  setFormData({ ...formData, address2: e.target.value })
                }
              />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  value={state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                >
                  <option disabled>Choose...</option>
                  <option>California (United States)</option>
                  <option>New York (United States)</option>
                  <option>Texas (United States)</option>
                  <option>London (United Kingdom)</option>
                  <option>Paris (France)</option>
                  <option>Berlin (Germany)</option>
                  <option>Beijing (China)</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  value={zip}
                  onChange={(e) =>
                    setFormData({ ...formData, zip: e.target.value })
                  }
                />
              </Form.Group>
            </Row>

            <div style={{ marginTop: "20px" }}>
              <Form.Group controlId="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <p className="sign-up">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignupDetail;
