import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [MobileNav, setMobileNav] = useState(false);
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "All Podcasts",
      path: "/all-podcasts",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];
  return (
    <nav className="px-4 md:px-8 lg:px-12 py-2 relative">
      <div className="flex items-center justify-between">
        <div className="logo brand-name w-2/6 flex items-center gap-4">
          <img
            src="https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-podcast-line-icon-vector-png-image_1885977.jpg"
            alt="LOGO"
            className="h-12"
          />
          <Link to="/" className="text-2xl font-bold">
            Podcast
          </Link>
        </div>
        <div className="hidden w-2/6 lg:flex items-center justify-center">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              className="ms-4 hover:font-semibold transition-all duration-300"
            >
              {items.name}
            </Link>
          ))}
        </div>
        <div className="hidden w-2/6 lg:flex items-center justify-end">
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="px-6 py-3 border border-black rounded-full"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="ms-4 px-6 py-3 bg-black text-white rounded-full"
              >
                Signup
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Link
              to="/profile"
              className="ms-4 px-6 py-3 bg-black text-white rounded-full"
            >
              Profile
            </Link>
          )}
        </div>
        <div className="w-4/6 flex items-center justify-end lg:hidden z-50">
          <button
            className={`text-4xl" ${MobileNav ? "rotate-360" : "rotate-180"}
          transition-all duration-300 `}
            onClick={() => setMobileNav(!MobileNav)}
          >
            {MobileNav ? <RxCross2 /> : <IoReorderThreeOutline />}
          </button>
        </div>
      </div>
      {/*Mobile Nav */}
      <div
        className={`fixed w-full h-screen bg-blue-100 top-0 left-0 ${
          MobileNav ? "translate-y-[0%]" : "translate-y-[-100%]"
        } transition-all duration-500`}
      >
        <div className="p-8 flex items-center justify-end text-4xl">
          <button
            onClick={() => setMobileNav(!MobileNav)}
            className="bg-black text-white rounded-full p-2"
          >
            <RxCross2 />
          </button>
        </div>
        <div className="h-full flex flex-col items-center justify-center">
          {" "}
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
            >
              {items.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
          >
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
