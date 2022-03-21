import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useReducerContext } from "./Reducer.context";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { dispatch } = useReducerContext();
  const encodedToken = localStorage.getItem("StormKeepToken");
  const [userState, setUserState] = useState([]);

  const login = async (userDetails) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: userDetails.email,
        password: userDetails.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("StormKeepToken", data.encodedToken);
      localStorage.setItem("StormKeepUser", data.foundUser.firstName);
      dispatch({ type: "SUCCESS_TOAST", payload: "Log In Successful" });
    } catch (error) {
      dispatch({ type: "ERROR_TOAST", payload: error.response.data.errors });
    }
  };

  const signup = async (userDetails) => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName: userDetails.user,
        email: userDetails.email,
        password: userDetails.passwordOne,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("StormKeepToken", data.encodedToken);
      localStorage.setItem("StormKeepUser", data.createdUser.firstName);
      dispatch({ type: "SUCCESS_TOAST", payload: "Sign Up Successful" });
    } catch (error) {
      console.log(error);
    }
  };

  const signout = () => {
    dispatch({ type: "ERROR_TOAST", payload: "Logged Out" });
    localStorage.clear();
    setUserState([]);
  };

  const testLogger = async () => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: "admin@gmail.com",
        password: "admin",
      });
      localStorage.setItem("StormKeepToken", data.encodedToken);
      localStorage.setItem("StormKeepUser", data.foundUser.firstName);
      dispatch({ type: "SUCCESS_TOAST", payload: "Log In Successful" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.post("/api/auth/verify", {
          encodedToken: encodedToken,
        });
        setUserState(data);
        console.log(userState);
      } catch (error) {}
    })();
  }, [encodedToken]);

  return (
    <AuthContext.Provider
      value={{ login, signup, signout, testLogger, userState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
