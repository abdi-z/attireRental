//Func: The single component which will get mapped on /allattires
import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import tshirt from "../../../images/tshirt.jpg";
import axios from "axios";
import "./SingleAttire.css";
import Spinner from "@chakra-ui/react";

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
        console.log(price);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box bg="white.200" maxW="sm" className="zoom">
      <Box>
        <Image src={props.attire.imageURL} borderRadius="xl" />
      </Box>
      <Box p="3">
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
          <h5>Rental Price:</h5>
          {price && <>Rs. {price}</>}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < 5 ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {2} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleAttire;
