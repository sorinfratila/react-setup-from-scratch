import React, { Component } from "react";
import PropTypes from "prop-types";
import PizzaImage from "../components/PizzaImage/PizzaImage";

export default class Pizza extends Component {
  render() {
    return (
      <div>
        <h1>The Pizza</h1>
        <PizzaImage></PizzaImage>
      </div>
    );
  }
}
