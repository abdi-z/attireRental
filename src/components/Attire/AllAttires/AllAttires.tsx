//Route '/attires' Func: A page which will display all attires by mapping Single Attires component
import React from "react";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import SingleAttire from "../SingleAttire/SingleAttire";
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { CategoriesAttire } from "../CategoriesAttire/CategoriesAttire";

import axios from "axios";

const AllAttires: React.FC = () => {
  const [attires, setAttires] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get("http://localhost:5000/api/attires");
        setAttires(result.data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div>
      <CategoriesAttire />
      <SimpleGrid
        m={10}
        minChildWidth="240px"
        spacing="60px"
        bg="grey.400"
        style={{ position: "relative" }}>
        {/* ))}
         */}
        {error && <p>Something went wrong...</p>}
        {loading ? (
          <Spinner style={{ position: "absolute", top: "100%", left: "50%" }} />
        ) : (
          attires.map((attire: any) => (
            <>
              <Link to={`/attires/${attire._id}`} state={attire}>
                <SingleAttire attire={attire} />
              </Link>
            </>
          ))
        )}
      </SimpleGrid>
      {/* </Flex> */}
    </div>
  );
};

export default AllAttires;
