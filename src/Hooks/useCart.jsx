import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
 
 
const useCart = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useContext(AuthContext);
    const {refetch:againFetch, data: addToCart = [] } = useQuery(
        {
            queryKey: ['cart',user?.email],
            queryFn: async () => {
                const res=await axiosSecure.get(`/carts?email=${user.email}`)
                console.log(res.data,'res.data')
                return res.data
            }
        }
    )
    return [addToCart,againFetch ]
};

export default useCart;