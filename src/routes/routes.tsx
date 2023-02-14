import { createBrowserRouter, redirect } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";
import GatewaysPage from "../pages/Gateways/GatewaysPage";
import DevicesPage from "../pages/Devices/DevicesPage";
import DashboardLayout from "../components/templates/DashboardLayout/DashboardLayout";
import { getAllGateways } from "./data/gateways.data";
import CreateGatewayPage from "../pages/Gateways/CreatePage";

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
        index: true,
        element: <IndexPage />,
      },
      {
        path: "gateways",
        children: [
          {
            index: true,
            element: <GatewaysPage />,
            loader: async () => {
              const gateways = await getAllGateways();
              return { gateways };
            },
          },
          {
            path: "create",
            element: <CreateGatewayPage />,
          },
        ],
      },
      {
        path: "/devices",
        element: <DevicesPage />,
      },
    ],
  },
]);

export default router;
