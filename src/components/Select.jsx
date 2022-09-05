import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import he from "he";

export default function Select({ placeholder, options, type, targets, handler }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  let data = [];
  let searchRef = useRef("");

  options.map((option) => {
    let targetString = [];
    targets.map((target) => {
      let value = option[target].includes("&#")
        ? he.decode(option[target])
        : option[target];
      targetString.push(value);
    });
    if (type === "currency")
    {
      data.push(`${targetString.join(" - ")}`);
      return;
    }
    data.push(`${targetString.join("")}`);
    return;
  });

  window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("dropdown")) {
      setOpenDropdown(false);
    }
  });

  useEffect(() => {
    setFilteredData(data);
  }, []);

  let handleOptionClick = (value) => {
    searchRef.current.value = value;
    handler(value);
    setOpenDropdown(!openDropdown);
  };

  let handleSearch = () => {
    setOpenDropdown(true);
    setFilteredData(
      data.filter((value) =>
        value.toLowerCase().includes(searchRef.current.value.toLowerCase())
      )
    );
  };

  return (
    <Box pos={"relative"} w="30vw" minW="12rem" maxW="18rem">
      <InputGroup
        className="dropdown"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <Input
          ref={searchRef}
          placeholder={placeholder}
          onInput={() => handleSearch()}
          className="dropdown"
          borderRight={"none"}
        />
        <InputRightAddon
          className="dropdown"
          p="2"
          bg="transparent"
          transition={"all .3s ease"}
          cursor="pointer"
        >
          {openDropdown ? <FaCaretUp /> : <FaCaretDown />}
        </InputRightAddon>
      </InputGroup>
      <List
        as={"ul"}
        maxH="30vh"
        overflow={"auto"}
        pos={"absolute"}
        top="120%"
        w="30vw"
        h={openDropdown ? "auto" : "0"}
        minW={"12rem"}
        maxW="18rem"
        visibility={openDropdown ? "visible" : "hidden"}
        backgroundColor={"rgb(255,255,255)"}
        zIndex={"25"}
        boxShadow="0 0 5px 1px rgba(200,200,200, .3)"
        borderRadius={"lg"}
        border="1px solid rgb(220,220,220)"
      >
        {filteredData.length !== 0 ? (
          filteredData.map((value, id) => (
            <ListItem
              as="li"
              key={id}
              fontWeight="600"
              cursor="pointer"
              px="2"
              py="1"
              _hover={{ backgroundColor: "primary.100" }}
              textTransform="capitalize"
              onClick={(e) => handleOptionClick(e.target.innerText)}
            >
              {value}
            </ListItem>
          ))
        ) : (
          <Text fontWeight={"600"} py="2" textAlign="center" color={"gray.400"}>
            No Match Found
          </Text>
        )}
      </List>
    </Box>
  );
}
