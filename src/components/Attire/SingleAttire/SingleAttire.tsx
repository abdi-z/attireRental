//Func: The single component which will get mapped on /allattires
import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import tshirt from "../../../images/tshirt.jpg";
import axios from "axios";

type GreetProps = {
  attire: {
    _id: string;
    categoryID: string;
    title: string;
    createdByID: string;
    availabilityFlag: string;
    maxDays: number;
    imageURL: string;
    locationID: string;
    priceID: string;
    createDate: string;
    attireDescription: string;
  };
};

const SingleAttire = (props: GreetProps) => {
  const [price, setPrice] = React.useState<any>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [location, setLocation] = React.useState<object>({});

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          `http://localhost:5000/api/prices/${props.attire.priceID}`
        );
        setPrice(result.data.actualPrice);
        console.log(price)
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      bg="white.200"
      maxW="sm"
      overflow="hidden"
      _hover={{ borderColor: "gray.200", bg: "gray.200" }}>
      <Box borderWidth="3px" borderRadius="xl">
        <Image src={props.attire.imageURL} />
      </Box>
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="red.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2">
            {10} beds &bull; {9} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}>
          {props.attire.title}
        </Box>

        <Box>
          {price && price}
          <Box as="span" color="gray.600" fontSize="sm">
            / day
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < 5 ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {10} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleAttire;
