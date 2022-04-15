"use strict";

/*-------------------------------------------------------------*/
/*-----Burger--------------------------------------------------*/
/*-------------------------------------------------------------*/
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if (iconMenu) {
  iconMenu.addEventListener("click", (event) => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const menuLinks = document.querySelectorAll(".menu__link");
menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    }
  });
});

/*-------------------------------------------------------------*/
/*-----Equation------------------------------------------------*/
/*-------------------------------------------------------------*/

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");

const rightAnswer = document.querySelector("#right");
const wrongAnswer = document.querySelector("#wrong");

let rightAnswerCounter = 0;
let wrongAnswerCounter = 0;

const options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", () => {
    if (+option.textContent === answer) {
      rightAnswerCounter++;
      rightAnswer.textContent = rightAnswerCounter;
      generateEquation();
    } else {
      wrongAnswerCounter++;
      wrongAnswer.textContent = wrongAnswerCounter;
    }
  });
});

let answer = 0;
generateEquation();

const operations = document.querySelectorAll(".menu__link");

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    if (!operation.classList.contains("_active")) {
      operations.forEach((operation) => {
        operation.classList.remove("_active");
      });
      operation.classList.add("_active");
      generateEquation();
    }
  });
});

function generateEquation() {
  let num1 = Math.floor(Math.random() * 21);
  let num2 = Math.floor(Math.random() * 21);

  const operation = document.querySelector(".menu__link._active");

  switch (operation.dataset.operator) {
    case "addition":
      answer = num1 + num2;
      document.querySelector("#operation").textContent = "+";
      break;
    case "subtraction":
      if (num1 < num2) {
        [num1, num2] = [num2, num1];
      }
      answer = num1 - num2;
      document.querySelector("#operation").textContent = "-";
      break;
    case "multiplication":
      answer = num1 * num2;
      document.querySelector("#operation").textContent = "*";
      break;
    case "division":
      while (num1 % num2 !== 0) {
        num1 = Math.floor(Math.random() * 21);
        num2 = Math.floor(Math.random() * 21);
      }
      answer = num1 / num2;
      document.querySelector("#operation").textContent = ":";
      break;
  }

  let wrongAnswer1 = Math.floor(Math.random() * 21);
  let wrongAnswer2 = Math.floor(Math.random() * 21);
  if (operation.dataset.operator === "multiplication") {
    wrongAnswer1 *= Math.floor(Math.random() * 21);
    wrongAnswer2 *= Math.floor(Math.random() * 21);
  }

  if (wrongAnswer1 === answer || wrongAnswer1 === wrongAnswer2) {
    while (wrongAnswer1 === answer || wrongAnswer1 === wrongAnswer2) {
      wrongAnswer1 = Math.floor(Math.random() * 21);
    }
  }

  if (wrongAnswer2 === answer || wrongAnswer2 === wrongAnswer1) {
    while (wrongAnswer2 === answer || wrongAnswer2 === wrongAnswer1) {
      wrongAnswer2 = Math.floor(Math.random() * 11);
    }
  }

  const allAnswers = [answer, wrongAnswer1, wrongAnswer2];

  for (let i = allAnswers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
  }

  document.querySelector("#num1").textContent = num1;
  document.querySelector("#num2").textContent = num2;

  option1.textContent = allAnswers[0];
  option2.textContent = allAnswers[1];
  option3.textContent = allAnswers[2];
}
