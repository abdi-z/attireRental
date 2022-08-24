import React, { useState } from "react";
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

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const StageTwo = () => {
  const { stateLoc, inputLocation }: any = useLocation().state;
  const [actualPrice, setActualPrice] = useState("");
  const [securityFee, setSecurityFee] = useState("");
  const [upFrontPayment, setUpFrontPayment] = useState(0);

  React.useEffect(() => {
    setUpFrontPayment(Number(actualPrice) + Number(securityFee));
  }, [actualPrice, securityFee]);

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
              <FormControl id="inputLocation">
                <FormLabel>Actual Price:</FormLabel>
                <Input
                  type="number"
                  onChange={(e) => setActualPrice(e.target.value)}
                  value={actualPrice}
                  placeholder="e.g 1000"
                />
              </FormControl>
              <FormControl id="inputLocation">
                <FormLabel>Security Fee:</FormLabel>
                <Input
                  type="number"
                  onChange={(e) => setSecurityFee(e.target.value)}
                  value={securityFee}
                  placeholder="e.g 49999"
                />
              </FormControl>
              <FormControl id="inputLocation">
                <FormLabel>Upfront Payment:</FormLabel>
                {upFrontPayment}
              </FormControl>
              <Stack spacing={10}>
                <Link
                  to="/earn/setDetails"
                  state={{
                    stateLoc,
                    inputLocation,
                    actualPrice,
                    securityFee,
                    upFrontPayment,
                  }}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={() =>
                      console.log(
                        stateLoc,
                        inputLocation,
                        actualPrice,
                        securityFee,
                        upFrontPayment
                      )
                    }>
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

export default StageTwo;
