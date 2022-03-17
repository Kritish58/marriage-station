export const matchCalculator = (_A, _B) => {
  let count = 0;
  Object.keys(_A).forEach((key) => {
    if (
      key !== "partner_preference_id" &&
      key !== "lookingFor" &&
      key !== "userDetailId" &&
      key !== "UserDetail" &&
      key !== "ageFrom" &&
      key !== "ageTo" &&
      key !== "heightFrom" &&
      key !== "heightTo"
    ) {
      if (!(_A[key] === "" || _A[key] === undefined || !_A[key])) {
        if (_A[key] === _B[key] || _B[key] === "") {
          count++;
          console.log(key);
        }
      } else {
        count++;
        console.log(key);
      }
    }
  });
  if (
    parseInt(_B["age"]) >= parseInt(_A["ageFrom"]) &&
    parseInt(_B["age"]) <= parseInt(_A["ageTo"])
  ) {
    count++;
  }
  if (
    parseFloat(_B["height"]) >= parseFloat(_A["heightFrom"]) &&
    parseFloat(_B["height"]) <= parseFloat(_A["heightTo"])
  ) {
    count++;
  }
  return (count * 100) / 22;
};
