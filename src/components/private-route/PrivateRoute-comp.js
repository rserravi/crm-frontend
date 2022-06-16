import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation} from "react-router-dom";
import { loginSuccess } from "../login/loginSlice";
import { DefaultLayout } from "../../layout/Default-Layout";
import { fetchNewAccessJWT } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (children, ...rest) => {
  
  const dispatch = useDispatch();
  const {isAuth} = useSelector(state => state.login);
  const {user} = useSelector(state => state.user);
  const location = useLocation().pathname;

  useEffect(()=>{
    const udpdateAccessJWT = async() =>{
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };
   
    !sessionStorage.getItem("accessJWT") && localStorage.getItem("crmSite") && udpdateAccessJWT();
    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
    !user._id && isAuth && dispatch(getUserProfile());
    
  },[dispatch, isAuth, user._id]);

    if (isAuth) return (
      <Routes>
          <Route {...rest} element={<DefaultLayout>{children.element}</DefaultLayout>} path={children.path} />
      </Routes>
    )
    if (location !== "/" && location !=="/registration" && location.substring(0,13) !=="/verification"){
      return(
        <Navigate to= "/"></Navigate>
      )
    }
};