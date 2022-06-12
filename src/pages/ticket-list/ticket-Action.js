import { getAllTickets, getSingleTicket, updateReplyTicket, updateTicketStatusClose } from "../../api/ticketApi";
//import axios from "axios";
import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets, fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail, replyTicketLoading, replyTicketSuccess, replyTicketFail, closeTicketLoading,closeTicketSuccess,closeTicketFail} from "../ticket-list/ticket-Slice";

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
        dispatch(fetchSingleTicketSuccess(result.data.result && result.data.result[0]));
     } catch (error) {
        dispatch(fetchSingleTicketFail(error.message));
    }
};

//Actions for Reply Ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
    dispatch (replyTicketLoading());
     try {
       const result = await updateReplyTicket(_id, msgObj);
       console.log(result);
       if(result.status === "error"){
        return dispatch(replyTicketFail(result.message));
       }
       dispatch(fetchSingleTIcket(_id));
       dispatch(replyTicketSuccess(result.message));
     } catch (error) {
        console.log(error);
        dispatch(replyTicketFail(error.message));
    }
};

//Actions for ClosingTicket
export const closeTicket = (_id) => async (dispatch) => {
    dispatch (closeTicketLoading());
     try {
       const result = await updateTicketStatusClose(_id);
       console.log(result);
       if(result.status === "error"){
        return dispatch(closeTicketFail(result.message));
       }
       dispatch(fetchSingleTIcket(_id));
       dispatch(closeTicketSuccess(result.message));
     } catch (error) {
        console.log(error);
        dispatch(closeTicketFail(error.message));
    }
};