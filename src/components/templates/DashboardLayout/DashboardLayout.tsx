import { createContext, useState } from "react";
import HeaderDashboard from "../../organisms/HeaderDashboard/HeaderDashboard";
import SidebarDashboard from "../../molecules/SidebarDashboard/SidebarDashboard";
import { Outlet, useNavigation } from "react-router-dom";
import TableSkeleton from "../../atoms/Table/TableSkeleton/TableSkeleton";
import SidebarMobile from "../../molecules/SidebarMobile/SidebarMobile";

const DashboardLayout = () => {
  const navigation = useNavigation();
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSidebar = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <main className="bg-gray-100 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <SidebarDashboard />
        <SidebarMobile open={openSideBar} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col w-full md:space-y-4">
          <HeaderDashboard toggleSidebarMobile={toggleSidebar} />
          <div className="overflow-y-scroll h-screen pt-4 pb-32">
            {navigation.state === "loading" ? <TableSkeleton /> : <Outlet />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
