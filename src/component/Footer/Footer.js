import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

import "./footer.css";
import { Link } from "react-router-dom";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "About US",
    url: "/about-us",
  },

  {
    display: "Courses",
    url: "/courses",
  },

  {
    display: "Blog",
    url: "/blog",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    display: "Membership",
    url: "/membership",
  },

  {
    display: "Purchases Guide",
    url: "/purchases-guide",
  },

  {
    display: "Terms of Service",
    url: "/terms",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
            <i class="fa-solid fa-graduation-cap"></i> PUN
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <Link to="facebook.com">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="facebook.com">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="facebook.com">
                  <i class="ri-twitter-line"></i>
                </Link>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Amman</p>
            <p> Phone: 0786659173 </p>
            <p>Email: anas__asha@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
