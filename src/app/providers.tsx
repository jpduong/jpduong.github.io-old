// app/providers.tsx
"use client";

import {
  ChakraProvider,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
import { COLOR_ACTION } from "./constants";
import { CacheProvider } from "@chakra-ui/next-js";

const Button = defineStyleConfig({
  baseStyle: {
    _hover: {
      color: COLOR_ACTION,
    },
  },
  defaultProps: {
    variant: "ghost",
  },
});

const List = defineStyleConfig({
  baseStyle: {
    _hover: {
      color: COLOR_ACTION,
    },
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
