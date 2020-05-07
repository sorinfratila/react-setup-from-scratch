import classes from "./PizzaImage.css";
import PizzaImg from "../../assets/pizza.jpg";

import React from "react";
import PropTypes from "prop-types";

function PizzaImage() {
  return (
    <div className={classes.PizzaImgage}>
      <img src={PizzaImg} alt="pizza" />
    </div>
  );
}

PizzaImage.propTypes = {};

export default PizzaImage;
