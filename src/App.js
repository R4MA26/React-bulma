// import logo from './logo.svg';
import './App.css';

import React from "react";
import "bulma/css/bulma.min.css";
import { Button, Heading, Columns } from "react-bulma-components";
// import { Columns } from "react-bulma-components";




function App() {
  return (
    <div className="App">
      <Button
        renderAs="a"
        href="https://github.com/couds/react-bulma-components"
        color="danger"
        size="large"
        rounded
        outlined
      >
        My Bulma button
      </Button>
      <Heading size={1}>Large Heading</Heading>
      <Heading size={2}>Not So Large Heading</Heading>
      <Button size="large">Large Button</Button>
      <Button size="samall">Samall Button</Button>

      <Columns>
        <Columns.Column size="one-fifth">20%</Columns.Column>
        <Columns.Column>80%</Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size="one-quarter">25%</Columns.Column>
        <Columns.Column>75%</Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size="one-third">33.333333333%</Columns.Column>
        <Columns.Column>66.666666667%</Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size="half">50%</Columns.Column>
        <Columns.Column>Also 50%</Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size="two-thirds">66.666666667%</Columns.Column>
        <Columns.Column>33.333333333%</Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size="three-quarters">75%</Columns.Column>
        <Columns.Column>25%</Columns.Column>
      </Columns>
    </div>
  );
}

export default App;
