const findItemById = (items, id) => {
  if (items === undefined || items === null || items.length === 0) {
    return null;
  }
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

const removeItemWithId = (data, idToRemove) => {
  for (let i = 0; i < data.length; i++) {
    const currentItem = data[i];

    if (currentItem.id === idToRemove) {
      data.splice(i, 1);
      return data;
    }

    if (currentItem.childrens && currentItem.childrens.length > 0) {
      const childRemoved = removeItemWithId(currentItem.childrens, idToRemove);

      if (childRemoved) {
        if (currentItem.childrens.length === 0) {
          delete currentItem.childrens;
        }
        return data;
      }
    }
  }

  return false;
};

export { findItemById, removeItemWithId };
