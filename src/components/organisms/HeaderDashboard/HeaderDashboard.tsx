import React from "react";
import ButtonBurger from "../../atoms/Buttons/ButtonBurger/ButtonBurger";
import GithubLink from "../../atoms/Links/GithubLink/GithubLink";
import ProfileMenu from "../../molecules/Profile/ProfileMenu/ProfileMenu";
import ProfileComponent from "../../molecules/Profile/ProfileComponent/ProfileComponent";

const HeaderDashboard = () => {
  return (
    <header className="w-full h-16 z-40 flex items-center justify-between">
      <ButtonBurger />

      <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
        <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
          <GithubLink />

          <ProfileComponent />
          {/* Profile */}
          {/* <button
            className="flex items-center text-gray-500 dark:text-white text-md"
            ref={dropDownRef}
            onClick={toogleDropdown}
          >
            <Image
              alt="profil"
              src="/assets/img/user.svg"
              width={30}
              height={30}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
            <svg
              width="20"
              height="20"
              className="ml-2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </svg>
          </button>

          <div id="options-menu" className="absolute">
            {openDropdown && (
          
            )}
          </div>
           */}
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
