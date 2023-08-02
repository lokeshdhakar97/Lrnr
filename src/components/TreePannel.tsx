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
import { useEffect } from "react";
const TreePannel = () => {
  const [treeData, setTreeData] = React.useState<any>(sidebarData);

  useEffect(() => {}, [treeData]);

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
          {treeData.map((item: any, index: number) => {
            return (
              <SidebarItems key={index} data={item} setTreeData={setTreeData} />
            );
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
