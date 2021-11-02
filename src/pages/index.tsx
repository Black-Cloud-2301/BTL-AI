import AlertAI1 from '@components/AlertAI-1';
import { arrLength } from '@components/functions';
import { randomArray } from '@components/randomArray';
import { wrap } from 'comlink';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

// let defaultArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let defaultArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

// defaultArray = defaultArray.slice(0, 4 * 4).sort(function () {
//   return Math.random() - 0.5;
// });

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     array[i][j] = defaultArray[i * 4 + j];
//   }
// }

export const targetArray: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);
  const [father, setFather] = useState([randomArray(defaultArray)]);
  const [arr, setArr] = useState(father[index]);
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const swapItem = (indexI: number, indexJ: number) => {
    let newArray = new Array(...arr);
    let rowIndex = 0,
      colIndex = 0;
    for (let i = 0; i < arrLength; i++) {
      for (let j = 0; j < arrLength; j++) {
        if (arr[i][j] === 0) {
          rowIndex = i;
          colIndex = j;
        }
      }
    }

    if (indexI === rowIndex) {
      if (Math.abs(indexJ - colIndex) === 1) {
        newArray[rowIndex][colIndex] = newArray[indexI][indexJ];
        newArray[indexI][indexJ] = 0;
        setArr(newArray);
      } else showAlert(true, 'false', 'Không thể di chuyển ô này');
    } else if (Math.abs(indexI - rowIndex) === 1) {
      if (indexJ === colIndex) {
        newArray[rowIndex][colIndex] = newArray[indexI][indexJ];
        newArray[indexI][indexJ] = 0;
        setArr(newArray);
      } else showAlert(true, 'false', 'Không thể di chuyển ô này');
    } else {
      showAlert(true, 'false', 'Không thể di chuyển ô này');
    }
  };

  useEffect(() => {
    if (father.length > 10) {
      let slider = setInterval(() => {
        if (index < father.length - 1) setIndex(index + 1);
      }, 200);
      return () => {
        clearInterval(slider);
      };
    }
    return;
  }, [index, father]);

  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <header>
        <div className='flex justify-between w-104 2xl:w-160 items-center mb-8'>
          <button
            className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-red-500'
            onClick={async () => {
              const worker = new Worker(
                new URL('src/worker/bfs.worker.ts', import.meta.url)
              );
              const { BFS } =
                wrap<import('src/worker/bfs.worker').BFSWorker>(worker);
              setIndex(0);
              setFather(await BFS(father[0]));
            }}
          >
            BFS
          </button>
          <button
            className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-red-500'
            onClick={async () => {
              const worker = new Worker(
                new URL('src/worker/dfs.worker.ts', import.meta.url)
              );
              const { DepthFirstSearch } =
                wrap<import('src/worker/dfs.worker').DepthFirstSearchWorker>(
                  worker
                );
              setIndex(0);
              setFather(await DepthFirstSearch(father[0]));
            }}
          >
            DFS
          </button>
          <button
            className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-red-500'
            onClick={async () => {
              const worker = new Worker(
                new URL(
                  'src/worker/depth-deepening-search.worker.ts',
                  import.meta.url
                )
              );
              const { DepthDeepeningSearch } =
                wrap<
                  import('src/worker/depth-deepening-search.worker').DepthDeepeningSearchWorker
                >(worker);
              setIndex(0);
              setFather(await DepthDeepeningSearch(father[0]));
            }}
          >
            D-Loop
          </button>
        </div>
        <div className='flex justify-between w-104 2xl:w-160 items-center mb-8'>
          <button
            className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-red-500'
            onClick={async () => {
              const worker = new Worker(
                new URL(
                  'src/worker/best-first-search.worker.ts',
                  import.meta.url
                )
              );
              const { BestFirstSearch } =
                wrap<
                  import('src/worker/best-first-search.worker').BestFirstSearchWorker
                >(worker);
              setIndex(0);
              setFather(await BestFirstSearch(father[0]));
            }}
          >
            BestFS
          </button>
          <button
            className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-red-500'
            onClick={async () => {
              const worker = new Worker(
                new URL('src/worker/hill-climbing.worker.ts', import.meta.url)
              );
              const { HillClimbing } =
                wrap<
                  import('src/worker/hill-climbing.worker').HillClimbingWorker
                >(worker);
              setIndex(0);
              setFather(await HillClimbing(father[0]));
            }}
          >
            Hill Climbing
          </button>
          <button
            className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-red-500'
            onClick={async () => {
              const worker = new Worker(
                new URL('src/worker/beam-search.worker.ts', import.meta.url)
              );
              const { BeamSearch } =
                wrap<import('src/worker/beam-search.worker').BeamSearchWorker>(
                  worker
                );
              setIndex(0);
              setFather(await BeamSearch(father[0]));
            }}
          >
            Beam
          </button>
        </div>
      </header>
      <div className='relative bg-gray-300 w-104 2xl:w-160 h-104 2xl:h-160'>
        <AlertAI1 {...alert} showAlert={showAlert} />
        <ul className='grid h-full w-full grid-cols-4 border border-black-900'>
          {father[index].map((items, indexI) => {
            return items.map((subItems, indexJ) => {
              return (
                <li
                  className='flex justify-center items-center border border-black-900'
                  key={indexJ}
                >
                  {subItems === 0 ? (
                    ''
                  ) : (
                    <button
                      className='border-2 border-black-900 bg-gray-400 text-white font-semibold w-10/12 h-10/12 text-6xl rounded hover:bg-orange'
                      onClick={() => swapItem(indexI, indexJ)}
                    >
                      {subItems}
                    </button>
                  )}
                </li>
              );
            });
          })}
        </ul>
      </div>
    </main>
  );
};

export default Home;
