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

  const stringJson =
    Object.keys(tempBody).length === 0
      ? ''
      : `q=${JSON.stringify(tempBody)}`;

  return stringJson;
};

export const buildSortFormData = (body) => {
  const tempBody = { $orderby: {} };
  Object.entries(body).forEach((element) => {
    const [key, value] = element;
    if (value !== '') {
      tempBody.$orderby[key] = value;
    }
  });

  const stringJson =
    Object.keys(tempBody.$orderby).length === 0
      ? ''
      : `&h=${JSON.stringify(tempBody)}`;
  return stringJson;
};

// q={"$or":[{"search":{"$regex”: ”basic"}},{"search":{"$regex”: ”basic"}},{"search":{"$regex”: ”basic"}}]}
// q={"search":{"$regex”: ”basic"}}
