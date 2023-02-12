import React from "react";
import { faHome, faServer, faLaptop } from "@fortawesome/free-solid-svg-icons";
import NavSidebarLink from "../../atoms/Links/NavSidebarLink/NavSidebarLink";

const SidebarDashboard = () => {
  return (
    <div className="h-screen hidden lg:block ml-0 shadow-lg absolute lg:relative transition delay-500 w-80 z-50">
      <div className="bg-white h-full">
        <div className="flex pt-6 justify-center">
          <p className="font-bold text-xl">Gateways Managment</p>
        </div>
        <nav className="mt-6">
          <div className="flex flex-col">
            <NavSidebarLink name="Home" href="/" icon={faHome} />
            <NavSidebarLink name="Gateways" href="/gateways" icon={faServer} />
            <NavSidebarLink name="Devices" href="/devices" icon={faLaptop} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SidebarDashboard;
