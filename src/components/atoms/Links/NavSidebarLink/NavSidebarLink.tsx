import React, { MouseEventHandler, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { NavLink, useMatch } from "react-router-dom";

type NavSidebarLinkProps = {
  name: string;
  href: string;
  icon: IconDefinition;
  onClick?: MouseEventHandler;
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

  const [isLinkActive] = useState(Boolean(useMatch(props.href)));

  return (
    <NavLink
      to={props.href}
      className={({ isActive }) => {
        return isActive ? activeClass : normalClass;
      }}
      onClick={props.onClick}
    >
      <span className="text-left">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <span
        className={isLinkActive ? textClass + " mx-2" : textClass + " mx-4"}
      >
        {props.name}
      </span>
    </NavLink>
  );
};

export default NavSidebarLink;
