import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";
import useAxiosSecure from "../Axios/useAxiosSecure";

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

  const getCart = async (email) => {
    try {
      const { data } = await axiosSecure.get(`/carts?email=${email}`);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get cart data");
    }
  };

  const {
    mutateAsync: cartGetAsync,
    data: userCartData = [],
    isPending: userCartPending,
  } = useMutation({
    mutationKey: ["userCart"],
    mutationFn: getCart,
  });

  return { cartGetAsync, userCartData, userCartPending };
};
