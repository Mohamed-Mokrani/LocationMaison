import React, { useEffect } from "react";
import Home from "./Home";

import Login from "./Login";

import { Route, Routes, useNavigate } from "react-router-dom";
import AddCard from "./AddCard";
import Mesannonce from "./Mesannonce";
import Update from "./Update";
import PrivateRoute from "../routes/PrivateRoute";
import { useDispatch } from "react-redux";
import { userCurrent } from "../JS/userSlice/userSlice";

const Main = () => {
  const dispatch = useDispatch();
  
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  return (
    <div>
      
      <Routes>
      {/* <Route element={<PrivateRoute />}>
      <Route path="/" element={<Home />} />
        </Route>{" "} */}
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddCard" element={<AddCard />} />
        <Route path="/MesAnnonces" element={<Mesannonce />} />
        <Route path="/Update/:id" element={<Update />} />


      </Routes>
    </div>
  );
};

export default Main;
