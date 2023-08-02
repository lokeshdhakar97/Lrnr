"use client";
import EditorContainer from "@/components/EditorContainer";
import Navbar from "@/components/Navbar";
import TreePannel from "@/components/TreePannel";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const EditorPage = () => {
  return (
    <Box w={"100%"} maxH={"100vh"} h={"100%"} bg={"white"}>
      <Navbar />
      <Flex width={"100%"} h={"calc(100vh - 50px)"}>
        {/* Left Part of Editor Page */}
        <Box w={"30%"} pl={"42px"} h={"100%"} overflowX={'scroll'}>
          <TreePannel />
        </Box>

        {/* Right Part of Editor Page */}
        <Box w={"75%"} h={"100%"}>
          <EditorContainer />
        </Box>
      </Flex>
    </Box>
  );
};

export default EditorPage;
