import { createSlice } from "@reduxjs/toolkit";


export const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        peopleMonth: [],
        request: -1,
        lastHTTPRequest: 0,
        selectedPerson: {}
    },
    reducers: {
        Request: (state) => {

        },
        RequestComplete: (state) => {


        },
        GetPeople: (state) => {

        },
        GetPeopleComplete: (state, action) => {
            state.people = action.payload.people,
            state.request = -1

        },
        GetPeopleMonth: (state) => {

        },
        GetPeopleMonthComplete: (state, action) => {

            state.peopleMonth = action.payload.people,
             state.request = -1
        },
        InsertUpdatePeople: (state) => {

        },
        InsertUpdatePeopleComplete: (state, action) => {
            if (action.payload.person) {
                state.request = action.payload.status,
                    state.people.push(action.payload.person)
            } else {
                state.request = action.payload.status
            }
        },
        SetSelectedPersona: (state, action) => {
            state.selectedPerson = action.payload
        },
        DeletePerson: (state, action) => {
        },
        DeletePersonComplete: (state, action) => {
            const index = state.people.findIndex(item => item.identificador === action.payload.identificador);
            state.people.splice(index, 1);
        },
    }
});

export const { Request, RequestComplete, GetPeople, GetPeopleComplete, GetPeopleMonthComplete, GetPeopleMonth, InsertUpdatePeople, InsertUpdatePeopleComplete, SetSelectedPersona, DeletePerson, DeletePersonComplete } = peopleSlice.actions;
export default peopleSlice.reducer;
