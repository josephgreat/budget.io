import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import { addDoc, collection, getFirestore, setDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import app from "../../firebase";
import "../../assets/css/new-budget.css";
import NewBudgetForm from "../../components/NewBudgetForm";
import NewExpenseForm from "../../components/NewExpenseForm";
import categories from "../../utils/categoriesAPI";
import { FaTimesCircle } from "react-icons/fa";

export default function NewBudget({setNeedsNewBudget}) {
  const { id } = useParams();
  const [budgetData, setBudgetData] = useState({
    uid: id,
    expenses: [],
    accomplished: false,
    suspendend: false,
    budget_name: "",
    budget_amount: "",
    currency: "",
    budget_category: "",
  });

  const [expenseData, setExpenseData] = useState({
    accomplished: false,
    title: "",
    amount: "",
    category: "",
    description: "",
  });

  const [wantsNewExpense, setWantsNewExpense] = useState(false);
  const [budgetCategory, setBudgetCategory] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const toast = useToast();
  let new_budget_form = useRef();
  const db = getFirestore();

  let formSlide = (value) => {
    if (!budgetIsValid()) {
      toast({
        title: "All fields are required",
        position: "top-end",
        variant: "top-accent",
        status: "info",
        duration: 2000,
      });
      return;
    }

    if (value !== "0") {
      setSubCategory(
        categories.filter(
          (category) =>
            category.category.toLowerCase() === budgetCategory.toLowerCase()
        )[0].children
      );
      setWantsNewExpense(true);
    }

    new_budget_form.current.style.left = value;
  };

  const handleKey = (key) => {
    key = key.includes(" ") ? key.replace(" ", "_") : key;
    key = key.toLowerCase();
    return key;
  };

  const handleBudgetData = (key, value) => {
    key = handleKey(key);
    setBudgetData({ ...budgetData, [key]: value.toLowerCase() });
  };

  const handleExpenseData = (key, value) => {
    key = handleKey(key);
    key = key.includes(" ")
      ? key.slice(key.indexOf("_") + 1, key.indexOf(" "))
      : key.slice(key.indexOf("_") + 1);
    setExpenseData({ ...expenseData, [key]: value.toLowerCase() });
  };

  const addDataToDB = () => {
    setBudgetData({ ...budgetData, expenses: expenseData });
    // let budget = collection(db, "budgets");
    // let budgetRef = addDoc(budget, budgetData);
  };

  let addNewExpense = () => {
    if (!expenseIsValid) {
      toast({
        title: "Fill the expense fields before creating a new one",
        position: "top-end",
        variant: "top-accent",
        status: "info",
        duration: 3000,
      });
      return;
    }
    setExpenseData({
      accomplished: false,
      title: "",
      amount: "",
      category: "",
      description: "",
    });
    setBudgetData({
      ...budgetData,
      expenses: [...budgetData.expenses, expenseData],
    });
    toast({
      title: "Expense added. Click on Create to create the budget",
      position: "top-end",
      variant: "top-accent",
      status: "info",
      duration: 2000,
    });
  };

  const budgetIsValid = () => {
    if (
      budgetData.budget_name &&
      budgetData.budget_amount &&
      budgetData.budget_category
    )
      return true;
    return false;
  };

  const expenseIsValid = () => {
    let { title, amount, category } = expenseData;
    if (title && amount && category) return true;
    return false;
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
      pos={"absolute"}
      top="50%"
      left={"50%"}
      transform="translate(-50%, -50%)"
      w={{ base: "75vw", sm: "65vw", md: "50vw", xl: "30vw" }}
      bg="rgb(255,255,255)"
      boxShadow="0 0 0 100vmin rgba(0,0,0,.5)"
      p={{ base: "1.5rem 1rem" }}
      borderRadius=".7rem"
      h={{ base: "60vh" }}
      zIndex={"9"}
      overflow="hidden"
    >
      <Button
        p="0"
        pos="absolute"
        top={".5rem"}
        right="1rem"
        ml="auto"
        minW={"unset"}
        w="unset"
        h="unset"
        fontSize={"1.1rem"}
        opacity=".7"
        onClick={() => setNeedsNewBudget(false)}
        transition="opacity .3s ease"
        _hover={{opacity: 1}}
      >
        <FaTimesCircle />
      </Button>
      <form
        onSubmit={(e) => e.preventDefault()}
        ref={new_budget_form}
        className="budgetform"
      >
        <NewBudgetForm
          budgetUtils={[handleBudgetData, setBudgetCategory, formSlide]}
        />
        {wantsNewExpense && (
          <NewExpenseForm
            expenseUtils={[
              handleExpenseData,
              formSlide,
              addNewExpense,
              subCategory,
            ]}
          />
        )}
      </form>
    </Box>
  );
}
