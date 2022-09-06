import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import ButtonC from "../../components/Button";
import NewBudget from "./NewBudget";
// import { BudgetContext } from "./UserEnviro";

export default function Dashboard() {
  const [needsNewBudget, setNeedsNewBudget] = useState(false);
  // let {data, dispatch} = useContext(BudgetContext);

  return (
    <Box>
      <Flex as="nav">
        <Heading>Dashboard</Heading>
        <ButtonC
          text="New Budget"
          icon={<FaPlusSquare />}
          onClick={() => setNeedsNewBudget(true)}
        />
      </Flex>
      <Box
        pos={"fixed"}
        top="0"
        left={"0"}
        w="100vw"
        h="100vh"
        display={needsNewBudget ? "block" : "none"}
      >
        <Box
          bg={"rgba(0,0,0,.6)"}
          pos="absolute"
          width={"100%"}
          height="100%"
        ></Box>
        {needsNewBudget && <NewBudget setNeedsNewBudget={setNeedsNewBudget} />}
      </Box>
    </Box>
  );
}
