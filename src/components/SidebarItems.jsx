"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
  IoChevronDownSharp,
  IoChevronForwardSharp,
  IoCopyOutline,
  IoAddSharp as AddFileIcon,
  IoDuplicateSharp as AddCollections,
  IoTrashOutline,
} from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItems = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [onHover, setOnHover] = React.useState(false);
  const pathname = usePathname();

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <VStack
      w={"100%"}
      py={"4px"}
      cursor={"pointer"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      spacing={0}
    >
      <HStack
        w="100%"
        justifyContent={"space-between"}
        spacing={0}
        onMouseOver={() => setOnHover(true)}
        onMouseOut={() => setOnHover(false)}
        _hover={{ bg: "gray.200" }}
        bg={pathname === data.href ? "gray.200" : "transparent"}
        borderLeft={pathname === data.href ? "4px solid orange" : "none"}
        py={"4px"}
        px={"18px"}
      >
        <HStack onClick={onClickHandler}>
          {data.type === "collection" && (
            <Icon as={isOpen ? IoChevronDownSharp : IoChevronForwardSharp} />
          )}

          {data.type === "item" ? (
            <Link href={data.href}>
              <Text fontSize="14px">{data.title}</Text>
            </Link>
          ) : (
            <Text fontSize="14px">{data.title}</Text>
          )}
        </HStack>
        <HStack gap={"10px"}>
          {data.type === "collection" && onHover && (
            <HStack gap={"12px"}>
              <Icon as={AddFileIcon} />
              <Icon as={AddCollections} />
              <Icon as={IoTrashOutline} />
            </HStack>
          )}
          {data.type === "collection" && <Icon as={IoCopyOutline} />}
        </HStack>
      </HStack>
      {isOpen && (
        <VStack alignItems={"start"} pl={"20px"} width={"100%"} spacing={0}>
          {data.childrens?.map((item, index) => {
            return <SidebarItems key={index} data={item} />;
          })}
        </VStack>
      )}
    </VStack>
  );
};

const DirStructure = () => {
  const [files, setFiles] = React.useState([
    {
      title: "collection.1.1",
      type: "collection",
      id: "1343",
      childrens: [
        {
          title: "collection.1.1.1",
          type: "collection",
          id: "22345",
          childrens: [
            {
              title: "Content Page 1.1.1.1",
              type: "item",
              id: "2765",
              href: "/editor/content-page?data=Content%20Page",
            },
            {
              title: "Quiz",
              type: "item",
              id: "2987",
              href: "/editor/quiz?data=Quiz",
            },
            {
              title: "Videos",
              type: "item",
              id: "2543",
              href: "/editor/videos?data=Videos",
            },
            {
              title: "WYSIWYG Editor",
              type: "item",
              id: "12342",
              href: "/editor/wysiwyg-editor?data=WYSIWYG%20Editor",
            },
          ],
        },
      ],
    },
    {
      title: "collection.2.",
      type: "collection",
      id: "22",
      childrens: [
        {
          title: "collection.2.1",
          type: "collection",
          id: "6542",
          childrens: [],
        },
      ],
    },
    {
      title: "collection.3.",
      type: "collection",
      id: "2342",
      childrens: [],
    },
    {
      title: "collection.4.",
      type: "collection",
      id: "23452",
      childrens: [],
    },
  ]);

  return (
    <>
      {files.map((item, index) => {
        return <SidebarItems key={index} data={item} />;
      })}
    </>
  );
};

export default DirStructure;
