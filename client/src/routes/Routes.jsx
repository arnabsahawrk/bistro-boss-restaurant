import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import ContactPage from "../pages/ContactPage";
import SignIn from "../components/SignIn/SignIn";
import ShopPage from "../pages/ShopPage";
import GuestOnlyRoute from "./GuestOnlyRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/signIn",
        element: (
          <GuestOnlyRoute>
            <SignIn />
          </GuestOnlyRoute>
        ),
      },
      {
        path: "/shop/:category",
        element: <ShopPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorLayout />,
    children: [],
  },
]);

export default router;
