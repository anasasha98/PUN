import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
const CompanySection = () => {
  return (
    <section>
    <Container>
      <Row>
        <Col lg="2" md="3" sm="4" xs="6">
          <h3 className=" d-flex align-items-center gap-1">
            <i className="ri-vimeo-line"></i> Vimeo
          </h3>
        </Col>

        <Col lg="2" md="3" sm="4" xs="6">
          <h3 className=" d-flex align-items-center gap-1">
          <i className="fa-brands fa-vimeo"></i> Pinterest
          </h3>
        </Col>

        <Col lg="2" md="3" sm="4" xs="6">
          <h3 className=" d-flex align-items-center gap-1">
          <i className="fa-brands fa-vimeo"></i> Dribble
          </h3>
        </Col>

        <Col lg="2" md="3" sm="4" xs="6">
          <h3 className=" d-flex align-items-center gap-1">
            {" "}
            <i className="fa-brands fa-vimeo"></i> Apple
          </h3>
        </Col>

        <Col lg="2" md="3" sm="4" xs="6">
          <h3 className=" d-flex align-items-center gap-1">
            {" "}
            <i className="fa-brands fa-vimeo"></i> Finder
          </h3>
        </Col>

        <Col lg="2" md="3" sm="4" xs="6">
          <h2 className=" d-flex align-items-center gap-1">
            {" "}
            <i className="fa-brands fa-vimeo"></i> Google
          </h2>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default CompanySection