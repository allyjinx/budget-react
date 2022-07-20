import { call, take, put, fork} from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions';
import axios from 'axios';
import types from "../actions/entries.actions";
import {populateEntries, populateEntryDetails} from '../actions/entries.actions';

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    console.log('Kill me');
    const {data} = yield call(axios, 'http://localhost:3002/entries')
    yield put(populateEntries(data));
}

function* getEntryDetails(id){
    const {data} = yield call (axios, `http://localhost:3002/values/${id}`);
    console.log(data);
    yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails(){
   const { payload } =  yield take(entriesTypes.POPULATE_ENTRIES);
   for (let index = 0; index < payload.length; index++) {
       const entry = payload[index];
       yield fork(getEntryDetails, entry.id)
   }
}

