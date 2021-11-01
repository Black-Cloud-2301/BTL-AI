import { HillClimbing } from '@components/HillClimbing';
import { expose } from 'comlink';
const worker = { HillClimbing };
export type HillClimbingWorker = typeof worker;
expose(worker);
