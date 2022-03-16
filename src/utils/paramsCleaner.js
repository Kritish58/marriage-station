export const paramsCleaner = (queries, gender) => {
  let data = {};
  queries.forEach((value, key) => {
    if (value) {
      data[key] = value;
    }
  });
  return data;
};
