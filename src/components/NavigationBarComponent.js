import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

const NavigationBarComponent = () => {
  return (
    <div>
    <Navbar expand="lg" className="custom-style">
      <Container>
        <Navbar.Brand href="/">Craftpedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#category">Category</Nav.Link>
            <Nav.Link className="text-white" href="#shipping">Shipping</Nav.Link>
            <Nav.Link className="text-white" href="#shipping">Our Partners</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-4"
              aria-label="Search"
            />
            <Button variant="outline-warning bg-light">Login</Button>
            <Button className="ms-4" variant="warning">Register</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavigationBarComponent;
