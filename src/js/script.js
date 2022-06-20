// cspell:ignore btns
const inputBill = document.querySelector("#inputBill");
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#handle_keyboard_events_in_a_game
inputBill.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      console.log(inputBill.value);
  }
});

const btnsTip = document.querySelectorAll("#btnsTip");

btnsTip.forEach((btnTip) => {
  btnTip.addEventListener("click", () => {
    console.log(btnTip.value);
  });
  // btnTip.addEventListener("keydown", (event) => {
  //   if (event.code === "Enter") {
  //     // console.log(btnTip.value);
  //   }
  // });
});

const inputCustomTip = document.querySelector("#inputCustomTip");

inputCustomTip.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      console.log(inputCustomTip.value);
      break;
    case null:
      throw new Error("file: script.js | line 27 | event.code is null");
    default:
      // console.log(event.code);
      break;
  } // end switch
});

const inputStepTotalPeople = document.querySelector("#inputStepTotalPeople");
inputStepTotalPeople.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Enter":
    case "Tab":
      console.log(inputStepTotalPeople.value);
      break;
    case null:
      throw new Error("file: script.js | line 27 | event.code is null");
    default:
      break;
  } // end switch
});
