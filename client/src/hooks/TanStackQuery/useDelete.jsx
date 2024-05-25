import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

export const useCartDelete = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const deleteCart = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/carts?id=${id}`);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to delete cart");
    }
  };

  const { mutateAsync: cartDeleteAsync, isPending: cartDeletePending } =
    useMutation({
      mutationKey: ["deleteCart"],
      mutationFn: deleteCart,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["userCart"] });
      },
    });
  return { cartDeleteAsync, cartDeletePending };
};
