import React, { MouseEventHandler } from "react";
import UserImg from "../../../../assets/user.svg";

type ProfileButtonProps = {
  onClick: MouseEventHandler;
};

const ProfileButton = (props: ProfileButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center bg-white rounded-full hover:shadow-md p-2 text-md shadow"
    >
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
