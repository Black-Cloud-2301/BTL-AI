import { BestFirstSearch } from '@components/BestFirstSearch';
import { expose } from 'comlink';
const worker = { BestFirstSearch };
export type BestFirstSearchWorker = typeof worker;
expose(worker);
