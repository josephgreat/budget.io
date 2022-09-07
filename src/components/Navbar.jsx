import {
  Flex,
  List,
  ListItem,
  Container,
  Link,
  Box,
  IconButton,
  Img,
  Text,
  useToast,
} from "@chakra-ui/react";
import { NavLink as ReactLink, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import Logo from "./Logo";
import {
  FaBars,
  FaTimes,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";
import MediaQuery from "../utils/useWindowSize";
import { UserContext } from "../App";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [needsUserExtas, setNeedsUserExtras] = useState(false);
  const { userIsAuth, userCredentials, setUserCredentials, setUserIsAuth } = useContext(UserContext);
  const { id } = useParams();
  let toast = useToast();

  let handleUserLogout = () => {
    let auth = getAuth(app);
    signOut(auth).then(() => {
      setUserCredentials({});
      setUserIsAuth(false);
      toast({
        status: "success",
        title: "You've successfully loggedout",
        variant: "subtle",
        position: "top-right",
        duration: 3000
      })
    }).catch(error => {
      toast({
        status: "error",
        title: `${error.message}`,
        variant: "subtle",
        position: "top-right",
        duration: 3000
      })
    })
  }

  window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("user")) {
      setNeedsUserExtras(false);
    }
  });

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
          width={{ base: "60%", sm: "40%", md: "30%", lg: "60%", xl: "70%" }}
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
        </List>
        <Flex ml="auto" pos="relative" className="user">
        <Box
            ml="auto"
            pr="2"
            mr="2"
            display={!userIsAuth ? "block" : "none"}
            textTransform="capitalize"
            borderRight={"1px solid rgba(255,255,255,.7)"}
          >
            <Link as={ReactLink} to={"/signup"}>Sign up</Link>
          </Box>
          <Box
            display={!userIsAuth ? "block" : "none"}
            textTransform="capitalize"
          >
            <Link as={ReactLink} to="/login">
              Login
            </Link>
          </Box>
          {userCredentials ? (
            <Img
              referrerPolicy="no-referrer"
              src={`${userCredentials.photoURL}`}
              alt="img"
              textTransform={"lowercase"}
              srcSet={userCredentials.photoURL}
              display={userIsAuth ? "block" : "none"}
              mr=".5rem"
              borderRadius={"full"}
              width="2.5rem"
              height={"2.5rem"}
              cursor={"pointer"}
              className="user"
              onClick={() => setNeedsUserExtras(!needsUserExtas)}
            />
          ) : (
            <Box></Box>
          )}
          {needsUserExtas && (
            <List
              bgColor={"secondary.50"}
              py=".5rem"
              color="primary.900"
              top="150%"
              left={"-100%"}
              transform={"translateX(-20%)"}
              pos="absolute"
              borderRadius={".6rem"}
              zIndex={"15"}
              _before={{
                content: '""',
                borderTop: "1.2rem solid #fff5b3",
                borderLeft: "1.2rem solid transparent",
                pos: "absolute",
                top: "-20%",
                left: "75%",
                transform: "rotate(-45deg) translateX(-75%)",
              }}
            >
              <ListItem
                px="1rem"
                py=".5rem"
                cursor={"pointer"}
                transition={"all .2s ease"}
                _hover={{ backgroundColor: "rgba(255,255,255,1)" }}
                display="flex"
                alignItems={"center"}
              >
                <FaUserCog />
                <Text as="span" ml="1" fontWeight="500">
                  Settings
                </Text>
              </ListItem>
              <ListItem
                px="1rem"
                py=".5rem"
                cursor={"pointer"}
                transition={"all .2s ease"}
                _hover={{ backgroundColor: "rgba(255,255,255,1)" }}
                display="flex"
                alignItems={"center"}
                onClick={handleUserLogout}
              >
                <FaSignOutAlt />
                <Text as="span" ml="1" fontWeight="500">
                  Logout
                </Text>
              </ListItem>
            </List>
          )}
        </Flex>
      </Flex>
    </Container>
  );
}
