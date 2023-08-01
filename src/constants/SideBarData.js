const sidebarData = [
  {
    title: "collection.1.1",
    type: "collection",
    id: 1,
    childrens: [
      {
        title: "Home",
        type: "item",
        id: 2,
      },
      {
        title: "About",
        type: "item",
        id: 3,
      },
      {
        title: "Contact",
        type: "collection",
        id: 4,
        childrens: [
          {
            title: "Facebook",
            type: "item",
            id: 5,
          },
          {
            title: "Twitter",
            type: "item",
            id: 6,
          },
          {
            title: "Instagram",
            type: "item",
            id: 7,
          },
        ],
      },
    ],
  },
];

export default sidebarData;
