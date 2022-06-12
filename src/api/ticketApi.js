import axios from "axios";

const rootUrl = "http://localhost:3001/v1"
const getTicketUrl = rootUrl + "/ticket/"
const closeTicketUrl = getTicketUrl + "close-ticket/"

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
        return result;
        
    } catch (error) {
        console.log(error);
    } 
};

export const updateReplyTicket = (_id, msgObj) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const result = await axios.put(
                getTicketUrl + _id, msgObj,
                {headers: 
                    {
                        Authorization: sessionStorage.getItem("accessJWT"),
                    },
                }
            );
          
            resolve (result.data);
            
        } catch (error) {
            console.log(error.message);
            reject(error);
        } 
    })
};

export const updateTicketStatusClose = (_id) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const result = await axios.patch(
                closeTicketUrl + _id, {},
                {headers: 
                    {
                        Authorization: sessionStorage.getItem("accessJWT"),
                    },
                }
            );
          
            resolve (result.data);
            
        } catch (error) {
            console.log(error.message);
            reject(error);
        } 
    })
};

export const createNewTicket = (frmData) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const result = await axios.post(
                getTicketUrl, 
                frmData,
                {headers: 
                    {
                        Authorization: sessionStorage.getItem("accessJWT"),
                    },
                }
            );
            console.log(result.data);
            resolve (result.data);
            
        } catch (error) {
            console.log(error.message);
            reject(error);
        } 
    })
};
