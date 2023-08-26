"use client";

import { MyLink } from "@/app/components/ui/my-link";
import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  LINK_GITHUB,
  LINK_INSTAGRAM,
  LINK_LINKED_IN,
  MY_NAME,
} from "../constants";

export const Footer = () => {
  return (
    <Stack
      align="center"
      py={10}
      direction={{ base: "column", md: "row" }}
      justify={"space-between"}
      gap={4}
    >
      <Text>© 2023 {MY_NAME}. All rights reserved.</Text>
      <HStack gap={4}>
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
