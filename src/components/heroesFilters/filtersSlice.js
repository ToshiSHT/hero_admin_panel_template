import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    filters: [],
    filter : 'all'
}
export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
   async () => {
      const {request} = useHttp();
      return  await request("http://localhost:3001/filters")
    }

);

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterHeroes: (state,action) => {state.filter = action.payload}
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilters.fulfilled,(state, action) => {state.filters = action.payload})
        .addDefaultCase(()=>{})
    }
});

const {actions,reducer} = filtersSlice;

export default reducer;
export const {uploadFilters,filterHeroes} = actions;