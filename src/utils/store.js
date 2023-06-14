import suggestionsSlice from "./suggestionsSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore(
    {
        reducer: {
            suggestions: suggestionsSlice
        }
    }
)


export default store