import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import MySingleBook from "./MySingleBook";
import { Component } from "react";

class AllTheBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Container>
        <Row className="gap-4 h-100">
          <MySingleBook />
        </Row>
      </Container>
    );
  }
}
export default AllTheBook;
