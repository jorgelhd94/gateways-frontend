import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";


type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      {props.children}
      <ToastContainer />
    </>
  );
};

export default MainLayout;
