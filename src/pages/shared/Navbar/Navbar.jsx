import React from "react";
import CustonNavLink from "./CustonNavLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <CustonNavLink to={"/"}>Services</CustonNavLink>
      </li>
      <li>
        <CustonNavLink to="/coverage">Coverage</CustonNavLink>
      </li>

      <li>
        <CustonNavLink to="/about">About Us</CustonNavLink>
      </li>
      <li>
        <CustonNavLink to="/pricing">Pricing</CustonNavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
