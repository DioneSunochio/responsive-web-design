const value = [...document.querySelectorAll(".value")];
const subNode = [...document.querySelectorAll(".sub")];
const addNode = [...document.querySelectorAll(".add")];
const valueTotalStr = document.getElementById("price-total");
let valueTotalNum = +document.getElementById("price-total").innerText;

function changeTotalPrice(op, price) {
  if (op === "+") {
    valueTotalNum += price;
    valueTotalStr.innerText = valueTotalNum.toFixed(2);
  } else {
    valueTotalNum -= price;
    valueTotalStr.innerText = valueTotalNum.toFixed(2);
  }
}

function addValue(e) {
  let price = +e.target.parentElement.previousElementSibling.innerText;
  let value = +e.target.previousSibling.innerText;

  if (value < 99) {
    value++;
    if (value < 10) {
      e.target.previousSibling.innerText = `0${value}`;
      changeTotalPrice("+", price);
    } else {
      e.target.previousSibling.innerText = value;
      changeTotalPrice("+", price);
    }
  }
}

function subValue(e) {
  let price = +e.target.parentElement.previousElementSibling.innerText;
  let value = +e.target.nextSibling.innerText;
  if (value > 0) {
    value--;
    if (value < 10) {
      e.target.nextSibling.innerText = `0${value}`;
      changeTotalPrice("-", price);
    } else {
      e.target.nextSibling.innerText = value;
      changeTotalPrice("-", price);
    }
  }
}

addNode.forEach((spanAdd) => {
  spanAdd.addEventListener("click", addValue);
});

subNode.forEach((spanSub) => {
  spanSub.addEventListener("click", subValue);
});
