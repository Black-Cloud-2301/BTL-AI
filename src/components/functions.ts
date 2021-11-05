export const arrLength = 4;

export function isEquals(array: number[][], array2: number[][]) {
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (array[i][j] !== array2[i][j]) return false;
    }
  }
  return true;
}

export function swapArray2d(
  array: number[][],
  x: number,
  y: number,
  i: number,
  j: number
) {
  let temp = array[x][y];
  array[x][y] = array[i][j];
  array[i][j] = temp;
}

export function isExist(state1: number[][], state2: number[][][]) {
  for (let i = state2.length - 1; i >= 0; i--) {
    if (isEquals(state1, state2[i])) return true;
  }
  return false;
}

export function evaluate(state1: number[][], targetArray: number[][]) {
  let evaluateNumber = 0;

  for (let i = 1; i < arrLength * arrLength - 1; i++) {
    const search = i;
    const row = state1.findIndex((row) => row.includes(search));
    const col = state1[row].indexOf(search);
    const rowTarget = targetArray.findIndex((row) => row.includes(search));
    const colTarget = targetArray[rowTarget].indexOf(search);
    evaluateNumber += Math.abs(col - colTarget) + Math.abs(row - rowTarget);
  }

  // for (let i = 0; i < arrLength; i++) {
  //   for (let j = 0; j < arrLength; j++) {
  //     if (state1[i][j] !== targetArray[i][j]) evaluateNumber++;
  //   }
  // }

  return evaluateNumber;
}
