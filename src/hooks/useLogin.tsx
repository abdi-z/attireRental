import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email: any, password: any) => {
    setIsLoading(true);
    setError(null);
    //debugging
    console.log(
      "email is->" + email,
      "password is->" + password,
      "  Object is:" + JSON.parse(email)
    );
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("this is response" + response);
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
        console.log("response is not OK");
      }
      if (response.ok) {
        // save the user to local storage
        console.log("the localt storage in login is->" + JSON.stringify(json));
        localStorage.setItem("user", JSON.stringify(json));
        console.log("response is OK");

        // update the auth context
        dispatch({ type: "LOGIN", payload: json });

        // update loading state
        setIsLoading(false);
      }
    } catch (error) {
      console.log("err caught was btich ->" + error);
    }
  };
  return { login, isLoading, error };
};
