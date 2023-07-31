"use client";

import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};


export default Provider;