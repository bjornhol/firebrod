import { Card, Col, Row } from "react-bootstrap";
import { OppskriftPicture, OppskriftProps, OppskriftStep } from "./OppskriftTypes";

function RenderOppskriftPicture({picture}: {picture: OppskriftPicture}){
    return (
        <Card>
            <Card.Img variant='top' src={picture.path}></Card.Img>
            <Card.Body>
                <Card.Text>{picture.caption}</Card.Text>
            </Card.Body>
        </Card>
    );
}

function RenderOppskriftStep({step}: {step: OppskriftStep}){
    return (
        <>
            <h3>{step.heading}</h3>
            <p>{step.paragraph}</p>
            <Row>
                {step.pictures ? step.pictures.map(picture => {
                    return <Col md="3"><RenderOppskriftPicture picture={picture} /></Col>
                }) : null}
            </Row>
        </>
    );
}

export default function OppskriftLang({ oppskrift }: { oppskrift: OppskriftProps }) {
  return (
    <>
        <h1>{oppskrift.title}</h1>
        <p>Lang versjon</p>
        {oppskrift.steps.map(step => {
            return <RenderOppskriftStep step={step} />
        })}  
    </>
  );
}
