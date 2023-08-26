// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
import { COLOR_ACTION } from "./constants";

import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
  // define the part you're going to style
  container: {
    _hover: {
      color: COLOR_ACTION,
    },
  },
}));

export const List = defineMultiStyleConfig({ baseStyle });

const Button = defineStyleConfig({
  baseStyle: {
    _hover: {
      color: COLOR_ACTION,
    },
  },
  defaultProps: {
    variant: "outline",
  },
});

const config = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  fonts: {
    body: "ibm plex mono, sans-serif",
    heading: "ibm plex mono, serif",
    mono: "Menlo, monospace",
  },
  components: {
    Button,
    List,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
