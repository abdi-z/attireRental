import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "@chakra-ui/icons";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";
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

import user from "./user.png";
import SearchBar from "../SearchBar/SearchBar";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckIcon,
} from "@chakra-ui/icons";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  const { logout } = useLogout();
  const { user, email } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <>
      <nav className="navbar">
        <div className="left-items">
          <Link className="navbar-brand link" to="/">
            Resigna .
          </Link>
          {user && (
            <div>
              <span>{email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
        </div>
        <SearchBar />
        <div className="right-items">
          <Link className="link" to="/dummy">
            How it works
          </Link>

          <Link className="link" to="/dummy">
            Earn
          </Link>
          <Link className="link" to="/dummy">
            More
            <ChevronDownIcon />
          </Link>
          {email ? (
            <Link to="/login">
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"md"}
                fontWeight={600}
                rounded="md"
                color={"white"}
                bg={"red.500"}
                _hover={{
                  bg: "red.400",
                }}
                onClick={handleClick}>
                Log out
                <CheckIcon style={{ paddingLeft: "5px" }} />
              </Button>
            </Link>
          ) : (
            <Link to="/register">
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"md"}
                fontWeight={600}
                rounded="md"
                color={"white"}
                bg={"red.400"}
                _hover={{
                  bg: "red.300",
                }}>
                Join Us
                <CheckIcon style={{ paddingLeft: "5px" }} />
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
