import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Playground from "./components/Playground";

export default function App() {
  return (
    <Container className="App">
      <Jumbotron fluid={false}>
        <h1>Nim Game</h1>
        <p>
          You are playing the following Nim Game with your friend: There is a
          heap of stones on the table, each time one of you take turns to remove
          1 to 3 stones. The one who removes the last stone will be the winner.
          You will take the first turn to remove the stones.
        </p>
      </Jumbotron>

      <Playground />
    </Container>
  );
}
