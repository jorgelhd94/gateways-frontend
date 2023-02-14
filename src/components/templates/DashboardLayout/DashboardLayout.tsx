import { ReactNode } from "react";
import HeaderDashboard from "../../organisms/HeaderDashboard/HeaderDashboard";
import SidebarDashboard from "../../molecules/SidebarDashboard/SidebarDashboard";
import { Outlet, useNavigation } from "react-router-dom";
import TableSkeleton from "../../atoms/Table/TableSkeleton/TableSkeleton";

const DashboardLayout = () => {
  const navigation = useNavigation();
  return (
    <main className="bg-gray-100 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <SidebarDashboard />
        <div className="flex flex-col w-full md:space-y-4">
          <HeaderDashboard />
          <div className="overflow-y-scroll h-screen pt-4 pb-32">
            {navigation.state === "loading" ? <TableSkeleton /> : <Outlet />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
