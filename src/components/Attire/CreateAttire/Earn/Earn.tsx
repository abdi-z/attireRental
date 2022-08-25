import React from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Earn.module.css";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
const Earn = () => {
  const { user, email } = useAuthContext();
  return (
    <>
      {!email ? (
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
          <Flex flex={1} align={"center"} justify={"center"} m={5}>
            <Box boxSize="md">
              <Stack
                spacing={8}
                w={"full"}
                style={{ backgroundColor: "white" }}
                p={10}>
                <Heading fontSize={{ base: "7xl", md: "7xl", lg: "5xl" }}>
                  <Text as={"div"} color={"black.800"}>
                    Login Required
                  </Text>
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                  You need to be logged in order to post your attire and start
                  earning money.
                </Text>
                <Stack direction={{ base: "column", md: "row" }} spacing={5}>
                  <Flex
                    p={4}
                    flex={1}
                    align={"center"}
                    justify={"space-around"}>
                    <Link to="/register">
                      <Button
                        rounded={"full"}
                        bg={"red.400"}
                        color={"white"}
                        _hover={{
                          bg: "red.800",
                        }}>
                        Sign Up
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button rounded={"full"}>Take me Back</Button>
                    </Link>
                  </Flex>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      ) : (
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
          <Flex
            flex={1}
            align={"center"}
            justify={"center"}
            m={5}
            className={styles.outbox}>
            <Box boxSize="md">
              <Stack spacing={8}>
                <Heading fontSize={{ base: "7xl", md: "7xl", lg: "5xl" }}>
                  <Text as={"div"} color={"black.800"} textAlign={"center"}>
                    Hurray!
                  </Text>
                </Heading>
                <Text fontSize={{ base: "lg", lg: "lg" }} color={"gray.500"}>
                  You just took your first step to contribute to the comm-
                  unity. Let's get those dust eating dresses out and put them to
                  use
                </Text>
                <Text fontSize={{ base: "md", md: "sm" }} color={"gray.500"}>
                  <b>
                    Disclaimer <QuestionOutlineIcon mb={0.5}/>{" "}
                  </b>{" "}
                  Resigna and its affiliated companies are not responsible for
                  any loss or damage caused by the use of this service. By continuing,
                  you agree to the <a href="https://" target="_none">terms and conditions of this service</a>.
                </Text>
                <Stack direction={{ base: "column", md: "row" }} spacing={5}>
                  <Flex
                    p={4}
                    flex={1}
                    align={"center"}
                    justify={"space-around"}>
                    <Link to="/earn/setLocation">
                      <Button
                        rounded={"full"}
                        bg={"red.400"}
                        color={"white"}
                        _hover={{
                          bg: "red.800",
                        }}>
                        Continue
                      </Button>
                    </Link>
                  </Flex>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      )}
    </>
  );
};

export default Earn;
