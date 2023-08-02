const findItemById = (items, id) => {
  for (const item of items) {
    if (item.id === id) {
      return item;
    } else if (item.childrens && item.childrens.length > 0) {
      const foundItem = findItemById(item.childrens, id);
      if (foundItem) {
        return foundItem;
      }
    }
  }
  return null;
};

export default findItemById;
