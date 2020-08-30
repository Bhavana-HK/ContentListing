import { all } from 'redux-saga/effects'
import contentWatcher from './contentWatcher'

export default function* mySaga() {
    yield all([
        contentWatcher(),
    ])

};