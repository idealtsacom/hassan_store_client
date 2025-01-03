import useAxiousPublic from "./useAxiousPublic";
import { useQuery } from "@tanstack/react-query";

const useItems = () => {
  const axiousPublic = useAxiousPublic();

  const {
    data: items = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await axiousPublic.get("/products");
      return res.data;
    },
    // staleTime:  1, // 5 minutes
    // cacheTime:  10, // 10 minutes
  });

  return [items, refetch, loading];
};

export default useItems;

