"use client";
import { Box, HStack, Center, Text } from "@chakra-ui/react";
import React from "react";
// import Editor from "./Editor";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import("./Editor"), { ssr: false });

const EditorContainer = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("data");

  const [data, setData] = useState({
    time: Date.now(),
    blocks: [
      {
        type: "header",
        data: {
          text: search ? search : "Header",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Type your paragraph here...",
        },
      },
    ],
  });

  const handleDataChange = (newData: any) => {
    setData(newData);
  };
  return (
    <>
      <Box
        w={"100%"}
        h={"40px"}
        borderBottom={"2px solid"}
        borderBottomColor={"gray.200"}
        bg={"white"}
      ></Box>

      <Box
        w={"full"}
        maxH={"calc(100vh - 90px)"}
        h={"100%"}
        overflowY={"scroll"}
        px={"52px"}
        py={"32px"}
        position={"relative"}
        zIndex={"9"}
      >
        <HStack gap={"52px"} py={"6px"} ml={"72px"}>
          <Text fontSize={"14px"}>collection/newcollection/collection3</Text>
          <Text fontSize={"14px"}>Add item member</Text>
        </HStack>
        <DynamicEditor data={data} onDataChange={handleDataChange} />
      </Box>
    </>
  );
};

export default EditorContainer;
