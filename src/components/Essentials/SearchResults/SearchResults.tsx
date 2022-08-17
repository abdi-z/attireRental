import React from "react";
import "./SearchResults.css";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SingleAttire from "../../Attire/SingleAttire/SingleAttire";
import { Text } from "@chakra-ui/react";

export const SearchResults = () => {
  const search: any = useLocation().state;
  const { name } = useParams();
  console.log("Here in search results ->");
  console.log(search);
  return (
    <div>
      <Text fontSize="2xl" mx={10} mb={4}>
        {" "}
        Search Results found for "{name}"
      </Text>
      <SimpleGrid
        m={10}
        minChildWidth="240px"
        spacing="60px"
        bg="grey.400"
        style={{ position: "relative" }}>
        {search.map((attire: any) => (
          <>
            <Link to={`/attires/${attire._id}`} state={attire}>
              <SingleAttire attire={attire} />
            </Link>
          </>
        ))}
      </SimpleGrid>
    </div>
  );
};
