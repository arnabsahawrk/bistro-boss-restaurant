import axios from "axios";
import useFirebase from "../useFirebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});
const useAxiosSecure = () => {
  const { signOutUser } = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          localStorage.removeItem("access-token");
          await signOutUser();
          navigate("/signIn");
        }
        return Promise.reject(err);
      }
    );
  }, [signOutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
