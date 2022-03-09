export const generateOptions = (data, any) =>
  data.map((d) => {
    if (any && d === "Others") return { label: "Any", value: "Any" };
    return { label: d, value: d };
  });
