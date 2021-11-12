import { useState } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { OppskriftIngredienser } from "./OppskriftIngredienser";
import { OppskriftProps } from "./OppskriftTypes";
import Stars from "./Stars";

export default function OppskriftCard({
  oppskrift,
  langPath,
}: {
  oppskrift: OppskriftProps;
  langPath: string;
}) {
  const [visIngredienser, setVisIngredienser] = useState(false);

  const visIngredienserClick = () => {
    setVisIngredienser(!visIngredienser);
  };

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{oppskrift.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {oppskrift.subTitle}
            </Card.Subtitle>
            <Image className="card-logo" src="./brod/grytebrod/IMG_0213.jpg" rounded fluid />
          </Col>
          <Col>
              <Stars {...oppskrift.scores} />            
          </Col>
        </Row>
        <br/>
        <Card.Text>{oppskrift.summary}</Card.Text>
        <br />
        {visIngredienser ? (
          <OppskriftIngredienser
            oppskrift={oppskrift}
            toggleVisIngredienser={visIngredienserClick}
          />
        ) : null}
        <Card.Link href="#" onClick={visIngredienserClick}>
          {visIngredienser ? "Skjul" : "Vis"} ingredienser
        </Card.Link>
        <Card.Link href={langPath}>Forklaring med bilder</Card.Link>
      </Card.Body>
    </Card>
  );
}
