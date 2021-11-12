import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { grytebrod, havreflette } from "./oppskrifter";
import OppskriftLang from "./components/OppskriftLang";
import { routerPaths } from "./router.path";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Tips from "./components/Tips";

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"><Image className="logo-image" src="./logo.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link key="abc123" href="/">Hjem</Nav.Link>
              <Nav.Link key="def456" href={routerPaths.grytebrod}>Grytebrød</Nav.Link>
              <Nav.Link key="ghi789" href={routerPaths.havreflette}>Havreflette</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link key="jfh1011" href={routerPaths.tips}>Har du tips?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={routerPaths.grytebrod}>
            <OppskriftLang {...grytebrod} />
          </Route>
          <Route path={routerPaths.havreflette}>
            <OppskriftLang {...havreflette} />
          </Route>
          <Route path={routerPaths.tips}>
            <Tips />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
