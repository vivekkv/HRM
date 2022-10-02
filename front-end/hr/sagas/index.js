import { fork } from 'redux-saga/effects';
import auth from './auth';
import settings from './settings';
import company from './company';
import employee from './employees';

export default function* root() {
    
    yield [
        fork(auth),
        fork(settings),
        fork(company),
        fork(employee),
    ]
} 