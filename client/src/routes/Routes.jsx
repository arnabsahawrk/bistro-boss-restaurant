import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import ContactPage from "../pages/ContactPage";
import SignIn from "../components/SignIn/SignIn";
import ShopPage from "../pages/ShopPage";
import UserLoginRoute from "./UserLoginRoute";

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
          <UserLoginRoute>
            <SignIn />
          </UserLoginRoute>
        ),
      },
      {
        path: "/shop/:category",
        element: <ShopPage />,
      },
    ],
  },
]);

export default router;
