//Func: The single component which will get mapped on /allattires
import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import tshirt from '../../../images/tshirt.jpg'

interface dummyAttires{

  Attire:String,
  AttireID:String,
  CategoryID:String,
  Title:String,
  CreatedBy:String,
  AvailabilityFlag:String,
  MaxDays:String,
  Image:String,
  LocationID:String,
  PriceID:String,
  CreatedDate:String,
  AttireType:String,
  AttireDescriptiion:String
  
  }

const SingleAttire: React.FC = () => {
  // {dummyAttires.map{(dummyAttires)=> (

  // )}}
  // const property = {
  //   AttireID: {dummyAttires.AttireID},
  //   CategoryID: {dummyAttires.CategoryID},
  //   Title: {dummyAttires.Title},
  //   CreatedBy: {dummyAttires.CreatedBy},
  //   AvailabilityFlag: {dummyAttires.AvailabilityFlag},
  //   MaxDays: {dummyAttires.MaxDays},
  //   Image: {dummyAttires.Image},
  //   LocationID: {dummyAttires.LocationID},
  //   PriceID: {dummyAttires.PriceID},
  //   CreatedDate: {dummyAttires.CreatedDate}
  // };
  const property = {
    imageUrl: tshirt,
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box bg="white.200" maxW="sm"  overflow="hidden">
      <Box borderWidth="3px" borderRadius="xl">
      <Image  src={property.imageUrl} alt={property.imageAlt} />
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
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}>
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / day
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleAttire;
