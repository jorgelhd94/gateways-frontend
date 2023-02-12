import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";
import GatewaysPage from "../pages/Gateways/GatewaysPage";
import DevicesPage from "../pages/Devices/DevicesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/gateways",
    element: <GatewaysPage />,
  },
  {
    path: "/devices",
    element: <DevicesPage />,
  },
]);

export default router;
