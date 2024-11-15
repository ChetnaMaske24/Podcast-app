import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import Header from "../components/Profile/Header";

const Profile = () => {
  const isLoggeddIn = useSelector((state) => state.auth.isLoggeIn);
  return (
    <div>
      {isLoggeddIn ? (
        <>
          <Header />
        </>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Profile;
