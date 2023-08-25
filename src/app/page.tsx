"use client";

import { Footer } from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import { MyContainer } from "@/app/components/ui/my-container";
import {
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import { MyLink } from "./components/ui/my-link";
import {
  COLOR_ACTION,
  LINK_INSTAGRAM,
  LINK_THE_AFTER_PROJECT,
} from "./constants";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main>
      <MyContainer
        border="1px solid white"
        px={{ base: 10, md: 20 }}
        py={{ base: 5, md: 10 }}
        shadow="md"
        boxShadow={
          colorMode === "dark"
            ? "0px 4px 10px rgba(255, 255, 255, 0.2)"
            : undefined
        }
        borderRadius="sm"
      >
        <Navbar />
        <Heading fontWeight={"bold"} mb={6}>
          About
        </Heading>
        <Text mb={12}>
          Hi, I&apos;ve been working as a web developer since 2018. I enjoy
          learning and collaborating with others.
        </Text>
        <Heading fontWeight={"bold"} mb={6}>
          Projects
        </Heading>
        <UnorderedList mb={12}>
          <MyLink href={LINK_THE_AFTER_PROJECT}>
            <ListItem>The After Project</ListItem>
          </MyLink>
        </UnorderedList>
        <Heading fontWeight={"bold"} mb={6}>
          Services
        </Heading>
        <Text mb={12}>
          In my spare time, I enjoy working with small business owners and
          helping them set up their business and website. You can contact me
          <MyLink href={LINK_INSTAGRAM}>
            <Text as={"span"}> here.</Text>
          </MyLink>
        </Text>
        <Footer />
      </MyContainer>
    </main>
  );
}
