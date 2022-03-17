export const paramsCleaner = (queries, gender) => {
  let data = {};
  queries.forEach((value, key) => {
    if (
      value &&
      key !== "createdAt" &&
      key !== "updatedAt" &&
      key !== "UserDetail" &&
      key !== "UserDetailId" &&
      key !== "partner_preference_id"
    ) {
      data[key] = value;
    }
  });
  return data;
};
