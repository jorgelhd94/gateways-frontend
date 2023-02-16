import { MouseEventHandler, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faHome,
  faLaptop,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import NavSidebarLink from "../../atoms/Links/NavSidebarLink/NavSidebarLink";

type SidebarMobileProps = {
  toggleSidebar: MouseEventHandler;
  open: boolean;
};

const SidebarMobile = (props: SidebarMobileProps) => {
  const defaultStyle =
    "h-screen lg:hidden ml-0 shadow-lg absolute lg:relative transition delay-500 w-80 z-50 ";
  const hidden = !props.open ? "-ml-96" : "w-screen";
  const style = defaultStyle + " " + hidden;


  return (
    <div className={style}>
      <div className="bg-white h-full">
        <div className="flex items-start justify-between pt-6 mx-8">
          <p className="font-bold text-xl">G.M.S</p>
          <button
            onClick={props.toggleSidebar}
            // eslint-disable-next-line prettier/prettier
            className="flex px-2 py-1 lg:hidden items-center rounded-xl text-white bg-blue-400 shadow text-md"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <nav className="mt-6">
          <div>
            <NavSidebarLink
              name="Home"
              href="/"
              icon={faHome}
              onClick={props.toggleSidebar}
            />
            <NavSidebarLink
              name="Gateways"
              href="/gateways"
              icon={faServer}
              onClick={props.toggleSidebar}
            />
            <NavSidebarLink
              name="Devices"
              href="/devices"
              icon={faLaptop}
              onClick={props.toggleSidebar}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SidebarMobile;
