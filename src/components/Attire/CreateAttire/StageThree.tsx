import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  FormControl,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import axios from "axios";

import { useNavigate } from "react-router-dom";
declare var window: any;

export default function StageThree() {
  const { user, email } = useAuthContext();
  const {
    stateLoc,
    inputLocation,
    actualPrice,
    securityFee,
    upFrontPayment,
  }: any = useLocation().state;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [createdByID, setCreatedByID] = React.useState("");
  const [availabilityFlag, setAvailabilityFlag] = React.useState("Y");
  const [categoryID, setCategoryID] = React.useState("");
  const [maxDays, setMaxDays] = React.useState("");
  const [imageURL, setImageURL] = React.useState("imagUrl");
  const [locationID, setLocationID] = React.useState("");
  const [priceID, setPriceID] = React.useState("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = (cid: any) => {
    setCategoryID(cid);
    console.log(cid);
  };

  function handleOpenWidget(e: any) {
    e.preventDefault();
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dfmxbcddb",
        uploadPreset: "krdozupg",
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
          // setImages(prev => [...prev, { url: result.info.url, public_id: result.info.public_id}]);
          setImageURL(result.info.url);
        }
      }
    );
    myWidget.open();
  }

  const handleSubmit = async (e: any) => {
    setLoading(true);
    try {
      const resultId = await axios.post(
        `http://localhost:5000/api/users/check`,
        {
          email,
        }
      );
      console.log("THE ID WAS " + resultId.data._id);
      setCreatedByID(resultId.data._id);
      console.log("-------------------------");
      console.log("uf is " + upFrontPayment);
      console.log("sf" + securityFee);
      console.log("ap" + actualPrice);
      console.log("pAid" + createdByID);
      const result = await axios.post(`http://localhost:5000/api/prices`, {
        upFrontPayment,
        securityFee,
        actualPrice,
        priceAdderID: resultId.data._id,
      });
      console.log("THE PRICE WAS " + result.data._id);
      setPriceID(result.data._id);
      const result2 = await axios.post(
        `http://localhost:5000/api/locationdetails/`,
        {
          state: stateLoc,
          inputLocation,
          locationAdderID: resultId.data._id,
        }
      );
      console.log("THE LOCATION WAS " + result2.data._id);
      setLocationID(result2.data._id);
      const result3 = await axios.post(`http://localhost:5000/api/attires`, {
        availabilityFlag,
        categoryID,
        title,
        createdByID: resultId.data._id,
        attireDescription: description,
        imageURL,
        locationID: result2.data._id,
        priceID: result.data._id,
      });
      //probably some type error from model and schema
      console.log("THE ATTIRE WAS " + result3.data._id);
      navigate("/attires");
      setLoading(false);
    } catch (error) {
      console.log("the error came was " + error);
    }
  };
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}>
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
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
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              }
            />
          </Box>
        </Flex>
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
              Set up rest of details,
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              {/* use everywhere! */}
            </Text>
          </Heading>

          <Stack spacing={2}>
            <FormControl id="title">
              <FormLabel>
                Title <QuestionOutlineIcon mb={0.5} />
              </FormLabel>
              <Input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel>
                Description <QuestionOutlineIcon />
              </FormLabel>
              <Input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </FormControl>
            <FormLabel>
              Category <QuestionOutlineIcon mb={0.5} />
            </FormLabel>
            <Select
              placeholder="Select a relevant category"
              onChange={(e) => handleInputChange(e.target.value)}>
              <option value="1">Sweaters</option>
              <option value="2">Dresses</option>
              <option value="3">Hoodies</option>
              <option value="4">T-shirts</option>
              <option value="5">Flip-flops</option>
              <option value="6">Shorts</option>
              <option value="7">Skirts</option>
              <option value="8">Jeans</option>
              <option value="9">Shoes</option>
              <option value="10">Coats</option>
              <option value="11">High heels</option>
              <option value="12">Suits</option>
              <option value="13">Caps</option>
              <option value="14">Socks</option>
              <option value="15">Shirts</option>
              <option value="16">Scarfs</option>
              <option value="17">Swimsuits</option>
              <option value="18">Gloves</option>
              <option value="19">Jackets</option>
              <option value="20">Long coats</option>
              <option value="21">Sunglasses</option>
              <option value="22">Ties</option>
              <option value="23">Polo shirts</option>
              <option value="24">Leather jackets</option>
              <option value="25">Traditionals</option>
            </Select>
            <FormControl id="daysAllowed">
              <FormLabel>
                Rent allowed Days
                <QuestionOutlineIcon ml={1} />
              </FormLabel>
              <Input
                type="number"
                onChange={(e) => setMaxDays(e.target.value)}
                value={maxDays}
              />
            </FormControl>
            <button
              id="upload-widget"
              className="cloudinary-button"
              onClick={handleOpenWidget}>
              Upload Image
            </button>{" "}
            <br />
          </Stack>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
              onClick={handleSubmit}>
              Submit
            </Button>
            {/* <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}>
              Submit
            </Button> */}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
