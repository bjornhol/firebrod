import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Stars } from "./components/Stars";

export function Home() {
  return (
    <Container>
      <h2>Columns with icons</h2>
      <Row>
        <Col className="feature">
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                <FontAwesomeIcon icon={faCoffee} /> Some quick example text to
                build on the card title and make up the bulk of the card's
                content.
                <Stars score={1} label="Lettvint" />
                <Stars score={2} label="Lite tidsbruk" />
                <Stars score={3} label="Lite oppvask" />
                <Stars score={4} label="Holdbarhet" />
                <Stars score={5} label="Barnevennlig" />
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="feature">
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                <FontAwesomeIcon icon={faCoffee} /> Some quick example text to
                build on the card title and make up the bulk of the card's
                content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="feature">
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                <FontAwesomeIcon icon={faCoffee} /> Some quick example text to
                build on the card title and make up the bulk of the card's
                content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="feature">
          <Card>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faCoffee} /> Card Title
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
