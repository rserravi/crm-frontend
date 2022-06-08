import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-list/ticket-Slice";


const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
    }
})

export default store;