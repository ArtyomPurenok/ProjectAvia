import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlices";
import dataSearchAviaTicketReducer from "./reducer/dataSearchAviaTicketReducer";


export const store = configureStore({
    reducer: {
        dataTicketSearch: dataSearchAviaTicketReducer,
        user: useReducer,
    },
});