import { Box, Button, useToast } from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import "../../assets/css/new-budget.css";
import NewBudgetForm from "../../components/NewBudgetForm";
import NewExpenseForm from "../../components/NewExpenseForm";
import categories from "../../utils/categoriesAPI";
import { FaTimesCircle } from "react-icons/fa";
import { BudgetContext } from "./UserEnviro";

export default function NewBudget({ setNeedsNewBudget }) {
  const [budgetData, setBudgetData] = useState({
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
  let { dispatch } = useContext(BudgetContext);
  const toast = useToast();
  let new_budget_form = useRef();

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
    console.log(budgetCategory);
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

  const createBudget = (usage) => {
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
    if (usage === "expense"){
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
      dispatch({ type: "addExpense", payload: expenseData });
    }

    dispatch({ type: "createBudget", payload: budgetData });
    
    toast({
      title: "Your budget has been created successfully",
      position: "top-end",
      variant: "left-accent",
      status: "success",
      duration: 3000,
    });
    setNeedsNewBudget(false);
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
      budgetData.budget_category &&
      budgetData.currency
    )
      return true;
    return false;
  };

  const expenseIsValid = () => {
    let { title, amount, category } = expenseData;
    if (title && amount && category) return true;
    return false;
  };


  return (
    <Box
      pos={"absolute"}
      top="50%"
      left={"50%"}
      transform="translate(-50%, -50%)"
      w={{ base: "90vw", sm: "70vw", md: "50vw", lg: "45vw", xl: "35vw" }}
      bg="rgb(255,255,255)"
      boxShadow="0 0 0 100vmin rgba(0,0,0,.5)"
      p={{ base: "1.5rem 1rem" }}
      borderRadius=".7rem"
      h={{ base: "60vh", md: "40vh", lg: "30vh", xl: "calc(80vh - 10vw)" }}
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
        _hover={{ opacity: 1 }}
      >
        <FaTimesCircle />
      </Button>
      <form
        onSubmit={(e) => e.preventDefault()}
        ref={new_budget_form}
        className="budgetform"
      >
        <NewBudgetForm
          budgetUtils={{
            handleBudgetData,
            setBudgetCategory,
            createBudget,
            formSlide,
          }}
        />
        {wantsNewExpense && (
          <NewExpenseForm
            expenseUtils={{
              handleExpenseData,
              formSlide,
              addNewExpense,
              createBudget,
              subCategory,
            }}
          />
        )}
      </form>
    </Box>
  );
}
