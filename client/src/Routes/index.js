import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Protected from "./Protected";
import Home from "../layout/Home/Home";
import News from "../layout/News/News";
// import Love from "../layout/Love/Love";
import About from "../layout/About/About";
import Login from "../layout/FormLogin/Login";

export default (
    <Routes>
        <Route
            path="/"
            element={<Home />}
        />
        <Route
            path="/login"
            element={<Login />}
        />
        {/* <Route element={<Protected />}> */}
            {/* <Route
                path="/test"
                element={<Love />}
            /> */}
            <Route
                path="/news"
                element={<News />}
            />
            <Route
                path="/about"
                element={<About />}
            />
        {/* </Route> */}
    </Routes>
)
