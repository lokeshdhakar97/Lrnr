"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { VStack, Center, Heading, Divider } from "@chakra-ui/react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/editor/wysiwyg-editor?data=WYSIWYG%20Editor");
  }, []);
  return (
  <>
  <Center h={'100vh'}>

  <VStack >
    <Heading>Lrnr Assignment</Heading>
    <Divider/>
    <Heading>Lokesh Dhakar</Heading>
    <Divider/>
  </VStack>
  </Center>
  </>
  
    );
};

export default Home;
