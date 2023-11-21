import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();
  const {
    isPending,
    refetch,
    data: cart = [],
  } = useQuery({
    //    queryKey must be unique
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch, isPending];
};

export default useCart;
