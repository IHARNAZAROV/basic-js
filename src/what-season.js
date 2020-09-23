const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!date.getTime()) throw new Error();
  let timeYear = '';
  if (date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11) {
    timeYear += 'winter';
  } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
    timeYear += 'spring';
  } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
    timeYear += 'summer';
  } else {
    timeYear += 'autumn'
  }
  return timeYear;
};