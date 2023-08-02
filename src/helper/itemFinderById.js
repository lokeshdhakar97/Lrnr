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

const removeObjectById = (data, idToRemove) => {
  for (let i = 0; i < data.length; i++) {
    const currentItem = data[i];

    if (currentItem.id === idToRemove) {
      data.splice(i, 1);
      return true;
    }

    if (currentItem.childrens && currentItem.childrens.length > 0) {
      const childRemoved = removeObjectById(currentItem.childrens, idToRemove);

      if (childRemoved) {
        return true;
      }
    }
  }

  return false;
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

export { findItemById, removeObjectById, removeItemWithId };
