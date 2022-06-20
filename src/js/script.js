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

const bill = 0;
const userTipChoice = 0;
const userTipCustomChoice = 0;
const userTotalPeopleInput = 0;

inputBill.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      console.log(inputBill.value);
      break;
  }
});

btnsTip.forEach((btnTip) => {
  btnTip.addEventListener("click", () => {
    console.log(btnTip.value);
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
  });
};

/// //////////////////////////////////////////////////////////
function main() {
  resetResults();
}
main();
