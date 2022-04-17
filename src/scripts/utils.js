const createMultipleElements = (...elements) => {
  const returnArray = [];
  elements.forEach((element) => {
    const item = document.createElement(element);
    returnArray.push(item);
  });

  return returnArray;
};

export default createMultipleElements;
