import { targetArray } from '@pages/index';
import {
  arrLength,
  evaluate,
  isEquals,
  isExist,
  swapArray2d,
} from './functions';

interface ArrayProps {
  array: number[][];
  father: number[][][];
}

export function BeamSearch(array: number[][]) {
  let t0 = performance.now();
  const k = 2;
  const search = 0;
  const arrayStatePass = [];
  arrayStatePass.push(array);
  const queue: ArrayProps[] = [];
  queue.push({ array: array, father: [array] });
  let count = 0;
  while (queue.length !== 0) {
    count++;
    const openQueue: ArrayProps[] = [];

    if (count % 1000 === 0) console.log(count);
    // if (queue.length % 1000 === 0) console.log(queue.length);
    for (let i = 0; i < queue.length; i++) {
      const tempQueue = queue.shift();
      if (tempQueue) {
        const row = tempQueue.array.findIndex((row) => row.includes(search));
        const col = tempQueue.array[row].indexOf(search);
        if (row === 0) {
          let newTempArray1: number[][] = [];
          for (let i = 0; i < arrLength; i++) {
            newTempArray1[i] = tempQueue.array[i].slice();
          }
          swapArray2d(newTempArray1, row, col, row + 1, col);
          if (!isExist(newTempArray1, arrayStatePass)) {
            openQueue.push({
              array: [
                [...newTempArray1[0]],
                [...newTempArray1[1]],
                [...newTempArray1[2]],
                [...newTempArray1[3]],
              ],
              father: [
                ...tempQueue.father,
                [
                  [...newTempArray1[0]],
                  [...newTempArray1[1]],
                  [...newTempArray1[2]],
                  [...newTempArray1[3]],
                ],
              ],
            });
          }

          if (col === 0) {
            let newTempArray2: number[][] = [];
            for (let i = 0; i < arrLength; i++) {
              newTempArray2[i] = tempQueue.array[i].slice();
            }
            swapArray2d(newTempArray2, row, col, row, col + 1);
            if (!isExist(newTempArray2, arrayStatePass)) {
              openQueue.push({
                array: [
                  [...newTempArray2[0]],
                  [...newTempArray2[1]],
                  [...newTempArray2[2]],
                  [...newTempArray2[3]],
                ],
                father: [
                  ...tempQueue.father,
                  [
                    [...newTempArray2[0]],
                    [...newTempArray2[1]],
                    [...newTempArray2[2]],
                    [...newTempArray2[3]],
                  ],
                ],
              });
            }
          } else {
            if (col === arrLength - 1) {
              let newTempArray3: number[][] = [];
              for (let i = 0; i < arrLength; i++) {
                newTempArray3[i] = tempQueue.array[i].slice();
              }
              swapArray2d(newTempArray3, row, col, row, col - 1);
              if (!isExist(newTempArray3, arrayStatePass)) {
                openQueue.push({
                  array: [
                    [...newTempArray3[0]],
                    [...newTempArray3[1]],
                    [...newTempArray3[2]],
                    [...newTempArray3[3]],
                  ],
                  father: [
                    ...tempQueue.father,
                    [
                      [...newTempArray3[0]],
                      [...newTempArray3[1]],
                      [...newTempArray3[2]],
                      [...newTempArray3[3]],
                    ],
                  ],
                });
              }
            } else {
              let newTempArray4: number[][] = [];
              for (let i = 0; i < arrLength; i++) {
                newTempArray4[i] = tempQueue.array[i].slice();
              }
              swapArray2d(newTempArray4, row, col, row, col - 1);
              if (!isExist(newTempArray4, arrayStatePass)) {
                openQueue.push({
                  array: [
                    [...newTempArray4[0]],
                    [...newTempArray4[1]],
                    [...newTempArray4[2]],
                    [...newTempArray4[3]],
                  ],
                  father: [
                    ...tempQueue.father,
                    [
                      [...newTempArray4[0]],
                      [...newTempArray4[1]],
                      [...newTempArray4[2]],
                      [...newTempArray4[3]],
                    ],
                  ],
                });
              }
              let newTempArray5: number[][] = [];
              for (let i = 0; i < arrLength; i++) {
                newTempArray5[i] = tempQueue.array[i].slice();
              }
              swapArray2d(newTempArray5, row, col, row, col + 1);
              if (!isExist(newTempArray5, arrayStatePass)) {
                openQueue.push({
                  array: [
                    [...newTempArray5[0]],
                    [...newTempArray5[1]],
                    [...newTempArray5[2]],
                    [...newTempArray5[3]],
                  ],
                  father: [
                    ...tempQueue.father,
                    [
                      [...newTempArray5[0]],
                      [...newTempArray5[1]],
                      [...newTempArray5[2]],
                      [...newTempArray5[3]],
                    ],
                  ],
                });
              }
            }
          }
        } else if (row === arrLength - 1) {
          let newTempArray6: number[][] = [];
          for (let i = 0; i < arrLength; i++) {
            newTempArray6[i] = tempQueue.array[i].slice();
          }
          swapArray2d(newTempArray6, row, col, row - 1, col);
          if (!isExist(newTempArray6, arrayStatePass)) {
            openQueue.push({
              array: [
                [...newTempArray6[0]],
                [...newTempArray6[1]],
                [...newTempArray6[2]],
                [...newTempArray6[3]],
              ],
              father: [
                ...tempQueue.father,
                [
                  [...newTempArray6[0]],
                  [...newTempArray6[1]],
                  [...newTempArray6[2]],
                  [...newTempArray6[3]],
                ],
              ],
            });
          }
          if (col === 0) {
            let newTempArray7: number[][] = [];
            for (let i = 0; i < arrLength; i++) {
              newTempArray7[i] = tempQueue.array[i].slice();
            }
            swapArray2d(newTempArray7, row, col, row, col + 1);
            if (!isExist(newTempArray7, arrayStatePass)) {
              openQueue.push({
                array: [
                  [...newTempArray7[0]],
                  [...newTempArray7[1]],
                  [...newTempArray7[2]],
                  [...newTempArray7[3]],
                ],
                father: [
                  ...tempQueue.father,
                  [
                    [...newTempArray7[0]],
                    [...newTempArray7[1]],
                    [...newTempArray7[2]],
                    [...newTempArray7[3]],
                  ],
                ],
              });
            }
          } else {
            if (col === arrLength - 1) {
              let newTempArray8: number[][] = [];

              for (let i = 0; i < arrLength; i++) {
                newTempArray8[i] = tempQueue.array[i].slice();
              }
              swapArray2d(newTempArray8, row, col, row, col - 1);
              if (!isExist(newTempArray8, arrayStatePass)) {
                openQueue.push({
                  array: [
                    [...newTempArray8[0]],
                    [...newTempArray8[1]],
                    [...newTempArray8[2]],
                    [...newTempArray8[3]],
                  ],
                  father: [
                    ...tempQueue.father,
                    [
                      [...newTempArray8[0]],
                      [...newTempArray8[1]],
                      [...newTempArray8[2]],
                      [...newTempArray8[3]],
                    ],
                  ],
                });
              }
            } else {
              let newTempArray9: number[][] = [];
              for (let i = 0; i < arrLength; i++) {
                newTempArray9[i] = tempQueue.array[i].slice();
              }
              swapArray2d(newTempArray9, row, col, row, col - 1);
              if (!isExist(newTempArray9, arrayStatePass)) {
                openQueue.push({
                  array: [
                    [...newTempArray9[0]],
                    [...newTempArray9[1]],
                    [...newTempArray9[2]],
                    [...newTempArray9[3]],
                  ],
                  father: [
                    ...tempQueue.father,
                    [
                      [...newTempArray9[0]],
                      [...newTempArray9[1]],
                      [...newTempArray9[2]],
                      [...newTempArray9[3]],
                    ],
                  ],
                });
              }
              let newTempArray10: number[][] = [];

              for (let i = 0; i < arrLength; i++) {
                newTempArray10[i] = tempQueue.array[i].slice();
              }
              swapArray2d(newTempArray10, row, col, row, col + 1);
              if (!isExist(newTempArray10, arrayStatePass)) {
                openQueue.push({
                  array: [
                    [...newTempArray10[0]],
                    [...newTempArray10[1]],
                    [...newTempArray10[2]],
                    [...newTempArray10[3]],
                  ],
                  father: [
                    ...tempQueue.father,
                    [
                      [...newTempArray10[0]],
                      [...newTempArray10[1]],
                      [...newTempArray10[2]],
                      [...newTempArray10[3]],
                    ],
                  ],
                });
              }
            }
          }
        } else {
          let newTempArray11: number[][] = [];
          for (let i = 0; i < arrLength; i++) {
            newTempArray11[i] = tempQueue.array[i].slice();
          }
          swapArray2d(newTempArray11, row, col, row - 1, col);
          if (!isExist(newTempArray11, arrayStatePass)) {
            openQueue.push({
              array: [
                [...newTempArray11[0]],
                [...newTempArray11[1]],
                [...newTempArray11[2]],
                [...newTempArray11[3]],
              ],
              father: [
                ...tempQueue.father,
                [
                  [...newTempArray11[0]],
                  [...newTempArray11[1]],
                  [...newTempArray11[2]],
                  [...newTempArray11[3]],
                ],
              ],
            });
          }
          let newTempArray12: number[][] = [];
          for (let i = 0; i < arrLength; i++) {
            newTempArray12[i] = tempQueue.array[i].slice();
          }
          swapArray2d(newTempArray12, row, col, row + 1, col);
          if (!isExist(newTempArray12, arrayStatePass)) {
            openQueue.push({
              array: [
                [...newTempArray12[0]],
                [...newTempArray12[1]],
                [...newTempArray12[2]],
                [...newTempArray12[3]],
              ],
              father: [
                ...tempQueue.father,
                [
                  [...newTempArray12[0]],
                  [...newTempArray12[1]],
                  [...newTempArray12[2]],
                  [...newTempArray12[3]],
                ],
              ],
            });
          }
          if (col === 0) {
            let newTempArray13: number[][] = [];

            for (let i = 0; i < arrLength; i++) {
              newTempArray13[i] = tempQueue.array[i].slice();
            }
            swapArray2d(newTempArray13, row, col, row, col + 1);
            if (!isExist(newTempArray13, arrayStatePass)) {
              openQueue.push({
                array: [
                  [...newTempArray13[0]],
                  [...newTempArray13[1]],
                  [...newTempArray13[2]],
                  [...newTempArray13[3]],
                ],
                father: [
                  ...tempQueue.father,
                  [
                    [...newTempArray13[0]],
                    [...newTempArray13[1]],
                    [...newTempArray13[2]],
                    [...newTempArray13[3]],
                  ],
                ],
              });
            }
          } else {
            if (col === arrLength - 1) {
              let newTempArray14: number[][] = [];

              for (let i = 0; i < arrLength; i++) {
                newTempArray14[i] = tempQueue.array[i].slice();
              }
              swapArray2d(newTempArray14, row, col, row, col - 1);
              if (!isExist(newTempArray14, arrayStatePass)) {
                openQueue.push({
                  array: [
                    [...newTempArray14[0]],
                    [...newTempArray14[1]],
                    [...newTempArray14[2]],
                    [...newTempArray14[3]],
                  ],
                  father: [
                    ...tempQueue.father,
                    [
                      [...newTempArray14[0]],
                      [...newTempArray14[1]],
                      [...newTempArray14[2]],
                      [...newTempArray14[3]],
                    ],
                  ],
                });
              }
            } else {
              let newTempArray15: number[][] = [];

              for (let i = 0; i < arrLength; i++) {
                newTempArray15[i] = tempQueue.array[i].slice();
              }
              swapArray2d(newTempArray15, row, col, row, col - 1);

              if (!isExist(newTempArray15, arrayStatePass)) {
                openQueue.push({
                  array: [
                    [...newTempArray15[0]],
                    [...newTempArray15[1]],
                    [...newTempArray15[2]],
                    [...newTempArray15[3]],
                  ],
                  father: [
                    ...tempQueue.father,
                    [
                      [...newTempArray15[0]],
                      [...newTempArray15[1]],
                      [...newTempArray15[2]],
                      [...newTempArray15[3]],
                    ],
                  ],
                });
              }
              let newTempArray16: number[][] = [];

              for (let i = 0; i < arrLength; i++) {
                newTempArray16[i] = tempQueue.array[i].slice();
              }
              swapArray2d(newTempArray16, row, col, row, col + 1);
              if (!isExist(newTempArray16, arrayStatePass)) {
                openQueue.push({
                  array: [
                    [...newTempArray16[0]],
                    [...newTempArray16[1]],
                    [...newTempArray16[2]],
                    [...newTempArray16[3]],
                  ],
                  father: [
                    ...tempQueue.father,
                    [
                      [...newTempArray16[0]],
                      [...newTempArray16[1]],
                      [...newTempArray16[2]],
                      [...newTempArray16[3]],
                    ],
                  ],
                });
              }
            }
          }
        }
      }
    }

    openQueue.sort(function (a, b) {
      return evaluate(a.array, targetArray) - evaluate(b.array, targetArray);
    });

    for (let i = 0; i < (openQueue.length >= k ? k : openQueue.length); i++) {
      if (isEquals(openQueue[i].array, targetArray)) {
        console.log(openQueue[i].father);
        console.log('Founded');
        let t1 = performance.now();
        console.log(t1 - t0);
        return openQueue[i].father;
      } else {
        queue.push(openQueue[i]);
        arrayStatePass.push(openQueue[i].array);
      }
    }

    if (queue.length === 0) {
      console.log('Không tìm thấy');
      return [array];
    }
  }
  return [array];
}
