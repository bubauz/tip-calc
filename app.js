"use strict";

const billInput = document.querySelector(".input-bill");

const tipInput = document.querySelector(".input-tip");

const peopleInput = document.querySelector(".input-people");

const total = document.querySelector(".total-cost");

const tip = document.querySelector(".tip-cost");

const tipBtn = document.querySelectorAll(".btn-tip");

const resetBtn = document.querySelector(".btn-reset");

let bill,
 tipValue = 0;

billInput.addEventListener("input", function () {
 total.textContent = "$" + Number(this.value).toFixed(2);
 bill = this.value;
});

tipInput.addEventListener("input", function () {
 tipValue = ((this.value / 100) * bill).toFixed(2);
 tip.textContent = "$" + tipValue;
 total.textContent = "$" + (Number(bill) + Number(tipValue)).toFixed(2);
 removeActive();
});

peopleInput.addEventListener("input", function () {
 tip.textContent = "$" + (tipValue / this.value).toFixed(2);
 total.textContent =
  "$" + (tipValue / this.value + bill / this.value).toFixed(2);
});

resetBtn.addEventListener("click", function () {
 billInput.value = "";
 tipInput.value = "";
 peopleInput.value = "";
 bill = 0;
 tipValue = 0;
 total.textContent = "$0.00";
 tip.textContent = "$0.00";
 removeActive();
});

tipBtn.forEach((i) => {
 i.addEventListener("click", btnClick);
});

function btnClick() {
 tipBtn.forEach((i) => {
  if (i !== this) i.classList.remove("active");
 });
 this.classList.toggle("active");
 tipValue = 0;
 tipValue = (this.value / 100) * bill;
 tip.textContent = "$" + tipValue.toFixed(2);
 total.textContent = "$" + (Number(bill) + Number(tipValue)).toFixed(2);
}

const removeActive = function () {
 tipBtn.forEach((i) => {
  i.classList.remove("active");
 });
};
