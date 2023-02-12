import React from "react";

const ProfileMenu = () => {
  return (
    <div
      className="py-1 "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <a
        href="#"
        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        <span className="flex flex-col">
          <span>Logout</span>
        </span>
      </a>
    </div>
  );
};

export default ProfileMenu;
