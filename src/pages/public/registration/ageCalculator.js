export function dateToAge(dateString) {
  var birthDate = new Date(dateString);
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function ageToDate(age) {
  var today = new Date().getFullYear();
  return today - age;
}

export function getMinDate() {
  let d = new Date();
  return (
    String(d.getFullYear() - 100) +
    "-" +
    String(d.getMonth) +
    "-" +
    String(d.getDate)
  );
}
export function getMaxDate() {
  let d = new Date();
  return (
    String(d.getFullYear - 18) +
    "-" +
    String(d.getMonth) +
    "-" +
    String(d.getDate)
  );
}
