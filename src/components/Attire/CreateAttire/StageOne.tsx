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
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { Link } from "react-router-dom";
const StageOne = () => {
  const { user, email } = useAuthContext();
  if (email) {
    return <Navigate to="/earn" replace />;
  }
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: { base: "20%", md: "30%" },
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
              color={"black.800"}>
              Lets get started,
            </Text>
            <br /> Set up your{" "}
            <Text color={"red.400"} as={"span"}>
              Location
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Set up the location you want the potential renter to show up to
            receive the attire
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link to="/attires" state={user}>
              <Button
                rounded={"full"}
                bg={"red.400"}
                color={"white"}
                _hover={{
                  bg: "red.800",
                }}>
                Checkout Attires
              </Button>
            </Link>

            <Button rounded={"full"}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          padding={3}
          alt={"Login Image"}
          objectFit={"cover"}
          src={process.env.PUBLIC_URL + `/img/hp.jpg`}
        />
      </Flex>
    </Stack>
  );
};

export default StageOne;
