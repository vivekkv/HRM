import { fork } from 'redux-saga/effects';
import root from './root';

export default function* sagas() { 

   yield [
       fork(root)
   ]
}