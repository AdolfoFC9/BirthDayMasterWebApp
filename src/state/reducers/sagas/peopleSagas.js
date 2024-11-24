import { call, put, takeEvery } from "redux-saga/effects";
import { GetPeopleComplete, GetPeopleMonthComplete,InsertUpdatePeopleComplete, DeletePersonComplete } from "../peopleReducer";
import { getPeople, getPeopleMonth, insertPerson, updatePerson, deletePerson } from "../../api.js";

export function* workerGetPeople(request) {
    const response = yield call(() => getPeople())
    yield put(GetPeopleComplete(response));
}

export function* workerGetPeopleMonth(request) {
  
    const response = yield call(() => getPeopleMonth(request.payload))


    yield put(GetPeopleMonthComplete(response));
}

export function* workerInsertUpdatePeople(request) {
    const {person} = request.payload;
    if (!person?.identificador){
        console.log("es un Insert");
    const response = yield call(() => insertPerson(request.payload))
    yield put(InsertUpdatePeopleComplete(response));
    }
  else{
    const response = yield call(() => updatePerson(request.payload))
    yield put(InsertUpdatePeopleComplete(response));
    console.log("Es un Update");
  }
}
export function* workerDeletePerson(request) {
    
    const response = yield call(() => deletePerson(request.payload))
    
    yield put(DeletePersonComplete(response));
}

export default function* peopleSaga() {
    yield takeEvery('people/GetPeople', workerGetPeople);
    yield takeEvery('people/GetPeopleMonth', workerGetPeopleMonth)
    yield takeEvery('people/InsertUpdatePeople', workerInsertUpdatePeople)
    yield takeEvery('people/DeletePerson', workerDeletePerson)
};
