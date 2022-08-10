//Route '/attires' Func: A page which will display all attires by mapping Single Attires component
import React from "react";
import { Box, Button } from "@chakra-ui/react"
import SingleAttire from "../SingleAttire/SingleAttire";

const dummyAttires =[{}]
const AllAttires: React.FC = () => {
  return <div>
    
<Button borderRightRadius="0">Button 1</Button>

  <Box>
  <SingleAttire/>
  </Box>

<Box
  w="100%" h="32px">
lorem
  </Box>



  </div>;
};

export default AllAttires;
