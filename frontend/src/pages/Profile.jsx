import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import Header from "../components/Profile/Header";
import YourPodcasts from "../components/Profile/YourPodcasts";

const Profile = () => {
  const isLoggeddIn = useSelector((state) => state.auth.isLoggeIn);
  return (
    <div>
      {isLoggeddIn ? (
        <>
          <Header />
          <YourPodcasts />
        </>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Profile;
