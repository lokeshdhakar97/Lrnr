"use client";
import {
  Center,
  Flex,
  HStack,
  Icon,
  Input,
  Text,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import React from "react";
import {
  IoNotificationsOutline,
  IoPersonAddSharp,
  IoReorderThreeOutline,
  IoSearchSharp,
} from "react-icons/io5";
import AvatarMenuBox from "./AvatarMenuBox";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={"100%"}
      h={"50px"}
      bg={"white"}
      px={"52px"}
      justifyContent={"space-between"}
    >
      {/* Left Part of Navbar */}
      <HStack gap={"52px"}>
        <Icon
          as={IoReorderThreeOutline}
          cursor={"pointer"}
          boxSize={"20px"}
          onClick={onOpen}
        />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Hamburger Menu</DrawerHeader>
            <DrawerBody>
              <p>Provides options for users to switch modules –</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <HStack>
          <Icon
            as={IoSearchSharp}
            boxSize={"18px"}
            color={"gray.600"}
            cursor={"pointer"}
          />
          <Input variant={"unstyled"} placeholder="define your search" />
        </HStack>
      </HStack>

      {/* Right Part of Navbar  */}
      <HStack gap={"32px"}>
        <Center gap={"4px"}>
          <Icon
            as={IoPersonAddSharp}
            boxSize={"17px"}
            color={"gray.600"}
            cursor={"pointer"}
          />
          <Text as={"span"} fontSize={"14px"}>
            INVITE TEAM MEMBER
          </Text>
        </Center>
        <Icon
          as={IoNotificationsOutline}
          boxSize={"20px"}
          color={"gray.600"}
          cursor={"pointer"}
        />
        <AvatarMenuBox />
      </HStack>
    </Flex>
  );
};

export default Navbar;
