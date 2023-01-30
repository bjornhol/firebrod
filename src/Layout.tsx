import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { routerPaths } from "./router.path";

import "bootstrap/dist/css/bootstrap.min.css";

const Layout: FC = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <Image className="logo-image" src="./logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link">
              Hjem
            </Link>
            <Link to={routerPaths.grytebrod} className="nav-link">
              Grytebrød
            </Link>
            <Link to={routerPaths.havreflette} className="nav-link">
              Havreflette
            </Link>
            <Link to={routerPaths.rundstykker} className="nav-link">
              Rundstykker
            </Link>
          </Nav>
          <Nav>
            <Link to={routerPaths.tips} className="nav-link">
              Har du tips?
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="wrapper">
      <Outlet />
    </div>
  </>
);

export { Layout };
