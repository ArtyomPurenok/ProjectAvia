import {configureStore} from "@reduxjs/toolkit";

import dataSearchAviaTicketReducer from "./reducer/dataSearchAviaTicketReducer";


export const store = configureStore({
    reducer: {
        dataTicketSearch: dataSearchAviaTicketReducer,
    },
});