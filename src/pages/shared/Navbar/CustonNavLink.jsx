import React from "react";
import { NavLink } from "react-router";

const CustonNavLink = ({
  to,
  children,
  activeColor = "text-blue-600",
  inactiveColor = "text-gray-700 hover:text-blue-500",
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${activeColor} underline px-3 py-2` : inactiveColor
      }
    >
      {children}
    </NavLink>
  );
};
export default CustonNavLink;
