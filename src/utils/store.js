import suggestionsSlice from "./suggestionsSlice";
import toggleSlice from "./toggleSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore(
    {
        reducer: {
            suggestions: suggestionsSlice,
            toggle: toggleSlice
        }
    }
)


export default store