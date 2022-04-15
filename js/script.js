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

const options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", () => {
    if (+option.textContent === answer) {
      console.log("GOOD");
      generateEquation();
    } else {
      console.log("BAD");
    }
  });
});

let answer = 0;
generateEquation();
function generateEquation() {
  let num1 = Math.floor(Math.random() * 16);
  let num2 = Math.floor(Math.random() * 16);
  answer = num1 + num2;

  let wrongAnswer1 = Math.floor(Math.random() * 16);
  let wrongAnswer2 = Math.floor(Math.random() * 16);

  if (wrongAnswer1 === answer ) {
    while (wrongAnswer1 === answer) {
      wrongAnswer1 = Math.floor(Math.random() * 16);
    }
  }

  if(wrongAnswer2 === answer){
    while (wrongAnswer2 === answer) {
      wrongAnswer2 = Math.floor(Math.random() * 16);
    }
  }

  if (wrongAnswer1 === wrongAnswer2) {
    while (wrongAnswer1 === wrongAnswer2 ) {
      wrongAnswer1 = Math.floor(Math.random() * 16);
    }
  }

  const allAnswers = [answer, wrongAnswer1, wrongAnswer2];

  for (let i = allAnswers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
  }

  document.querySelector("#num1").textContent = num1;
  document.querySelector("#num2").textContent = num2;
  console.log(allAnswers);
  option1.textContent = allAnswers[0];
  option2.textContent = allAnswers[1];
  option3.textContent = allAnswers[2];
}
