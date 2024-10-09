import { Container, Row, Col, Button } from "react-bootstrap";
import CustomButton from "./CustomButton.jsx";
import ContactForm from "./ContactForm.jsx";

const Section = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col
          md={6}
          className="base1 text-white p-5 d-flex flex-column justify-content-center"
        >
          <p className="welcome">welcome to Businezz X</p>
          <h1>
            Join us in growing your <span className="subrayado">business</span>.
          </h1>
          <span className="espacio"></span>
          <p className="elevate">
            Elevate your business with Businezz X, a professional Webflow
            template.
          </p>
          <CustomButton text="contact us" />
        </Col>
        <Col md={6} className="base2 p-5">
          <Container className="fondo">
            <ContactForm />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
