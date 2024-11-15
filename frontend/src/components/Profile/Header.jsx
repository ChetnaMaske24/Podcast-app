import React from "react";

const Header = () => {
  return (
    <div className="bg-green-900 rounded py-8 flex flex-col md:flex-row  items-center justify-center gap-4 md:justify-between px-4 lg:px-12">
      <div className="flex flex-col items-center md:items-start">
        <p className="text-zinc-300">Profile</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-zinc-100 font-bold text-center">
          The Podcast
        </h1>
        <p className=" text-zinc-300 mt-1">chetna@gmail.com</p>
      </div>
      <div>
        <button className=" bg-white px-4 py-2 rounded text-zinc-200 font-semibold hover:shadow-xl transition-all duration-300">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
