"use strict";

// Makes Variable

const billInput = document.querySelector(".input-bill");

const tipInput = document.querySelector(".input-tip");

const peopleInput = document.querySelector(".input-people");

const total = document.querySelector(".total-cost");

const tip = document.querySelector(".tip-cost");

const tipBtn = document.querySelectorAll(".btn-tip");

const resetBtn = document.querySelector(".btn-reset");

let bill,
 tipValue = 0;

// Makes EventListeners

billInput.addEventListener("input", enterAmount);

tipInput.addEventListener("input", enterTip);

peopleInput.addEventListener("input", enterPeople);

resetBtn.addEventListener("click", reset);

// Makes forEach loops

tipBtn.forEach((i) => {
 i.addEventListener("click", btnClick);
});

// Makes Functions

function btnClick() {
 tipBtn.forEach((i) => {
  i !== this ? i.classList.remove("active") : this.classList.add("active");
 });
 tipValue = 0;
 tipValue = (this.value / 100) * bill;
 tip.textContent = "$" + tipValue.toFixed(2);
 total.textContent = "$" + (Number(bill) + Number(tipValue)).toFixed(2);
}

function removeActive() {
 tipBtn.forEach((i) => {
  i.classList.remove("active");
 });
}

function maxValue() {
 if (total.textContent.length > 10) {
  alert("Max bill value is $9999999, and the value of tips is 9999%");
  reset();
 }
}

function enterAmount() {
 total.textContent = "$" + Number(this.value).toFixed(2);
 bill = this.value;
 maxValue();
}

function enterTip() {
 tipValue = ((this.value / 100) * bill).toFixed(2);
 tip.textContent = "$" + tipValue;
 total.textContent = "$" + (Number(bill) + Number(tipValue)).toFixed(2);
 removeActive();
 maxValue();
}

function enterPeople() {
 tip.textContent = "$" + (tipValue / this.value).toFixed(2);
 total.textContent =
  "$" + (tipValue / this.value + bill / this.value).toFixed(2);
}

function reset() {
 billInput.value = "";
 tipInput.value = "";
 peopleInput.value = "";
 bill = 0;
 tipValue = 0;
 total.textContent = "$0.00";
 tip.textContent = "$0.00";
 removeActive();
}
