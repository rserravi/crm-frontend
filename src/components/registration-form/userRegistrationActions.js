import { useDispatch } from "react-redux";
import { registrationPending, registrationSuccess, registrationError } from "./userRegistrationSlice";
import { userRegistrationAPI } from "../../api/userApi";


export const userRegistration = (frmDt) => async (dispatch) =>{

    try {
        dispatch(registrationPending());
        const result = await userRegistrationAPI(frmDt)
        result.status === "success" 
           ? dispatch(registrationSuccess(result.message))
           :   dispatch(registrationError(result.message))
        console.log(result);
        
    } catch (error) {
        dispatch(registrationError(error.message))
    }
}
   
