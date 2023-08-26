"use client";

import {
  Avatar,
  HStack,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { MY_NAME } from "../constants";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorIcon = colorMode === "light" ? <BiSolidMoon /> : <BiSolidSun />;

  return (
    <HStack
      borderBottom="1px solid white"
      py={10}
      mb={10}
      justify="space-between"
    >
      <HStack gap={6}>
        <Avatar
          colorScheme="whiteAlpha"
          src="/me.png"
          bg={"black"}
          name={MY_NAME}
          size="lg"
        />
        <Text fontWeight="extrabold" fontSize="3xl">
          {MY_NAME}
        </Text>
      </HStack>
      <IconButton
        icon={colorIcon}
        onClick={toggleColorMode}
        aria-label="toggle color mode icon"
      />
    </HStack>
  );
};
