import PropTypes from "prop-types";
import { createContext, useCallback, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/Axios/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  //Google Sign In
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Sign Out
  const signOutUser = () => {
    return signOut(auth);
  };

  //Save User In DB
  const saveUser = useCallback(
    async (user) => {
      const currentUser = {
        name: user?.displayName,
        email: user?.email,
        role: "Guest",
        status: "verified",
      };

      const { data } = await axiosPublic.put("/users", currentUser);
      return data;
    },
    [axiosPublic]
  );

  //Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        saveUser(currentUser);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [saveUser]);

  const AuthInfo = {
    user,
    authLoading,
    signInWithGoogle,
    signOutUser,
    setAuthLoading,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
