const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arrayCats = matrix.join(',').split(',');
  let countCats = 0;

  for (let i = 0; i < arrayCats.length; i += 1) {
    if (arrayCats[i] === '^^') {
      countCats += 1;
    }
  }

  return countCats;
};