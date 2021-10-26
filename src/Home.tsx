import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { grytebrod, havreflette } from './oppskrifter';
import OppskriftCard from "./components/OppskriftCard";
import { routerPaths } from "./router.path";

export function Home() {
  return (
    <Container>
      <Row>
        <Col className="feature">
          <OppskriftCard oppskrift={grytebrod} langPath={routerPaths.grytebrod} />
        </Col>
        <Col className="feature">
          <OppskriftCard oppskrift={havreflette} langPath={routerPaths.havreflette} />
        </Col>
      </Row>
      <Row>
        <Col className="feature">
          ...
        </Col>
        <Col className="feature">
          ...
        </Col>
      </Row>
    </Container>
  );
}
