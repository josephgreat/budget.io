import { Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

export default function InputField({ label, icon, type, handleBudgetData }) {
  let labelRef = useRef(0);
  return (
    <InputGroup pos={"relative"}>
      <InputLeftAddon>{icon}</InputLeftAddon>
      <Text
        as="label"
        // pos="absolute"
        // left={"3.5rem"}
        // color="gray.600"
        fontWeight={"medium"}
        // top="50%"
        // transform={"translateY(-50%)"}
        // px=".5rem"
        ref={labelRef}
      >
        {label}
      </Text>
      <Input
        fontWeight={"medium"}
        _focus={{ outline: "none" }}
        type={type ? type : "text"}
        onChange={(e) =>
          handleBudgetData(labelRef.current.innerText, e.target.value)
        }
      />
    </InputGroup>
  );
}
