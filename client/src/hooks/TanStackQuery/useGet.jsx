import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";
import useAxiosSecure from "../Axios/useAxiosSecure";
import useFirebase from "../useFirebase";

//Get Menu
export const useGetMenu = (skip, limit) => {
  const axiosPublic = useAxiosPublic();

  const getMenu = async () => {
    try {
      const { data } = await axiosPublic(`/menu?skip=${skip}&limit=${limit}`);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get menu");
    }
  };

  const { data: menu = [], isLoading: menuLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  return { menu, menuLoading };
};

//Get Menu On Category
export const useGetMenuOnCategory = () => {
  const axiosPublic = useAxiosPublic();

  const getMenuOnCategory = async (category) => {
    try {
      const { data } = await axiosPublic(`/menu/c?category=${category}`);
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to get menu on category"
      );
    }
  };

  const {
    mutateAsync: categoryAsync,
    data: menuOnCategory = [],
    isPending: categoryLoading,
  } = useMutation({
    mutationKey: ["menuOnCategory"],
    mutationFn: getMenuOnCategory,
  });

  return { categoryAsync, menuOnCategory, categoryLoading };
};

//Get Reviews
export const useGetReviews = () => {
  const axiosPublic = useAxiosPublic();

  const getReviews = async () => {
    try {
      const { data } = await axiosPublic("/reviews");
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get reviews");
    }
  };

  const { data: reviews = [], isLoading: reviewsLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  return { reviews, reviewsLoading };
};

//Get Cart Data
export const useGetCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user, authLoading } = useFirebase();

  const getCart = async () => {
    try {
      if (user && !!user?.email) {
        const { data } = await axiosSecure.get(`/carts?email=${user.email}`);
        return data;
      }
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get cart data");
    }
  };

  const {
    data: userCartData = [],
    isLoading: userCartLoading,
    refetch: cartRefetch,
  } = useQuery({
    queryKey: ["userCart", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: getCart,
  });

  return { userCartData, userCartLoading, cartRefetch };
};

export const useGetAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, authLoading } = useFirebase();

  const getAdmin = async () => {
    try {
      if (user && !!user?.email) {
        const { data } = await axiosSecure(`/users/admin/${user.email}`);
        return data.admin;
      }
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get admin data");
    }
  };

  const { data: isAdmin = false, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: getAdmin,
  });

  return { isAdmin, isAdminLoading };
};

//get all users data only admin can get this
export const useGetAllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const getAllUsers = async () => {
    try {
      const { data } = await axiosSecure("/allUses/admin");
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to get all users data"
      );
    }
  };

  const { data: allUsers = [], isLoading: isAllUsersLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  });

  return { allUsers, isAllUsersLoading };
};

//get all payment history data
export const useGetPaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user, authLoading } = useFirebase();

  const getPaymentHistory = async () => {
    try {
      if (user && !!user?.email) {
        const { data } = await axiosSecure(`/payment/${user.email}`);
        return data;
      }
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to get payment history"
      );
    }
  };

  const { data: paymentHistory, isLoading: paymentHistoryLoading } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: getPaymentHistory,
  });

  return { paymentHistory, paymentHistoryLoading };
};

//get admin states
export const useGetAdminStats = () => {
  const axiosSecure = useAxiosSecure();

  const getAdminStats = async () => {
    try {
      const { data } = await axiosSecure("/admin/stats");
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get admin-stats");
    }
  };

  const { data: adminStats, isLoading: isLoadingAdminStats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: getAdminStats,
  });

  return { adminStats, isLoadingAdminStats };
};

//get admin states
export const useGetOrderStats = () => {
  const axiosSecure = useAxiosSecure();

  const getOrderStats = async () => {
    try {
      const { data } = await axiosSecure("/admin/orders-stats");
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get order-stats");
    }
  };

  const { data: orderStats, isLoading: isLoadingOrderStats } = useQuery({
    queryKey: ["order-stats"],
    queryFn: getOrderStats,
  });

  return { orderStats, isLoadingOrderStats };
};
