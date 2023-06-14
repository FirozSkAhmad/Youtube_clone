import { createSlice } from "@reduxjs/toolkit";

const suggestionsSlice = createSlice({
    name: "suggestions",
    initialState: {},
    reducers: {
        addSuggestions: (state, action) => {
            state =Object.assign(state,action.payload)
        }
    }
})


export const { addSuggestions } = suggestionsSlice.actions

export default suggestionsSlice.reducer