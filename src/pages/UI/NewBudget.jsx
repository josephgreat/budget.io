import {
  FormControl,
  FormLabel,
  Heading,
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaCoins,
  FaCalendarAlt,
  FaPlayCircle,
  FaDiagnoses,
} from "react-icons/fa";
import { CgViewGrid } from "react-icons/cg";
import categories from "../../utils/categoriesAPI";
import InputField from "../../components/InputField";

export default function NewBudget() {
  const [budgetData, setBudgetData] = useState({});

  const handleBudgetData = (key, value) => {
    setBudgetData({ ...budgetData, [key]: value });
  };
  const recurrenceList = [
    "none",
    "weekly",
    "montly",
    "yearly",
    "leap yearly",
    "once",
  ];
  return (
    <Box
      pos={"fixed"}
      top="50%"
      left={"50%"}
      transform="translate(-50%, -50%)"
      w={{ base: "90vw", xl: "40vw" }}
      boxShadow="0 0 0 100vmin rgba(0,0,0,.5)"
      p={{base: "1rem"}}
      borderRadius=".7rem"
      maxH="70vh"
    >
      <Heading as="h3" fontSize={"1.5rem"} mb=".5rem">New Budget</Heading>
      <form>
        <InputField label={"Budget name"} icon={<FaDiagnoses />} handleBudgetData={handleBudgetData}/>
        <InputField label={"Budget Amount"} icon={<FaDiagnoses />} handleBudgetData={handleBudgetData} type="amount"/>
        <InputField label={"Expense name"} icon={<FaDiagnoses />} handleBudgetData={handleBudgetData} />
        <InputField label={"Expense amount"} icon={<FaDiagnoses />} handleBudgetData={handleBudgetData} type="amount" />
      </form>
    </Box>
  );
}
