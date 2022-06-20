// cspell:ignore btns
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#handle_keyboard_events_in_a_game
// const hashMap = new Map();

const bill = 0;
const userTipChoice = 0;
const userTipCustomChoice = 0;
const userTotalPeopleInput = 0;

function getInputBillAmount(bill) {
  const userInputTotalBill = bill;
  return parseInt(userInputTotalBill, 10);
}
function getInputTipPercent(userTipChoice) {
  const userInputTipPercent = userTipChoice;
  return parseInt(userInputTipPercent, 10);
}
function getInputCustomTip(userTipCustomChoice) {
  const userInputCustomTip = userTipCustomChoice;
  return parseInt(userInputCustomTip, 10);
}
function getInputTotalPeople(userTotalPeopleInput) {
  const userInputTotalPeople = userTotalPeopleInput;
  return parseInt(userInputTotalPeople, 10);
}

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

/// //////////////////////////////////////////////////////////////////////////////
/// region:      --- Logic ---
/// //////////////////////////////////////////////////////////////////////////////
const calculateTipAmount = (bill, tip) => (bill * tip) / 100;

const getTipAmountChoices = (bill, calculatedTip, tip, tipCustom) => {
  if (tipCustom !== 0 && tipCustom !== "" && tipCustom !== null) {
    calculatedTip = calculateTipAmount(bill, tipCustom);
  } else {
    calculatedTip = calculateTipAmount(bill, tip);
  }
  return calculatedTip;
};

const calculateTotalPerPerson = (bill, calculatedTip, totalPeople) =>
  (bill + calculatedTip) / totalPeople;

async function runCalculateTip() {
  const resultBill = getInputBillAmount(bill);
  const resultTip = getInputTipPercent(userTipChoice);
  const resultTipCustom = getInputCustomTip(userTipCustomChoice);
  const resultTotalPeople = getInputTotalPeople(userTotalPeopleInput);

  let tipAmount = 0;

  tipAmount = getTipAmountChoices(
    resultBill,
    tipAmount,
    resultTip,
    resultTipCustom
  );

  const totalPerPerson = calculateTotalPerPerson(
    resultBill,
    tipAmount,
    resultTotalPeople
  );

  return { tipAmount, totalPerPerson };
}

/// //////////////////////////////////////////////////////////////////////////////
/// region:      --- Reset ---
/// //////////////////////////////////////////////////////////////////////////////

/// //////////////////////////////////////////////////////////////////////////////
/// region:      --- Main ---
/// //////////////////////////////////////////////////////////////////////////////

async function main() {
  const results = await runCalculateTip();
  const { tipAmount, totalPerPerson } = results;
  console.log(tipAmount, totalPerPerson);
}

main();
