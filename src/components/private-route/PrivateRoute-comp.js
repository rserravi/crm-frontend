import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../../layout/Default-Layout";
import { Entry } from "../../pages/entry/entry-page";

const isAuth = true; //Temporal, hasta que implementemos login

export const PrivateRoute = (children, ...rest) => {
    if (isAuth) return (
      <Routes>
          <Route {...rest} element={<DefaultLayout>{children.element}</DefaultLayout>} path={children.path} />
      </Routes>
    )
    return (<Entry />)
};