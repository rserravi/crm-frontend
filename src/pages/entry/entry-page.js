import React, {useState} from 'react';

import { LoginForm } from '../../components/login/login-comp';
import { ResetPassword } from '../../components/password-reset/passwordReset-comp';

import './entry-style.css';
export const Entry = () =>{

    const [frmLoad, setFrmLoad] = useState("login");

    const handleOnResetSubmit = e =>{
        e.preventDefault();
    }


    const formSwitcher = (frmType) => {
        setFrmLoad(frmType);
    }

    return (
        <div className="entry-page bg-info">
            <div className="jumbotron jumbotron-fluid">
                {frmLoad === 'login' && 
                    <LoginForm 
                        formSwitcher={formSwitcher}
                    />
                }
                    
                {frmLoad === 'reset' &&
                    <ResetPassword
                        handleOnResetSubmit={handleOnResetSubmit}
                        formSwitcher={formSwitcher}
                    />
                }
            </div>
        </div>
    )          
}