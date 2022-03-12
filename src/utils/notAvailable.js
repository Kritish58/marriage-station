export const naProvider = (user) => {
  let data = {};
  Object.keys(user).forEach((key) => {
    if (user[key] === "") data[key] = "Not Available";
    else data[key] = user[key];
  });
  return data;
};
