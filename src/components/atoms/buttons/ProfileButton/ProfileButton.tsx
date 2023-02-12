import React from "react";
import UserImg from "../../../../assets/user.svg";

const ProfileButton = () => {
  return (
    <button className="flex items-center bg-white rounded-full hover:shadow-md p-2 text-md shadow">
      <img
        alt="profile"
        src={UserImg}
        width={24}
        className="mx-auto object-cover rounded-full"
      />
    </button>
  );
};

export default ProfileButton;
