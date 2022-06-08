import axios from "axios";

export const getAllTickets = async () => {
        try {
            const result = await axios.get(
                "http://localhost:3001/v1/ticket",
                {headers: 
                    {
                        Authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVAZS5jb20iLCJpYXQiOjE2NTQ3MDgzNTcsImV4cCI6MTY1NDcwOTI1N30.zNBtoxRYKBjxxSwYoZy9lULUisD4pnQs9rkpE4l-S2M",
                    }
                }
            );
            return result;
            
        } catch (error) {
            console.log(error);
        } 
};