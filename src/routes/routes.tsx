import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;
