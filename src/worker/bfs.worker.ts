import { BFS } from '@components/bfs';
import { expose } from 'comlink';
const worker = { BFS };
export type BFSWorker = typeof worker;
expose(worker);
