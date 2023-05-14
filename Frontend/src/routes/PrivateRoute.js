import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");

  const navigate = useNavigate();
 
  return isAuth === undefined ? navigate("/") : <Outlet />;
};

export default PrivateRoute;
