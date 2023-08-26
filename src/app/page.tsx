"use client";

import { Footer } from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import { MyContainer } from "@/app/components/ui/my-container";
import { ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react";
import { MyHeading } from "./components/ui/my-heading";
import { MyLink } from "./components/ui/my-link";
import { COLOR_ACTION, LINK_INSTAGRAM, PROJECTS } from "./constants";

const MB_CONTENT = 6;

export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <main>
      <MyContainer
        border="1px solid white"
        my={{ base: 4 }}
        px={{ base: 10 }}
        py={{ base: 10 }}
        shadow="md"
        boxShadow={
          colorMode === "dark"
            ? "0px 4px 10px rgba(255, 255, 255, 0.2)"
            : undefined
        }
        borderRadius="md"
      >
        <Navbar />
        <MyHeading text="About" />
        <Text mb={MB_CONTENT}>
          Hi, I&apos;ve been working professionally as a web developer since
          2018. I enjoy learning new things and collaborating with others.
        </Text>
        <MyHeading text="Projects" />
        <UnorderedList mb={MB_CONTENT}>
          {PROJECTS.map(({ name, href, description }) => (
            <MyLink key={name} href={href}>
              <ListItem>
                {name} ({description})
              </ListItem>
            </MyLink>
          ))}
        </UnorderedList>
        <MyHeading text="Services" />
        <Text mb={MB_CONTENT}>
          In my spare time, I enjoy working with small business owners and
          helping them set up their business and website. You can contact me
          <MyLink href={LINK_INSTAGRAM}>
            <Text as={"span"} _hover={{ color: COLOR_ACTION }}>
              {" "}
              here.
            </Text>
          </MyLink>
        </Text>
        <Footer />
      </MyContainer>
    </main>
  );
}
