import React, { useEffect, useState } from "react";
import "./user-verification.page.css";
import { useParams } from "react-router-dom";
import { userRegistrationVerification } from "../../api/userApi";
import { Alert, Spinner } from "react-bootstrap";

const initialResponse = {
  status :"",
  message :"",
}

export const UserVerification = () => {

    const {randomUrl, email} = useParams();
    const[response, setResponse] = useState(initialResponse);
    
    useEffect(()=>{
        const apiCall = async () => {
          const result = await userRegistrationVerification({randomUrl, email});
          setResponse(result);
        }
      
        !response.status && apiCall();
    },[response,randomUrl, email]);

    
    return (
        <div className="verification-page bg-info">
            <div className="jumbotron jumbotron-fluid">
              {!response.status && <Spinner variant="info" animation="border" />}

              {response.status && <Alert variant={response.status === "success" ? "success" : "danger"}>{response.message}</Alert>}
              {response.status === "success" ? <a href="/">Go to Login Page</a>: <p></p>}
              {response.status === "error" ? <p>Please check that your are sending the correct link from your confirmation email</p>: <p></p>}
            </div>
        </div>

        )
}