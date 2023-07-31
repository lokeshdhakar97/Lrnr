"use client";
import Navbar from "@/components/Navbar";
import {
  Box,
  Center,
  Flex,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

const EditorPage = () => {
  return (
    <Box w={"100%"} maxH={"100vh"} h={"100%"} bg={"white"}>
      <Navbar />
      <Flex width={"100%"} h={"calc(100vh - 50px)"}>
        {/* Left Part of Editor Page */}
        <Box w={"30%"} pl={"42px"} h={"100%"}>
          <Tabs h={"100%"}>
            <TabList h={"40px"}>
              <Tab fontSize={"14px"}>All</Tab>
              <Tab fontSize={"14px"}>Board</Tab>
              <Tab fontSize={"14px"}>Graph</Tab>
              <Tab fontSize={"14px"}>Recent</Tab>
              <Tab>
                <Icon as={IoEllipsisVertical} />
              </Tab>
            </TabList>

            <TabPanels
              w={"full"}
              maxH={"calc(100vh - 90px)"}
              overflow={"scroll"}
              h={"100%"}
            >
              <TabPanel h={"100%"}>
                <p>one!</p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                nihil vel voluptatibus sapiente ad in unde vero a explicabo,
                omnis repellendus eos cum impedit! Molestiae, perferendis rerum
                pariatur ipsum autem non, temporibus quam sed alias praesentium
                aspernatur nostrum delectus repenihil vel voluptatibus sapiente
                ad in unde vero a explicabo, omnis repellendus eos cum impedit!
                Molestiae, perferendis rerum pariatur ipsum autem non,
                temporibus quam sed alias praesentium aspernatur nostrum
                delectus repenihil vel voluptatibus sapiente ad in unde vero a
                explicabo, omnis repellendus eos cum impedit! Molestiae,
                perferendis rerum pariatur ipsum autem non, temporibus quam sed
                alias praesentium aspernatur nostrum delectus repenihil vel
                voluptatibus sapiente ad in unde vero a explicabo, omnis
                repellendus eos cum impedit! Molestiae, perferendis rerum
                pariatur ipsum autem non, temporibus quam sed alias praesentium
                aspernatur nostrum delectus repellat? Soluta eos ducimus
                consequuntur ex iure et, illum ratione harum quaerat sunt rerum
                sint, dignissimos vel tenetur.
              </TabPanel>
              <TabPanel h={"100%"}>
                <p>two!</p>
              </TabPanel>
              <TabPanel h={"100%"}>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* Right Part of Editor Page */}
        <Box w={"75%"} h={"100%"}>
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
            overflow={"scroll"}
            bg={"red"}
          >

            
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditorPage;
