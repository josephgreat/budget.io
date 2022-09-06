import { FormLabel, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React, { useRef } from "react";

export default function InputField({ label, min, icon, type, handleBudgetData }) {
  let labelRef = useRef(0);
  return (
    <>
      <FormLabel ref={labelRef}>
        {label}
      </FormLabel>
      <InputGroup pos={"relative"}>
        <InputLeftAddon>{icon}</InputLeftAddon>
        <Input
          fontWeight={"medium"}
          _focus={{ outline: "none" }}
          type={type ? type : "text"}
          mb={{base: "4", md: "2"}}
          min={min}
          onChange={(e) =>
            handleBudgetData(labelRef.current.innerText, e.target.value)
          }
        />
      </InputGroup>
    
    </>
  );
}
