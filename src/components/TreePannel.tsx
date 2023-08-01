import React from "react";
import {
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { IoEllipsisVertical } from "react-icons/io5";
import sidebarData from "@/constants/SideBarData";
import SidebarItems from "./SidebarItems";
const TreePannel = () => {
  return (
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

      <TabPanels w={"full"} maxH={"calc(100vh - 90px)"} h={"100%"}>
        <TabPanel h={"100%"} bg={"gray.100"} overflowY={"scroll"}>
          {sidebarData.map((item, index) => {
            return <SidebarItems key={index} data={item}/>;
          })}
        </TabPanel>
        <TabPanel h={"100%"}>
          <p>two!</p>
        </TabPanel>
        <TabPanel h={"100%"}>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TreePannel;
