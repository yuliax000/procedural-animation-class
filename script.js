/* find the thing to animate */
let circle = document.getElementById("circleOne");
/* find the buttons and add eventListener */
let aBOne = document.getElementById("animButtonOne");
aBOne.addEventListener("click", animateOne);
let aBTwo = document.getElementById("animButtonTwo");
aBTwo.addEventListener("click", animateTwo);
let aBThree = document.getElementById("animButtonThree");
aBThree.addEventListener("click", animateThree);

function animateOne() {
  //
}

/* https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API */
function animateTwo() {
  //create animation from scratch
  let animTiming = {
    duration: 3000,
    easing: "ease-in",
    iterations: Infinity,
  };
  // create  the keyframes
  let animFrames = [
    { transform: "translateX(10vh)", scale: 3 },
    { transform: "translateX(-10vh)", scale: 2 },
    { transform: "translateX(3vh)", scale: 1 },
    { transform: "translateX(-6vh)", scale: 3 },
  ];
  circle.animate(animFrames, animTiming);
}

function animateThree() {
  //generate random modifier
  let randomMod = Math.random();
  //create animation from scratch
  let animTiming = {
    duration: 3000 * randomMod,
    easing: "ease-in",
    iterations: Infinity,
  };
  // create  the keyframes
  let animFrames = [
    { transform: `translateX(${10 * randomMod}vh)`, scale: 3 },
    { transform: "translateX(-10vh)", scale: 2 },
    { transform: "translateX(3vh)", scale: 1 },
    { transform: "translateX(-6vh)", scale: 3 },
  ];
  circle.animate(animFrames, animTiming);
}

function animateFour() {
  //
}
