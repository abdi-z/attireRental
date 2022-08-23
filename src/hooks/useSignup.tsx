import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const signup = async (
    firstName: any,
    lastName: any,
    email: any,
    password: any,
    phoneNumber: any,
    gender: any
  ) => {
    // setIsLoading(true);
    // setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          gender,
        }),
      });
      const json = await response.json();

      if (!response.ok) {
        // setIsLoading(false);
        // setError(json.error);
      }
      if (response.ok) {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));
        console.log(
          "SETTING localstorage IN REGISTER IS -> " + JSON.stringify(json.email)
        );
        navigate("/attires");
        console.log("The payload2 in signup is " + JSON.stringify(json.email));
        console.log(
          "The type of payload2 is" + typeof JSON.stringify(json.email)
        );
        // update the auth context
        dispatch({
          type: "LOGIN",
          payload: json,
          payload2: json.email,
        });

        // update loading state
        // setIsLoading(false);
      }
    } catch (error) {
      console.log("err caught was btich ->" + error);
    }
  };
  return { signup };
};
