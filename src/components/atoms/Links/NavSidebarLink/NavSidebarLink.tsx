import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

type NavSidebarLinkProps = {
  name: string;
  href: string;
  icon: IconDefinition;
};

const NavSidebarLink = (props: NavSidebarLinkProps) => {
  const defaultClass =
    "w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start";
  const normalClass =
    defaultClass +
    " text-gray-400 hover:text-gray-800 border-l-4 border-transparent";
  const activeClass =
    defaultClass + " text-gray-800 border-l-4 border-blue-500";

  const textClass = "text-sm font-normal";

  const [isActive, setIsActive] = useState(false);
  return (
    <NavLink
      to={props.href}
      className={({ isActive }) => {
        setIsActive(isActive);
        return isActive ? activeClass : normalClass;
      }}
    >
      <span className="text-left">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <span className={isActive ? textClass + " mx-2" : textClass + " mx-4"}>
        {props.name}
      </span>
    </NavLink>
  );
};

export default NavSidebarLink;
