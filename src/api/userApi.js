import axios from "axios";

const rootUrl = "http://localhost:3001/v1";
const loginUrl = rootUrl + "/user/login";
const userProfileUrl = rootUrl + "/user";
const logOutUrl = rootUrl + "/user/logout";
const newAccessJWTurl = rootUrl + "/tokens";
const userVerificationUrl = userProfileUrl + "/verify"

export const userLogin = (frmData) =>{
    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(loginUrl, frmData);

            resolve(res.data);

            if(res.data.status ==="success"){
                sessionStorage.setItem("accessJWT", res.data.accessJWT);
                localStorage.setItem(
                  "crmSite",
                  JSON.stringify({ refreshJWT: res.data.refreshJWT })
                );
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const userRegistrationAPI = (frmData) =>{

    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(userProfileUrl, frmData);
            resolve(res.data);

            if(res.data.status ==="success"){
               resolve(res.data)
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const userRegistrationVerification = (frmData) =>{
    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.patch(userVerificationUrl, frmData);

            resolve(res.data);
            console.log("Status en userRegistration");
            console.log(res.data);
            if(res.data.status ==="success"){
               resolve(res.data)
            }
        } catch (error) {
            console.log("Error en userRegistration");
            reject({status:"error", message:error.error});
        }
    })
}


export const fetchUser = () =>{
    return new Promise( async(resolve, reject)=>{
        try {

            const accessJWT = sessionStorage.getItem("accessJWT");
            if (!accessJWT){
                reject("Token not found!");
            }

            const res = await axios.get(userProfileUrl, {
                headers: {
                    Authorization :accessJWT,
                }
            });

            resolve(res.data);
            
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    })
}

export const fetchNewAccessJWT = () =>{
    return new Promise( async(resolve, reject)=>{
        try {
            const {refreshJWT} = JSON.parse(localStorage.getItem("crmSite"));
            if (!refreshJWT){
                reject("Token not found!");
            }
            const res = await axios.get(newAccessJWTurl, {
                headers: {
                    Authorization :refreshJWT,
                }
            });
            if(res.data.status ==="success"){
                console.log(res.data)
                sessionStorage.setItem("accessJWT", res.data.accessJWT);   
            } 
            resolve(true);
            
        } catch (error) {
            if (error.message === "Request failed with status code 403"){
                localStorage.removeItem("crmSite");
            }
            reject(false);
        }
    })
}

export const userLogout = async() =>{
    try {
        const accessJWT = sessionStorage.getItem("accessJWT");
    if (!accessJWT){
        console.log("Token not found! (from userLogout)");
    }

    await axios.delete(logOutUrl, {
        headers: {
            Authorization :accessJWT,
        }
    });
    } catch (error) {
        console.log(error);
    }
}