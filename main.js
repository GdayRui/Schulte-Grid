// get a random number
const getRandomNum = (gridNum) => {
  const indexOfNumArr = Math.floor(Math.random() * gridNum);
  return indexOfNumArr + 1;
};

// put the different random numbers into each grid cell
const setDiffRandomNumToEachCell = () => {
  let elements = document.getElementsByClassName("grid-item");
  let randomNumArr = [];
  for (let i = 0; i < 4; i++) {
    let randomNum = getRandomNum(4);
    // if randomNum is in randomNumArr, reget randomNum until it is not in randomNumArr.
    while (randomNumArr.includes(randomNum)) {
      randomNum = getRandomNum(4);
    }
    randomNumArr.push(randomNum);

    elements[i].innerHTML = randomNumArr[i];
  }
};
setDiffRandomNumToEachCell();

// press each grid cell in numerical order
// 1st press, check if it's 1,
// 2nd press, check if it's 1+1,
// ...
// if TRUE,  ,cell changes to gray
// if FALSE,  ,cell changes back to lightblue
// let i = 1;
const clickCell = (elem) => {
  let cellNum = parseInt(elem.innerText);

  if (cellNum === index(false, false)) {
    //i++;
    index(true, false);
    elem.style.backgroundColor = "#fff";
  }
  if (index(false, false) === 5) {
    toggleShowOrHide(true);
  }
};
// set the i in block (closure)
const index = (() => {
  let i = 1;
  return (isIncrease, isReset) => {
    if (isIncrease) {
      return i++;
    }
    if (isReset) {
      i = 1;
    }
    return i;
  };
})();
// toggle remove class 'hidden'
const toggleShowOrHide = (isshown) => {
  if (isshown) {
    document.getElementById("done").classList.remove("hidden");
    document.getElementById("restart").classList.remove("hidden");
  } else {
    document.getElementById("done").classList.add("hidden");
    document.getElementById("restart").classList.add("hidden");
  }
};

// restart game
const reset = () => {
  setDiffRandomNumToEachCell();
  const elem = document.getElementsByClassName("grid-item");
  for (let i = 0; i < elem.length; i++) {
    elem[i].style.backgroundColor = "lightblue";
  }
  index(false, true);
  toggleShowOrHide(false);
};
