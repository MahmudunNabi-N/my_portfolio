
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
 const toRotate = ["Web Developer", "Web Designer"];
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300);

 
  const period = 2000;

  useEffect(() => {
    const fullText = toRotate[loopNum % toRotate.length];

    const ticker = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(300);
      } else {
        setDelta(isDeleting ? 50 : 300);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <span className="tagline">
                    Welcome to my Portfolio
                  </span>

                  <h1>
                    Hi! I'm Mahmudun Nabi Patwary{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    I am a Computer Science and Engineering (CSE)
                    student with a strong interest in software
                    development and modern web technologies. I enjoy
                    building practical, user-focused applications
                    while continuously improving my programming and
                    problem-solving skills. I am passionate about
                    learning new technologies and growing as a
                    professional software developer.
                  </p>

                  <button onClick={() =>
                    document.getElementById("connect")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                >
                  <img src={headerImg} alt="Astronaut illustration" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};