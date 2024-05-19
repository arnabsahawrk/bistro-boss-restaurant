import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Axios/useAxiosCommon";

//Get Menu
export const useGetMenu = (skip, limit) => {
  const axiosCommon = useAxiosCommon();

  const getMenu = async () => {
    try {
      const { data } = await axiosCommon(`/menu?skip=${skip}&limit=${limit}`);
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
  const axiosCommon = useAxiosCommon();

  const getMenuOnCategory = async (category) => {
    try {
      const { data } = await axiosCommon(`/menu/c?category=${category}`);
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
    isLoading: categoryLoading,
  } = useMutation({
    mutationKey: ["menuOnCategory"],
    mutationFn: getMenuOnCategory,
  });

  return { categoryAsync, menuOnCategory, categoryLoading };
};

//Get Reviews
export const useGetReviews = () => {
  const axiosCommon = useAxiosCommon();

  const getReviews = async () => {
    try {
      const { data } = await axiosCommon("/reviews");
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
