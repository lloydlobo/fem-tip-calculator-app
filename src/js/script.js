// cspell:ignore btns
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#handle_keyboard_events_in_a_game
// const hashMap = new Map();

const bill = 0;
const userTipChoice = 0;
const userTipCustomChoice = 0;
const userTotalPeopleInput = 0;

async function getInputBillAmount(bill) {
  const userInputTotalBill = await bill;
  return parseInt(userInputTotalBill, 10);
}
async function getInputTipPercent(userTipChoice) {
  const userInputTipPercent = await userTipChoice;
  return parseInt(userInputTipPercent, 10);
}
async function getInputCustomTip(userTipCustomChoice) {
  const userInputCustomTip = await userTipCustomChoice;
  return parseInt(userInputCustomTip, 10);
}
async function getInputTotalPeople(userTotalPeopleInput) {
  const userInputTotalPeople = await userTotalPeopleInput;
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
const calculateTipAmount = async (bill, tip) => (bill * tip) / 100;

const getTipAmountChoices = async (bill, calculatedTip, tip, tipCustom) => {
  if (tipCustom !== 0 && tipCustom !== "" && tipCustom !== null) {
    calculatedTip = await calculateTipAmount(bill, tipCustom);
  } else {
    calculatedTip = await calculateTipAmount(bill, tip);
  }
  return calculatedTip;
};

const calculateTotalPerPerson = async (bill, calculatedTip, totalPeople) =>
  (bill + calculatedTip) / totalPeople;

async function runCalculateTip() {
  const resultBill = await getInputBillAmount(bill);
  const resultTip = await getInputTipPercent(userTipChoice);
  const resultTipCustom = await getInputCustomTip(userTipCustomChoice);
  const resultTotalPeople = await getInputTotalPeople(userTotalPeopleInput);

  let tipAmount = 0;

  tipAmount = await getTipAmountChoices(
    resultBill,
    tipAmount,
    resultTip,
    resultTipCustom
  );

  const totalPerPerson = await calculateTotalPerPerson(
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
  console.log(results);
  const { tipAmount, totalPerPerson } = results;
  console.log(tipAmount, totalPerPerson);
}

async function runMain() {
  inputStepTotalPeople.addEventListener("keydown", async () => {
    await main();
  });
}

runMain();
