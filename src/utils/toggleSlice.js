import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        isVisible: true
    },
    reducers: {
        setIsVisible: (state, action) => {
            state.isVisible = !state.isVisible
        }
    }
})

export const { setIsVisible } = toggleSlice.actions

export default toggleSlice.reducer

