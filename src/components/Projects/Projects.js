import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";

//Assets
import TVC from "../../Assets/Projects/TVC.png";
import Kawwen from "../../Assets/Projects/Kawwen.png";
import Mehnati from "../../Assets/Projects/Mehnati.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import tabadol from "../../Assets/Projects/tabadol.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TVC}
              isBlog={false}
              title="TVC"
              description="We at The Volunteer Circle believe it is time to take charge by creating a platform for skill-sharing across all areas of Lebanon, we match enthusiastic volunteers, community services, experience seekers, and multi-talented individuals with the cause that needs them the most."
              demoLink="https://portal.thevolunteercircle.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kawwen}
              isBlog={false}
              title="kawwen"
              description="Kawwen is a directory of quality programs offered in Lebanon to equip you with the most in-demand skills to boost your career."
              demoLink="https://kawwen.website/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mehnati}
              isBlog={false}
              title="Mehnati"
              description="Mehnati is an online platform dedicated to raising awareness about vocational and technical education in Lebanon. This website introduces academic school students to the aspects of vocational education and guides them through the process of career development, by assessing their skills and helping them explore their career path, develop their abilities, as well as plan for their future."
              demoLink="https://jobs.mehnati.hostbotics.net/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tabadol}
              isBlog={false}
              title="Tabadol"
              description="Tabadol is an online platform."
              demoLink="https://frontend.tabadol.hostbotics.net/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={true}
              title="Portfolio"
              description="Portfolio is a website to introduce ahmad harissa."
              ghLink="https://github.com/ahmadharissa/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
