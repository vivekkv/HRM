import { fork } from 'redux-saga/effects';
import hr from './hr/sagas'

export default function* root() {
    
    yield [
        fork(hr)
    ]
} 