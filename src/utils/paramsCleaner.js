export const paramsCleaner = (queries) => {
  let data = {};
  queries.forEach((value, key) => {
    if (value) {
      data[key] = value;
    }
    data["perPage"] = 5;
  });
  return data;
};
