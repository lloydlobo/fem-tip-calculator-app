// cspell:ignore btns

const inputBill = document.querySelector("#inputBill");
const btnsTip = document.querySelectorAll("#btnsTip");
const inputCustomTip = document.querySelector("#inputCustomTip");
const inputStepTotalPeople = document.querySelector("#inputStepTotalPeople");

const tipPerPerson = document.querySelector("#tipPerPerson");
const totalPerPerson = document.querySelector("#totalPerPerson");
const btnReset = document.querySelector("#btnReset");

const btnCalculateSplitter = document.querySelector("#btnCalculateSplitter");

let bill = 0;
let tip = 0;
let people = 1;

/// //////////////////////////////////////////////////////////

async function eventUserBill() {
  inputBill.addEventListener("keydown", async (event) => {
    switch (event.code) {
      case "Enter":
      case "Tab":
        console.log(inputBill.value);
        bill = await inputBill.value;
        console.log(
          "file: script.js | line 22 | inputBill.addEventListener | bill",
          bill
        );
        return bill;
    }
    return bill;
  });
  return bill;
}

async function eventUserCustomTip() {
  inputCustomTip.addEventListener("keydown", async (event) => {
    switch (event.code) {
      case "Enter":
      case "Tab":
        console.log(inputCustomTip.value);
        tip = (await inputCustomTip.value) * 0.01;
        return tip;
    }
    return tip;
  });
  return tip;
}

async function eventUserTip() {
  btnsTip.forEach((btnTip) => {
    btnTip.addEventListener("click", async () => {
      console.log(btnTip.value);
      tip = await btnTip.value;
      console.log(
        "file: script.js | line 30 | btnTip.addEventListener | tip",
        tip
      );
      return tip;
    });
    return tip;
  });
  return tip;
}

async function eventUserTotalPeople() {
  inputStepTotalPeople.addEventListener("keydown", async (event) => {
    switch (event.code) {
      case "Enter":
      case "Tab":
        console.log(inputStepTotalPeople.value);
        people = await inputStepTotalPeople.value;
        return people;
    }
    return people;
  });
  return people;
}

btnReset.addEventListener("click", () => {
  tipPerPerson.textContent = "0";
  totalPerPerson.textContent = "0";
  inputBill.value = "";
  inputCustomTip.value = "";
  inputStepTotalPeople.value = "";
  bill = 0;
  tip = 0;
  people = 1;
});

async function handleUserInputs() {
  const resBill = await eventUserBill();
  const resTip = eventUserCustomTip();
  // const resTipCustom =  eventUserTip();
  const resPeople = eventUserTotalPeople();
  console.log(resBill, resTip, resPeople);
  return new Promise((resolve, reject) => {
    if (resBill && resTip && resPeople) {
      resolve(splitTipLogic(resBill, resTip, resPeople));
    } else {
      reject("error");
    }
  });
  return { resBill, resTip, resPeople };
}

btnCalculateSplitter.addEventListener("click", () => {
  handleUserInputs().then((res) => {
    bill = res.resBill;
    tip = res.resTip;
    people = res.resPeople;

    splitTipLogic(bill, tip, people);
  });
});

function splitTipLogic(bill, tip, people) {
  let tipPerPerson = (bill * tip) / people;
  let totalPerPerson = bill + tipPerPerson;
  tipPerPerson = tipPerPerson.toString();
  totalPerPerson = totalPerPerson.toString();

  tipPerPerson = tipPerPerson.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  totalPerPerson = totalPerPerson.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  console.log(tipPerPerson, totalPerPerson);
}

function init() {
  eventUserBill();
  eventUserCustomTip();
  eventUserTip();
  eventUserTotalPeople();
}

function main() {
  init();
}

main();
