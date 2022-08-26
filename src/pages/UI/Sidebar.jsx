import { Box, VStack, Link, Icon, Text, StackDivider } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import Logo from "../../components/Logo";
import {
  FaTachometerAlt,
  FaCog,
  FaSignOutAlt,
  FaChartPie,
  FaMoneyBillWave,
  FaCalculator,
  FaCalendarAlt,
  FaClipboardList,
  FaRegClipboard,
  FaChevronCircleRight,
} from "react-icons/fa";
import LogoIcon from "../../assets/JsxImgs/LogoIcon";

export default function Sidebar({ w, mW }) {
  const sideNavLink = [
    {
      text: "Dashboard",
      icon: <FaTachometerAlt />,
      link: "#",
    },
    {
      text: "Statistics",
      icon: <FaChartPie />,
      link: "#",
    },
    {
      text: "Budgets",
      icon: <FaRegClipboard />,
      link: "#",
    },
    {
      text: "Goals",
      icon: <FaClipboardList />,
      link: "#",
    },
    {
      text: "Calculator",
      icon: <FaCalculator />,
    },
    {
      text: "Calender",
      icon: <FaCalendarAlt />,
    },

  ];
  return (
    <VStack
      spacing={["1.5", "2", "20"]}
      color="primary.600"
      w={w}
      maxW={mW}
      minH={"100%"}
      py="5"
      justifyContent={[null, null, "flex-start"]}
      alignItems={[null, null, "flex-start", "center"]}
      fontSize={[null, null, "lg", "2xl"]}
      fontWeight={"semibold"}
      position={[null, null, "absolute", "relative"]}
    >
      <Box w="70%" m="auto" p="2" bg="rgba(122, 0, 120, .4)" rounded={"full"}>
        <LogoIcon color={"#fff"} />
      </Box>
      <VStack>
        {sideNavLink.map(({ text, icon, link }, id) => {
          if (link) return (
            <Box p="2" _hover={{ bg: "primary.400", color: "#fff" }} rounded="lg" title={text} key={id}>
              <Link as={ReactLink} to={link}>
                <Text as={"i"}>{icon}</Text>
                <Text as={"span"} display={[null, null, "inline-block", "none"]}>
                  {text}
                </Text>
              </Link>
            </Box>
          );
          return (
            <Box p="2" _hover={{ bg: "primary.400", color: "#fff" }} rounded="lg" title={text} cursor='pointer' key={id}>
              <Text as={"i"}>
                {icon}
              </Text>
                
              <Text as={"span"} display={[null, null, "inline-block", "none"]}>
                {text}
              </Text>
            </Box>
          )
        })}
      </VStack>
      <VStack>
        <Box p="2" _hover={{ bg: "primary.400", color: "#fff" }} rounded="lg" title={'Settings'} >
          <Link as={ReactLink} to="#">
            <Text as='i'>
              <FaCog />
            </Text>
            <Text as={"span"} display={[null, null, "inline-block", "none"]}>
              Settings
            </Text>
          </Link>
        </Box>
        <Box  p="2" _hover={{ bg: "primary.400", color: "#fff" }} rounded="lg" title={'Logout'}>
          <Link as={ReactLink} to="#">
            <Text as='i'>
              <FaSignOutAlt />
            </Text>
            <Text as={"span"} display={[null, null, "inline-block", "none"]}>
              Logout
            </Text>
          </Link>
        </Box>
      </VStack>
      <Box pos={"absolute"} color="primary.200" transition={"all .3s ease"} _hover={{color: "primary.500"}} right="-.5rem" bottom={"20%"} cursor="pointer">
        <FaChevronCircleRight />
      </Box>
    </VStack>
  );
}
