import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";

export const usePostCart = () => {
  const axiosPublic = useAxiosPublic();

  const postCart = async (cartData) => {
    try {
      const { data } = await axiosPublic.post("/carts", cartData);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed To Post Cart Data");
    }
  };

  const { mutateAsync: cartAsync, isPending: cartPending } = useMutation({
    mutationKey: "cartPost",
    mutationFn: postCart,
  });

  return { cartAsync, cartPending };
};
