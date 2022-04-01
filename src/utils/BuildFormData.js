export const buildFiltersFormData = (body) => {
  const tempBody = {};
  Object.entries(body).forEach((element) => {
    const [key, value] = element;
    if (value !== '') {
      if (key === 'search') {
        tempBody[key] = { $regex: value };
      } else {
        tempBody[key] = value;
      }
    }
  });
  return JSON.stringify(tempBody);
};

export const buildSortFormData = (body) => {
  const tempBody = { $orderby: {} };
  Object.entries(body).forEach((element) => {
    const [key, value] = element;
    if (value !== '') {
      console.log('element', element);
      tempBody.$orderby[key] = value;
    }
  });
  return JSON.stringify(tempBody);
};

// q={"$or":[{"search":{"$regex”: ”basic"}},{"search":{"$regex”: ”basic"}},{"search":{"$regex”: ”basic"}}]}
// q={"search":{"$regex”: ”basic"}}
