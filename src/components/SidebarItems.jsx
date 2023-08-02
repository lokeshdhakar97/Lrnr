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

const SidebarItems = ({ data, onAddItem, onAddCollection, onDeleteItem }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [onHover, setOnHover] = React.useState(false);
  const pathname = usePathname();

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItem = () => {
    const promptTitle = prompt("Enter the name of item(file): ");
    const newItem = {
      title: promptTitle,
      type: "item",
      id: uuidv4(),
      href: `/editor/${promptTitle}?data=${promptTitle}`,
    };
    onAddItem(newItem, data.id);
  };

  const handleAddCollection = () => {
    const promptTitle = prompt("Enter the name of collecton(folder): ");

    const newCollection = {
      title: promptTitle,
      type: "collection",
      id: uuidv4(),
      childrens: [],
    };

    onAddCollection(newCollection, data.id);
  };

  const handleDeleteItem = () => {
    onDeleteItem(data.id);
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
              <Icon as={AddFileIcon} onClick={handleAddItem} />
              <Icon as={AddCollections} onClick={handleAddCollection} />
            </HStack>
          )}
          {onHover && <Icon as={IoTrashOutline} onClick={handleDeleteItem} />}
          {data.type === "collection" && <Icon as={IoCopyOutline} />}
        </HStack>
      </HStack>
      {isOpen && (
        <VStack alignItems={"start"} pl={"20px"} width={"100%"} spacing={0}>
          {data.childrens?.map((item, index) => {
            return (
              <SidebarItems
                key={index}
                data={item}
                onAddItem={onAddItem}
                onAddCollection={onAddCollection}
                onDeleteItem={onDeleteItem}
              />
            );
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

  const handleAddItem = (newItem, parentCollectionId) => {
    setFiles((prevFiles) => {
      // Recursive function to find the parent collection in the state.
      const findParentCollection = (items) => {
        for (const item of items) {
          if (item.id === parentCollectionId) {
            return item;
          } else if (item.childrens?.length > 0) {
            const found = findParentCollection(item.childrens);
            if (found) return found;
          }
        }
        return null;
      };

      // Find the parent collection in the state.
      const parentCollection = findParentCollection(prevFiles);

      if (parentCollection) {
        // If the parent collection is found, add the new item to its children.
        parentCollection.childrens.push(newItem);
        // Create a new copy of the state to trigger the update.
        return [...prevFiles];
      }

      // If the parent collection is not found, check all top-level collections.
      // This is needed when the parentCollectionId is a nested collection's ID.
      for (const topLevelItem of prevFiles) {
        if (topLevelItem.childrens?.length > 0) {
          const found = findParentCollection(topLevelItem.childrens);
          if (found) {
            found.childrens.push(newItem);
            return [...prevFiles];
          }
        }
      }

      // If the parent collection is not found, return the previous state as is.
      return prevFiles;
    });
  };

  const handleAddCollection = (newCollection, parentCollectionId) => {
    setFiles((prevFiles) => {
      // Recursive function to find the parent collection in the state.
      const findParentCollection = (items) => {
        for (const item of items) {
          if (item.id === parentCollectionId) {
            return item;
          } else if (item.childrens?.length > 0) {
            const found = findParentCollection(item.childrens);
            if (found) return found;
          }
        }
        return null;
      };

      // Find the parent collection in the state.
      const parentCollection = findParentCollection(prevFiles);

      if (parentCollection) {
        // If the parent collection is found, add the new collection to its children.
        parentCollection.childrens.push(newCollection);
        // Create a new copy of the state to trigger the update.
        return [...prevFiles];
      }

      // If the parent collection is not found, check all top-level collections.
      // This is needed when the parentCollectionId is a nested collection's ID.
      for (const topLevelItem of prevFiles) {
        if (topLevelItem.childrens?.length > 0) {
          const found = findParentCollection(topLevelItem.childrens);
          if (found) {
            found.childrens.push(newCollection);
            return [...prevFiles];
          }
        }
      }

      // If the parent collection is still not found, add the new collection as a top-level item.
      return [...prevFiles, newCollection];
    });
  };

  const handleDeleteItem = (itemId) => {
    setFiles((prevFiles) => {
      // Recursive function to find the item in the state and remove it.
      const removeItem = (items) => {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.id === itemId) {
            // If the item is found, remove it from the array.
            items.splice(i, 1);
            return true;
          } else if (item.childrens?.length > 0) {
            const removed = removeItem(item.childrens);
            if (removed) return true;
          }
        }
        return false;
      };

      // Create a new copy of the state to avoid mutating the original state.
      const updatedFiles = [...prevFiles];

      // Call the removeItem function to find and remove the item.
      const removed = removeItem(updatedFiles);

      if (removed) {
        return updatedFiles;
      }

      // If the item is not found, return the previous state as is.
      return prevFiles;
    });
  };

  return (
    <>
      {files.map((item, index) => {
        return (
          <SidebarItems
            key={index}
            data={item}
            onAddItem={handleAddItem}
            onAddCollection={handleAddCollection}
            onDeleteItem={handleDeleteItem}
          />
        );
      })}
    </>
  );
};

export default DirStructure;
