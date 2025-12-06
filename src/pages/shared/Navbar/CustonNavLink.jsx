import React from "react";
import { NavLink } from "react-router";

const CustonNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-blue-600 underline px-3 py-2" : "text-gray-700"
      }
    >
      {children}
    </NavLink>
  );
};

export default CustonNavLink;
