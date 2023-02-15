import { createBrowserRouter, redirect } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";
import GatewaysPage from "../pages/Gateways/GatewaysPage";
import DevicesPage from "../pages/Devices/DevicesPage";
import DashboardLayout from "../components/templates/DashboardLayout/DashboardLayout";
import { getAllGateways, getGatewayById } from "./data/gateways.data";
import HttpAdapter from "../utils/HttpAdapter";
import CreateEditGatewayPage from "../pages/Gateways/CreateEditGatewayPage";
import DetailsGatewayPage from "../pages/Gateways/DetailsGatewayPage";
import { getAllDevices, getDeviceByGateway } from "./data/devices.data";
import DetailsDevicePage from "../pages/Devices/DetailsDevicePage";
import CreateDevicePage from "../pages/Devices/CreateDevicePage";
import EditDevicePage from "../pages/Devices/EditDevicePage";

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
            element: <CreateEditGatewayPage />,
          },
          {
            path: ":gatewayId",
            element: <DetailsGatewayPage />,
            loader: async ({ params }) => {
              if (params.gatewayId) {
                const gateway = await getGatewayById(params.gatewayId);
                return { gateway };
              }
              return {};
            },
          },
          {
            path: ":gatewayId/edit",
            element: <CreateEditGatewayPage isEdit />,
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
        children: [
          {
            index: true,
            element: <DevicesPage />,
            loader: async () => {
              const devices = await getAllDevices();
              return { devices };
            },
          },
          {
            path: "create",
            element: <CreateDevicePage />,
            loader: async () => {
              const gateways = await getAllGateways();
              return { gateways };
            },
          },
          {
            path: "create/:gatewayId",
            element: <CreateDevicePage />,
            loader: async ({ params }) => {
              const gateways = await getAllGateways();

              if (params.gatewayId) {
                return { gateways, gatewayId: params.gatewayId };
              }

              return { gateways };
            },
          },
          {
            path: ":gatewayId/edit/:deviceId",
            element: <EditDevicePage />,
            loader: async ({ params }) => {
              if (params.gatewayId && params.deviceId) {
                const gateways = await getAllGateways();
                const device = await getDeviceByGateway(
                  params.gatewayId,
                  params.deviceId
                );
                return { gateways, device, gatewayId: params.gatewayId };
              }

              return {};
            },
          },
          {
            path: ":gatewayId/:deviceId",
            element: <DetailsDevicePage />,
            loader: async ({ params }) => {
              if (params.gatewayId && params.deviceId) {
                const device = await getDeviceByGateway(
                  params.gatewayId,
                  params.deviceId
                );
                return { device };
              }
              return {};
            },
          },
        ],
      },
    ],
  },
]);

export default router;
