import axios from "axios";

export const getAllTickets = async () => {
        try {
            const result = await axios.get(
                "http://localhost:3001/v1/ticket",
                {headers: 
                    {
                        Authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVAZS5jb20iLCJpYXQiOjE2NTQ3NTY4MzIsImV4cCI6MTY1NDc1NzczMn0.Ctsq4Vqfg3khndArxf_82vj-sAOoA2-YgDMgsUL8aVk",
                    }
                }
            );
            return result;
            
        } catch (error) {
            console.log(error);
        } 
};