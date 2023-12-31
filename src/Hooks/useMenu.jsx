import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();

  const {
    isPending,
    refetch,
    data: menus = [],
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menus");
      return res.data;
    },
  });

  return [menus, isPending, refetch];
};

export default useMenu;
