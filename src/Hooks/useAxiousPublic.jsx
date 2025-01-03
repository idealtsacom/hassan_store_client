import axios from "axios";
import { VITE_SERVER } from "../util/constants";

const axiousPublic =axios.create({
    baseURL:VITE_SERVER
})
 
const useAxiousPublic = () => {
    return axiousPublic
};

export default useAxiousPublic; 
 