import { DepthFirstSearch } from '@components/dfs';
import { expose } from 'comlink';
const worker = { DepthFirstSearch };
export type DepthFirstSearchWorker = typeof worker;
expose(worker);
