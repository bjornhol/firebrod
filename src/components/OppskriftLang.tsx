import { Card, Col, Container, Row } from "react-bootstrap";
import { OppskriftPictureProps, OppskriftProps, OppskriftStep } from "./OppskriftTypes";
import Stars from "./Stars";


const RenderOppskriftPicture = (picture: OppskriftPictureProps) => {
    return (
        <Card>
            <Card.Img variant='top' src={picture.path}></Card.Img>
            <Card.Body>
                <Card.Text>{picture.caption}</Card.Text>
            </Card.Body>
        </Card>
    );
}

const RenderOppskriftStep = (step: OppskriftStep) => {
    return (
        <Row>
            <Col>
                <h3>{step.heading}</h3>
                <p>{step.paragraph}</p>
                <Row>
                    {step.pictures ? step.pictures.map((picture: OppskriftPictureProps, index: number) => {
                        return <Col key={"picture"+index} md="3"><RenderOppskriftPicture {...picture} /></Col>
                    }) : null}
                </Row>
            </Col>
        </Row>
    );
}

const OppskriftLang = (oppskrift: OppskriftProps) => {
  return (
    <Container>
        <Row>
            <Col md="6">
                <h1>{oppskrift.title}</h1>
                <p>Lang versjon</p>
            </Col>
            <Col md="6">
                <div className="float-end">
                    <Stars {...oppskrift.scores} />
                </div>
            </Col>
        </Row>
        {oppskrift.steps.map((step: OppskriftStep, index: number) => {
            return <RenderOppskriftStep key={"step"+index} {...step} />
        })}
    </Container>
  );
}

export default OppskriftLang;
