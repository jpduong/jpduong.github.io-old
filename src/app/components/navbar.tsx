"use client";

import {
  Avatar,
  HStack,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MY_NAME } from "../constants";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

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
        <Avatar src="/me.png" name={MY_NAME} ignoreFallback size="lg" />
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
