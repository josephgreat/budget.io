import {
  Flex,
  List,
  ListItem,
  Container,
  Link,
  Box,
  IconButton,
  Img,
} from "@chakra-ui/react";
import { NavLink as ReactLink, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import ButtonC from "./Button";
import Logo from "./Logo";
import {
  FaUserPlus,
  FaSignInAlt,
  FaBars,
  FaTimes,
  // FaMoon,
} from "react-icons/fa";
import MediaQuery from "../utils/useWindowSize";
import { UserContext } from "../App";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userIsAuth, userCredentials } = useContext(UserContext);
  const { id } = useParams();

  return (
    <Container
      maxW={"auto"}
      width={["90%", "85%", null, null, "70%"]}
      position="relative"
      p="0"
    >
      <Flex
        as={"nav"}
        py="6"
        textTransform="uppercase"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex>
          <MediaQuery size={"lg"} type="max">
            <IconButton
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              icon={isOpen ? <FaTimes /> : <FaBars />}
              variant="ghost"
              _hover={{ background: "rgba(0,0,0,.6)" }}
              height={"auto"}
              fontSize={["lg", "xl"]}
              outline="none"
              _focus={{ boxShadow: "none" }}
              _active={{ backgroundColor: "unset" }}
              minWidth={"auto"}
              mr="3"
            />
          </MediaQuery>
          <Logo iconColor={"rgba(255,255,255,.7)"} />
        </Flex>
        <List
          display={"flex"}
          width={{ base: "60%", sm: "40%", md: "30%", lg: "70%" }}
          top={"75%"}
          height={"fit-content"}
          justifyContent={"center"}
          position={{ base: "absolute", lg: "unset" }}
          mx={{ lg: "2" }}
          left="0"
          py="2"
          px="2"
          transition={"clip-path .4s ease"}
          clipPath={{
            base: isOpen ? "circle(152% at 0 0)" : "circle(0% at 0 0)",
            lg: "unset",
          }}
          flexDirection={{ base: "column", lg: "row" }}
          bg={{ base: "rgb(82 0 80 / 70%)", lg: "transparent" }}
          backdropFilter={{ base: "blur(10px)", lg: "unset" }}
          rounded={{ base: "25px", lg: "unset" }}
          roundedTopStart={"none"}
          zIndex="3"
        >
          <ListItem mx={{ lg: "5" }} p="2">
            How it works
          </ListItem>
          <ListItem mx={{ lg: "5" }} p="2">
            About
          </ListItem>
          <ListItem mx={{ lg: "5" }} p="2">
            FAQ
          </ListItem>
          <ListItem
            mx={{ lg: "5" }}
            display={userIsAuth ? "block" : "none"}
            p="2"
          >
            <Link as={ReactLink} to={`/user${id}`}>
              Dashboard
            </Link>
          </ListItem>
          <ListItem
            ml="auto"
            mr="2"
            my={{ base: "2", lg: "0" }}
            display={!userIsAuth ? "block" : "none"}
          >
            <ButtonC
              text="sign up"
              color={"primary.500"}
              transform="uppercase"
              variant="solid"
              bg="white"
              icon={<FaUserPlus />}
              iconcolor={"white"}
              iconbg={"primary.500"}
              path="/signup"
            />
          </ListItem>
          <ListItem
            mr="2"
            my={{ base: "2", lg: "0" }}
            display={!userIsAuth ? "block" : "none"}
          >
            <ButtonC
              text="login"
              color={"secondary.200"}
              transform="uppercase"
              variant="outline"
              icon={<FaSignInAlt />}
              path="/login"
            />
          </ListItem>
        </List>
        <Flex ml="auto">
          {userCredentials ? (
            <Img
              referrerPolicy="no-referrer"
              src={`${userCredentials.photoURL}`}
              alt="user image"
              srcSet={userCredentials.photoURL}
              display={userIsAuth ? "block" : "none"}
              mr=".5rem"
              borderRadius={"full"}
              width="2.5rem"
            />
          ) : (
            <Box></Box>
          )}
        </Flex>
      </Flex>
    </Container>
  );
}
