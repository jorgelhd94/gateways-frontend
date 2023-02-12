import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
