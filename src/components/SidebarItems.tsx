"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
  IoChevronDownSharp,
  IoChevronForwardSharp,
  IoCopyOutline,
  IoAddSharp,
  IoDuplicateSharp,
  IoTrashOutline,
} from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarData from "@/constants/SideBarData";
import { findItemById, removeItemWithId } from "@/helper/itemFinderById";

const SidebarItems = ({ data, setTreeData }: any) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [onHover, setOnHover] = React.useState(false);
  const pathname = usePathname();

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  const handleOnClick = (e: any) => {
    e.target.style.borderLeft = "4px solid orange";
  };

  const handleAddCollection = (id: any) => {
    const newCollection = {
      id: uuidv4(),
      title: "New Collection",
      type: "collection",
      childrens: [],
    };
    const item = findItemById(sidebarData, id);
    item?.childrens?.push(newCollection);
  };

  const handleAddItem = (id: any) => {
    const newItem = {
      id: uuidv4(),
      title: "Item",
      type: "item",
      href: "/item",
    };
    const item = findItemById(sidebarData, id);
    item?.childrens?.push(newItem);
  };

  const removeObject = (id: any) => {
    const data = removeItemWithId(sidebarData, id);
    console.log("data", data);
    setTreeData(data);
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
        onClick={(e) => handleOnClick}
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
              <Icon as={IoAddSharp} onClick={() => handleAddItem(data.id)} />
              <Icon
                as={IoDuplicateSharp}
                onClick={() => handleAddCollection(data.id)}
              />
              <Icon as={IoTrashOutline} onClick={() => removeObject(data.id)} />
            </HStack>
          )}
          {data.type === "collection" && <Icon as={IoCopyOutline} />}
        </HStack>
      </HStack>

      {isOpen && (
        <VStack alignItems={"start"} pl={"20px"} width={"100%"} spacing={0}>
          {data.childrens?.map((item: any, index: number) => {
            return <SidebarItems key={index} data={item} />;
          })}
        </VStack>
      )}
    </VStack>
  );
};

export default SidebarItems;
