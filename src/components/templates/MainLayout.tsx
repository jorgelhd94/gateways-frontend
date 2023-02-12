import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

const MainLayout = (children: ReactNode) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default MainLayout;
