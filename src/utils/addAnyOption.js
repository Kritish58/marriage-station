// This utility function adds 'Any' option after every radio button in filter.

export const addAnyOption = (set) => {
  let filtered = set.filter(
    (item) => item !== "Others" && item !== "Don't know"
  );
  filtered.push("Any");
  return filtered;
};
