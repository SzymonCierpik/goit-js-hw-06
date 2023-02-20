const buttonMinus = document.querySelector(`button[data-action="decrement"]`);
const buttonPlus = document.querySelector(`button[data-action="increment"]`);
let counterValue = Number(document.querySelector("#value").textContent);

const plusClick = () => {
  counterValue = counterValue + 1;
  document.querySelector("#value").textContent = counterValue;
};

const minusClick = () => {
  counterValue = counterValue - 1;
  document.querySelector("#value").textContent = counterValue;
};

buttonMinus.addEventListener("click", minusClick);
buttonPlus.addEventListener("click", plusClick);
