import { useState } from "react";
import { Card } from "react-bootstrap";
import { OppskriftIngredienser } from "./OppskriftIngredienser";
import { OppskriftProps } from "./OppskriftTypes";
import { Stars } from "./Stars";

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
        <Card.Title>{oppskrift.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {oppskrift.subTitle}
        </Card.Subtitle>
        <Card.Text>{oppskrift.summary}</Card.Text>
        <Stars score={oppskrift.scores.lettvint} label="Lettvint" />
          <Stars score={oppskrift.scores.tidsbruk} label="Lite tidsbruk" />
          <Stars score={oppskrift.scores.oppvask} label="Lite oppvask" />
          <Stars score={oppskrift.scores.holdbarhet} label="Holdbarhet" />
          <Stars score={oppskrift.scores.barnevennlig} label="Barnevennlig" />

          {visIngredienser ? (
            <OppskriftIngredienser oppskrift={oppskrift} />
          ) : null}
        <Card.Link href="#" onClick={visIngredienserClick}>
          {visIngredienser ? "Skjul" : "Vis"} ingredienser
        </Card.Link>
        <Card.Link href={langPath}>Forklaring med bilder</Card.Link>
      </Card.Body>
    </Card>
  );
}
