import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
]);

export default router;
