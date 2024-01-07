import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import horror from "../FileJson/horror.json";
import history from "../FileJson/history.json";
import fantasy from "../FileJson/fantasy.json";
import { Component } from "react";

class MySingleBook extends Component {
  state = {
    SearchQuery: "",
    comm: [],
    selected: false,
    data: horror,
    fantasy,
    history,
  };
  fetchComment = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/653a9d72f6e3dd001495e5ee", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjBmYjNkYWRhMDAwMThhNjlmNmQiLCJpYXQiOjE3MDQ2NDk1NzgsImV4cCI6MTcwNTg1OTE3OH0.FfK0n4vZ_LVq_k4LPj2UrA-u6DA550_wscxv9qi4v00",
        },
      });
      if (resp.ok) {
        const comm = resp.json();
        console.log(comm);
      }
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = () => {
    this.fetchComment();
  };
  handleChange = (event) => {
    this.setState({ SearchQuery: event.target.value });
  };
  render() {
    return (
      <>
        <Form.Control
          type="text"
          placeholder="Inserisci il titolo del libro"
          value={this.state.SearchQuery}
          onChange={this.handleChange}
        />
        <Button
          className="me-2"
          variant="info"
          onClick={() => {
            this.setState({ data: horror });
          }}
        >
          Horror
        </Button>
        <Button
          className="me-2"
          variant="warning"
          onClick={() => {
            this.setState({ data: history });
          }}
        >
          History
        </Button>
        <Button
          className="me-2"
          variant="danger"
          onClick={() => {
            this.setState({ data: fantasy });
          }}
        >
          Fantasy
        </Button>
        {this.state.data
          .filter((book) => book.title.toLowerCase().includes(this.state.SearchQuery.toLowerCase()))
          .map((book, index) => {
            return (
              <>
                <Card
                  className="p-0 overflow-auto"
                  onClick={() => {
                    this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
                  }}
                  style={{ width: "12rem", border: this.state.selected ? "3px solid green" : "none" }}
                >
                  {" "}
                  {this.state.comm.map((co) => (
                    <Card.Title className="mt-auto" key={co._id}>
                      {co.comment}
                    </Card.Title>
                  ))}
                  <Card.Img
                    variant="top"
                    src={book.img}
                    className="object-fit-cover border rounded"
                    key={`book-id-${index}`}
                  />
                  <Card.Body className="d-flex flex-column justufy-content-between align-items-center">
                    <Card.Title className="mt-auto">{book.title}</Card.Title>

                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </>
    );
  }
}

export default MySingleBook;
