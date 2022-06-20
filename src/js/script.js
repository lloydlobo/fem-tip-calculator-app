// cspell:ignore btns
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#handle_keyboard_events_in_a_game
// const hashMap = new Map();

const inputBill = document.querySelector("#inputBill");
const btnsTip = document.querySelectorAll("#btnsTip");
const tipPerPerson = document.querySelector("#tipPerPerson");
const inputCustomTip = document.querySelector("#inputCustomTip");
const inputStepTotalPeople = document.querySelector("#inputStepTotalPeople");
const totalPerPerson = document.querySelector("#totalPerPerson");
const btnReset = document.querySelector("#btnReset");

let bill = 0;
let tip = 0;

inputBill.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      console.log(inputBill.value);
      bill = inputBill.value;
      console.log(
        "file: script.js | line 22 | inputBill.addEventListener | bill",
        bill
      );
      break;
  }
});

btnsTip.forEach((btnTip) => {
  btnTip.addEventListener("click", () => {
    console.log(btnTip.value);
    tip = btnTip.value;
    console.log(
      "file: script.js | line 30 | btnTip.addEventListener | tip",
      tip
    );
  });
});

inputCustomTip.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      console.log(inputCustomTip.value);
      break;
  } // end switch
});

inputStepTotalPeople.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      console.log(inputStepTotalPeople.value);
      break;
  } // end switch
});

/// //////////////////////////////////////////////////////////
const updateTipPerPerson = (tip) => (tipPerPerson.textContent = `${tip}`);

const updateTotalPerPerson = (total) =>
  (totalPerPerson.textContent = `${total}`);

const resetResults = () => {
  btnReset.addEventListener("click", () => {
    updateTipPerPerson(0);
    updateTotalPerPerson(0);
    let billTip = bill * tip;
    console.log({ billTip });
  });
};

/// //////////////////////////////////////////////////////////
function main() {
  resetResults();
}
main();
