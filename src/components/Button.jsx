import { Button, Text, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import React from "react";

export default function ButtonC({
  text,
  color,
  transform,
  variant,
  hoverbg,
  hovercolor,
  type,
  bg,
  width,
  size,
  icon,
  iconbg,
  iconcolor,
  borderC,
  display,
  onClick,
  path,
}) {
  return (
    <Link
      as={ReactLink}
      w={width ? width : "auto"}
      to={path ? path : "#"}
      _hover={{ textDecoration: "none" }}
      display={display ? display : "inline-block"}
    >
      <Button
        color={color}
        textTransform={transform}
        variant={variant}
        _hover={{
          background: hoverbg,
          color: hovercolor,
        }}
        transition="all .4s ease"
        className="button"        
        type={type}
        background={bg}
        fontSize={size}
        w="full"
        onClick={onClick}
        outline="none"
        border={variant === "outline" ? "1px solid" : "none"}
        borderColor={borderC}
      >
        <Text
          className="icon"
          color={iconcolor}
          backgroundColor={iconbg}
          as={"span"}
        >
          {icon}
        </Text>
        <Text className="button-txt" as={"span"}>
          {text}
        </Text>
      </Button>
    </Link>
  );
}
