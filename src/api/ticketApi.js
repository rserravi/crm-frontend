import axios from "axios";

const rootUrl = "http://localhost:3001/v1"
const getTicketUrl = rootUrl + "/ticket/"

export const getAllTickets = async () => {
        try {
            const result = await axios.get(
                getTicketUrl,
                {headers: 
                    {
                        Authorization: sessionStorage.getItem("accessJWT"),
                    }
                }
            );
            return result;
            
        } catch (error) {
            console.log(error);
        } 
};

export const getSingleTicket = async (_id) => {
    try {
        const result = await axios.get(
            getTicketUrl + _id,
            {headers: 
                {
                    Authorization: sessionStorage.getItem("accessJWT"),
                }
            }
        );
        console.log("Result en getSingleTicket ticketApi :" + result);
        return result;
        
    } catch (error) {
        console.log(error);
    } 
};