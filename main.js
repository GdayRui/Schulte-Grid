// get a random number
const getRandomNum = (gridNum) => {
  const indexOfNumArr = Math.floor(Math.random() * gridNum);
  return indexOfNumArr + 1;
};

// put the different random numbers into each grid cell
const setDiffRandomNumToEachCell = (gridNum) => {
  // debugger;
  let elements = document.getElementsByClassName("grid-item");
  let randomNumArr = [];
  for (let i = 0; i < gridNum; i++) {
    let randomNum = getRandomNum(gridNum);
    // if randomNum is in randomNumArr, reget randomNum until it is not in randomNumArr.
    while (randomNumArr.includes(randomNum)) {
      randomNum = getRandomNum(gridNum);
    }
    randomNumArr.push(randomNum);

    elements[i].innerHTML = randomNumArr[i];
  }
};

// click the button the show the grid correspondingly
const showGrid = (gridNum) => {
  // debugger;
  let gridId = "grid" + gridNum;
  switch (gridId) {
    case "grid2":
      setDiffRandomNumToEachCell(4);
      document.getElementById("grid2").classList.remove("hidden");
      document.getElementById("grid3").classList.add("hidden");
      break;
    case "grid3":
      setDiffRandomNumToEachCell(9);
      document.getElementById("grid3").classList.remove("hidden");
      document.getElementById("grid2").classList.add("hidden");
      break;
  }
};

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
