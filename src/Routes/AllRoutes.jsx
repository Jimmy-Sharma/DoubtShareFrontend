import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/SignUp";
import Dashboard from "../Components/Dashboard";
import History from "../Components/History";
import Profile from "../Components/Profile";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default AllRoutes;