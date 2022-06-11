import { getAllTickets, getSingleTicket } from "../../api/ticketApi";
//import axios from "axios";
import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets, fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail} from "../ticket-list/ticket-Slice";

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
};

//Actions for Single Ticket
export const fetchSingleTIcket = (_id) => async (dispatch) => {
    dispatch (fetchSingleTicketLoading());
    // Fetch data from API
     try {
         const result = await getSingleTicket(_id);
        dispatch(fetchSingleTicketSuccess(result.data.result[0]));
     } catch (error) {
        dispatch(fetchSingleTicketFail(error.message));
    }
};