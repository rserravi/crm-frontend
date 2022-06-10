import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes} from "react-router-dom";
import { loginSuccess } from "../login/loginSlice";
import { DefaultLayout } from "../../layout/Default-Layout";
import { Entry } from "../../pages/entry/entry-page";
import { fetchNewAccessJWT } from "../../api/userApi";

export const PrivateRoute = (children, ...rest) => {
  
  const dispatch = useDispatch();
  const {isAuth} = useSelector(state => state.login);

  useEffect(()=>{
    const udpdateAccessJWT = async() =>{
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    }
    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());

  },[dispatch]);

    if (isAuth) return (
      <Routes>
          <Route {...rest} element={<DefaultLayout>{children.element}</DefaultLayout>} path={children.path} />
      </Routes>
    )

    return (
      <Entry />
      )
};