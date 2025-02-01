import React from "react";
import { useSelector } from "react-redux";
import InputPodcast from "../components/AddPodcast/InputPodcast";
import ErrorPage from "./ErrorPage";

const AddPodcast = () => {
  const isLoggeddIn = useSelector((state) => state.auth.isLoggeIn);
  return <div>{isLoggeddIn ? <InputPodcast /> : <ErrorPage />}</div>;
};

export default AddPodcast;
