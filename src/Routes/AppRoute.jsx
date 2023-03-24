import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
};
