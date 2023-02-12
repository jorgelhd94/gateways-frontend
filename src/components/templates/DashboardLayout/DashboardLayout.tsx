import { ReactNode } from "react";
import LoadingScreen from "../../atoms/preloaders/LoadingScreen/LoadingScreen";
import HeaderDashboard from "../../organisms/HeaderDashboard/HeaderDashboard";
import SidebarDashboard from "../../molecules/SidebarDashboard/SidebarDashboard";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <main className="bg-gray-100 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <SidebarDashboard />
        <div className="flex flex-col w-full md:space-y-4">
          <HeaderDashboard />
          <div className="overflow-y-scroll h-screen pt-4 pb-32">
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
