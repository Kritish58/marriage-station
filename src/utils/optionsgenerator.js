export const generateOptions = (data) =>
  data.map((d) => {
    return { label: d, value: d };
  });
