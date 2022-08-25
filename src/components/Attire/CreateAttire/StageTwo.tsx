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
  IconButton,
  Input,
  Progress,
  Tooltip,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
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
    <Container maxW={"7xl"}>
      <Progress value={66} height="2rem" colorScheme="pink" mt={10} />
      <Text color={"white"} style={{position:"absolute", top:"23%", left:"50%"}}>66%</Text>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 21 }}
        direction={{ base: "column", md: "row" }}
        mx={10}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}>
              Price your attire!💰
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              {/* use everywhere! */}
            </Text>
          </Heading>

          <Stack spacing={2}>
            <FormControl id="actualPrice">
              <FormLabel>
                Actual Price:{" "}
                <Tooltip
                  fontSize="md"
                  label="This the actual cash you will get to keep after the attire is returned."
                  aria-label="A tooltip">
                  <QuestionOutlineIcon />
                </Tooltip>
              </FormLabel>
              <Input
                type="text"
                onChange={(e) => setActualPrice(e.target.value)}
                value={actualPrice}
                placeholder="e.g. 1000"
              />
            </FormControl>
            <FormControl id="securityFee">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <FormLabel>
                  Security Fee:{" "}
                  <Tooltip
                    fontSize="md"
                    label="This is the security which will be initially paid by the renter to you but will be returned by you once the attire is returned by the renter."
                    aria-label="A tooltip">
                    <QuestionOutlineIcon />
                  </Tooltip>
                </FormLabel>
                {parseInt(actualPrice) > 0 ? (
                  <Text color={"grey"}>
                    {" "}
                    Recommended Security Fee: Rs. {Number(actualPrice) *
                      10}{" "}
                  </Text>
                ) : (
                  <div></div>
                )}
              </div>

              <Input
                type="text"
                onChange={(e) => setSecurityFee(e.target.value)}
                value={securityFee}
                placeholder="e.g. 14500"
              />
            </FormControl>
            <FormControl id="upFrontPayment">
              <FormLabel>
                Upfront Payment:{" "}
                <Tooltip
                  fontSize="md"
                  label="This is the total amount renter will pay upfront to you to rent the attire."
                  aria-label="A tooltip">
                  <QuestionOutlineIcon />
                </Tooltip>
              </FormLabel>
              Rs. {upFrontPayment}
            </FormControl>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}>
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
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}>
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            // boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}>
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://img.freepik.com/free-vector/happy-rich-banker-celebrating-income-growth_74855-5867.jpg?w=996&t=st=1661446249~exp=1661446849~hmac=f24804ca1d68af607045f1387da15c62190e64fc372d1c0e8ecc203ab8e79c8f"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default StageTwo;
