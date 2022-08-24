import React from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Container,
  Icon,
  IconProps,
  Stack,
  Text,
  Select,
  FormControl,
  Box,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { Link } from "react-router-dom";
export const StageOne = () => {
  const [stateLoc, setStateLoc] = React.useState("");
  const [inputLocation, setInputLocation] = React.useState("");
  const { user, email } = useAuthContext();
  if (!email) {
    return <Navigate to="/earn" replace />;
  }

  const handleInputChange = (sta: any) => {
    setStateLoc(sta);
    console.log(sta);
  };
  return (
    <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
      <Flex minH={"50vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Set Location</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool{" "}
              <Link to="/" color={"blue.400"}>
                features
              </Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <Select
                placeholder="Select option"
                onChange={(e) => handleInputChange(e.target.value)}>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
              </Select>
              <FormControl id="inputLocation">
                <FormLabel>Address:</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setInputLocation(e.target.value)}
                  value={inputLocation}
                  placeholder="123-A, ABC Town, General Town"
                />
              </FormControl>
              <Stack spacing={10}>
                <Link to="/earn/setPrice" state={{stateLoc, inputLocation} }>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}>
                    Continue
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};
