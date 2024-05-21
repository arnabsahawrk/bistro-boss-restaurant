import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

const useFirebase = () => {
  const authIfo = useContext(AuthContext);
  return authIfo;
};

export default useFirebase;
