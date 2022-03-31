export const buildFormData = (body) => {
  const tempBody = {};
  Object.entries(body).forEach((element) => {
    const [key, value] = element;
    if (value !== '') {
      tempBody[key] = value;
    }
  });
  return JSON.stringify(tempBody);
};
