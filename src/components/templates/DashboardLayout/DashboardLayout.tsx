import { ReactNode } from "react";
import LoadingScreen from "../../atoms/preloaders/LoadingScreen/LoadingScreen";
import MainLayout from "../MainLayout/MainLayout";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <>
      {props.children}
      <LoadingScreen />
    </>
  );
};

export default DashboardLayout;
