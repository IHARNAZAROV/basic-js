const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error('arr - should be array!');
  }
  if (arr.length === 0) {
    return arr;
  }

  const changedArray = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i += 1;
        break;
      case "--discard-prev":
        if (arr[i - 2] !== "--discard-next") {
          changedArray.pop();
        }
        break;
      case "--double-next":
        if (i + 1 < arr.length) {
          changedArray.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i - 1 >= 0 && arr[i - 2] !== "--discard-next") {
          changedArray.push(arr[i - 1]);
        }
        break;
      default:
        changedArray.push(arr[i]);
    }
  }
  return changedArray;
};