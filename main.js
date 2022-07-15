const calculator = document.querySelector("calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

keys.addEventListener("click", (e) => {
  if (e.currentTarget === e.target) return;

  const key = e.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  //Is this a number key?
  if (type === "number") {
    if (displayValue === "0") {
      display.textContent = keyValue;
    } else if (previousKeyType === "operator") {
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  //Is this an operator?
  if (type === "operator") {
    console.log(key);
    calculator.dataset.previousKeyType = "operator";
  }
});
