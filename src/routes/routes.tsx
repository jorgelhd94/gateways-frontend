import { createBrowserRouter, redirect } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";
import GatewaysPage from "../pages/Gateways/GatewaysPage";
import DevicesPage from "../pages/Devices/DevicesPage";
import DashboardLayout from "../components/templates/DashboardLayout/DashboardLayout";
import { getAllGateways, getGatewayById } from "./data/gateways.data";
import CreateGatewayPage from "../pages/Gateways/CreatePage";
import HttpAdapter from "../utils/HttpAdapter";
import EditGatewayPage from "../pages/Gateways/EditPage";

const httpAdapter = HttpAdapter.getInstance();

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const token = localStorage.getItem("user_token");
      if (token) {
        await httpAdapter.get("auth/access", {}, token).catch(() => {
          throw redirect("auth");
        });
      } else {
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
          {
            path: ":gatewayId/edit",
            element: <EditGatewayPage />,
            loader: async ({ params }) => {
              if (params.gatewayId) {
                const gateway = await getGatewayById(params.gatewayId);
                return { gateway };
              }

              return {};
            },
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
