// cspell:ignore btns

const inputBill = document.querySelector("#inputBill");
const btnsTip = document.querySelectorAll("#btnsTip");
const inputCustomTip = document.querySelector("#inputCustomTip");
const inputStepTotalPeople = document.querySelector("#inputStepTotalPeople");

const tipPerPerson = document.querySelector("#tipPerPerson");
const totalPerPerson = document.querySelector("#totalPerPerson");
const btnReset = document.querySelector("#btnReset");

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
        break;
    }
  });
}

async function eventUserCustomTip() {
  inputCustomTip.addEventListener("keydown", async (event) => {
    switch (event.code) {
      case "Enter":
      case "Tab":
        console.log(inputCustomTip.value);
        tip = (await inputCustomTip.value) * 0.01;
        break;
    }
  });
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
    });
  });
}

async function eventUserTotalPeople() {
  inputStepTotalPeople.addEventListener("keydown", async (event) => {
    switch (event.code) {
      case "Enter":
      case "Tab":
        console.log(inputStepTotalPeople.value);
        people = await inputStepTotalPeople.value;
        break;
    }
  });
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
