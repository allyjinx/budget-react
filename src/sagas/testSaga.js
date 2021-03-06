import { delay, take, put, call, fork, takeEvery, cancelled, cancel, takeLatest } from 'redux-saga/effects';

function double(number) {
  return number * 2;
}

export function* testSaga(){
    while (true) {
    console.log('Starting saga');
      const state = yield take('TEST_MESSAGE');
      const a = yield call(double, 2);
      const b = yield double(3);
      console.log(a);
      console.log(b);
    console.log('Finish saga function', state);
  }  
}

function* doNothing() {
  console.log('I  have been called');
  yield delay(1000);
  console.log('I am doing everything');
}

export function* testSagaFork() {
  while(true){
    yield take('TEST_MESSAGE_2');
    yield fork(doNothing)
    yield fork(doNothing)
    yield fork(doNothing)
  }
}

export function* testSagaTakeEveryProcess({payload}){
  console.log(`Starting process for index ${payload}`);
  yield delay(3000);
  console.log(`Ending process for index ${payload}`);

}

export function* testSagaTakeEvery() {
  const {payload}  = yield takeEvery(
    'TEST_MESSAGE_THREE', 
    testSagaTakeEveryProcess
    );
  console.log(`Finish TakeEvery for index ${payload}`);
}

export function* infinitySaga() {
  console.log('starting infinity saga')
  let index = 0;
  while(true) {
    index++;
    try{
    console.log(`inside infinity loop ${index}`);
    yield delay(1000);
  }
      catch(error){
        console.error('A error happened:', error)
      } 
      finally{
    console.log('the fork was cancelled?', yield cancelled());
    }
  }
}

export function* testSagaCancelled() {
  yield take('TEST_MESSAGE_4')
  const handelCancel = yield fork(infinitySaga);
  yield delay(3000);
  yield cancel(handelCancel);
}

export function* testSagaTakeLatest() {
  yield takeLatest('TEST_MESSAGE_5', infinitySaga);
}

export function* dispatchTest() {
  let index = 0;
  // yield put({ type:'TEST_MESSAGE_5', payload: index});

  while(true) {
    yield delay(5000);
    yield put({ type:'TEST_MESSAGE_5', payload: index});
    index++
  }
}