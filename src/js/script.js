// cspell:ignore btns
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#handle_keyboard_events_in_a_game
const hashMap = new Map();

function getInputBillAmount(bill) {
  const userInputTotalBill = bill;
}
function getInputTipPercent(userTipChoice) {
  const userInputTipPercent = userTipChoice;
}
function getInputCustomTip(userTipCustomChoice) {
  const userInputCustomTip = userTipCustomChoice;
}
function getInputTotalPeople(userTotalPeopleInput) {
  const userInputTotalPeople = userTotalPeopleInput;
}
// calculateTip();
// reset();

const inputBill = document.querySelector("#inputBill");
inputBill.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      getInputBillAmount(inputBill.value);
      break;
  }
});

const btnsTip = document.querySelectorAll("#btnsTip");

btnsTip.forEach((btnTip) => {
  btnTip.addEventListener("click", () => {
    getInputTipPercent(btnTip.value);
    // console.log(btnTip.value);
  });
});

const inputCustomTip = document.querySelector("#inputCustomTip");

inputCustomTip.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      getInputCustomTip(inputCustomTip.value);
      break;
  } // end switch
});

const inputStepTotalPeople = document.querySelector("#inputStepTotalPeople");
inputStepTotalPeople.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      getInputTotalPeople(inputStepTotalPeople.value);
      break;
  } // end switch
});

function runCalculateTip() {
  getInputBillAmount();
  getInputTipPercent();
  // getInputCustomTip();
  // getInputTotalPeople();
  // calculateTip();
  // reset();
}

function main() {
  runCalculateTip();
}

main();
