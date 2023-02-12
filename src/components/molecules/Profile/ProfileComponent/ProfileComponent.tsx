import React, { useState } from "react";
import ProfileButton from "../../../atoms/buttons/ProfileButton/ProfileButton";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const ProfileComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <ProfileButton onClick={toggleMenu} />

      {isMenuOpen && (
        <div className="origin-top-right absolute top-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ProfileMenu />
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
