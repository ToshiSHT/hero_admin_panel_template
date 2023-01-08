import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filter : 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        uploadFilters: (state, action) => {state.filters = action.payload},
        filterHeroes: (state,action) => {state.filter = action.payload}
    }
});

const {actions,reducer} = filtersSlice;

export default reducer;
export const {uploadFilters,filterHeroes} = actions;