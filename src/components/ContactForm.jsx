import { Container, Form, Button, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Container className="formulario-entero">
      <Button className="mb-3 book">Book your free consultation</Button>
      <h2>Get a free consultation</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder=" Name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="contact@email.com" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please type your message here..."
          />
        </Form.Group>
        <Button type="submit" className="get-button mt-3">
          Get in Touch
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
