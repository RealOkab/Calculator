let screen = document.querySelector("#screen");
let allButtons = document.querySelectorAll([".firstB span"]);
let realButtons = document.querySelectorAll([".firstB span button"]);

let numbers = document.querySelectorAll(".num");
let equal = document.querySelector("#equal");
let operator = document.querySelectorAll([".operator"]);
let secondInput = document.querySelector(".Camou");
let Ans = document.querySelector(".Ans");

let onOf = document.querySelector(".On");
let switcher = document.querySelector(".off");
let last = document.querySelector(".try");

let firstValue;
let toDo;
for (let button of allButtons) {
  button.addEventListener("click", function () {
    if (button.firstChild.classList[0] === "num") {
      let man = this.textContent;
      let big = screen.append(man);
      //console.log(button.firstChild.textContent);
      screen.value = screen.textContent;
    }

    if (button.firstChild.classList[0] === "operator" && screen.value !== "") {
      firstValue = Number(screen.value);
      console.log(firstValue);
      screen.value = "";
      screen.textContent = "";
      toDo = button.firstChild.textContent;

      return firstValue, toDo;
    }
  });
}

document.addEventListener("click", function (e) {});

equal.addEventListener("click", function (e) {
  if (toDo === "*") {
    let results = Number(firstValue) * Number(screen.value);
    console.log(results);
    screen.value = results;
    screen.textContent = results;
    secondInput.value = screen.value;
  }

  if (toDo === "+") {
    let results = Number(firstValue) + Number(screen.value);
    console.log(results);
    screen.value = results;
    screen.textContent = results;
    secondInput.value = screen.value;
  }

  if (toDo === "/") {
    let results = Number(firstValue) / Number(screen.value);
    console.log(results);
    screen.value = results;
    screen.textContent = results;
    secondInput.value = screen.value;
  }
  if (toDo === "-") {
    let results = Number(firstValue) - Number(screen.value);
    console.log(results);
    screen.value = results;
    screen.textContent = results;
    secondInput.value = screen.value;
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList[0] === "AC") {
    screen.value = "";
    screen.textContent = "";
  }
  if (e.target.classList[0] === "x10") {
    alert(e.target.classList[0]);
    screen.value = Number(screen.value) * 10;
    screen.textContent = Number(screen.value) * 10;

    secondInput.value = Number(secondInput.value) * 10;
    secondInput.textContent = Number(secondInput.value) * 10;
  }

  if (e.target.classList[0] === "DEL") {
    screen.removeChild(screen.lastChild);
    screen.value = screen.textContent;
  }
});

Ans.addEventListener("click", function () {
  screen.append(secondInput.value);
  screen.value = screen.textContent;
});

switcher.addEventListener("click", function () {
  switcher.classList.toggle("status");

  for (let button of realButtons) {
    if (switcher.classList.toggle("status") === false) {
      switcher.textContent = "Off";
    } else {
      switcher.textContent = "On";
    }
  }
  for (let button of realButtons) {
    if (switcher.textContent === "Off") {
      button.disabled = true;
      screen.disabled = true;
      screen.textContent = "";

      screen.value = screen.textContent;
    }

    if (switcher.textContent === "On") {
      button.disabled = false;
      screen.disabled = false;
      screen.textContent = "";
      screen.value = screen.textContent;
    }
  }
});
