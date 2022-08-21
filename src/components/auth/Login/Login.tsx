import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //const { login, error, isLoading } = useLogin();
  const { dispatch } = useAuthContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Axios.post("api/users/login", {
      email,
      password,
    })
      .then((token: any) => {
        console.log(token.data);
        localStorage.setItem("user", JSON.stringify(token.data));
        navigate("/");
        setPassword("");
        // update the auth context
        console.log("Payload2 in login is ->" + email);
        console.log("Payload2 is of  ->" + typeof email);
        dispatch({ type: "LOGIN", payload: token.data, payload2: email });
      })
      .catch((error) => {
        if (error.response.status == 400) {
          setError("Email not exist");
        }
        if (error.response.status == 401) {
          setError("Wrong Password");
        }
      });
    setPassword("");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool{" "}
            <Link to="/" color={"blue.400"}>
              features
            </Link>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"} to="/">
                  Forgot password?
                </Link>
              </Stack>

              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
