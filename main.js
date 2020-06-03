// 2 * 2 grid
const numArr = [1, 2, 3, 4];

// get a random number
const getRandomNum = () => {
  const indexOfNumArr = Math.floor(Math.random() * 4);
  return numArr[indexOfNumArr];
};

// put the different random numbers into each grid cell
const setDiffRandomNumToEachCell = () => {
  let elements = document.getElementsByClassName("grid-item");
  let randomNumArr = [];
  for (let i = 0; i < 4; i++) {
    let randomNum = getRandomNum();
    // if randomNum is in randomNumArr, reget randomNum until it is not in randomNumArr.
    while (randomNumArr.includes(randomNum)) {
      randomNum = getRandomNum();
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
// let n = 1;
const clickCell = (elem) => {
  let cellNum = parseInt(elem.innerText);

  if (cellNum === index(false, false)) {
    //n++;
    index(true, false);

    elem.style.backgroundColor = "lightgray";
  }
  if (cellNum === 4) {
    document.getElementById("result").innerHTML = "DONE";
  }
};

// set the index in block (closure function)
let index = (() => {
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
