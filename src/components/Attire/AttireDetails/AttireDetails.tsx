import React from "react";
import tshirt from "../../../images/tshirt.jpg";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AttireDetails = () => {
  const { id } = useParams();
  // const attire: any = useLocation().state;

  const [attire, setAttire] = React.useState<any>({});
  const [user, setUser] = React.useState<any>({});
  const [price, setPrice] = React.useState<any>(0);
  const [location, setLocation] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          "http://localhost:5000/api/attires/" + id
        );
        setAttire(result.data);
        const result2 = await axios.get(
          "http://localhost:5000/api/locationdetails/" + result.data.locationID
        );
        setLocation(result2.data);
        const result3 = await axios.get(
          "http://localhost:5000/api/prices/" + result.data.priceID
        );
        setPrice(result3.data);

        const result4 = await axios.get(
          "http://localhost:5000/api/users/" + result.data.createdByID
        );
        setUser(result4.data);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 1, md: 10, lg: 50 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={tshirt}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
              {attire.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}>
              {price.actualPrice}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("red.500", "red.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Owner:
                    {user.firstName}
                  </Text>{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Available:
                  </Text>{" "}
                  {attire.availabilityFlag}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}></Text> {attire.title}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Description:
                  </Text>{" "}
                  {attire.attireDescription}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Location:
                  </Text>{" "}
                  <br />
                  <b>State:</b>
                  {location.state}
                  <br />
                  Address:{location.inputLocation}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}>
            Call seller
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default AttireDetails;
