import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiClickup,
  SiAndroid,
  SiDiagramsdotnet
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiClickup />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiagramsdotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
    </Row>
  );
}

export default Toolstack;
