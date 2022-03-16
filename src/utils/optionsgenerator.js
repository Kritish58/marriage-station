// export const generateOptions = (data, any) =>
//   data.map((d) => {
//     if (any && d === "Others") return { label: "Any", value: "Any" };
//     return { label: d, value: d };
//   });

export const generateOptions = (data, any) => {
  let items = [];
  data.forEach((d) => {
    d !== "Others" && items.push({ label: d, value: d });
  });
  any && items.push({ label: "Any", value: "Any" });
  return items;
};
