import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNav(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">{props.link1}</Nav.Link>
            <Nav.Link href="#">{props.link2}</Nav.Link>
            <Nav.Link href="#">{props.link3}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default MyNav;
