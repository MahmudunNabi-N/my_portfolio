
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

import "animate.css";
import TrackVisibility from "react-on-screen";

const SERVICE_ID = "service_5gbd5i9";
const TEMPLATE_ID = "template_9lyly3y";
const PUBLIC_KEY = "ftK9pstoYl15K49q4";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(
    formInitialDetails
  );

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [category]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");
    setStatus({});

    const templateParams = {
      from_name:
        `${formDetails.firstName} ${formDetails.lastName}`.trim(),
      from_email: formDetails.email,
      message: formDetails.message,
      phone: formDetails.phone,
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setStatus({
        success: true,
        message: "Message sent successfully!",
      });

      setFormDetails(formInitialDetails);
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate(
                              "firstName",
                              e.target.value
                            )
                          }
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate(
                              "lastName",
                              e.target.value
                            )
                          }
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate(
                              "message",
                              e.target.value
                            )
                          }
                          required
                        />

                        <button
                          type="submit"
                          disabled={buttonText === "Sending..."}
                        >
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status.message && (
                        <Col>
                          <p
                            style={{
                              color: status.success ? "#ffffff" : "#ff0000",
                            }}
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};