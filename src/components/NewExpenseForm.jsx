import { Box, Button, Flex, FormLabel, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaCoins,
  FaHandHoldingUsd,
  FaPenFancy,
  FaPlusCircle,
  FaStickyNote,
} from "react-icons/fa";
import ButtonC from "./Button";
import InputField from "./InputField";
import Select from "./Select";

export default function NewExpenseForm({ expenseUtils }) {
  let [handleExpenseData, formSlide, addNewExpense, subCategory] = expenseUtils;
  let [needsPrevBtn, setNeedsPrevBtn] = useState(true);

  let handleNewExpense = () => {
    console.log("yea");
    addNewExpense();
    setNeedsPrevBtn(false);
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  return (
    <fieldset className="newBudgetField">
      <Heading as="legend" fontSize={"1.5rem"} mb=".5rem" textAlign={"center"}>
        New Expense
      </Heading>
      <InputField
        label={"Expense title"}
        icon={<FaHandHoldingUsd />}
        handleBudgetData={handleExpenseData}
      />
      <InputField
        label={"Expense amount"}
        icon={<FaCoins />}
        handleBudgetData={handleExpenseData}
        type="number"
      />
      <InputField
        label={"Expense description (optional)"}
        icon={<FaStickyNote />}
        handleBudgetData={handleExpenseData}
        type="textarea"
      />
      <Box mb="5">
        <FormLabel>Expense category</FormLabel>
        <Select
          options={subCategory}
          targets={["value"]}
          placeholder="-- Select Category --"
          handler={(value) => handleExpenseData("category", value)}
        />
      </Box>
      {needsPrevBtn && (
        <Button
          onClick={() => formSlide("0")}
          bg="transparent"
          variant={"outline"}
          colorScheme="gray"
          maxH="2rem"
        >
          <FaArrowLeft />
          <Text as="span" ml="1">
            Prev
          </Text>
        </Button>
      )}
      <Flex justifyContent={"space-between"} mt="3">
        <ButtonC
          text={"Create"}
          icon={<FaPlusCircle />}
          bg={"primary.600"}
          color="rgb(255,255,255)"
          display={"block"}
        />
        <ButtonC
          text="Add Expense"
          icon={<FaPenFancy />}
          bg="secondary.900"
          color={"#fff"}
          onClick={handleNewExpense}
        />
      </Flex>
    </fieldset>
  );
}
