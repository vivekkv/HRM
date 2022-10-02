import { fork } from 'redux-saga/effects';
import { submitLogin, authInputChanged } from './login';

export default function* root() { 

   yield [
       fork(authInputChanged),
       fork(submitLogin)
   ]
}   