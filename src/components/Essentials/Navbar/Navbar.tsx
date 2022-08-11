import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <nav className="navbar">
        <div className="left-items">
          <Link className="navbar-brand" to="/">
            Resigna
          </Link>
        </div>
        <SearchBar />
        <div className="right-items">
          <Link to="/login">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              margin={1}
              border={1}
              rounded="md"
              color={"black"}
              bg="black.200"
              _hover={{
                color: "white",
                bg: "red.300",
              }}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              rounded="md"
              color={"white"}
              bg={"red.400"}
              _hover={{
                bg: "red.300",
              }}>
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
