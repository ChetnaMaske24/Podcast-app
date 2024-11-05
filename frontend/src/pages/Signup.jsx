import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-screen bg-green-100 flex items-center justify-center">
      <div className="w-3/6 bg-green-900 flex flex-col items-center justify-center">
        <Link to="/" className="text-2xl font-semibold">
          PODCASTER
        </Link>
        <div className="mt-6">
          <div className="mt-6 w-full">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
