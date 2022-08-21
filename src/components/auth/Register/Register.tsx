import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

import Axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSignup } from "../../../hooks/useSignup";

const Register = () => {
  const { dispatch } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDrink, setSelectedDrink] = useState<String>();
  // const [accountCreationDate, setAccountCreationDate] = useState("");
  const [gender, setGender] = useState("");
  const { signup } = useSignup();
  const navigate = useNavigate();

  const handleInputChange = (gend: any) => {
    setGender(gend);
    console.log(gender);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signup(firstName,lastName,email,password,phoneNumber,gender);
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="phoneNumber" isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="gender">
                  <label>
                    <div>
                      <input
                        type="radio"
                        value={"Male"}
                        name={"Male"}
                        onChange={(e) => handleInputChange("Male")}
                        checked={"Male" === gender}
                      />
                      {"Male"}
                    </div>
                  </label>

                  <label>
                    <div>
                      <input
                        type="radio"
                        value={"Female"}
                        name={"Female"}
                        onChange={(e) => handleInputChange("Female")}
                        checked={"Female" === gender}
                      />
                      {"Female"}
                    </div>
                  </label>

                  <label>
                    <div>
                      <input
                        type="radio"
                        value={"Non-binary"}
                        name={"Non-binary"}
                        onChange={(e) => handleInputChange("Non-binary")}
                        checked={"Non-binary" === gender}
                      />
                      {"Non-binary"}
                    </div>
                  </label>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} to="/login">
                  {" "}
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
