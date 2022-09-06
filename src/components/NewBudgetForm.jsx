import React from "react";
import { FormLabel, Heading, Box, HStack, Flex } from "@chakra-ui/react";
import {
  FaMoneyBillWave,
  FaPenFancy,
  FaPlusCircle,
  FaLandmark,
} from "react-icons/fa";
import categories from "../utils/categoriesAPI";
import InputField from "./InputField";
import ButtonC from "./Button";
import Select from "./Select";
import { currencies } from "../utils/currenciesAPI";

export default function NewBudgetForm({ budgetUtils }) {
  let { handleBudgetData, setBudgetCategory, formSlide, createBudget } =
    budgetUtils;

  return (
    <fieldset className="newBudgetField">
      <Heading as="legend" fontSize={"1.5rem"} mb="3.5" textAlign={"center"}>
        New Budget
      </Heading>

      <InputField
        label={"Budget name"}
        icon={<FaLandmark />}
        handleBudgetData={handleBudgetData}
      />
      <InputField
        label={"Budget amount"}
        icon={<FaMoneyBillWave />}
        handleBudgetData={handleBudgetData}
        type="number"
        min="0"
      />
      <Flex wrap={"wrap"} mb="3" justifyContent="space-between">
        <Box mb="3">
          <FormLabel>Category</FormLabel>
          <Select
            options={categories}
            targets={["category"]}
            placeholder="-- Select Category --"
            handler={(value) => {
              setBudgetCategory(value);
              handleBudgetData("budget_category", value);
            }}
          />
        </Box>
        <Box mb="3">
          <FormLabel>Currency</FormLabel>
          <Select
            options={currencies}
            targets={["currency", "symbol"]}
            placeholder="-- Select Currency --"
            handler={(value) => {
              handleBudgetData("currency", value);
            }}
            type="currency"
          />
        </Box>
      </Flex>

      <HStack justifyContent={"space-between"} px="1">
        <ButtonC
          text={"Create"}
          icon={<FaPlusCircle />}
          bg={"primary.600"}
          color="rgb(255,255,255)"
          display={"block"}
          width="7rem"
          onClick={createBudget}
        />
        <ButtonC
          text="Add Expense"
          icon={<FaPenFancy />}
          bg="secondary.900"
          color={"#fff"}
          onClick={() => formSlide("calc(-100% - 1rem)")}
        />
      </HStack>
    </fieldset>
  );
}
