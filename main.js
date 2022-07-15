"use strict";

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display");

keys.addEventListner("click", (e) => {
  console.log(e.target)
});

