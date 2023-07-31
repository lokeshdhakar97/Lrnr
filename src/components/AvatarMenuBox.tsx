import {
  Center,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const AvatarMenuBox = () => {
  return (
    <Menu>
      <MenuButton>
        <Center position={"relative"} cursor={"pointer"}>
          <Center
            w={"36px"}
            h={"36px"}
            overflow={"hidden"}
            borderRadius={"50%"}
            position={"relative"}
          >
            <Image
              src={"/images/default-profile-picture.jpeg"}
              alt="profile-picture"
              fill
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Center>
          <Center
            border={"2px solid white"}
            position={"absolute"}
            top={"-4px"}
            right={"-20px"}
            py={"2px"}
            px={"6px"}
            bg={"red"}
            borderRadius={"30px"}
          >
            <Text
              as={"span"}
              fontSize={"8px"}
              fontWeight={"bold"}
              color={"white"}
            >
              NEW
            </Text>
          </Center>
          <Center
            borderRadius={"50%"}
            bg={"green.400"}
            w={"10px"}
            h={"10px"}
            border={"2px solid white"}
            position={"absolute"}
            bottom={"-0px"}
            right={"2px"}
          ></Center>
        </Center>
      </MenuButton>
      <MenuList>
        <MenuItem justifyContent={"space-between"}>
          Dark mode
          <Switch />
        </MenuItem>
        <MenuItem>Profile</MenuItem>
        <Divider />
        <MenuItem justifyContent={"space-between"}>
          {`What's new`}
          <Center
            w={"8px"}
            height={"8px"}
            bg={"blue.700"}
            borderRadius={"50%"}
          ></Center>
        </MenuItem>
        <MenuItem>Help</MenuItem>
        <MenuItem>Send feedback</MenuItem>
        <MenuItem>Hints and shortcuts</MenuItem>
        <Divider />
        <MenuItem>Log out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenuBox;
