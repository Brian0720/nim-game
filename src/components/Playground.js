import React from "react";
import Container from "react-bootstrap/Container";
import { Stone } from "./Stone";

class Playground extends React.Component {
  select = buttonId => {
    console.log(`id: ${buttonId}`);
  };

  render() {
    return (
      <Container>
        <h1>Generate Stones</h1>
        <Stone
          id="1"
          label="test"
          variant="primary"
          disabled
          onClick={this.select}
        />
      </Container>
    );
  }
}

export default Playground;
