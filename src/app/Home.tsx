"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { VStack, Center, Heading, Divider } from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/editor/wysiwyg-editor?data=WYSIWYG%20Editor");
  }, []);
  return (
    <>
      <Center h={"100vh"}>
        <VStack>
          <Heading>Lrnr Assignment</Heading>
          <Divider />
          <Heading>Lokesh Dhakar</Heading>
          <Divider />
          <Link href={"/"}>Go To Assignment</Link>
        </VStack>
      </Center>
    </>
  );
};

export default Home;
