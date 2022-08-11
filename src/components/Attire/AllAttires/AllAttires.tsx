//Route '/attires' Func: A page which will display all attires by mapping Single Attires component
import React from "react";
import { Box, Button, Flex, SimpleGrid  } from "@chakra-ui/react";
import SingleAttire from "../SingleAttire/SingleAttire";
import { Link } from "react-router-dom";

interface dummyAttiresinterface{

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

const dummyAttires = [{
  AttireID:"1",
  CategoryID:"1",
  Title:"title1",
  CreatedBy:"created by 1",
  AvailabilityFlag:"Y",
  MaxDays:"1",
  Image:"1",
  LocationID:"1",
  PriceID:"100",
  CreatedDate:"1",
  },{
    AttireID:"2",
    CategoryID:"2",
    Title:"title2",
    CreatedBy:"created by 2",
    AvailabilityFlag:"Y",
    MaxDays:"2",
    Image:"2",
    LocationID:"2",
    PriceID:"200",
    CreatedDate:"2",
    },{
      AttireID:"3",
      CategoryID:"3",
      Title:"title3",
      CreatedBy:"created by 3",
      AvailabilityFlag:"Y",
      MaxDays:"3",
      Image:"3",
      LocationID:"3",
      PriceID:"300",
      CreatedDate:"3",
      },{
        AttireID:"3",
        CategoryID:"3",
        Title:"title3",
        CreatedBy:"created by 3",
        AvailabilityFlag:"Y",
        MaxDays:"3",
        Image:"3",
        LocationID:"3",
        PriceID:"300",
        CreatedDate:"3",
        },{
          AttireID:"3",
          CategoryID:"3",
          Title:"title3",
          CreatedBy:"created by 3",
          AvailabilityFlag:"Y",
          MaxDays:"3",
          Image:"3",
          LocationID:"3",
          PriceID:"300",
          CreatedDate:"3",
          }];
const AllAttires: React.FC = () => {
  return (
    <div>

      {/* <Flex 
      width={['90vw','90vw','70vw','70vw',]}
      direction={['column','column','row','row']}
      justify="space-between"
      align={"center"}
      > */}

        <SimpleGrid m={10} minChildWidth='240px' spacing='60px' bg="grey.400">
          {dummyAttires.map((item)=>(
          <Link to="/details">
            <SingleAttire/>
          </Link>
          ))}
          
          
        </SimpleGrid>
      {/* </Flex> */}

    </div>
  );
};

export default AllAttires;
