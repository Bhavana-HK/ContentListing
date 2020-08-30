import { put, takeEvery } from 'redux-saga/effects'
import { LOAD_DATA, loadContent } from '../Actions';
import { get } from 'lodash';
//call, takeLatest, all, select

function* loadDataSaga() {
    const data = require('../API/CONTENTLISTINGPAGE-PAGE1.json');
    const contents = get(data, 'page.content-items.content', []);
    yield put(loadContent(contents));
}

// function* onStartStop(action) {
// yield put(togglePlayButton())
// let { metronome } = yield select();
// if (metronome.playing) {
//     console.log("starts playing ")
//     let count = 0;
//     metronome.timer = setInterval(
//         () => { playClick(metronome.beatsPerMeasure, count); count++ },
//         (60 / metronome.bpm) * 1000
//     );
// }
// else {
//     console.log("stops playing ")
//     clearInterval(metronome.timer);
// }
// }

// function* onBpmChange(action) {
// yield put(handelRangeSliderInput(action.payload))
// let { metronome } = yield select();
// if (metronome.playing) {
//     clearInterval(metronome.timer); console.log("stops for resetting timer")
//     let count=0;
//     metronome.timer = setInterval(
//         () => { playClick(metronome.beatsPerMeasure, count); count++ },
//         (60 / metronome.bpm) * 1000
//     );
// }

// }

function* contentWatcher() {
    yield takeEvery(LOAD_DATA, loadDataSaga);
}

export default contentWatcher;