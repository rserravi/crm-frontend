import { getAllTickets } from "../../api/ticketApi";
//import axios from "axios";
import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets} from "../ticket-list/ticket-Slice";

export const fetchAllTIckets = () => async (dispatch) => {
    dispatch (fetchTicketLoading());
    // Fetch data from API
    try {
        const result = await getAllTickets();
        dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
       dispatch(fetchTicketFail(error.message));
    }
};

export const filterSearchTicket = str => dispatch =>{
    dispatch(searchTickets(str));
}