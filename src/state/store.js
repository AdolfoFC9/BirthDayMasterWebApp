import { configureStore,Tuple } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import peopleReducer from "./reducers/peopleReducer.js"
import peopleSaga from "./reducers/sagas/peopleSagas.js";


const sagaMidddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        people: peopleReducer
    },
    middleware: (getDefaultMiddleware)=> new Tuple(sagaMidddleware),
});

sagaMidddleware.run(peopleSaga);
export default store;

