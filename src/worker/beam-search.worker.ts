import { BeamSearch } from '@components/BeamSearch';
import { expose } from 'comlink';
const worker = { BeamSearch };
export type BeamSearchWorker = typeof worker;
expose(worker);
