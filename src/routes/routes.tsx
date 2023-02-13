import { createBrowserRouter, redirect } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";
import GatewaysPage from "../pages/Gateways/GatewaysPage";
import DevicesPage from "../pages/Devices/DevicesPage";
import DashboardLayout from "../components/templates/DashboardLayout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    loader: () => {
      const token = localStorage.getItem("user_token");

      if (!token) {
        throw redirect("auth");
      }

      return {};
    },
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/gateways",
        element: <GatewaysPage />,
      },
      {
        path: "/devices",
        element: <DevicesPage />,
      },
    ],
  },
]);

export default router;
