import React from "react";
import Carouselstart from "../Components/Carouselstart";
import { Container, Row, Col, Card } from "react-bootstrap";
import imageslide from "../assets/images/Imac.gif";
import Sale from "../components/Sale";
import BestSellerSection from "../components/BestSellerSection";
import News from "../components/News";
import EcommerceCard from "../components/EcommerceCard";

function Home() {
  return (
    <>
      <Carouselstart />

      <BestSellerSection />
      <EcommerceCard />
      <Sale />

      {/* <WhyUs /> */}

      <section style={{ background: "#e1997e" }}>
        <Container id="about" className="pb-5">
          <Row className="d-flex pt-5">
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <img src={imageslide} alt="" className="w-75" />
            </Col>
            <Col md={6}>
              <div className="px-md-4">
                <h2 style={{ color: "white" }} data-aos="fade-zoom-in">
                  Why Choose Us?
                </h2>
                <p data-aos="fade-zoom-in">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
                <Row>
                  <Col sm={6} mb={3} mb-sm={0} data-aos="fade-up">
                    <Card>
                      <Card.Body>
                        <div className="card-text">
                          <h5 style={{ color: "#e1997e" }}>
                            Corporis voluptates sit
                          </h5>
                          <p>
                            Consequuntur sunt aut quasi enim aliquam quae harum
                            pariatur laboris nisi ut aliquip
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} mb={3} mb-sm={0} data-aos="fade-up">
                    <Card>
                      <Card.Body>
                        <div className="card-text">
                          <h5 style={{ color: "#e1997e" }}>
                            Corporis voluptates sit
                          </h5>
                          <p>
                            Consequuntur sunt aut quasi enim aliquam quae harum
                            pariatur laboris nisi ut aliquip
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col
                    sm={6}
                    mb={3}
                    mb-sm={0}
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <Card>
                      <Card.Body>
                        <div className="card-text">
                          <h5 style={{ color: "#e1997e" }}>
                            Corporis voluptates sit
                          </h5>
                          <p>
                            Consequuntur sunt aut quasi enim aliquam quae harum
                            pariatur laboris nisi ut aliquip
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    sm={6}
                    mb={3}
                    mb-sm={0}
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <Card>
                      <Card.Body>
                        <div className="card-text">
                          <h5 style={{ color: "#e1997e" }}>
                            Corporis voluptates sit
                          </h5>
                          <p>
                            Consequuntur sunt aut quasi enim aliquam quae harum
                            pariatur laboris nisi ut aliquip
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <News />
    </>
  );
}

export default Home;
