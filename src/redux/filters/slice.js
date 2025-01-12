// slice = filtersSlice
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: "filters",
    initialState: { filter: "" },
    reducers: {
        setChangeFilter: (state, action) => {
            state.filter = action.payload;

        },
    }
});
export const { setChangeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;





