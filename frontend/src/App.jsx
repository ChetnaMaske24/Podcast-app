import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./layout/AuthLayoutLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {" "}
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signup" element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
