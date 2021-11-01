import { DepthDeepeningSearch } from '@components/DepthDeepeningSearch';
import { expose } from 'comlink';
const worker = { DepthDeepeningSearch };
export type DepthDeepeningSearchWorker = typeof worker;
expose(worker);
