import React, { FunctionComponent, ReactElement } from "react";
import { Button, Container } from "react-bulma-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./Home.css";
const Home: FunctionComponent = (): ReactElement => (
  <Container>
    <Logo className="home-logo" />
    <p>
      Edit
      {" "}
      <code>src/Home.tsx</code>
      {" "}
      and save to reload.
    </p>
    <a
      className="link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    <br />
    <Button color="primary">My Bulma button</Button>
  </Container>
);
export default Home;
