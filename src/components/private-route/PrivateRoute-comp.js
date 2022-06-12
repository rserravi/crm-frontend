import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes} from "react-router-dom";
import { loginSuccess } from "../login/loginSlice";
import { DefaultLayout } from "../../layout/Default-Layout";
import { Entry } from "../../pages/entry/entry-page";
import { fetchNewAccessJWT } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const PrivateRoute = (children, ...rest) => {
  
  const dispatch = useDispatch();
  const {isAuth} = useSelector(state => state.login);
  const {user} = useSelector(state => state.user);

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
    return (
      <Entry />
      )
};