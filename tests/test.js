const sortAlghoritms = require('../src');
const {selectSort,quickSort} = sortAlghoritms;

describe('Sort Alghoritms',() => {

  const arrToSort = new Array(100);
  for(let i = 0; i < arrToSort.length; i++) {
    arrToSort[i] = Math.floor(Math.random() * 100);
  }
  const sortedArr = [...arrToSort.sort((a,b) => a - b)];

  test('Select sort',() => {
    expect(selectSort(arrToSort.sort(() => {
      //reShuffle
      return 0.5 - Math.random();
    })))
      .toStrictEqual(sortedArr);
  })
  test('Quick sort',() => {
    expect(quickSort(arrToSort.sort(() => {
      //reShuffle
      return 0.5 - Math.random();
    })))
      .toStrictEqual(sortedArr);
  })
})