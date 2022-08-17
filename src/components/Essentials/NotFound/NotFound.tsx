import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./NotFound.css";
import background from "./background.png";

const NotFound: React.FC = () => {
  return (
    <Box textAlign="center" className="outbox">
      <Box py={10} px={6}>
        <WarningTwoIcon boxSize={"8rem"} color={"red.500"} />

        <Text fontSize="3rem" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Link to="/">
          <Button colorScheme="red" color="white" variant="solid">
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default NotFound;
