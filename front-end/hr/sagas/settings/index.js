import { fork } from 'redux-saga/effects';
import userMangement from './userMangement';

export default function* root() { 

   yield [
       fork(userMangement)
   ]
}