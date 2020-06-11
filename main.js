// get a random number
const getRandomNum = (gridNum) => {
  const indexOfNumArr = Math.floor(Math.random() * gridNum);
  return indexOfNumArr + 1;
};

// put the different random numbers into each grid cell
const setDiffRandomNumToEachCell = (gridNum) => {
  // debugger;
  let elem = document.getElementById("grid" + gridNum);
  let elements = elem.getElementsByClassName("grid-item");
  let randomNumArr = [];
  for (let i = 0; i < gridNum * gridNum; i++) {
    let randomNum = getRandomNum(gridNum * gridNum);
    // if randomNum is in randomNumArr, reget randomNum until it is not in randomNumArr.
    while (randomNumArr.includes(randomNum)) {
      randomNum = getRandomNum(gridNum * gridNum);
    }
    randomNumArr.push(randomNum);

    elements[i].innerHTML = randomNumArr[i];
  }
};

const resetGrids = (gridNum) => {
  setDiffRandomNumToEachCell(gridNum);
  let elem = document.getElementById("grid" + gridNum);
  let elems = elem.getElementsByClassName("grid-item");
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = "lightblue";
  }
  index(false, true);
  toggleShowOrHide(false);
};

// click the button the show the grid correspondingly
const showGrid = (gridNum) => {
  // debugger;
  let gridId = "grid" + gridNum;
  switch (gridId) {
    case "grid2":
      resetGrids(2);
      document.getElementById("grid2").classList.remove("hidden");
      document.getElementById("grid3").classList.add("hidden");
      document.getElementById("grid4").classList.add("hidden");
      document.getElementById("grid5").classList.add("hidden");
      break;
    case "grid3":
      resetGrids(3);
      document.getElementById("grid3").classList.remove("hidden");
      document.getElementById("grid2").classList.add("hidden");
      document.getElementById("grid4").classList.add("hidden");
      document.getElementById("grid5").classList.add("hidden");
      break;
    case "grid4":
      resetGrids(4);
      document.getElementById("grid4").classList.remove("hidden");
      document.getElementById("grid2").classList.add("hidden");
      document.getElementById("grid3").classList.add("hidden");
      document.getElementById("grid5").classList.add("hidden");
      break;
    case "grid5":
      resetGrids(5);
      document.getElementById("grid5").classList.remove("hidden");
      document.getElementById("grid2").classList.add("hidden");
      document.getElementById("grid3").classList.add("hidden");
      document.getElementById("grid4").classList.add("hidden");
      break;
    default:
      break;
  }
  toggleShowOrHideGridBtn(false);
};

// press each grid cell in numerical order
// 1st press, check if it's 1,
// 2nd press, check if it's 1+1,
// ...
// if TRUE,  ,cell changes to gray
// if FALSE,  ,cell changes back to lightblue
// let i = 1;
const clickCell = (elem, gridNum) => {
  let cellNum = parseInt(elem.innerText);

  if (index(false, false) === cellNum) {
    //i++;
    index(true, false);
    elem.style.backgroundColor = "#fff";
    toggleShowOrHideGridBtn(false);
  }
  if (index(false, false) === gridNum * gridNum + 1) {
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
const toggleShowOrHideGridBtn = (isShown) => {
  const gridBtns = document.querySelectorAll("#navBars > .btn");
  if (isShown) {
    gridBtns.forEach((item) => item.classList.remove("hidden"));
  } else {
    gridBtns.forEach((item) => item.classList.add("hidden"));
  }
};
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
  let elems = document.getElementsByClassName("grid");
  // in html collection, elems is an object
  let currentGrid = [...elems].filter(
    (e) => ![...e.classList].includes("hidden")
  );
  switch (currentGrid[0].id) {
    case "grid2":
      resetGrids(2);
      break;
    case "grid3":
      resetGrids(3);
      break;
    case "grid4":
      resetGrids(4);
      break;
    case "grid5":
      resetGrids(5);
      break;
    default:
      break;
  }
  toggleShowOrHideGridBtn(true);
};

// Bugs to be fixed -- 10/06
// eg: Press the 2x2 button to start, then press the first cell with number 1 in it, I call it cell one.
// if press the 2x2 button again, all the 4 numbers will be reset in each cell inclucing the cell one which is already pressed,
// which means at this time there would be another number in cell one instead of 1.
// but the cell one's background color is still white indicating a pressed state.
// The correct display is that all the cells' background colors should be blue whenever the reset button is clicked.
