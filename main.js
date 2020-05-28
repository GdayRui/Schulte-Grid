// 2 * 2 grid
const numArr = [1, 2, 3, 4];

// get a random number
const getRandomNum = () => {
  const indexOfNumArr = Math.floor(Math.random() * 4);
  return numArr[indexOfNumArr];
};

// put the different random numbers into each grid
const setDiffRandomNumToEachGrid = () => {
  let elements = document.getElementsByClassName("grid-item");
  let randomNumArr = [];
  for (let i = 0; i < 4; i++) {
    let randomNum = getRandomNum();

    while (randomNumArr.includes(randomNum)) {
      randomNum = getRandomNum();
    }
    randomNumArr.push(randomNum);

    elements[i].innerHTML = randomNumArr[i];
  }
};
setDiffRandomNumToEachGrid();

//
