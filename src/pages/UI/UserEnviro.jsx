import { Box, Container, Flex, HStack, Img, Text } from "@chakra-ui/react";
import { getFirestore } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Sidebar from "./Sidebar";

export default function UserEnviro() {
  const db = getFirestore();
  let navigate = useNavigate();
  let { userCredentials } = useContext(UserContext);
  if (userCredentials === null) {
    navigate("/signup");
  }
  const { displayName, photoURL } = userCredentials;

  return (
    <Container
      maxW="auto"
      minH={"100vh"}
      bg="gray.100"
      display="flex"
      alignContent={"center"}
      justifyContent={"center"}
      pos="relative"
    >
      <Sidebar w={[null, null, "40%", "5vw"]} mW="7vw" />
      <Box
        bg={"white"}
        roundedRight={"3xl"}
        w={"calc(100% - 5vw + 1rem)"}
        maxW={"auto"}
        marginInlineStart={"0"}
        minH={"100%"}
        px="7"
        py="6"
      >
        {userCredentials && (
          <Flex>
            <Text as={"span"}>
              👏 Hi, {displayName.slice(0, displayName.indexOf(" "))}
            </Text>
            {photoURL ? (
              <Img
                src={photoURL}
                alt="profile_pic"
                rounded="full"
                w={"3rem"}
                srcSet={photoURL}
              />
            ) : (
              <Box
                rounded="full"
                w={"3rem"}
                // color={`rgb(${randomBgCode(red)}, ${randomBgCode(green)}, ${randomBgCode(blue)}`}
                // // backgroundColor={`rgb(${red}, ${green}, ${blue})`}
              >
                {displayName[0]}
              </Box>
            )}
          </Flex>
        )}
        <Outlet />
      </Box>
    </Container>
  );
}
