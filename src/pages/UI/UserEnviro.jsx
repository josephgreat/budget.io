import { Box, Container, Flex, Img, Text } from "@chakra-ui/react";
// import { getFirestore } from "firebase/firestore";
import React, { createContext, useContext, useReducer,  } from "react";
import {  Outlet, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import reducer from "../../utils/reducers";
// import Sidebar from "./Sidebar";

export const BudgetContext = createContext();

export default function UserEnviro() {
  // const db = getFirestore();
  const {id} = useParams();
  // let navigate = useNavigate();
  let { userCredentials } = useContext(UserContext);
  
  let budgetDetails = {
    budget_name: "",
    budget_amount: "",
    budget_category: "",
    currency: "",
    uid: id,
    expenses: [],
    accomplished: false,
    suspendend: false,
  }
 const [data, dispatch] = useReducer(reducer, budgetDetails)


  if (userCredentials === {}) {
    return <p>Loading..</p>
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
      {/* <Sidebar w={[null, null, "40%", "5vw"]} mW="7vw" /> */}
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
              👏 Hi, {displayName && displayName.slice(0, displayName.indexOf(" "))}
            </Text>
            {photoURL ? (
              <Img
                src={photoURL}
                alt="profile_pic"
                rounded="full"
                w={"3rem"}
                referrerPolicy="no-referrer"
                srcSet={photoURL}
              />
            ) : (
              <Box
                rounded="full"
                w={"3rem"}
                // color={`rgb(${randomBgCode(red)}, ${randomBgCode(green)}, ${randomBgCode(blue)}`}
                // // backgroundColor={`rgb(${red}, ${green}, ${blue})`}
              >
                {displayName && displayName[0]}
              </Box>
            )}
          </Flex>
        )}
        <BudgetContext.Provider value={{data, dispatch}}>
          <Outlet />
        </BudgetContext.Provider>
      </Box>
    </Container>
  );
}
