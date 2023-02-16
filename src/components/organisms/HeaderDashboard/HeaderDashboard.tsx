import React, { MouseEventHandler } from "react";
import ButtonBurger from "../../atoms/Buttons/ButtonBurger/ButtonBurger";
import GithubLink from "../../atoms/Links/GithubLink/GithubLink";
import ProfileMenu from "../../molecules/Profile/ProfileMenu/ProfileMenu";
import ProfileComponent from "../../molecules/Profile/ProfileComponent/ProfileComponent";

const HeaderDashboard = (props: { toggleSidebarMobile: MouseEventHandler }) => {
  return (
    <header className="w-full h-16 z-40 flex items-center justify-between">
      <ButtonBurger click={props.toggleSidebarMobile} />

      <div className="relative z-20 flex flex-col justify-center h-full px-3 md:w-full">
        <div className="relative p-1 flex items-center w-full space-x-4 justify-center md:justify-end">
          <GithubLink />
          <ProfileComponent />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
