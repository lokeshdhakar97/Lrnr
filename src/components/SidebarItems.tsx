import React from "react";
import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
  IoChevronDownSharp,
  IoChevronForwardSharp,
  IoCopyOutline,
  IoAddSharp,
  IoDuplicateSharp,
} from "react-icons/io5";
import Link from "next/link";

const SidebarItems = ({ data }: any) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [onHover, setOnHover] = React.useState(false);
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
              <Icon as={IoAddSharp} />
              <Icon as={IoDuplicateSharp} />
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
