import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2026-10-08 151654.png";
import projImg2 from "../assets/img/Screenshot 2026-10-08 150857.png";
import projImg3 from "../assets/img/Screenshot 2026-10-08 153545.png";
import projImg4 from "../assets/img/Screenshot 2026-10-08 153417.png";
import projImg5 from "../assets/img/Screenshot 2026-10-08 154911.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Fit-Log",
      description: "A responsive workout library built with Next.js and Tailwind CSS, featuring workout details, personalized plans, and progress tracking.",
      imgUrl: projImg1,
    },
    {
      title: "Dev-Stack",
      description: "A modern developer-focused website showcasing technology resources and content through a clean, responsive, and user-friendly interface.",
      imgUrl: projImg2,
    },
    {
      title: "Dev-Conf",
      description: "A modern developer conference landing page designed to showcase event information, speakers, schedules, and pricing.",
      imgUrl: projImg3,
    },
    {
      title: "Age-Calculator",
      description: "A React-based age calculator that calculates a user's age from their date of birth with a simple and responsive UI.",
      imgUrl: projImg4,
    },
    {
      title: "Portfolio",
      description: "A responsive personal portfolio showcasing my skills, projects, and journey as a CSE student.",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A collection of projects that showcase my skills in web development, problem-solving, and modern technologies. Each project reflects my practical learning, creativity, and continuous growth as a CSE student and aspiring software engineer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
