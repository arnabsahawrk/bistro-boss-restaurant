import { useQuery } from "@tanstack/react-query";
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
