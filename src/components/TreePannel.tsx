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

      <TabPanels
        w={"full"}
        maxH={"calc(100vh - 90px)"}
        overflow={"scroll"}
        h={"100%"}
      >
        <TabPanel h={"100%"}>
          <p>one!</p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nihil
          vel voluptatibus sapiente ad in unde vero a explicabo, omnis
          repellendus eos cum impedit! Molestiae, perferendis rerum pariatur
          ipsum autem non, temporibus quam sed alias praesentium aspernatur
          nostrum delectus repenihil vel voluptatibus sapiente ad in unde vero a
          explicabo, omnis repellendus eos cum impedit! Molestiae, perferendis
          rerum pariatur ipsum autem non, temporibus quam sed alias praesentium
          aspernatur nostrum delectus repenihil vel voluptatibus sapiente ad in
          unde vero a explicabo, omnis repellendus eos cum impedit! Molestiae,
          perferendis rerum pariatur ipsum autem non, temporibus quam sed alias
          praesentium aspernatur nostrum delectus repenihil vel voluptatibus
          sapiente ad in unde vero a explicabo, omnis repellendus eos cum
          impedit! Molestiae, perferendis rerum pariatur ipsum autem non,
          temporibus quam sed alias praesentium aspernatur nostrum delectus
          repellat? Soluta eos ducimus consequuntur ex iure et, illum ratione
          harum quaerat sunt rerum sint, dignissimos vel tenetur.
        </TabPanel>
        <TabPanel h={"100%"}>
          <p>More Tabs Will Take Place!</p>
        </TabPanel>
        <TabPanel h={"100%"}>
          <p>More Tabs Will Take Place!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TreePannel;
