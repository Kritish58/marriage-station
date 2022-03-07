export const paramsCleaner = (queries, gender, pageNumber) => {
  let data = {};
  queries.forEach((value, key) => {
    if (value) {
      data[key] = value;
    }
  });
  data["perPage"] = 5; //query only 5 users per page
  data["gender"] = gender === "male" ? "female" : "male"; //query female users if male and vice-versa
  data["pageNumber"] = pageNumber || 1;
  return data;
};
