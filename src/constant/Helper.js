export const RefactorDataObj = (data) => {
  let newData = {};
  data.forEach((item) => {
    newData = newData.hasOwnProperty(item.category)
      ? {
          ...newData,
          [item.category]: {
            ...newData[item.category],
            data: [...newData[item.category].data, item],
          },
        }
      : {
          ...newData,
          [item.category]: {
            category: item.category,
            data: [item],
          },
        };
  });

  return Object.values(newData);
};
