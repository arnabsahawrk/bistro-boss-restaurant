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
import AdminLayout from "../layouts/AdminLayout";
import UserHomePage from "../pages/Dashboard/UserHomePage";
import MyCartPage from "../pages/Dashboard/MyCartPage";
import AdminRoute from "./AdminRoute";
import AdminHomePage from "../pages/Admin/AdminHomePage";
import AllUsersPage from "../pages/Admin/AllUsersPage";
import PaymentPage from "../pages/Dashboard/PaymentPage";
import PaymentHistoryPage from "../pages/Dashboard/PaymentHistoryPage";

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
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <UserHomePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myCart",
        element: (
          <PrivateRoute>
            <MyCartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistoryPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
      </PrivateRoute>
    ),
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHomePage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/allUsers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsersPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
