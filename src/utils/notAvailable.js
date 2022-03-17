export const naProvider = (user) => {
  let data = {};
  Object.keys(user).forEach((key) => {
    if (user[key] === "" || user[key] === undefined || !user[key])
      data[key] = "Not Available";
    else data[key] = user[key];
  });
  return data;
};
