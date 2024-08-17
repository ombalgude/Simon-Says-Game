let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  //console.log("game started")
  if (started == false) {
    started = true;
    levelup();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 1000);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  //random button
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx)
  // console.log(randColor)
  // console.log(randbtn)
  gameseq.push(randColor);

  btnFlash(randbtn);
}

function checkAns() {
  console.log("current level :", level);

  let idx = userseq.length - 1;
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b>. Press any key to start again.`;
    document.body.classList.add("body-flash-red");
    setTimeout(function () {
      document.body.classList.remove("body-flash-red");
      document.querySelector("body").style.backgroundColor = "white";
    }, 1000);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userseq.push(userColor);

  checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}

//let high =[level]

//highscore = [high.sort]

//h2.innerText = (`highscore is ${highscore[length-1]}`)
