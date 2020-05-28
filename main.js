// put random number into each grid-item
const numArr = [1, 2, 3, 4];
const indexOfNumArr = Math.floor(Math.random() * 4);
const randomNum = numArr[indexOfNumArr];
document.getElementById("grid-item1").innerHTML = randomNum;
const setRandomNum = () => {};
