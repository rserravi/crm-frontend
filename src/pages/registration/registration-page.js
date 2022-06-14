import React from "react";
import RegistrationForm from "../../components/registration-form/registration-form";
import "./registration-page.css";

export const Registration = () => {
    return (
        <div className="registration-page bg-info">
            <div className="jumbotron jumbotron-fluid">
               <RegistrationForm />
            </div>
        </div>
        )
}