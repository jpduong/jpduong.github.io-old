"use client";

import { Button, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  COLOR_ACTION,
  LINK_GITHUB,
  LINK_INSTAGRAM,
  LINK_LINKED_IN,
  MY_NAME,
} from "../constants";
import { MyLink } from "@/app/components/ui/my-link";

export const Footer = () => {
  return (
    <Stack
      align="center"
      py={10}
      direction={{ base: "column", md: "row" }}
      justify={"space-between"}
    >
      <Text>© 2023 {MY_NAME}. All rights reserved.</Text>
      <HStack>
        <MyLink href={LINK_GITHUB}>
          <IconButton icon={<FaGithub />} aria-label="github icon" />
        </MyLink>
        <MyLink href={LINK_INSTAGRAM}>
          <IconButton icon={<FaInstagram />} aria-label="instagram icon" />
        </MyLink>
        <MyLink href={LINK_LINKED_IN}>
          <IconButton icon={<FaLinkedin />} aria-label="linkedin icon" />
        </MyLink>
      </HStack>
    </Stack>
  );
};
