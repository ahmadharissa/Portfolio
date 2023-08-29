import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmad Harissa </span>
            <br /> I am 25 years old, I live in Choeifet Beirut.
            <br /> I have Baccoloriets and bachelor in computer sience.
            <br />
            In addition to 2 certificates in corsera.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ambitions
            </li>
            <li className="about-activity">
              <ImPointRight /> Team work mindset
            </li>
            <li className="about-activity">
              <ImPointRight /> Hard worker
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
