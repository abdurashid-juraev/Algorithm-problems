// * Quarter of the year
// * Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
let month = 6;
const quarterOf = (month) => {
  if (month <= 3) {
    return "1";
  }
  if (month > 3 && month <= 6) {
  console.log(2);
  return "2";
  }
};
quarterOf(month);
